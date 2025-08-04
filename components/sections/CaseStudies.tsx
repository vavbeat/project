'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Heart, MessageCircle, Share2, Star } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    company: 'EcoTech Solutions',
    industry: 'Экотехнологии',
    challenge: 'Низкая узнаваемость бренда в B2B сегменте',
    solution: 'AI-генерация образовательного контента и автоматизация LinkedIn',
    results: {
      engagement: '+340%',
      followers: '+180%',
      leads: '+250%',
      revenue: '+45%'
    },
    metrics: [
      { icon: Users, label: 'Подписчики', before: '2.3K', after: '6.4K' },
      { icon: Heart, label: 'Вовлеченность', before: '1.2%', after: '5.3%' },
      { icon: MessageCircle, label: 'Лиды/месяц', before: '15', after: '53' },
      { icon: TrendingUp, label: 'ROI', before: '120%', after: '380%' }
    ],
    testimonial: {
      text: 'AI SMM Agency полностью трансформировала наше присутствие в социальных сетях. За 3 месяца мы получили больше качественных лидов, чем за предыдущий год.',
      author: 'Анна Петрова',
      position: 'Директор по маркетингу, EcoTech Solutions'
    },
    image: 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['B2B', 'LinkedIn', 'Лидогенерация']
  },
  {
    id: 2,
    company: 'FashionForward',
    industry: 'Модная индустрия',
    challenge: 'Конкуренция в Instagram и низкие продажи через соцсети',
    solution: 'AI-создание визуального контента и автоматизация Instagram Stories',
    results: {
      engagement: '+520%',
      followers: '+290%',
      sales: '+180%',
      reach: '+400%'
    },
    metrics: [
      { icon: Users, label: 'Подписчики', before: '8.1K', after: '31.6K' },
      { icon: Heart, label: 'Лайки', before: '156', after: '967' },
      { icon: Share2, label: 'Репосты', before: '12', after: '84' },
      { icon: TrendingUp, label: 'Продажи', before: '2.1M₽', after: '5.9M₽' }
    ],
    testimonial: {
      text: 'Невероятные результаты! ИИ создает контент лучше, чем наша команда дизайнеров. Продажи через Instagram выросли в 3 раза.',
      author: 'Михаил Соколов',
      position: 'Основатель, FashionForward'
    },
    image: 'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Instagram', 'E-commerce', 'Визуальный контент']
  },
  {
    id: 3,
    company: 'TechStartup Pro',
    industry: 'IT и стартапы',
    challenge: 'Привлечение инвесторов и построение экспертности',
    solution: 'AI-анализ трендов и создание thought-leadership контента',
    results: {
      visibility: '+450%',
      investors: '+300%',
      partnerships: '+200%',
      valuation: '+150%'
    },
    metrics: [
      { icon: Users, label: 'Охват', before: '5.2K', after: '28.6K' },
      { icon: Star, label: 'Упоминания', before: '8', after: '47' },
      { icon: MessageCircle, label: 'Встречи с VC', before: '2', after: '12' },
      { icon: TrendingUp, label: 'Оценка', before: '$2M', after: '$5M' }
    ],
    testimonial: {
      text: 'Благодаря AI SMM мы привлекли внимание ведущих VC-фондов. Наша экспертность в отрасли выросла в разы.',
      author: 'Дмитрий Волков',
      position: 'CEO, TechStartup Pro'
    },
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['B2B', 'Thought Leadership', 'Инвесторы']
  }
];

export function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Кейсы клиентов
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Реальные результаты наших клиентов. Измеримый рост, достигнутый благодаря AI SMM.
          </p>
        </motion.div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <motion.button
              key={caseStudy.id}
              onClick={() => setActiveCase(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCase === index
                  ? 'bg-gradient-peach text-white shadow-lg'
                  : 'bg-white text-charcoal-700 hover:bg-primary-50 shadow-md'
              }`}
            >
              {caseStudy.company}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseStudies[activeCase].tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-primary-100 text-primary-800">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-charcoal-800 mb-2">
                      {caseStudies[activeCase].company}
                    </h3>
                    <p className="text-accent-600 font-medium mb-4">
                      {caseStudies[activeCase].industry}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-charcoal-800 mb-2">Вызов:</h4>
                      <p className="text-charcoal-600">{caseStudies[activeCase].challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-charcoal-800 mb-2">Решение:</h4>
                      <p className="text-charcoal-600">{caseStudies[activeCase].solution}</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4 my-8">
                      {caseStudies[activeCase].metrics.map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gradient-to-br from-primary-50 to-accent-50 p-4 rounded-xl"
                        >
                          <div className="flex items-center mb-2">
                            <metric.icon className="w-5 h-5 text-accent-600 mr-2" />
                            <span className="text-sm font-medium text-charcoal-700">{metric.label}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-charcoal-500">{metric.before}</span>
                            <span className="text-lg font-bold text-gradient">→ {metric.after}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <Card className="p-6 bg-gradient-to-br from-accent-50 to-primary-50 border-0">
                      <p className="text-charcoal-700 italic mb-4">
                        "{caseStudies[activeCase].testimonial.text}"
                      </p>
                      <div>
                        <p className="font-semibold text-charcoal-800">
                          {caseStudies[activeCase].testimonial.author}
                        </p>
                        <p className="text-sm text-charcoal-600">
                          {caseStudies[activeCase].testimonial.position}
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={caseStudies[activeCase].image}
                    alt={caseStudies[activeCase].company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Results Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(caseStudies[activeCase].results).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="bg-white/90 backdrop-blur-sm p-3 rounded-lg"
                        >
                          <div className="text-2xl font-bold text-gradient">{value}</div>
                          <div className="text-sm text-charcoal-600 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="gradient-peach text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4"
          >
            Получить такие же результаты
          </Button>
        </motion.div>
      </div>
    </section>
  );
}