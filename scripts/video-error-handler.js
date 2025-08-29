// Video Error Handler for GitHub Pages
// Обработчик ошибок видео для GitHub Pages

document.addEventListener('DOMContentLoaded', function() {
    console.log('Video Error Handler initialized');
    
    // Функция для обработки ошибок загрузки видео
    function handleVideoError(videoElement) {
        console.log('Video error detected:', videoElement.src);
        
        // Проверяем, есть ли у видео источник резервного копирования
        const sources = videoElement.querySelectorAll('source');
        let fallbackLoaded = false;
        
        sources.forEach(source => {
            const originalSrc = source.src;
            // Пытаемся исправить путь для GitHub Pages
            if (originalSrc.startsWith('/videos/')) {
                const newSrc = originalSrc.replace('/videos/', '/public/videos/');
                console.log('Attempting to fix video path:', originalSrc, '->', newSrc);
                source.src = newSrc;
                videoElement.load();
                fallbackLoaded = true;
            }
        });
        
        // Если не удалось загрузить резервный источник, показываем плейсхолдер
        if (!fallbackLoaded) {
            console.log('All video sources failed, showing placeholder');
            const container = videoElement.parentElement;
            if (container) {
                container.innerHTML = `
                    <div class="video-error-placeholder" style="
                        width: 100%;
                        height: 300px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 8px;
                        color: white;
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                    ">
                        <div>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 10px;">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            <p style="margin: 0; font-size: 14px;">Видео недоступно</p>
                            <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;">Ошибка загрузки контента</p>
                        </div>
                    </div>
                `;
            }
        }
    }
    
    // Наблюдатель за изменениями в DOM для динамически добавляемых видео
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeName === 'VIDEO') {
                        setupVideoErrorHandling(node);
                    } else if (node.querySelectorAll) {
                        const videos = node.querySelectorAll('video');
                        videos.forEach(setupVideoErrorHandling);
                    }
                });
            }
        });
    });
    
    // Настройка обработки ошибок для конкретного видео элемента
    function setupVideoErrorHandling(video) {
        // Добавляем обработчик события ошибки
        video.addEventListener('error', function(e) {
            console.log('Video error event triggered');
            handleVideoError(video);
        });
        
        // Проверяем, не загрузилось ли видео сразу
        video.addEventListener('loadstart', function() {
            console.log('Video load started:', video.src);
        });
        
        video.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully:', video.src);
        });
        
        // Таймаут для проверки загрузки
        setTimeout(function() {
            if (video.readyState === 0) {
                console.log('Video not loaded after timeout, checking for errors');
                handleVideoError(video);
            }
        }, 5000);
    }
    
    // Начинаем наблюдение за всем документом
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Обрабатываем существующие видео на странице
    const existingVideos = document.querySelectorAll('video');
    existingVideos.forEach(setupVideoErrorHandling);
    
    console.log('Video Error Handler setup complete');
});
