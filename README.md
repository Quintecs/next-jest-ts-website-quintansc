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
