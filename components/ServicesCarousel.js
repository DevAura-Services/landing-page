'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Cloud, Brain, Activity, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const icons = {
    devops: Rocket,
    cloud: Cloud,
    mlops: Brain,
    sre: Activity,
    security: Shield
};

const serviceLinks = {
    devops: '/services/devops-transformation',
    cloud: '/services/cloud-architecture',
    mlops: '/services/mlops',
    sre: '/services/sre',
    security: '/services/devsecops'
};

const ServiceCard = ({ serviceKey, Icon, t, className = "" }) => (
    <Link
        href={serviceLinks[serviceKey]}
        className={`block h-full bg-[#1e293b]/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-[#1e293b]/60 transition-colors ${className}`}
    >
        <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
            {t(`services.pillars.${serviceKey}.title`)}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {t(`services.pillars.${serviceKey}.desc`)}
        </p>
        <ul className="space-y-2">
            {t(`services.pillars.${serviceKey}.features`).map((feature, i) => (
                <li key={i} className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                    {feature}
                </li>
            ))}
        </ul>
    </Link>
);

export default function ServicesCarousel() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const services = ['devops', 'cloud', 'mlops', 'sre', 'security'];

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [services.length, isPaused]);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const getServicesForRender = () => {
        // Rotate the services array so the item at currentIndex is first
        const rotated = [
            ...services.slice(currentIndex),
            ...services.slice(0, currentIndex)
        ];
        return rotated;
    };

    return (
        <div
            className="relative w-full max-w-7xl mx-auto px-4 py-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                {t('services.carouselTitle')}
            </h2>

            <div className="relative flex items-center">
                {/* Left Navigation */}
                <button
                    onClick={prev}
                    className="absolute left-0 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors -ml-4 md:-ml-12"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getServicesForRender().map((key, idx) => {
                            // Logic:
                            // Mobile: Show only idx 0
                            // Desktop: Show idx 0, 1, 2
                            // Others (idx >= 3): Hidden always

                            let visibilityClass = 'hidden'; // Default hidden

                            if (idx === 0) {
                                visibilityClass = 'block'; // Always visible (1st item)
                            } else if (idx < 3) {
                                visibilityClass = 'hidden md:block'; // Visible only on desktop (2nd & 3rd items)
                            }

                            // If it's the 4th or 5th item (idx >= 3), it stays 'hidden'

                            if (idx >= 3) return null; // Don't even render extra DOM nodes to keep grid clean

                            return (
                                <motion.div
                                    key={key}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className={visibilityClass}
                                >
                                    <ServiceCard
                                        serviceKey={key}
                                        Icon={icons[key]}
                                        t={t}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Right Navigation */}
                <button
                    onClick={next}
                    className="absolute right-0 z-20 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors -mr-4 md:-mr-12"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-8 gap-3 items-center">
                {services.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-300 rounded-full ${idx === currentIndex
                            ? 'bg-blue-500 w-8 h-3'
                            : 'bg-gray-600 hover:bg-gray-500 w-3 h-3'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
