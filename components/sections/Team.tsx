'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Award, Brain, Target } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const team = [
  {
    name: 'Евгения Страусова',
    position: 'SEO/AI/SMM Лидер',
    experience: '19 лет опыта',
    specialization: 'Автоматизация, AI-инструменты, data-driven SMM',
    image: '/team/evgeniy.jpg',
    achievements: [
      'Вывела МакSim до 1 млн копий альбома',
      'Запустила IVR-системы с Rambler Group',
      'Масштабировала мобильный маркетинг для федеральных проектов',
      'PR-кампании для "С-Медиа" с тиражом 1.7 млн',
      'Управление проектами с 800k UU в сутки (paparazzi.ru)'
    ],
    competencies: [
      'SEO-стратегии',
      'AI-аналитика',
      'SMM growth-hacking',
      'Автоматизация процессов',
      'Data-driven маркетинг',
      'Performance Marketing'
    ],
    contact: '@strausova_evgenia',
    stats: {
      projects: '200+',
      clients: '50+',
      growth: '10X'
    }
  },
  {
    name: 'Александр Воеводин',
    position: 'CTO AI/ML/Product Development',
    experience: '6+ лет опыта',
    specialization: 'Data Science, Machine Learning, Full-stack разработка',
    image: '/team/alexandr.jpg',
    achievements: [
      'Медицинские приложения: +13% удержание пользователей',
      'ML-модели с улучшением конверсии на +42%',
      'Системы оценки рисков на SQL/Airflow/Python',
      'Повышение производительности систем на +12-15%',
      'Архитектура микросервисов для высоконагруженных проектов'
    ],
    competencies: [
      'Machine Learning (OpenAI API, CUDA)',
      'Python Full-stack',
      'PMBoK/Scrum',
      'SQL/NoSQL',
      'Cloud Architecture',
      'AI/ML Pipeline'
    ],
    contact: '@voevodinalex',
    stats: {
      algorithms: '50+',
      performance: '+15%',
      accuracy: '98%'
    }
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
            Команда экспертов
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Профессионалы с многолетним опытом, создающие будущее AI SMM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 overflow-hidden">
                {/* Photo Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    priority={index === 0}
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/90 via-gray-700/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-gray-50 mb-1">{member.name}</h3>
                    <p className="text-gray-200">{member.position}</p>
                    <p className="text-gray-300 text-sm">{member.experience}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-6">
                  {/* Specialization */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-2">
                      Специализация
                    </h4>
                    <p className="text-gray-500">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-gray-400 mr-2" />
                        Достижения
                      </div>
                    </h4>
                    <ul className="space-y-3">
                      {member.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start group"
                        >
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover:bg-gray-400 transition-colors" />
                          <span className="text-gray-500 text-sm group-hover:text-gray-600 transition-colors">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Competencies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      <div className="flex items-center">
                        <Brain className="w-5 h-5 text-gray-400 mr-2" />
                        Компетенции
                      </div>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.competencies.map((competency, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:text-gray-600 transition-all"
                          >
                            {competency}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(member.stats).map(([key, value]) => (
                      <div key={key} className="text-center group">
                        <div className="text-2xl font-bold text-gray-700 group-hover:text-gray-800 transition-colors">{value}</div>
                        <div className="text-sm text-gray-400 group-hover:text-gray-500 capitalize transition-colors">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Telegram Button */}
                  <div className="pt-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <a 
                        href={`https://t.me/${member.contact.replace('@', '')}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button 
                          className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white border-none transition-all flex items-center justify-center gap-2 h-12 shadow-md hover:shadow-lg"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Написать {member.name.split(' ')[0]} в Telegram
                        </Button>
                      </a>
                      <div className="mt-2 text-center">
                        <span className="text-sm text-gray-400">{member.contact}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
            <Target className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Команда, которая доставляет результаты
            </h3>
            <p className="text-lg text-gray-500 mb-6">
              Объединяя многолетний опыт в маркетинге и передовые AI-технологии, 
              мы создаем решения, которые действительно работают.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-800 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition-all duration-300"
              >
                Начать проект
              </Button>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}