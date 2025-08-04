'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Bot } from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'Главная' },
  { href: '#about', label: 'О продукте' },
  { href: '#advantages', label: 'Преимущества' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#team', label: 'Команда' },
  { href: '#services', label: 'Услуги' },
  { href: '#contacts', label: 'Контакты' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-peach rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">AI SMM</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-charcoal-700 hover:text-accent-600 transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}
            <Button className="gradient-peach text-white hover:shadow-lg transition-all duration-300">
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-peach text-white"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-charcoal-700 hover:text-accent-600 transition-colors duration-200 py-2"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button className="w-full gradient-peach text-white mt-4">
                Консультация
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}