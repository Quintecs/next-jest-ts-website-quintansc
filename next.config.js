/** @type {import('next').NextConfig} */
module.exports = {
  // Deliver metadata in <head> even to crawlers that cannot run JavaScript.
  // Metadata is local and inexpensive; no bot-name allowlist to maintain.
  htmlLimitedBots: /.*/,
  images: {
    // Em dev, serve as imagens direto (sem /_next/image) — evita requests
    // presos em proxy/antivírus locais; a otimização fica só em produção.
    unoptimized: process.env.NODE_ENV === "development",
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
