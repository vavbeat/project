'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Settings, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Анализ потребностей',
    description: 'Глубокий аудит вашего текущего SMM и определение точек роста с помощью AI-аналитики',
    features: [
      'Анализ конкурентов и рынка',
      'Исследование целевой аудитории',
      'Аудит текущих аккаунтов',
      'Определение KPI и метрик',
      'Стратегия позиционирования'
    ],
    duration: '1-2 недели',
    price: 'от 50 000 ₽',
    color: 'from-blue-400 to-cyan-600'
  },
  {
    icon: Settings,
    title: 'Индивидуальная настройка',
    description: 'Персонализированная настройка AI-системы под ваш бренд, тон и специфику бизнеса',
    features: [
      'Настройка AI под бренд',
      'Создание контент-стратегии',
      'Интеграция с соцсетями',
      'Настройка автопостинга',
      'Персонализация алгоритмов'
    ],
    duration: '2-3 недели',
    price: 'от 150 000 ₽',
    color: 'from-purple-400 to-pink-600'
  },
  {
    icon: GraduationCap,
    title: 'Обучение и поддержка',
    description: 'Комплексное обучение вашей команды работе с AI-инструментами и постоянная техподдержка',
    features: [
      'Обучение команды',
      'Документация процессов',
      '24/7 техническая поддержка',
      'Регулярные консультации',
      'Обновления системы'
    ],
    duration: 'Постоянно',
    price: 'от 30 000 ₽/мес',
    color: 'from-green-400 to-emerald-600'
  },
  {
    icon: TrendingUp,
    title: 'Масштабирование',
    description: 'Расширение AI-системы на новые платформы и рынки с увеличением охвата и результатов',
    features: [
      'Выход на новые платформы',
      'Мультиязычная локализация',
      'A/B тестирование контента',
      'Оптимизация конверсий',
      'Международное масштабирование'
    ],
    duration: '1-6 месяцев',
    price: 'от 200 000 ₽',
    color: 'from-orange-400 to-red-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Полный цикл внедрения AI SMM решений — от анализа до масштабирования
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-charcoal-800 mb-1">
                          {service.title}
                        </h3>
                        <div className="flex items-center text-sm text-charcoal-500 space-x-4">
                          <span>⏱ {service.duration}</span>
                          <span className="font-semibold text-gradient">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-charcoal-800 mb-4">Что включено:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-charcoal-600"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Подробнее об услуге
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-100/50 to-transparent" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-0 shadow-xl">
            <h3 className="text-2xl font-bold text-center text-charcoal-800 mb-8">
              Процесс работы
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white font-bold mb-2`}>
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-charcoal-700">{service.title}</p>
                  {index < services.length - 1 && (
                    <div className="hidden md:block absolute w-8 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300 mt-6" 
                         style={{ left: `${(index + 1) * 25 - 4}%` }} />
                  )}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="gradient-peach text-white hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4"
          >
            Начать трансформацию SMM уже сегодня
          </Button>
        </motion.div>
      </div>
    </section>
  );
}