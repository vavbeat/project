/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/ВАШ_РЕПОЗИТОРИЙ',
  
  // Оптимизация изображений
  images: {
    unoptimized: true,
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
