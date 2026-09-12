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

## Métricas de acesso e interesse comercial

O `@vercel/analytics` já faz parte das dependências. O componente
`src/components/site/site-analytics.tsx` usa a integração de Next.js para medir
visitas e navegação entre páginas. Os eventos de negócio passam por
`trackEvent` em `src/lib/analytics.ts`, que distribui o envio à Vercel e ao
Pixel da Meta conforme a configuração independente de cada um.

### Ativação e controle de uso

1. No projeto da Vercel, abra **Analytics** e habilite **Web Analytics**.
2. Configure as variáveis abaixo no ambiente de publicação (veja `.env.example`).
3. Faça um novo build/deploy. Variáveis `NEXT_PUBLIC_*` são incorporadas no build.
4. Acesse o site publicado, navegue e interaja com os botões. Confira as visitas
   e a lista de eventos no painel **Analytics** do projeto.

```dotenv
NEXT_PUBLIC_ANALYTICS_PROVIDER=vercel
NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS=true
```

Esses são os padrões quando as variáveis não estão definidas. Para manter apenas
visitas, configure `NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS=false`. Para desligar
Web Analytics e seus eventos, use `NEXT_PUBLIC_ANALYTICS_PROVIDER=none`.
Valores de provedor desconhecidos também desativam a integração da Vercel.
Desenvolvimento e testes não enviam dados. Builds de produção, incluindo previews,
enviam dados quando habilitados e autorizados nas preferências; configure `none` no ambiente Preview para excluí-los.

