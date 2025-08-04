/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  
  // Оптимизация изображений
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Оптимизация производительности
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Оптимизация для поисковых систем
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
};

module.exports = nextConfig;
