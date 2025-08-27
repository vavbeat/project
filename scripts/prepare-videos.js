#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎬 Подготовка видео файлов для GitHub Pages...');

// Исходная директория с видео
const sourceDir = path.join(__dirname, '../public/static/videos');
// Целевая директория для GitHub Pages
const targetDir = path.join(__dirname, '../public/videos');

// Убедимся, что целевая директория существует
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log('✅ Создана директория:', targetDir);
}

// Список видео файлов для копирования
const videoFiles = [
  'FMCG_Perfumery_Image_optimized.mp4',
  'Sports_Unexpected_Combination_optimized.mp4',
  'Pushkin_Simple_optimized.mp4',
  'Art_Futurology_optimized.mp4'
];

let copiedCount = 0;
let errorCount = 0;

videoFiles.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ Скопировано: ${file}`);
      copiedCount++;
    } else {
      console.log(`⚠️  Файл не найден: ${file}`);
      errorCount++;
    }
  } catch (error) {
    console.error(`❌ Ошибка копирования ${file}:`, error.message);
    errorCount++;
  }
});

console.log(`\n📊 Результаты:`);
console.log(`✅ Успешно скопировано: ${copiedCount} файлов`);
console.log(`❌ Ошибок: ${errorCount} файлов`);

if (copiedCount > 0) {
  console.log('\n🎉 Видео файлы готовы для деплоя на GitHub Pages!');
} else {
  console.log('\n⚠️  Не удалось скопировать видео файлы. Проверьте наличие файлов в директории:', sourceDir);
}
