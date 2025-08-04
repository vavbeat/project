'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { BarChart3, Brain, Share2, Target } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: BarChart3,
    title: 'Анализ данных',
    description: 'ИИ анализирует тренды, поведение аудитории и конкурентов в реальном времени',
    color: 'from-primary-400 to-primary-600'
  },
  {
    number: '02',
    icon: Brain,
    title: 'Генерация контента',
    description: 'Автоматическое создание уникальных текстов, визуалов и видео на базе GPT-4',
    color: 'from-accent-400 to-accent-600'
  },
  {
    number: '03',
    icon: Share2,
    title: 'Автоматическая публикация',
    description: 'Размещение контента в оптимальное время на всех платформах',
    color: 'from-primary-500 to-accent-500'
  },
  {
    number: '04',
    icon: Target,
    title: 'Оптимизация результатов',
    description: 'Непрерывное обучение и улучшение стратегии на основе аналитики',
    color: 'from-accent-500 to-primary-500'
  }
];

export function AboutProduct() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Прорывной продукт
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Автоматизированный завод по производству SMM-контента. 
            Революционная технология, которая работает за вас 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <Card className="h-full p-6 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5`} />
                
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-primary-200">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-primary-100 to-accent-100 border-0 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
              Результат работы AI SMM завода
            </h3>
            <p className="text-lg text-charcoal-700 leading-relaxed">
              Полностью автоматизированная система, которая генерирует высококачественный контент, 
              анализирует эффективность и оптимизирует стратегию в режиме реального времени. 
              Ваш бренд работает и растет даже во время вашего сна.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}