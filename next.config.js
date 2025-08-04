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
    loader: 'custom',
    loaderFile: './image-loader.js',
  },

  // Оптимизация производительности
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

};

module.exports = nextConfig;
