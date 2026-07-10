/** @type {import('next').NextConfig} */
module.exports = {
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
