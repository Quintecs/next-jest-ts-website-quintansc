import assert from "node:assert/strict";
import { JSDOM } from "jsdom";

// Run against the production build locally or the deployed site. Requests only
// identify as crawlers; they do not originate from a provider's verified IPs.
const canonicalOrigin = "https://www.quintansc.com.br";
const base = new URL(process.argv[2] || canonicalOrigin);
const requiredPaths = ["/", "/sobre", "/projetos", "/contato", "/automacao-whatsapp", "/privacidade"];
const agents = [
  "Googlebot", "AdsBot-Google", "AdsBot-Google-Mobile", "bingbot", "DuckDuckBot", "Applebot", "YandexBot", "Baiduspider",
  "OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User", "facebookexternalhit", "Twitterbot",
  "LinkedInBot", "UnknownCrawler",
];
let failures = 0;

async function check(label, fn) {
  try {
    await fn();
    console.log(`OK ${label}`);
  } catch (error) {
    failures++;
    console.error(`FALHOU ${label}: ${error.message}`);
  }
}

async function request(path, agent = "Googlebot", redirect = "follow") {
  const response = await fetch(new URL(path, base), {
    headers: { "User-Agent": agent },
    redirect,
    signal: AbortSignal.timeout(15000),
  });
  return { response, body: await response.text() };
}

function htmlDocument(body) {
  // No scripts or external resources are executed: inspect server-rendered HTML.
  return new JSDOM(body).window.document;
}

function assertPage(response, document, path) {
  assert.equal(response.status, 200, `HTTP ${response.status}`);
  assert.match(response.headers.get("content-type") || "", /text\/html/);
  assert.doesNotMatch(response.headers.get("x-robots-tag") || "", /noindex|nofollow|none/i);
  for (const meta of document.querySelectorAll('meta[name="robots"], meta[name="googlebot"], meta[name="bingbot"]')) {
    assert.doesNotMatch(meta.content, /noindex|nofollow|none/i);
  }
  assert.equal(document.querySelectorAll("main h1").length, 1, "Esperado um único H1 no conteúdo principal");
  assert.ok(document.querySelector("main h1")?.textContent.trim(), "H1 ausente no HTML inicial");
  assert.equal(document.documentElement.lang, "pt-BR");
  assert.equal(document.head.querySelectorAll('link[rel="canonical"]').length, 1);
  const canonical = new URL(path.split("?")[0], canonicalOrigin).href;
  assert.equal(document.head.querySelector('link[rel="canonical"]').href, canonical);
  assert.ok(document.head.querySelector("title")?.textContent.trim());
  assert.ok(document.head.querySelector('meta[name="description"]')?.content.trim());
  assert.equal(new URL(document.head.querySelector('meta[property="og:url"]')?.content).href, canonical);
  assert.equal(document.head.querySelector('meta[property="og:title"]')?.content, document.title);
  assert.equal(document.head.querySelector('meta[name="twitter:title"]')?.content, document.title);

  const entities = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => {
    const data = JSON.parse(script.textContent);
    assert.equal(data["@context"], "https://schema.org");
    return data["@graph"] || [data];
  });
  const page = entities.find(entity => entity["@id"] === `${canonical}#webpage`);
  assert.ok(page, "Dados estruturados da página ausentes");
  assert.equal(page.url, canonical);
  assert.equal(page.description, document.head.querySelector('meta[name="description"]').content);
  assert.equal(page.isPartOf["@id"], `${canonicalOrigin}/#website`);
  assert.ok(entities.some(entity => entity["@type"] === "WebSite" && entity.name === "Quintec"));
  assert.ok(entities.some(entity => entity["@type"] === "Organization" && entity.name === "Quintec"));
}

await check("robots.txt permite todos os agentes e divulga o sitemap", async () => {
  const { response, body } = await request("/robots.txt");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") || "", /text\/plain/);
  assert.match(body, /^User-agent:\s*\*\s*$/im);
  assert.match(body, /^Allow:\s*\/\s*$/im);
  assert.doesNotMatch(body, /^Disallow:[ \t]*\S/im);
  assert.match(body, new RegExp(`^Sitemap: ${canonicalOrigin.replaceAll(".", "\\.")}/sitemap\\.xml$`, "im"));
});

