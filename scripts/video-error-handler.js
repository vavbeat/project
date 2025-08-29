
// Обработка ошибок загрузки видео
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  
  videos.forEach(video => {
    video.addEventListener('error', function(e) {
      console.log('Video loading error, showing placeholder');
      const container = video.closest('.video-container');
      if (container) {
        const placeholder = document.createElement('div');
        placeholder.className = 'video-placeholder';
        placeholder.innerHTML = `
          <div class="icon">🎬</div>
          <div>Видео доступно по запросу</div>
          <div style="font-size: 12px; margin-top: 5px; opacity: 0.7;">Свяжитесь с нами для просмотра</div>
        `;
        container.appendChild(placeholder);
        video.style.display = 'none';
      }
    });
    
    // Предотвращаем загрузку, если файл пустой
    if (video.src && video.readyState === 0) {
      setTimeout(() => {
        if (video.readyState === 0) {
          video.dispatchEvent(new Event('error'));
        }
      }, 3000);
    }
  });
});
