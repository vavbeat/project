'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const videos = [
  {
    id: 1,
    title: 'FMCG. Парфюмерия. Имиджевый.',
    description: 'Парфюмерия. Имиджевый. Причастность. Соответствует ДНК бренда с триггерными элементами- флакон передается по экспоненте по цепочке разными типажами от «глянцевого образа» до обычной современной девушки в косухе, она в одном ряду в этой цепочке. И это выглядит органично. Аромат для всех, хочешь быть леди- будешь при помощи нашего аромата.',
    category: 'FMCG',
    videoSrc: process.env.NODE_ENV === 'production' 
      ? '/videos/FMCG_Perfumery_Image_optimized.mp4' 
      : '/static/videos/FMCG_Perfumery_Image_optimized.mp4',
    thumbnail: '/static/videos/FMCG_Perfumery_Image_optimized.jpg',
    duration: '01:23',
    size: '18.3 MB'
  },
  {
    id: 2,
    title: 'Спорт. Сочетаем несочетаемое.',
    description: 'Сочетаем несочетаемое. Антитеза. Скейты (динамика, скорость, драйв, молодость) и плывущие медитативные планы и паузы и стиль Тарковского. Интеллектуальное становится легким- легкое интеллектуальным.',
    category: 'Спорт',
    videoSrc: process.env.NODE_ENV === 'production' 
      ? '/videos/Sports_Unexpected_Combination_optimized.mp4' 
      : '/static/videos/Sports_Unexpected_Combination_optimized.mp4',
    thumbnail: '/static/videos/Sports_Unexpected_Combination_optimized.jpg',
    duration: '01:45',
    size: '10.2 MB'
  },
  {
    id: 3,
    title: 'Просто Пушкин, просто говорит голосом Стэтхема',
    description: 'Просто Пушкин, просто говорит голосом Стэтхема.',
    category: 'Культура',
    videoSrc: process.env.NODE_ENV === 'production' 
      ? '/videos/Pushkin_Simple_optimized.mp4' 
      : '/static/videos/Pushkin_Simple_optimized.mp4',
    thumbnail: '/static/videos/Pushkin_Simple_optimized.jpg',
    duration: '00:28',
    size: '1.8 MB'
  },
  {
    id: 4,
    title: 'Арт футурология и блог в стиле Лема',
    description: 'Девочка не тыкает в кнопки. Не ищет пароль. Она кладет на клавиатуру полевой цветок – одуванчик, пробившийшийся сквозь бетон. «Спасение – не в войне с машинами. Оно – в жесте, который машина никогда не расшифрует» — Последняя запись в блоге ЛемAI (1 апреля 2049) Мы переживем свои технологии. Если вспомним, что единственный алгоритм, достойный бессмертия – любовь к миру, который нельзя оцифровать. В этом – последнее, непредсказуемое пророчество Лема и Тарковского. Грустное. Ироничное. Неотвратимое. Как капля воды в тишине после конца света.',
    category: 'Футурология',
    videoSrc: process.env.NODE_ENV === 'production' 
      ? '/videos/Art_Futurology_optimized.mp4' 
      : '/static/videos/Art_Futurology_optimized.mp4',
    thumbnail: '/static/videos/Art_Futurology_optimized.jpg',
    duration: '01:08',
    size: '17.5 MB'
  }
];

export function VideoPreview() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [videoLoaded, setVideoLoaded] = useState<{[key: number]: boolean}>({});
  const [videoErrors, setVideoErrors] = useState<{[key: number]: boolean}>({});
  const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});

  const handlePlayVideo = (videoId: number) => {
    setPlayingVideo(prev => prev === videoId ? null : videoId);
  };

  const handlePauseVideo = () => {
    setPlayingVideo(null);
  };

  const handleLoadedData = (videoId: number) => {
    setVideoLoaded(prev => ({...prev, [videoId]: true}));
    setVideoErrors(prev => ({...prev, [videoId]: false}));
  };

  const handleVideoError = (videoId: number) => {
    console.error(`Ошибка загрузки видео ${videoId}`);
    setVideoErrors(prev => ({...prev, [videoId]: true}));
    // Показываем более дружелюбное сообщение об ошибке
    setTimeout(() => {
      alert(`Не удалось загрузить видео: ${videos.find(v => v.id === videoId)?.title}. Пожалуйста, попробуйте обновить страницу или свяжитесь с нами.`);
    }, 100);
  };

  // Auto-play the video once it is marked as playing
  useEffect(() => {
    if (playingVideo) {
      const videoEl = videoRefs.current[playingVideo];
      if (videoEl) {
        // Для GitHub Pages всегда используем muted autoplay
        videoEl.play().catch(e => {
          console.log('Autoplay blocked:', e);
          // Если autoplay заблокирован, показываем кнопку воспроизведения
          setPlayingVideo(null);
        });
      }
    }
  }, [playingVideo]);

  // Функция для получения правильного пути к видео
  const getVideoSrc = (videoSrc: string) => {
    if (typeof window !== 'undefined') {
      // Для GitHub Pages используем относительные пути
      if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
        return videoSrc.replace('/static/', '/').replace('/videos/', '/');
      }
    }
    return videoSrc;
  };

  return (
    <section id="video-preview" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Видео-кейсы
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Наши креативные работы, сочетающие искусство и технологии
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group"
                    onMouseEnter={() => setHoveredVideo(video.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
            >
              <Card className="h-full bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Video Thumbnail */}
                <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                  {videoErrors[video.id] ? (
                    // Placeholder при ошибке загрузки
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-gray-400 mb-2">⚠️</div>
                        <p className="text-gray-500 text-sm">Видео недоступно</p>
                      </div>
                    </div>
                  ) : (
                    <video
                      ref={(el) => videoRefs.current[video.id] = el}
                      src={getVideoSrc(video.videoSrc)}
                      preload="metadata"
                      muted={true}
                      playsInline
                      controls={playingVideo === video.id}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onClick={() => playingVideo === video.id ? handlePauseVideo() : handlePlayVideo(video.id)}
                      onLoadedData={() => handleLoadedData(video.id)}
                      onError={() => {
                        handleVideoError(video.id);
                        setVideoLoaded(prev => ({...prev, [video.id]: false}));
                      }}
                      disablePictureInPicture
                      disableRemotePlayback
                    />
                  )}
                  
                  {/* Play Button Overlay */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${playingVideo === video.id ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center transform scale-100 transition-transform duration-300 cursor-pointer hover:scale-105">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800 ml-1" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/90 text-gray-700 hover:bg-white transition-all"
                    >
                      {video.category}
                    </Badge>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    <div className="bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.size}
                    </div>
                  </div>

                  {/* Volume Control */}
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="bg-white/90 text-gray-700 hover:bg-white p-2"
                      onClick={() => setMuted(!muted)}
                    >
                      {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {video.description}
                  </p>

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-800 transition-all"
                      onClick={() => playingVideo === video.id ? handlePauseVideo() : handlePlayVideo(video.id)}
                    >
                      {playingVideo === video.id ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Пауза
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Смотреть видео
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Controls */}
        {/* Video Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="p-4 sm:p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <Button
                variant="outline"
                onClick={() => setMuted(!muted)}
                className="border-gray-200 hover:border-gray-300 w-full sm:w-auto"
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="ml-2 text-sm">{muted ? 'Включить звук' : 'Выключить звук'}</span>
              </Button>
              <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                Оптимизировано для GitHub Pages
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Все видео доступны в высоком качестве. Для просмотра полного контента свяжитесь с нами.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
