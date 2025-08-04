'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react';

export function ROICalculator() {
  const [inputs, setInputs] = useState({
    teamSize: 2,
    contentVolume: 20,
    currentCost: 100000,
    workingHours: 40
  });

  const [results, setResults] = useState({
    timeSaved: 0,
    costSaved: 0,
    roi: 0,
    payback: 0
  });

  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    const { teamSize, contentVolume, currentCost, workingHours } = inputs;
    
    // AI SMM экономит 70% времени
    const timeSavedHours = (workingHours * teamSize * 0.7);
    const costPerHour = currentCost / (workingHours * 4); // месячная стоимость
    const monthlySaved = timeSavedHours * costPerHour;
    
    // Увеличение эффективности контента на 300%
    const contentEfficiencyBoost = contentVolume * 3;
    
    // ROI расчет
    const aiSmmCost = 150000; // средняя стоимость внедрения
    const monthlyBenefit = monthlySaved + (contentEfficiencyBoost * 1000); // примерная оценка
    const annualBenefit = monthlyBenefit * 12;
    const roi = ((annualBenefit - aiSmmCost) / aiSmmCost) * 100;
    const paybackMonths = aiSmmCost / monthlyBenefit;

    setResults({
      timeSaved: Math.round(timeSavedHours),
      costSaved: Math.round(monthlySaved),
      roi: Math.round(roi),
      payback: Math.round(paybackMonths * 10) / 10
    });

    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
    setShowResults(false);
  };

  return (
    <Card className="p-6 bg-white border-0 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-gradient-peach rounded-lg flex items-center justify-center mr-3">
          <Calculator className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-charcoal-800">
          ROI Калькулятор
        </h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Размер SMM команды (человек)
          </label>
          <Input
            type="number"
            value={inputs.teamSize}
            onChange={(e) => handleInputChange('teamSize', e.target.value)}
            className="border-primary-200 focus:border-primary-500"
            min="1"
            max="20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Контент в месяц (постов)
          </label>
          <Input
            type="number"
            value={inputs.contentVolume}
            onChange={(e) => handleInputChange('contentVolume', e.target.value)}
            className="border-primary-200 focus:border-primary-500"
            min="1"
            max="1000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Текущие расходы на SMM (₽/мес)
          </label>
          <Input
            type="number"
            value={inputs.currentCost}
            onChange={(e) => handleInputChange('currentCost', e.target.value)}
            className="border-primary-200 focus:border-primary-500"
            min="0"
            step="10000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Рабочих часов в неделю
          </label>
          <Input
            type="number"
            value={inputs.workingHours}
            onChange={(e) => handleInputChange('workingHours', e.target.value)}
            className="border-primary-200 focus:border-primary-500"
            min="1"
            max="80"
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={calculateROI}
            className="w-full gradient-peach text-white hover:shadow-lg transition-all duration-300"
          >
            <Calculator className="w-4 h-4 mr-2" />
            Рассчитать экономию
          </Button>
        </motion.div>

        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg"
          >
            <h4 className="font-bold text-charcoal-800 mb-4">Ваша экономия:</h4>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/70 p-3 rounded-lg">
                <Clock className="w-5 h-5 text-accent-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gradient">{results.timeSaved}ч</div>
                <div className="text-xs text-charcoal-600">в неделю</div>
              </div>
              
              <div className="bg-white/70 p-3 rounded-lg">
                <DollarSign className="w-5 h-5 text-green-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gradient">{results.costSaved.toLocaleString()}₽</div>
                <div className="text-xs text-charcoal-600">в месяц</div>
              </div>
              
              <div className="bg-white/70 p-3 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gradient">{results.roi}%</div>
                <div className="text-xs text-charcoal-600">ROI в год</div>
              </div>
              
              <div className="bg-white/70 p-3 rounded-lg">
                <Calculator className="w-5 h-5 text-purple-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-gradient">{results.payback}</div>
                <div className="text-xs text-charcoal-600">мес. окупаемость</div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/50 rounded-lg text-center">
              <p className="text-sm text-charcoal-700">
                💡 <strong>Экономия за год: {(results.costSaved * 12).toLocaleString()}₽</strong>
              </p>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-primary-100">
        <p className="text-xs text-charcoal-500 text-center">
          * Расчеты приблизительны и основаны на средних показателях клиентов
        </p>
      </div>
    </Card>
  );
}