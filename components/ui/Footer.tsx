'use client';

import { motion } from 'framer-motion';
import { Bot, Heart, MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-peach rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">AI SMM Agency</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Первое AI SMM агентство в России. Трансформируем ваше присутствие в социальных сетях 
              с помощью передовых технологий искусственного интеллекта.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://t.me/aismmagency"
                className="w-10 h-10 bg-accent-600 rounded-lg flex items-center justify-center hover:bg-accent-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:hello@ai-smm-agency.ru"
                className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {[
                'AI-генерация контента',
                'Автоматизация SMM',
                'Аналитика и оптимизация',
                'Консультации экспертов',
                'Обучение команды'
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">г. Москва</p>
                  <p className="text-gray-400 text-xs">ул. Тверская, 15</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <a href="https://t.me/aismmagency" className="text-gray-300 hover:text-white transition-colors text-sm">
                  @aismmagency
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:hello@ai-smm-agency.ru" className="text-gray-300 hover:text-white transition-colors text-sm">
                  hello@ai-smm-agency.ru
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-charcoal-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AI SMM Agency. Все права защищены.
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Условия использования
              </a>
            </div>

            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>и AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}