A Vercel tem franquias de Web Analytics por plano; **eventos personalizados exigem
Pro ou Enterprise**. Confira os
[planos e limites](https://vercel.com/docs/analytics/limits-and-pricing) e a
[disponibilidade dos eventos](https://vercel.com/docs/analytics/custom-events).
O Speed Insights existente mede desempenho separadamente e não é controlado
por essas variáveis, mas depende da autorização de estatísticas.

### Pixel da Meta para anúncios

O Pixel funciona em paralelo com a Vercel, usando os mesmos pontos de medição,
somente após consentimento para publicidade.
Não exige uma biblioteca adicional nem token de acesso. Em `.env.local` para
builds locais ou nas variáveis de ambiente de produção da hospedagem, configure:

```dotenv
NEXT_PUBLIC_META_PIXEL_ID=SEU_ID_NUMERICO
NEXT_PUBLIC_META_PIXEL_ENABLED=true
```

Copie o **ID do Pixel** da fonte de dados no Gerenciador de Eventos da Meta.
Substitua `SEU_ID_NUMERICO` pelo número real; um valor vazio ou não numérico
desativa a integração. O ID é público e será incluído no JavaScript do site.
Faça um novo build/deploy após configurá-lo.

`NEXT_PUBLIC_META_PIXEL_ENABLED=false` desliga somente o Pixel. Use essa
configuração no ambiente **Preview** para não misturar testes com anúncios.
A Meta continua funcionando com `NEXT_PUBLIC_ANALYTICS_PROVIDER=none` ou
`NEXT_PUBLIC_ANALYTICS_CUSTOM_EVENTS=false`; essas variáveis controlam a Vercel.
Desenvolvimento e testes automatizados não enviam eventos reais.

| Ação no site | Evento recebido pela Meta |
| --- | --- |
| Acesso inicial e mudança de rota | `PageView` com `page_path` |
| Clique para abrir o WhatsApp | `Contact` com `location` e `channel` |
| Clique para abrir a página de contato | Personalizado `contact_click` |
| Briefing válido preparado | Personalizado `contact_brief_prepared` |
| Outras interações da tabela abaixo | Personalizado com o mesmo nome e propriedades |

Cada interação gera um evento por provedor. `Contact` mede intenção de contato;
não confirma que a mensagem foi enviada. Não enviamos `Lead` ou `Purchase`
porque o site não confirma recebimento de lead ou venda. Você pode configurar
uma conversão personalizada a partir de `contact_brief_prepared`, identificando-a
como **briefing preparado**, ou usar `Contact` para acompanhar cliques no WhatsApp.

O carregamento do SDK é assíncrono e as ações ficam na fila até ele carregar.
O componente acompanha as rotas do Next.js, incluindo voltar/avançar, e evita
duplicações por remontagem. Mudanças somente de parâmetros ou fragmentos na
mesma rota não geram outro `PageView`. A detecção automática de histórico do
Pixel fica desligada para que apenas essa camada registre as visitas.
Use esta integração como a única instalação desse Pixel: retire uma eventual
instalação duplicada via GTM ou código colado e revise eventos configurados
pela ferramenta visual da Meta.

Os parâmetros enviados por esta camada não incluem dados do formulário,
telefone ou URL de destino do WhatsApp. A configuração automática do Pixel
fica desligada e o código não envia dados de correspondência avançada.
O SDK da Meta, porém, usa cookies e informações do navegador, incluindo URL
da página e referência de origem; a remoção de parâmetros feita para a Vercel
**não se aplica ao SDK da Meta**. Não coloque dados pessoais em URLs de campanha.
Revise a correspondência avançada automática no Gerenciador de Eventos e
alinhe a ativação com a política de cookies/consentimento do site. Esta mudança
não adiciona um gerenciador de consentimento.

Para verificar a recepção, publique e abra **Gerenciador de Eventos → sua fonte
de dados → Testar eventos**. Visite o site, mude de página, clique no WhatsApp e
prepare um briefing. Confira `PageView`, `Contact` e `contact_brief_prepared`,
incluindo as propriedades. O Meta Pixel Helper também ajuda a conferir o ID
e detectar instalações duplicadas. Bloqueadores podem impedir o envio;
não há Conversions API nesta implementação.

Referência de implementação: [template oficial da Meta para o Pixel](https://github.com/facebook/GoogleTagManager-WebTemplate-For-FacebookPixel/blob/main/template.tpl).

### Eventos disponíveis

| Evento | O que contabiliza | Propriedades |
| --- | --- | --- |
| `contact_click` | Clique para contato, por posição do botão | `location`, `channel` (`form` ou `whatsapp`) |
| `solution_click` | Interesse em uma solução da página inicial | `solution`, `location` |
| `contact_form_start` | Primeira alteração do formulário por montagem | `form` |
| `contact_brief_prepared` | Briefing válido preparado para continuar no WhatsApp | `solution` |
| `project_click` | Clique no projeto ou em seu repositório | `project`, `destination` (`details` ou `repository`) |
| `project_filter` | Mudança do filtro de projetos | `filter` |
| `social_click` | Clique em uma rede social | `network` |
| `whatsapp_example_select` | Mudança do segmento na demonstração | `segment` |
| `whatsapp_flow_step` | Mudança de etapa por botão, teclado ou gesto | `step`, `label` |

Use `location` para comparar `home_hero`, `header`, `mobile_menu`, `footer`,
`bottom_cta`, `contact_direct`, `contact_form_fallback`, `automation_hero`,
`automation_bottom`, `automation_floating` e `automation_example`.

Comece acompanhando páginas mais visitadas, cliques de contato por posição,
soluções mais procuradas e inícios versus briefings preparados. São contagens
de interações: a mesma pessoa pode clicar ou preparar um briefing mais de uma vez.
O link alternativo do formulário registra um clique separado, sem repetir
`contact_brief_prepared`. Preparar o briefing ou abrir o WhatsApp **não confirma
mensagem enviada, lead recebido ou venda**. Isso exigiria confirmação pelo canal
de atendimento. Ir direto à última etapa do carrossel também não comprova leitura
das etapas anteriores.

Os eventos enviam apenas identificadores da interface e valores do catálogo,
com no máximo duas propriedades. Não incluem nome, e-mail, empresa, mensagem
ou o endereço do WhatsApp com o briefing. O `beforeSend` remove parâmetros e
fragmentos da URL da página nos eventos de Web Analytics; parâmetros UTM também
são removidos, portanto esta configuração não oferece atribuição por UTM.
Falhas do SDK não interrompem os fluxos do site.

### Migração futura para Google Analytics

A integração com GA4 ainda não está habilitada. Para adicioná-la, mantenha o
contrato `AnalyticsEvent` e os pontos de medição existentes, implemente o envio
ao Google em `src/lib/analytics.ts` e substitua a inicialização da Vercel em
`site-analytics.tsx`, mantendo a Meta como integração independente. Assim,
não é necessário alterar cada botão ou formulário.
Configure o ID de medição, a política de consentimento do site e um único
mecanismo de pageviews para evitar contagem duplicada na navegação do Next.js.
O histórico da Vercel continuará separado dos novos dados do Google.

### Validação

`yarn test:ci` cobre ativação/desativação, ausência de dados pessoais no briefing,
cliques, teclado/gestos, formulário inválido e falhas dos SDKs. Também cobre
fila do Pixel, `PageView` por rota, ausência de duplicações por remontagem,
configuração independente e mapeamento dos eventos para a Meta. Para validar a
recepção real, publique com Web Analytics habilitado e confira o painel depois
de executar os fluxos. Os testes locais não confirmam entrega ao serviço remoto.

## Privacidade e consentimento

O aviso é uma faixa sem bloqueio de navegação, com **Rejeitar opcionais** e
**Aceitar todos** com o mesmo destaque. **Personalizar** permite autorizar
estatísticas e publicidade separadamente; ambas começam desligadas. Não há
aceite implícito por navegação, fechamento ou uso do formulário.

- A escolha fica em `localStorage`, chave `quintec:privacy:v1`, com versão,
  categorias, data e expiração. Aceites e recusas duram 180 dias, prazo definido
  pelo projeto, não um prazo universal exigido por lei. Sem armazenamento
  disponível, a escolha é mantida na memória durante a visita.
- A faixa não reaparece entre rotas ou visitas durante esse prazo. O visitante
  pode reabrir as preferências pelo rodapé ou por `/privacidade`.
- Vercel Web Analytics e Speed Insights dependem de **Estatísticas e desempenho**.
  Embora a Vercel informe que não usa cookies de rastreamento no Web Analytics,
  esta implementação condiciona as duas ferramentas opcionais ao consentimento.
- O Pixel da Meta depende de **Publicidade** e das variáveis públicas documentadas
  acima. Corrigida a leitura antiga de `NEXT_META_PIXEL_*`, que não disponibilizava
  o ID no bundle do navegador. Configure `NEXT_PUBLIC_META_PIXEL_*` na hospedagem.
- A verificação ocorre tanto no carregamento dos SDKs quanto no envio dos eventos.
  A revogação bloqueia novos eventos, envia `consent/revoke` ao Pixel, descarta
  sua fila pendente e remove `_fbp`/`_fbc` acessíveis ao domínio. Os callbacks
  `beforeSend` da Vercel continuam negando envio mesmo se o script já carregou.
  Isso não apaga dados anteriormente enviados nem cookies de outros domínios.
- Alterações em outra aba e expiração são observadas. Dados inválidos ou uma
  versão desconhecida são tratados como ausência de consentimento.
- A escolha é um registro local de preferência; não é um histórico de auditoria
  de consentimento mantido no servidor. Se as finalidades mudarem, atualize a
  política e a versão do registro para solicitar uma nova escolha.

A página `/privacidade` descreve o contato responsável, formulário/WhatsApp,
fornecedores, finalidades e como alterar a decisão. Informações operacionais
sobre conservação e contratos com fornecedores devem refletir a prática do
responsável pelo site; o banner isolado não comprova conformidade integral.

Não há Google tag, GA4 ou Google Ads tag instalados neste projeto. Caso sejam
adicionados, integre-os às escolhas existentes usando o Consent Mode: defina
`ad_storage`, `analytics_storage`, `ad_user_data` e `ad_personalization` antes
que as tags executem e atualize-os a cada escolha. No modo básico, as tags ficam
bloqueadas até a autorização. O consentimento do Pixel da Meta é independente,
sinalizado pela API da Meta; ele não equivale ao Consent Mode do Google.

Referências oficiais consultadas:
[ANPD — Cookies e proteção de dados pessoais](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf/@@display-file/file),
[Google — Consent Mode](https://developers.google.com/tag-platform/security/concepts/consent-mode),
[Vercel — privacidade do Web Analytics](https://vercel.com/docs/analytics/privacy-policy),
[Vercel — privacidade do Speed Insights](https://vercel.com/docs/speed-insights/privacy-policy).

Os testes em `__tests__/components/cookie-consent.spec.tsx` verificam bloqueio
inicial, recusa, persistência, consentimento separado, revogação, cookies,
sincronização entre abas, expiração e indisponibilidade de armazenamento.
Antes do deploy, confira no navegador a ausência de requisições a
`connect.facebook.net`, `facebook.com/tr` e `/_vercel/` de medição antes do aceite
e após a recusa; depois valide as categorias individualmente. Verifique também
os dois temas (home e automação), teclado e viewport móvel. Os testes unitários
usam SDKs simulados e não comprovam sozinhos o comportamento do fornecedor remoto.

## Rastreamento e indexação

O domínio canônico é **https://www.quintansc.com.br**, correspondente ao destino
do redirecionamento configurado na hospedagem. A origem está centralizada em
`src/lib/seo.ts`; não é derivada de cabeçalhos enviados por visitantes.

- `/robots.txt`: permite `/` para `User-agent: *`, incluindo páginas, imagens,
  JavaScript e CSS. A regra também cobre novos rastreadores que seguem o padrão,
  sem depender de uma lista de marcas.
- `/sitemap.xml`: lista as seis páginas principais e os projetos do catálogo,
  com URLs HTTPS canônicas, sem parâmetros, redirecionamentos ou datas inventadas.
  Ao criar uma página principal, inclua título e descrição em `seoPages`, em
  `src/lib/seo.ts`, e adicione um link na navegação. O sitemap usa esse cadastro.
- Cada página declara título, descrição, canonical e metadados Open Graph/X.
  Parâmetros de campanha e do formulário não mudam a URL canônica.
- JSON-LD no HTML identifica a Quintec (`Organization`), Gustavo (`Person`),
  o site (`WebSite`) e cada página. A landing page descreve seu serviço de
  automação; os projetos são identificados como trabalhos de portfólio.
  Esses dados descrevem o conteúdo existente e não garantem resultados ricos.
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
canonical, títulos e descrições únicos, um H1 por página, JSON-LD no HTML inicial,
CSS/JS/logo, 404 e o redirecionamento `/home`. Verifica todas as páginas com
`utm_source`, `utm_medium`, `utm_campaign` e `gclid`, preservando a canonical sem
remover os parâmetros do visitante. Testa as rotas estática e dinâmica com
18 identificações de agentes, incluindo Google e AdsBot (desktop/mobile),
Bing, DuckDuckGo, Apple, Yandex, Baidu, OpenAI, Anthropic,
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

### Google Search Console e páginas de destino dos anúncios

Prefira a propriedade de domínio `quintansc.com.br`, verificada pelo registro
DNS fornecido pelo Search Console. Ela abrange HTTP/HTTPS e www/sem www.
Se optar pela propriedade de prefixo `https://www.quintansc.com.br/` e pela
verificação por tag HTML, configure `GOOGLE_SITE_VERIFICATION` na hospedagem
com somente o valor de `content` da tag fornecida pelo Google e faça novo build
e deploy. A variável é opcional e o código não inventa tokens de verificação.

Envie o sitemap e inspecione as nove URLs atuais: `/`, `/sobre`, `/projetos`,
`/contato`, `/automacao-whatsapp`, `/privacidade`, `/projetos/MoveIT-NextJS`,
`/projetos/Clean-API` e `/projetos/crud-nest`. Para cada destino de campanha,
execute o teste de URL publicada, confira a canonical escolhida pelo Google
e solicite indexação depois de publicar as alterações. Acompanhe os motivos
de exclusão no relatório de indexação; repetir solicitações não acelera o processo.

Use a URL HTTPS com www no destino dos anúncios. Os parâmetros de atribuição
podem ser acrescentados normalmente; não cadastre variantes com UTMs ou gclid
no sitemap. Teste também o formulário e a abertura do WhatsApp no celular.
Rastreamento/indexação da busca orgânica e avaliação dos destinos pelo Google
Ads são processos distintos; esta auditoria não comprova aprovação de anúncios.

Referências: [verificação no Search Console](https://support.google.com/webmasters/answer/9008080),
[solicitação de novo rastreamento](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl),
[dados de organizações](https://developers.google.com/search/docs/appearance/structured-data/organization).

Referências oficiais:
[Google: robots.txt](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec),
[Google: recursos de IA e indexação](https://developers.google.com/search/docs/appearance/ai-features),
[Bing: sitemaps](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed),
[OpenAI: rastreadores](https://developers.openai.com/api/docs/bots),
[Anthropic: rastreadores](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler),
[Perplexity: rastreadores](https://docs.perplexity.ai/docs/resources/perplexity-crawlers),
[Next.js: metadados para bots](https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots).


## Oferta da página de automação de WhatsApp

A landing `/automacao-whatsapp` apresenta o contato antes das demonstrações,
explica os módulos e leva o plano escolhido ao WhatsApp. O carrossel de seis
etapas continua disponível em um bloco expansível, após os exemplos por segmento.

Os preços abaixo são uma proposta comercial criada para este projeto a pedido
do responsável, não uma pesquisa de média de mercado ou resultados comprovados:

| Plano | Composição | Implantação a partir de |
| --- | --- | --- |
| Simples | Base + 1 fluxo de até 5 etapas + até 10 respostas frequentes | R$ 1.490 |
| Premium | Base + até 3 fluxos de até 10 etapas + até 20 respostas + coleta de dados | R$ 2.990 |
| Completo | Premium + cadastro de contatos em 1 planilha ou CRM com API disponível, até 5 campos, em um sentido | R$ 4.990 |

A Base inclui 1 número em plataforma compatível, boas-vindas, horários,
encaminhamento humano, testes e orientação. Plataforma, mensagens, trabalho
fora dos limites e manutenção contínua são apresentados separadamente na proposta.
Não há promessa de prazo universal, aumento percentual de vendas, descontos,
depoimentos ou indicação de plano “mais vendido” sem comprovação.

Altere os preços e os limites em `src/lib/automation-plans.ts`. O preço inicial
do hero, o FAQ e as mensagens dos botões de plano usam esse mesmo cadastro.
Ao adaptar o atendimento no WhatsApp, reconheça os nomes **Simples**, **Premium**
e **Completo** na mensagem inicial e confirme compatibilidade, prazo e custos
recorrentes antes da proposta. O clique prepara a mensagem; não efetua contratação.

Os contatos usam o evento existente `contact_click`, respeitando consentimento.
Os locais `automation_hero`, `automation_header`, `automation_example`,
`automation_plan_simples`, `automation_plan_premium`, `automation_plan_completo`
e `automation_bottom` distinguem a origem. Um clique não comprova envio de mensagem,
lead qualificado ou venda; esses resultados precisam ser conferidos no atendimento.
A eficácia da página deve ser medida com tráfego real, considerando as recusas
nas preferências de medição. Não há garantia de aumento de conversão.

Referências: [Google Ads — experiência da página de destino](https://support.google.com/google-ads/answer/14086),
[Google Ads — otimização da página e chamada à ação](https://support.google.com/google-ads/answer/6238826),
[WhatsApp — cobrança da plataforma](https://business.whatsapp.com/products/platform-pricing).
