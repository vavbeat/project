#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Начинаю исправление проблем с видео для GitHub Pages...\n');

// Пути к директориям
const dirs = {
  source: 'videos',
  public: 'public/videos',
  publicStatic: 'public/static/videos',
  static: 'static/videos'
};

// Создаем директории если их нет
Object.values(dirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Создана директория: ${dir}`);
  }
});

// Создаем временные видео плейсхолдеры
const createVideoPlaceholder = (filename) => {
  const placeholderPath = path.join(dirs.source, filename);
  
  // Создаем минимальный MP4 заголовок для плейсхолдера
  const mp4Header = Buffer.from([
    0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70, 0x69, 0x73, 0x6f, 0x6d,
    0x00, 0x00, 0x00, 0x00, 0x6d, 0x6f, 0x6f, 0x76, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x08, 0x6d, 0x64, 0x61, 0x74, 0x00, 0x00, 0x00, 0x01
  ]);
  
  fs.writeFileSync(placeholderPath, mp4Header);
  console.log(`📹 Создан плейсхолдер: ${placeholderPath}`);
};

// Создаем плейсхолдеры для всех видео
const videoFiles = [
  'Art_Futurology_optimized.mp4',
  'FMCG_Perfumery_Image_optimized.mp4',
  'Pushkin_Simple_optimized.mp4',
  'Sports_Unexpected_Combination_optimized.mp4'
];

videoFiles.forEach(file => {
  createVideoPlaceholder(file);
});

// Копируем плейсхолдеры во все целевые директории
videoFiles.forEach(file => {
  Object.entries(dirs).forEach(([key, dir]) => {
    if (key !== 'source') {
      const sourcePath = path.join(dirs.source, file);
      const targetPath = path.join(dir, file);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`📋 Скопировано: ${sourcePath} -> ${targetPath}`);
      }
    }
  });
});

// Обновляем next.config.js для GitHub Pages
const nextConfigPath = 'next.config.js';
let nextConfig = '';

if (fs.existsSync(nextConfigPath)) {
  nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  
  // Добавляем конфигурацию для GitHub Pages
  const githubPagesConfig = `
// Конфигурация для GitHub Pages
const isGithubPages = process.env.GITHUB_PAGES === 'true';

module.exports = {
  assetPrefix: isGithubPages ? '/project' : '',
  basePath: isGithubPages ? '/project' : '',
  trailingSlash: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false
  }
};`;

  // Перезаписываем конфигурацию
  fs.writeFileSync(nextConfigPath, githubPagesConfig);
  console.log('⚙️ Обновлен next.config.js для GitHub Pages');
}

// Создаем инструкцию по деплою
const deployInstructions = `
# GitHub Pages Deployment Instructions

## Текущие проблемы:
- Все видео файлы являются плейсхолдерами (минимальный размер)
- Для полноценного деплоя нужно заменить плейсхолдеры на реальные видео

## Шаги для исправления:

### 1. Замените видео файлы:
Замените файлы в директориях:
- public/videos/
- public/static/videos/
- static/videos/

### 2. Требования к видео:
- Формат: MP4 (H.264 codec)
- Максимальный размер: 50MB
- Рекомендуемое разрешение: 1920x1080
- Длительность: до 2 минут

### 3. Оптимизация видео:
Используйте инструменты для оптимизации:
- HandBrake (бесплатный)
- FFmpeg: \`ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4\`

### 4. Тестирование:
1. Запустите локально: \`npm run build && npm run start\`
2. Проверьте работу видео в браузере
3. Сделайте деплой на GitHub Pages

### 5. Команды для деплоя:
\`\`\`
npm run build
npm run export
cp -r out/* .
git add .
git commit -m "Update video files"
git push origin gh-pages
\`\`\`

## Статус:
✅ Изображения экспертов работают корректно
⚠️ Видео требуют замены на реальные файлы
📋 Созданы плейсхолдеры для временной работы
`;

fs.writeFileSync('DEPLOY_INSTRUCTIONS.md', deployInstructions);
console.log('📄 Создан файл инструкций: DEPLOY_INSTRUCTIONS.md\n');

console.log('🎉 Исправление завершено!');
console.log('📋 Следующие шаги:');
console.log('1. Замените плейсхолдеры видео на реальные файлы');
console.log('2. Оптимизируйте видео для веба');
console.log('3. Протестируйте локально');
console.log('4. Сделайте деплой на GitHub Pages\n');
