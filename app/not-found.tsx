'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Bot } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="mx-auto mb-8 w-32 h-32 bg-gradient-peach rounded-full flex items-center justify-center"
          >
            <Bot className="w-16 h-16 text-white" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold text-gradient mb-4"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold text-charcoal-800 mb-4"
          >
            Страница не найдена
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-charcoal-600 mb-8"
          >
            Похоже, наш ИИ-помощник не смог найти эту страницу. 
            Возвращайтесь на главную, чтобы узнать больше о наших AI SMM решениях!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild className="gradient-peach text-white hover:shadow-lg transition-all duration-300">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                На главную
              </Link>
            </Button>
            
            <Button variant="outline" asChild className="border-accent-500 text-accent-600 hover:bg-accent-50">
              <Link href="/#contacts">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Связаться с нами
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}