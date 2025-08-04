/** @type {import('next').NextConfig} */
const nextConfig = {
  // Оптимизация для production
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/project',
  
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

};

module.exports = nextConfig;
