'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Cloud, Brain, Activity, Shield } from 'lucide-react';

const icons = {
    devops: Rocket,
    cloud: Cloud,
    mlops: Brain,
    sre: Activity,
    security: Shield
};

export default function ServicesCarousel() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const services = ['devops', 'cloud', 'mlops', 'sre', 'security'];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [services.length]);

    const getVisibleServices = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(services[(currentIndex + i) % services.length]);
        }
        return visible;
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-4 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                {t('services.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {getVisibleServices().map((key, idx) => {
                        const Icon = icons[key];
                        return (
                            <motion.div
                                key={`${key}-${currentIndex}`}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="bg-[#1e293b]/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-[#1e293b]/60 transition-colors"
                            >
                                <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {t(`services.pillars.${key}.title`)}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {t(`services.pillars.${key}.desc`)}
                                </p>
                                <ul className="space-y-2">
                                    {t(`services.pillars.${key}.features`).map((feature, i) => (
                                        <li key={i} className="flex items-center text-xs text-gray-500">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-2">
                {services.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-600'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
