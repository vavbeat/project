// Image Error Handler for GitHub Pages
// Обработчик ошибок изображений для GitHub Pages

document.addEventListener('DOMContentLoaded', function() {
    console.log('Image Error Handler initialized');
    
    // Функция для обработки ошибок загрузки изображений
    function handleImageError(imgElement) {
        console.log('Image error detected:', imgElement.src);
        
        // Проверяем, есть ли у изображения источник резервного копирования
        const originalSrc = imgElement.src;
        
        // Пытаемся исправить путь для GitHub Pages
        if (originalSrc.startsWith('/images/')) {
            const newSrc = originalSrc.replace('/images/', '/public/images/');
            console.log('Attempting to fix image path:', originalSrc, '->', newSrc);
            imgElement.src = newSrc;
            
            // Если не помогло, пробуем другие пути
            imgElement.onerror = function() {
                tryAlternativePaths(imgElement, originalSrc);
            };
        } else if (originalSrc.startsWith('/team/')) {
            const newSrc = originalSrc.replace('/team/', '/public/team/');
            console.log('Attempting to fix team image path:', originalSrc, '->', newSrc);
            imgElement.src = newSrc;
            
            imgElement.onerror = function() {
                tryAlternativePaths(imgElement, originalSrc);
            };
        } else {
            tryAlternativePaths(imgElement, originalSrc);
        }
    }
    
    // Функция для попытки альтернативных путей
    function tryAlternativePaths(imgElement, originalSrc) {
        console.log('Trying alternative paths for:', originalSrc);
        
        const alternativePaths = [
            originalSrc.replace('/images/', '/images/team/'),
            originalSrc.replace('/images/', '/images/team/optimized/'),
            originalSrc.replace('/team/', '/images/team/'),
            originalSrc.replace('/team/', '/images/team/optimized/'),
            originalSrc.replace('/public/images/', '/images/'),
            originalSrc.replace('/public/team/', '/team/')
        ];
        
        let attempt = 0;
        const maxAttempts = alternativePaths.length;
        
        function tryNextPath() {
            if (attempt >= maxAttempts) {
                console.log('All paths failed, showing placeholder');
                showImagePlaceholder(imgElement);
                return;
            }
            
            const newPath = alternativePaths[attempt];
            console.log('Trying path:', newPath);
            
            // Создаем временный образ для проверки
            const tempImg = new Image();
            tempImg.onload = function() {
                console.log('Alternative path works:', newPath);
                imgElement.src = newPath;
            };
            tempImg.onerror = function() {
                attempt++;
                tryNextPath();
            };
            tempImg.src = newPath;
        }
        
        tryNextPath();
    }
    
    // Функция для показа плейсхолдера изображения
    function showImagePlaceholder(imgElement) {
        console.log('Showing image placeholder');
        const container = imgElement.parentElement;
        if (container) {
            // Сохраняем оригинальные стили
            const originalStyles = {
                width: imgElement.style.width,
                height: imgElement.style.height,
                objectFit: imgElement.style.objectFit,
                borderRadius: imgElement.style.borderRadius
            };
            
            // Заменяем изображение на плейсхолдер
            imgElement.style.width = '100%';
            imgElement.style.height = 'auto';
            imgElement.style.objectFit = 'cover';
            imgElement.style.borderRadius = '50%';
            
            // Создаем SVG плейсхолдер
            const svgPlaceholder = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgPlaceholder.setAttribute('width', '100');
            svgPlaceholder.setAttribute('height', '100');
            svgPlaceholder.setAttribute('viewBox', '0 0 100 100');
            svgPlaceholder.style.width = '100%';
            svgPlaceholder.style.height = '100%';
            svgPlaceholder.style.borderRadius = '50%';
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '50');
            circle.setAttribute('cy', '50');
            circle.setAttribute('r', '45');
            circle.setAttribute('fill', '#e2e8f0');
            circle.setAttribute('stroke', '#cbd5e0');
            circle.setAttribute('stroke-width', '2');
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M50 25 C35 25 25 35 25 50 C25 65 35 75 50 75 C65 75 75 65 75 50 C75 35 65 25 50 25 Z M50 35 C58 35 65 42 65 50 C65 58 58 65 50 65 C42 65 35 58 35 50 C35 42 42 35 50 35 Z');
            path.setAttribute('fill', '#a0aec0');
            
            svgPlaceholder.appendChild(circle);
            svgPlaceholder.appendChild(path);
            
            // Заменяем src изображения на SVG data URL
            imgElement.src = 'data:image/svg+xml;base64,' + btoa(svgPlaceholder.outerHTML);
            imgElement.alt = 'Фото эксперта';
        }
    }
    
    // Наблюдатель за изменениями в DOM для динамически добавляемых изображений
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeName === 'IMG') {
                        setupImageErrorHandling(node);
                    } else if (node.querySelectorAll) {
                        const images = node.querySelectorAll('img');
                        images.forEach(setupImageErrorHandling);
                    }
                });
            }
        });
    });
    
    // Настройка обработки ошибок для конкретного изображения
    function setupImageErrorHandling(img) {
        // Добавляем обработчик события ошибки
        img.addEventListener('error', function(e) {
            console.log('Image error event triggered');
            handleImageError(img);
        });
        
        // Проверяем, не загрузилось ли изображение сразу
        img.addEventListener('load', function() {
            console.log('Image loaded successfully:', img.src);
        });
        
        // Таймаут для проверки загрузки
        setTimeout(function() {
            if (img.complete && img.naturalHeight === 0) {
                console.log('Image not loaded after timeout, checking for errors');
                handleImageError(img);
            }
        }, 3000);
    }
    
    // Начинаем наблюдение за всем документом
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // Обрабатываем существующие изображения на странице
    const existingImages = document.querySelectorAll('img');
    existingImages.forEach(setupImageErrorHandling);
    
    console.log('Image Error Handler setup complete');
});