let paths = [];
await check("sitemap XML com URLs canônicas, únicas e todas as páginas principais", async () => {
  const { response, body } = await request("/sitemap.xml");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") || "", /xml/);
  const document = new JSDOM(body, { contentType: "application/xml" }).window.document;
  assert.equal(document.documentElement.localName, "urlset");
  const urls = [...document.querySelectorAll("url > loc")].map(node => new URL(node.textContent));
  assert.ok(urls.length);
  assert.equal(new Set(urls.map(url => url.href)).size, urls.length);
  for (const url of urls) {
    assert.equal(url.origin, canonicalOrigin);
    assert.equal(url.search + url.hash, "");
  }
  paths = urls.map(url => url.pathname);
  for (const path of requiredPaths) assert.ok(paths.includes(path), `${path} ausente`);
  assert.ok(!paths.includes("/home"), "Redirecionamento incluído no sitemap");
});

const titles = new Set();
const descriptions = new Set();
const internalPaths = new Set();
let stylesheet;
let script;
for (const path of paths.length ? paths : requiredPaths) {
  await check(`HTML, canonical e metadados: ${path}`, async () => {
    const { response, body } = await request(path);
    const document = htmlDocument(body);
    assertPage(response, document, path);
    assert.ok(!titles.has(document.title), `Título repetido: ${document.title}`);
    titles.add(document.title);
    const description = document.head.querySelector('meta[name="description"]').content;
    assert.ok(!descriptions.has(description), `Descrição repetida: ${description}`);
    descriptions.add(description);
    stylesheet ||= document.querySelector('link[rel="stylesheet"]')?.getAttribute("href");
    script ||= document.querySelector("script[src]")?.getAttribute("src");
    for (const link of document.querySelectorAll('a[href^="/"]')) {
      const url = new URL(link.getAttribute("href"), canonicalOrigin);
      if (url.origin === canonicalOrigin) internalPaths.add(url.pathname);
    }
  });
}

for (const path of paths.length ? paths : requiredPaths) {
  await check(`parâmetros de anúncios preservam a canonical: ${path}`, async () => {
    const campaignPath = `${path}?utm_source=google&utm_medium=cpc&utm_campaign=seo-check&gclid=seo-check`;
    const { response, body } = await request(campaignPath, "AdsBot-Google");
    assertPage(response, htmlDocument(body), path);
  });
}

await check("links internos descobrem todas as páginas do sitemap", async () => {
  assert.ok(paths.length, "Sitemap indisponível");
  for (const path of paths) assert.ok(internalPaths.has(path), `Página sem link interno: ${path}`);
  for (const path of internalPaths) assert.ok(paths.includes(path), `Link interno fora do sitemap: ${path}`);
});

// Check both a static and a dynamic route with each user agent.
for (const agent of agents) {
  await check(`acesso sem JavaScript: ${agent}`, async () => {
    for (const path of ["/automacao-whatsapp", "/contato?solucao=Sistema%20web"]) {
      const { response, body } = await request(path, agent);
      assertPage(response, htmlDocument(body), path);
    }
  });
}

for (const [label, path, type] of [["CSS", stylesheet, /text\/css/], ["JavaScript", script, /javascript/], ["Logo", "/logo.png", /image\/png/]]) {
  await check(`recurso acessível: ${label}`, async () => {
    assert.ok(path, `${label} não encontrado no HTML`);
    const { response } = await request(path);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") || "", type);
  });
}

for (const [from, to] of [["/home", "/"]]) {
  await check(`redirecionamento permanente: ${from}`, async () => {
    const { response } = await request(from, "Googlebot", "manual");
    assert.ok([301, 308].includes(response.status), `HTTP ${response.status}`);
    assert.equal(new URL(response.headers.get("location"), base).pathname, to);
  });
}

await check("variação de maiúsculas do projeto aponta para a mesma canonical", async () => {
  const { response, body } = await request("/projetos/clean-api");
  assertPage(response, htmlDocument(body), "/projetos/Clean-API");
});

for (const path of ["/seo-pagina-inexistente", "/projetos/seo-projeto-inexistente"]) {
  await check(`404 e noindex: ${path}`, async () => {
    const { response, body } = await request(path);
    assert.equal(response.status, 404);
    const document = htmlDocument(body);
    assert.ok([...document.querySelectorAll('meta[name="robots"]')].some(meta => /noindex/i.test(meta.content)));
  });
}

console.log(`\n${failures ? `${failures} verificação(ões) falharam.` : "Todas as verificações passaram."}`);
console.log("User-agents simulados não comprovam acesso a partir dos IPs reais dos buscadores nem garantem indexação.");
process.exitCode = failures ? 1 : 0;
