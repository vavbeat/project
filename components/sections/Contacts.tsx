'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { ROICalculator } from '@/components/ui/ROICalculator';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Офис в Москве',
    value: 'г. Москва, ул. Тверская, 15',
    description: 'Центральный офис'
  },
  {
    icon: Phone,
    title: 'Телефон',
    value: '+7 (495) 000-00-00',
    description: 'Звонки с 9:00 до 18:00'
  },
  {
    icon: MessageCircle,
    title: 'Telegram',
    value: '@aismmagency',
    description: 'Быстрые ответы 24/7'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@ai-smm-agency.ru',
    description: 'Официальная переписка'
  }
];

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        telegram: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Получите персональную консультацию и расчет ROI для вашего проекта
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 bg-white shadow-xl border-0">
              <h3 className="text-2xl font-bold text-charcoal-800 mb-6">
                Получить консультацию
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Имя *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Телефон
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="+7 (999) 999-99-99"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-2">
                      Telegram
                    </label>
                    <Input
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      className="border-primary-200 focus:border-primary-500 focus:ring-primary-500"
                      placeholder="@username"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-700 mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-primary-200 focus:border-primary-500 focus:ring-primary-500 resize-none"
                    placeholder="Расскажите о вашем проекте и целях..."
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full gradient-peach text-white hover:shadow-xl transition-all duration-300 h-12"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                        Отправляем...
                      </div>
                    ) : isSubmitted ? (
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Отправлено!
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Получить консультацию
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>

              <div className="mt-6 pt-6 border-t border-primary-100">
                <p className="text-sm text-charcoal-600 text-center">
                  Отправляя форму, вы соглашаетесь с{' '}
                  <span className="text-accent-600 cursor-pointer hover:underline">
                    политикой конфиденциальности
                  </span>
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Info & ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="p-6 bg-gradient-to-br from-accent-50 to-primary-50 border-0 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal-800 mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-3 bg-white/50 rounded-lg hover:bg-white/80 transition-colors duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-peach rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-800">{contact.title}</h4>
                      <p className="text-charcoal-700 font-medium">{contact.value}</p>
                      <p className="text-sm text-charcoal-600">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* ROI Calculator */}
            <ROICalculator />

            {/* Quick Benefits */}
            <Card className="p-6 bg-white border-0 shadow-lg">
              <h3 className="text-xl font-bold text-charcoal-800 mb-4">
                Что вы получите
              </h3>
              <div className="space-y-3">
                {[
                  'Бесплатную консультацию эксперта',
                  'Анализ вашего текущего SMM',
                  'Персональную стратегию роста',
                  'Расчет ROI и окупаемости',
                  'Демо работы AI-системы'
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-gradient-peach rounded-full mr-3" />
                    <span className="text-charcoal-600">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-primary-100 to-accent-100 border-0 shadow-xl text-center">
            <h3 className="text-2xl font-bold text-charcoal-800 mb-4">
              Работаем по всей России
            </h3>
            <p className="text-lg text-charcoal-700 mb-6">
              Основной офис в Москве, но мы успешно реализуем проекты для клиентов 
              из всех регионов России благодаря удаленным технологиям.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Москва', 'СПб', 'Новосибирск', 'Екатеринбург', 'Казань', 'Краснодар'].map((city) => (
                <Badge key={city} variant="secondary" className="bg-white/70 text-charcoal-700">
                  {city}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}