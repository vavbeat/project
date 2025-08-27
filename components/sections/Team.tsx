'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Award, Brain, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const team = [
  {
    name: 'Евгения Страусова',
    position: 'CEO AI SMM',
    experience: '19 лет опыта',
    specialization: 'Управление проектами, автоматизация, маркетинг, SMM',
    image: '/images/team/optimized/evgenia_optimized.jpg',
    achievements: [
      '2006 г.-Менеджер певицы МакSим с нуля до первого миллиона проданных лицензионных копий',
      '2008 г.- Rambler&Co организовала и масштабировала подразделение Мобильного маркетинга. WAP-IVR проект «NEWMEDIASTARS» - кросс промо российских артистов. Прибыльность 20 000$ мес.(1 проект/артист| месяц после старта)',
      '2008-2010 г. ИД С-медиа Head of PR и маркетинга ИД. «Папарацци», paparazzi.ru– о журнал о частной жизни знаменитостей. Сделала с нуля и в Декабре 2010 г. ежемесячный тираж составляет 1 700 000 экз/мес. Декабрь 2010 года- посещаемость сайта www.paparazzi.ru 100 000 чел/ день (TNS Gallup)',
      '2008-2010 г. PR-директор «Красный квадрат», ООО. 1 канал Останкино. www.red-red.ru ТВ продакшн федеральных телеканалов. Создание, упаковка запуск digital-проектов одноименных ТВ программ: «Минута славы», «Контрольная закупка», «Фабрика звезд», «20 лучших песен», «Давай поженимся» и др. Cобрана самая крупная правовая база отечественной музыки в стране, 1 канал- одноименная ТВ программа в prime time',
      '2013 —2015 ИД "Семь дней" Руководитель отдела маркетинга. Запуск цифровой трансформации ИД. Интернет-портал www.7days.ru. 800 000 уникальных пользователей в сутки через полгода после старта. Вывод в январе 2015 года. Создание сети региональных СМИ под эгидой бренда',
      '2016-2018 Е-Генератор РА, холдинг Финам. Директор по развитию бизнеса. Позиционирование, вывод на рынок тизерной сетки Миртесен с нуля. Рост трафика (подключение 500 топ-площадок Рунета в течении 1 года). Проекты-партнеры сети в течении года: Партия "Единая Россия", Портал "Госуслуги", Партия "Парнас", Рбк, Рамблер и др',
      '2019-2025 Вывод на рынок новых проектов в сферах luxe resale (одежда, ювелирка, сумки, обувь)'
    ],
    competencies: [
      'Позиционирование',
      'Упаковка',
      'Маркетинг с нуля',
      'Управление кросс-функциональными командами',
      'Data-driven и performance-подходы',
      'Интеграция контент-маркетинга, SEO, SMM, email и рекламных инструментов',
      'Стратегическое мышление',
      'Креативность',
      'Ориентация на результат'
    ],
    detailedInfo: `CEO AI SMM

Специализация: управление проектами, автоматизация, маркетинг, SMM

Компетенции: Позиционирование, упаковка, маркетинг с нуля, управляю кросс-функциональными командами и внедряю data-driven и performance-подходы. Экспертиза в интеграции контент-маркетинга, SEO, SMM, email и рекламных инструментов в единую экосистему цифровых коммуникаций. Стратегическое мышление, креативность и ориентация на результат, трансформирую бренд-коммуникации и достигаю бизнес-целей. Объединяю лидерство, технологическую экспертизу, автоматизацию и понимание аудитории, масштабирую цифровое влияние брендов.

Достижения:

2006 г.-Менеджер певицы МакSим с нуля до первого миллиона проданных лицензионных копий 

2008 г.- Rambler&Co организовала и масштабировала подразделение Мобильного маркетинга. WAP-IVR проект «NEWMEDIASTARS» - кросс промо российских артистов. Прибыльность 20 000$ мес.(1 проект/артист| месяц после старта) 

2008-2010 г. ИД С-медиа Head of PR и маркетинга ИД. «Папарацци», paparazzi.ru– о журнал о частной жизни знаменитостей. Сделала с нуля и в Декабре 2010 г. ежемесячный тираж составляет 1 700 000 экз/мес. Декабрь 2010 года- посещаемость сайта www.paparazzi.ru 100 000 чел/ день (TNS Gallup). 

2008-2010 г. PR-директор «Красный квадрат», ООО. 1 канал Останкино. www.red-red.ru ТВ продакшн федеральных телеканалов. Создание, упаковка запуск digital-проектов одноименных ТВ программ: «Минута славы», «Контрольная закупка», «Фабрика звезд», «20 лучших песен», «Давай поженимся» и др. Cобрана самая крупная правовая база отечественной музыки в стране, 1 канал- одноименная ТВ программа в prime time. Прямое подчинение Курпатову А.В.- прямое подчинение Эрнст К.Л.

2013 —2015 ИД "Семь дней" Руководитель отдела маркетинга. Запуск цифровой трансформации ИД. Интернет-портал www.7days.ru. 800 000 уникальных пользователей в сутки через полгода после старта. Вывод в январе 2015 года. Создание сети региональных СМИ под эгидой бренда.

2016-2018 Е-Генератор РА, холдинг Финам. Директор по развитию бизнеса. Позиционирование, вывод на рынок тизерной сетки Миртесен с нуля. Рост трафика (подключение 500 топ-площадок Рунета в течении 1 года). Проекты-партнеры сети в течении года: Партия "Единая Россия", Портал "Госуслуги", Партия "Парнас", Рбк, Рамблер и др.

2019-2025 Вывод на рынок новых проектов в сферах luxe resale (одежда, ювелирка, сумки, обувь)`,
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
    image: '/images/team/optimized/alexandr_optimized.jpg',
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Наша экспертиза
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Команда экспертов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Профессионалы с многолетним опытом, создающие будущее AI SMM
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:gap-12">
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
              <Card className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:border-blue-200 sm:rounded-2xl">
                {/* Photo Section */}
                <div className="relative w-full overflow-hidden">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={280}
                      height={350}
                      onError={(e) => {
                        e.currentTarget.src = '/images/team/optimized/evgeniy_optimized.jpg';
                      }}
                      style={{
                        objectPosition: 'center top'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-800/60 to-transparent opacity-80 group-hover:opacity-90 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-50 mb-1 drop-shadow-lg">{member.name}</h3>
                      <p className="text-gray-200 text-base sm:text-lg drop-shadow-md">{member.position}</p>
                      <p className="text-gray-300 text-xs sm:text-sm drop-shadow-sm">{member.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Specialization */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      Специализация
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      <div className="flex items-center">
                        <Award className="w-5 h-5 text-yellow-500 mr-2" />
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
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 mr-3 flex-shrink-0 group-hover:bg-blue-500 transition-colors" />
                          <span className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Competencies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      <div className="flex items-center">
                        <Brain className="w-5 h-5 text-purple-500 mr-2" />
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
                            className="bg-white text-gray-700 border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-all"
                          >
                            {competency}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(member.stats).map(([key, value]) => (
                      <div key={key} className="text-center group">
                      <div className="text-lg sm:text-2xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{value}</div>
                      <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-500 capitalize transition-colors">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Detailed Info Button for Evgenia Strousova */}
                  {index === 0 && member.detailedInfo && (
                    <div className="pt-4">
                      <Button
                        onClick={() => toggleExpand(index)}
                        variant="outline"
                        className="w-full flex items-center justify-between gap-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
                      >
                        <span>Подробнее о специалисте</span>
                        {expandedIndex === index ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                      
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 overflow-hidden"
                          >
                            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
                              {member.detailedInfo}
                            </pre>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}

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
                          className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white border-none transition-all flex items-center justify-center gap-2 h-12 shadow-md hover:shadow-lg hover:scale-105"
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
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto hover:border-blue-200 sm:rounded-2xl">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Команда, которая доставляет результаты
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Объединяя многолетний опыт в маркетинге и передовые AI-технологии, 
              мы создаем решения, которые действительно работают.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300"
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
