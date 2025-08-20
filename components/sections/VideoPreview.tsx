'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

const videos = [
  {
    id: 1,
    title: 'FMCG. Парфюмерия. Имиджевый.',
    description: 'Парфюмерия. Имиджевый. Причастность. Соответствует ДНК бренда с триггерными элементами- флакон передается по экспоненте по цепочке разными типажами от «глянцевого образа» до обычной современной девушки в косухе, она в одном ряду в этой цепочке. И это выглядит органично. Аромат для всех, хочешь быть леди- будешь при помощи нашего аромата.',
    category: 'FMCG',
    placeholder: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=450&fit=crop'
  },
  {
    id: 2,
    title: 'Спорт. Сочетаем несочетаемое.',
    description: 'Сочетаем несочетаемое. Антитеза. Скейты (динамика, скорость, драйв, молодость) и плывущие медитативные планы и паузы и стиль Тарковского. Интеллектуальное становится легким- легкое интеллектуальным.',
    category: 'Спорт',
    placeholder: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop'
  },
  {
    id: 3,
    title: 'Просто Пушкин, просто говорит голосом Стэтхема',
    description: 'Просто Пушкин, просто говорит голосом Стэтхема.',
    category: 'Культура',
    placeholder: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop'
  },
  {
    id: 4,
    title: 'Арт футурология и блог в стиле Лема',
    description: 'Девочка не тыкает в кнопки. Не ищет пароль. Она кладет на клавиатуру полевой цветок – одуванчик, пробившийся сквозь бетон. «Спасение – не в войне с машинами. Оно – в жесте, который машина никогда не расшифрует» — Последняя запись в блоге ЛемAI (1 апреля 2049) Мы переживем свои технологии. Если вспомним, что единственный алгоритм, достойный бессмертия – любовь к миру, который нельзя оцифровать. В этом – последнее, непредсказуемое пророчество Лема и Тарковского. Грустное. Ироничное. Неотвратимое. Как капля воды в тишине после конца света.',
    category: 'Футурология',
    placeholder: 'https://avatars.mds.yandex.net/i?id=a8a3632ffac94049592c3df892e2e795_l-5250945-images-thumbs&n=13'
  }
];

export function VideoPreview() {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);

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
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={video.placeholder}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-800 ml-1" />
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
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
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
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Смотреть видео
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Button
                variant="outline"
                onClick={() => setMuted(!muted)}
                className="border-gray-200 hover:border-gray-300"
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="ml-2 text-sm">{muted ? 'Включить звук' : 'Выключить звук'}</span>
              </Button>
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
