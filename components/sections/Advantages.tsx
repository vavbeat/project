'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp, 
  Clock, 
  Zap, 
  Eye, 
  Sparkles, 
  Calendar, 
  Target,
  BarChart
} from 'lucide-react';

const advantages = [
  {
    icon: TrendingUp,
    title: '10X рост охвата',
    description: 'Экспоненциальное увеличение аудитории благодаря точному таргетингу ИИ',
    metric: '+1000%',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: Clock,
    title: '70% экономия времени',
    description: 'Полная автоматизация создания и публикации контента освобождает ваше время',
    metric: '28 часов в неделю',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    icon: Zap,
    title: '24/7 генерация',
    description: 'ИИ работает круглосуточно, создавая актуальный контент без перерывов',
    metric: '∞',
    color: 'from-yellow-400 to-orange-600'
  },
  {
    icon: Eye,
    title: 'Анализ трендов в реальном времени',
    description: 'Мгновенная адаптация к изменениям в социальных сетях и предпочтениях аудитории',
    metric: '<1 сек',
    color: 'from-purple-400 to-pink-600'
  },
  {
    icon: Sparkles,
    title: 'Уникальный контент',
    description: 'Каждый пост генерируется индивидуально, исключая дублирование и повторы',
    metric: '100%',
    color: 'from-primary-400 to-accent-600'
  },
  {
    icon: Calendar,
    title: 'Автоматическая публикация',
    description: 'Оптимальное время размещения определяется ИИ для максимальной вовлеченности',
    metric: '+85% engagement',
    color: 'from-accent-400 to-primary-600'
  },
  {
    icon: Target,
    title: 'Точный таргетинг',
    description: 'ИИ анализирует поведение каждого сегмента аудитории для персонализации',
    metric: '98% точность',
    color: 'from-red-400 to-rose-600'
  },
  {
    icon: BarChart,
    title: 'Непрерывная оптимизация',
    description: 'Система постоянно обучается и улучшает результаты на основе данных',
    metric: '+15% каждый месяц',
    color: 'from-teal-400 to-cyan-600'
  }
];

export function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Преимущества AI SMM
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-8">
            Сосредоточьтесь на бизнесе, пока ИИ масштабирует ваше присутствие
          </p>
          <div className="w-24 h-1 bg-gradient-peach mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <Card className="h-full p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                {/* Hover Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <advantage.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Metric */}
                  <div className="text-2xl font-bold text-gradient mb-2">
                    {advantage.metric}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-charcoal-800 mb-3">
                    {advantage.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-charcoal-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary-100 to-transparent opacity-50" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-0 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-charcoal-800 mb-4">
              Готовы масштабировать свой SMM?
            </h3>
            <p className="text-lg text-charcoal-700 mb-6">
              Присоединяйтесь к революции искусственного интеллекта в социальных медиа
            </p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-8 py-4 bg-gradient-peach text-charcoal-800 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              Запустить AI SMM прямо сейчас
                            </motion.button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
