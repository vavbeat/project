#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🎬 Начинаю создание реальных видео-заглушек...\n');

// Видеофайлы для создания
const videoConfigs = [
  {
    name: 'Art_Futurology_optimized.mp4',
    title: 'Art & Futurology',
    description: 'AI в искусстве и футурологии',
    color: '#FF6B6B'
  },
  {
    name: 'FMCG_Perfumery_Image_optimized.mp4',
    title: 'FMCG & Perfumery',
    description: 'Ритейл и парфюмерия',
    color: '#4ECDC4'
  },
  {
    name: 'Pushkin_Simple_optimized.mp4',
    title: 'Pushkin Simple',
    description: 'Классическая литература',
    color: '#45B7D1'
  },
  {
    name: 'Sports_Unexpected_Combination_optimized.mp4',
    title: 'Sports & Innovation',
    description: 'Спорт и инновации',
    color: '#96CEB4'
  }
];

// Создаем временный файл с текстом для видео
const createTextFile = (config) => {
  const textContent = `
<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <rect width="1280" height="720" fill="${config.color}"/>
  <text x="640" y="300" font-family="Arial, sans-serif" font-size="60" font-weight="bold" text-anchor="middle" fill="white">
    ${config.title}
  </text>
  <text x="640" y="380" font-family="Arial, sans-serif" font-size="32" text-anchor="middle" fill="white">
    ${config.description}
  </text>
  <text x="640" y="450" font-family="Arial, sans-serif" font-size="24" text-anchor="middle" fill="white" opacity="0.8">
    AI SMM Agency
  </text>
  <text x="640" y="500" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="white" opacity="0.6">
    Кейс study
  </text>
</svg>
  `;
  
  const tempFile = `temp_${config.name}.svg`;
  fs.writeFileSync(tempFile, textContent);
  return tempFile;
};

// Создаем видео из SVG
const createVideoFromSVG = (svgFile, outputFile) => {
  try {
    const command = `ffmpeg -y -framerate 30 -i ${svgFile} -c:v libx264 -pix_fmt yuv420p -t 5 -vf "scale=1280:720" ${outputFile}`;
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Создано видео: ${outputFile}`);
    return true;
  } catch (error) {
    console.error(`❌ Ошибка создания видео ${outputFile}:`, error.message);
    return false;
  }
};

// Основная функция
const createAllVideos = () => {
  const dirs = ['videos', 'public/videos', 'public/static/videos', 'static/videos'];
  let successCount = 0;
  let totalCount = 0;

  videoConfigs.forEach(config => {
    console.log(`📹 Обработка: ${config.name}`);
    
    // Создаем SVG файл
    const svgFile = createTextFile(config);
    
    // Создаем видео в каждой директории
    dirs.forEach(dir => {
      const outputPath = path.join(dir, config.name);
      totalCount++;
      
      if (createVideoFromSVG(svgFile, outputPath)) {
        successCount++;
      }
    });
    
    // Удаляем временный SVG файл
    if (fs.existsSync(svgFile)) {
      fs.unlinkSync(svgFile);
    }
    
    console.log(''); // Пустая строка для разделения
  });

  console.log(`\n📊 Результат создания видео:`);
  console.log(`✅ Успешно создано: ${successCount}/${totalCount} файлов`);
  console.log(`❌ Ошибок: ${totalCount - successCount}`);
  
  if (successCount === totalCount) {
    console.log('\n🎉 Все видео успешно созданы!');
  } else {
    console.log('\n⚠️  Некоторые видео не удалось создать. Проверьте ошибки выше.');
  }
};

// Запуск
createAllVideos();
