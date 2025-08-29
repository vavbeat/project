# GitHub Pages Deployment Guide

## Структура проекта для GitHub Pages

### Проблемы, исправленные в этом обновлении:

1. **Исправлены пути к статическим файлам**:
   - Удален префикс `/project/` из всех путей в HTML
   - Пути теперь используют корректные относительные пути для GitHub Pages

2. **Структура папок**:
   ```
   project/
   ├── index.html          # Главный файл сайта
   ├── images/             # Изображения экспертов
   │   ├── alexandr.png
   │   ├── evgenia.jpg
   │   └── team/
   │       ├── alexandr.png
   │       ├── evgenia.jpg
   │       └── evgeniy.jpg
   │       └── optimized/
   ├── videos/             # Видео файлы кейсов
   │   ├── Art_Futurology_optimized.mp4
   │   ├── FMCG_Perfumery_Image_optimized.mp4
   │   ├── Pushkin_Simple_optimized.mp4
   │   └── Sports_Unexpected_Combination_optimized.mp4
   ├── public/             # Статические файлы для Next.js
   │   ├── images/
   │   ├── static/
   │   │   └── videos/
   │   └── videos/
   ├── static/             # Дополнительные статические файлы
   │   └── videos/
   └── _next/              # Сборка Next.js
   ```

### Инструкция по деплою на GitHub Pages:

1. **Проверьте ветку**:
   - Убедитесь, что вы на ветке `gh-pages`
   ```bash
   git checkout gh-pages
   ```

2. **Зафиксируйте изменения**:
   ```bash
   git add .
   git commit -m "Fix paths for GitHub Pages deployment"
   ```

3. **Отправьте на GitHub**:
   ```bash
   git push origin gh-pages
   ```

4. **Настройки GitHub Pages**:
   - Зайдите в репозиторий на GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Пути к файлам:

**Изображения экспертов**:
- `/images/alexandr.png`
- `/images/evgenia.jpg`
- `/images/team/alexandr.png`
- `/images/team/evgenia.jpg`
- `/images/team/evgeniy.jpg`

**Видео кейсов**:
- `/videos/Art_Futurology_optimized.mp4`
- `/videos/FMCG_Perfumery_Image_optimized.mp4`
- `/videos/Pushkin_Simple_optimized.mp4`
- `/videos/Sports_Unexpected_Combination_optimized.mp4`

### Важные замечания:

1. **GitHub Pages использует корневую папку** проекта как корневой каталог сайта
2. **Все пути должны быть относительными** без префикса `/project/`
3. **Видео файлы** должны находиться в папке `/videos/` или `/static/videos/`
4. **Изображения** должны находиться в папке `/images/` или `/public/images/`

### Проверка после деплоя:

1. Откройте сайт по адресу: `https://ваш-username.github.io/ваш-репозиторий/`
2. Проверьте загрузку всех изображений экспертов
3. Проверьте воспроизведение видео кейсов
4. Убедитесь, что все ссылки работают корректно

### Если проблемы сохраняются:

1. Проверьте консоль браузера на ошибки загрузки ресурсов
2. Убедитесь, что все файлы добавлены в .gitignore корректно
3. Проверьте права доступа к файлам на GitHub
4. Убедитесь, что файлы имеют правильные расширения и MIME-типы
