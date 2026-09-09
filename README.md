# Quintec — Website

Site institucional da **Quintec** — Tecnologia & Soluções Digitais.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router + React Server Components)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) + componentes no padrão [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [Vitest](https://vitest.dev/) + Testing Library

## Requisitos

- Node.js 22.x (veja `.nvmrc`)
- Yarn 1.x

## Como usar

Instalar as dependências:

```bash
yarn
```

Rodar em desenvolvimento:

```bash
yarn dev
```

Build de produção:

```bash
yarn build && yarn start
```

## Testes

```bash
yarn test        # modo watch
yarn test:ci     # execução única
yarn test:coverage
```

## Rastreamento e indexação

O domínio canônico é **https://www.quintansc.com.br**, correspondente ao destino
do redirecionamento configurado na hospedagem. A origem está centralizada em
`src/lib/seo.ts`; não é derivada de cabeçalhos enviados por visitantes.

- `/robots.txt`: permite `/` para `User-agent: *`, incluindo páginas, imagens,
  JavaScript e CSS. A regra também cobre novos rastreadores que seguem o padrão,
  sem depender de uma lista de marcas.
- `/sitemap.xml`: lista as cinco páginas principais e os projetos do catálogo,
  com URLs HTTPS canônicas, sem parâmetros, redirecionamentos ou datas inventadas.
  Ao criar uma página principal, inclua-a em `app/sitemap.ts` e na navegação.
- Cada página declara título, descrição, canonical e metadados Open Graph/X.
  Parâmetros de campanha e do formulário não mudam a URL canônica.
- O conteúdo principal é renderizado no servidor. `htmlLimitedBots: /.*/`
  mantém os metadados no `<head>` também para bots sem JavaScript. Isso desativa
  o streaming de metadados para todos; as funções atuais de metadados são locais
  e não dependem de chamadas externas.
- A página de automação possui link no rodapé para descoberta pela navegação.
- Páginas inexistentes respondem com 404 e `noindex`.

Esta política ampla não bloqueia robôs de treinamento como GPTBot e ClaudeBot.
Busca e treinamento têm controles distintos; a permissão de rastreamento não
garante indexação, citações em assistentes ou posicionamento nos resultados.

### Verificação reproduzível

Com a versão de produção local em execução:

```bash
yarn build
yarn start --hostname 127.0.0.1 --port 3010
```

Em outro terminal:

```bash
yarn seo:check http://127.0.0.1:3010
```

Depois de publicar, verifique o domínio real:

```bash
yarn seo:check https://www.quintansc.com.br
```

A auditoria valida robots, sitemap, todas as páginas nele, links internos,
canonical, metadados no HTML inicial, CSS/JS/logo, 404 e o redirecionamento
`/home`. Testa as rotas estática e dinâmica com 16 identificações de agentes,
incluindo Google, Bing, DuckDuckGo, Apple, Yandex, Baidu, OpenAI, Anthropic,
Perplexity, prévias sociais e um agente desconhecido.

São identificadores simulados, não conexões vindas dos IPs reais dessas empresas.
Regras de firewall, proteção de deployment, limites de acesso e desafios da
hospedagem precisam ser verificados também pelos logs e painéis do provedor.
Não libere acesso privilegiado apenas pelo nome de um user-agent.

### Após a publicação

1. Execute a auditoria no domínio público e confirme que `/robots.txt` e
   `/sitemap.xml` retornam HTTP 200.
2. Verifique a propriedade do domínio no Google Search Console e no Bing
   Webmaster Tools e envie `https://www.quintansc.com.br/sitemap.xml`.
3. Use a inspeção de URL e os relatórios dessas ferramentas para acompanhar
   indexação e falhas. Na hospedagem, confira se bots verificados não recebem
   CAPTCHA, login obrigatório, 403 ou 429. Preserve o controle de acesso de
   previews privados.

Referências oficiais:
[Google: robots.txt](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec),
[Google: recursos de IA e indexação](https://developers.google.com/search/docs/appearance/ai-features),
[Bing: sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed),
[OpenAI: rastreadores](https://developers.openai.com/api/docs/bots),
[Anthropic: rastreadores](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler),
[Perplexity: rastreadores](https://docs.perplexity.ai/docs/resources/perplexity-crawlers),
[Next.js: metadados para bots](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots).
