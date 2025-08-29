#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎬 Начинаю создание простых видео-заглушек...\n');

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

// Создаем HTML файл с видео контентом
const createHTMLVideo = (config) => {
  const htmlContent = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.title}</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: ${config.color};
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
            overflow: hidden;
        }
        .content {
            text-align: center;
            z-index: 2;
        }
        .title {
            font-size: 3rem;
            font-weight: bold;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .description {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .brand {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            opacity: 0.8;
        }
        .case {
            font-size: 1rem;
            opacity: 0.6;
        }
        .animated-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, ${config.color}22, ${config.color}44, ${config.color}22);
            animation: gradient 3s ease infinite;
            z-index: 1;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .pulse {
            animation: pulse 2s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    </style>
</head>
<body>
    <div class="animated-bg"></div>
    <div class="content pulse">
        <div class="title">${config.title}</div>
        <div class="description">${config.description}</div>
        <div class="brand">AI SMM Agency</div>
        <div class="case">Кейс study</div>
    </div>
</body>
</html>`;
  
  return htmlContent;
};

// Создаем MP4 файл с помощью FFmpeg из HTML
const createVideoFromHTML = (htmlFile, outputFile) => {
  try {
    // Создаем временный PNG для использования как фоновое изображение
    const tempPNG = 'temp_frame.png';
    
    // Создаем команду для FFmpeg
    const command = `ffmpeg -y -loop 1 -i ${tempPNG} -t 5 -vf "scale=1280:720" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 23 ${outputFile}`;
    
    // Для простоты создадим небольшой видеофайл с цветом
    const simpleCommand = `ffmpeg -y -f lavfi -i color=c=${videoConfigs.find(v => v.name.includes(outputFile.split('/').pop())).color.replace('#', '')}:s=1280x720:d=5 -c:v libx264 -pix_fmt yuv420p -preset fast -crf 23 ${outputFile}`;
    
    // Используем более простой подход - создаем цветной видеофайл
    const color = videoConfigs.find(v => v.name.includes(outputFile.split('/').pop())).color;
    const hexToRGB = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? `${parseInt(result[1], 16)}:${parseInt(result[2], 16)}:${parseInt(result[3], 16)}` : '255:255:255';
    };
    
    const colorCommand = `ffmpeg -y -f lavfi -i color=c=${hexToRGB(color)}:s=1280x720:d=5 -vf "drawtext=text='${color} Video':fontsize=60:fontcolor=white:x=(w-tw)/2:y=(h-th)/2" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 23 ${outputFile}`;
    
    // Создаем простой цветной видеофайл
    const finalCommand = `ffmpeg -y -f lavfi -i color=c=${hexToRGB(color)}:s=1280x720:d=5 -c:v libx264 -pix_fmt yuv420p -preset fast -crf 23 ${outputFile}`;
    
    require('child_process').execSync(finalCommand, { stdio: 'inherit' });
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
    
    // Создаем видео в каждой директории
    dirs.forEach(dir => {
      const outputPath = path.join(dir, config.name);
      totalCount++;
      
      if (createVideoFromHTML(null, outputPath)) {
        successCount++;
      }
    });
    
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
