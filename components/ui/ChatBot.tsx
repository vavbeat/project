'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses = {
  greeting: "Привет! Я AI-помощник от AI SMM Agency. Чем могу помочь?",
  services: "Мы предлагаем: автоматизацию SMM, AI-генерацию контента, аналитику и масштабирование. Что вас интересует?",
  pricing: "Стоимость зависит от объема работ. Базовый пакет от 150,000₽. Хотите персональный расчет?",
  roi: "Наши клиенты получают ROI от 300% в первый год. Воспользуйтесь калькулятором на сайте!",
  demo: "Конечно! Оставьте контакты, и мы покажем AI SMM в действии в течение 24 часов.",
  contact: "Свяжитесь с нами: Telegram @aismmagency или форма на сайте. Отвечаем быстро!",
  default: "Интересный вопрос! Лучше обсудить это с нашими экспертами. Оставьте заявку на консультацию."
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: botResponses.greeting,
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('услуг') || message.includes('сервис') || message.includes('предлагаете')) {
      return botResponses.services;
    } else if (message.includes('цен') || message.includes('стоим') || message.includes('сколько')) {
      return botResponses.pricing;
    } else if (message.includes('roi') || message.includes('окупа') || message.includes('эффект')) {
      return botResponses.roi;
    } else if (message.includes('демо') || message.includes('показ') || message.includes('пример')) {
      return botResponses.demo;
    } else if (message.includes('контакт') || message.includes('связ') || message.includes('телефон')) {
      return botResponses.contact;
    } else {
      return botResponses.default;
    }
  };

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Auto-open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setIsOpen(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full gradient-peach shadow-2xl hover:shadow-3xl"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-6 h-6 text-white" />
            )}
          </Button>
        </motion.div>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3 }}
            className="absolute -top-12 -left-32 bg-white rounded-lg shadow-lg p-3 border-0"
          >
            <p className="text-sm text-charcoal-700 whitespace-nowrap">
              Есть вопросы? Спросите AI! 🤖
            </p>
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96"
          >
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              {/* Header */}
              <div className="gradient-peach p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI SMM Помощник</h3>
                      <p className="text-xs opacity-90">Онлайн</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-xs ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isBot 
                          ? 'bg-gradient-peach text-white' 
                          : 'bg-accent-500 text-white'
                      }`}>
                        {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.isBot 
                          ? 'bg-primary-50 text-charcoal-800' 
                          : 'bg-accent-500 text-white'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-peach rounded-full flex items-center justify-center text-white">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-primary-50 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-charcoal-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-charcoal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-charcoal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-primary-100">
                <div className="flex space-x-2">
                  <Input
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Напишите ваш вопрос..."
                    className="flex-1 border-primary-200 focus:border-primary-500"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputText.trim()}
                    className="gradient-peach text-white px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-charcoal-500 mt-2 text-center">
                  Powered by AI SMM Agency
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}