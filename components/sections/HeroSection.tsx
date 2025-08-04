'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Clock, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '10X',
    label: 'Рост охвата',
    description: 'Увеличение аудитории'
  },
  {
    icon: Clock,
    value: '70%',
    label: 'Экономия времени',
    description: 'Автоматизация процессов'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Работа ИИ',
    description: 'Непрерывная генерация'
  }
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-peach opacity-10"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gradient">AI SMM</span>
            <br />
            <span className="text-charcoal-800">Трансформируем</span>
            <br />
            <span className="text-accent-600">тишину в трафик,</span>
            <br />
            <span className="text-charcoal-800">хаос в контент!</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-charcoal-600 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Откройте будущее SMM с автоматизированным заводом контента на базе ИИ. 
            Масштабируйте присутствие, пока вы фокусируетесь на бизнесе.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="gradient-peach text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl"
            >
              Получить консультацию
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-peach rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-charcoal-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-charcoal-600">
                  {stat.description}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}