#!/usr/bin/env node

/**
 * Скрипт для подготовки видео файлов к деплою на GitHub Pages
 * 
 * Этот скрипт:
 * 1. Проверяет наличие видео файлов
 * 2. Оптимизирует пути к видео для GitHub Pages
 * 3. Копирует видео в нужные директории
 * 4. Проверяет целостность файлов
 */

const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

// Конфигурация
const config = {
  sourceVideos: [
    'videos/Art_Futurology_optimized.mp4',
    'videos/FMCG_Perfumery_Image_optimized.mp4',
    'videos/Pushkin_Simple_optimized.mp4',
    'videos/Sports_Unexpected_Combination_optimized.mp4'
  ],
  targetDirectories: [
    'public/videos',
    'public/static/videos',
    'static/videos'
  ],
  requiredImages: [
    'images/alexandr.png',
    'images/evgenia.jpg',
    'images/team/alexandr.png',
    'images/team/evgenia.jpg',
    'images/team/evgeniy.jpg'
  ]
};

// Функция для проверки существования файла
async function fileExists(filePath) {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch {
    return false;
  }
}

// Функция для копирования файла
async function copyFile(source, target) {
  try {
    await fsPromises.copyFile(source, target);
    console.log(`✅ Скопировано: ${source} -> ${target}`);
    return true;
  } catch (error) {
    console.error(`❌ Ошибка копирования ${source} -> ${target}:`, error.message);
    return false;
  }
}

// Функция для проверки размера файла
async function checkFileSize(filePath) {
  try {
    const stats = await fsPromises.stat(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📁 Файл: ${filePath} (${sizeMB} MB)`);
    return stats.size;
  } catch (error) {
    console.error(`❌ Ошибка проверки размера ${filePath}:`, error.message);
    return 0;
  }
}

// Основная функция подготовки видео
async function prepareVideos() {
  console.log('🚀 Начинаю подготовку видео к деплою на GitHub Pages...\n');

  let successCount = 0;
  let errorCount = 0;

  // 1. Проверка исходных видео файлов
  console.log('📹 Проверка исходных видео файлов:');
  for (const videoPath of config.sourceVideos) {
    const exists = await fileExists(videoPath);
    if (exists) {
      const size = await checkFileSize(videoPath);
      if (size > 0) {
        successCount++;
      } else {
        errorCount++;
      }
    } else {
      console.error(`❌ Видео файл не найден: ${videoPath}`);
      errorCount++;
    }
  }

  console.log(`\n📊 Результат проверки видео: ${successCount} успешно, ${errorCount} ошибок\n`);

  // 2. Копирование видео в целевые директории
  console.log('📂 Копирование видео в целевые директории:');
  
  for (const videoPath of config.sourceVideos) {
    if (await fileExists(videoPath)) {
      for (const targetDir of config.targetDirectories) {
        const fileName = path.basename(videoPath);
        const targetPath = path.join(targetDir, fileName);
        
        // Создание директории если не существует
        await fsPromises.mkdir(targetDir, { recursive: true });
        
        // Копирование файла
        await copyFile(videoPath, targetPath);
      }
    }
  }

  // 3. Проверка изображений экспертов
  console.log('\n🖼️ Проверка изображений экспертов:');
  let imageSuccessCount = 0;
  let imageErrorCount = 0;

  for (const imagePath of config.requiredImages) {
    const exists = await fileExists(imagePath);
    if (exists) {
      await checkFileSize(imagePath);
      imageSuccessCount++;
    } else {
      console.error(`❌ Изображение не найдено: ${imagePath}`);
      imageErrorCount++;
    }
  }

  console.log(`\n📊 Результат проверки изображений: ${imageSuccessCount} успешно, ${imageErrorCount} ошибок`);

  // 4. Проверка дубликатов видео
  console.log('\n🔄 Проверка дубликатов видео:');
  const videoFiles = {};
  
  for (const targetDir of config.targetDirectories) {
    try {
      const files = await fsPromises.readdir(targetDir);
      for (const file of files) {
        if (file.endsWith('.mp4')) {
          const filePath = path.join(targetDir, file);
          const stats = await fsPromises.stat(filePath);
          if (!videoFiles[file]) {
            videoFiles[file] = [];
          }
          videoFiles[file].push({
            path: filePath,
            size: stats.size,
            dir: targetDir
          });
        }
      }
    } catch (error) {
      console.error(`❌ Ошибка чтения директории ${targetDir}:`, error.message);
    }
  }

  // Вывод информации о дубликатах
  for (const [fileName, files] of Object.entries(videoFiles)) {
    if (files.length > 1) {
      console.log(`⚠️  Дубликат видео: ${fileName}`);
      files.forEach((file, index) => {
        console.log(`   ${index + 1}. ${file.path} (${(file.size / (1024 * 1024)).toFixed(2)} MB)`);
      });
    }
  }

  // 5. Итоговый отчет
  console.log('\n📋 Итоговый отчет:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`✅ Видео файлов: ${successCount}`);
  console.log(`❌ Ошибок видео: ${errorCount}`);
  console.log(`✅ Изображений: ${imageSuccessCount}`);
  console.log(`❌ Ошибок изображений: ${imageErrorCount}`);
  console.log(`📁 Директорий с видео: ${config.targetDirectories.length}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  if (errorCount === 0 && imageErrorCount === 0) {
    console.log('\n🎉 Все файлы готовы к деплою на GitHub Pages!');
    console.log('💡 Рекомендация: Используйте пути вида /videos/имя_файла.mp4 для видео');
    console.log('💡 Рекомендация: Используйте пути вида /images/имя_файла для изображений');
  } else {
    console.log('\n⚠️  Обнаружены проблемы. Исправьте их перед деплоем.');
  }

  return {
    videoSuccess: successCount,
    videoErrors: errorCount,
    imageSuccess: imageSuccessCount,
    imageErrors: imageErrorCount
  };
}

// Запуск скрипта
if (require.main === module) {
  prepareVideos()
    .then(results => {
      process.exit(results.videoErrors === 0 && results.imageErrors === 0 ? 0 : 1);
    })
    .catch(error => {
      console.error('💥 Критическая ошибка:', error);
      process.exit(1);
    });
}

module.exports = { prepareVideos, config };
