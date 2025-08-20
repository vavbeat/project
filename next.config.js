/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/project',
  assetPrefix: '/project/',
  
  // Оптимизация изображений
  images: {
    unoptimized: true,
  },

  // Оптимизация производительности
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

};

module.exports = nextConfig;
