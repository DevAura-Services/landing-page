'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
    const { t } = useLanguage();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseMove = (event) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        }
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0a0e17]"
        >
            {/* Grid & Glow Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid Pattern */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(30, 41, 59, 0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(30, 41, 59, 0.3) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    }}
                />

                {/* Mouse Follow Glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.1), transparent 40%)`
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    {t('hero.title')} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        {t('hero.titleHighlight')}
                    </span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-600/25">
                        {t('hero.scheduleBtn')}
                    </Link>
                    <Link href="/about" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all">
                        {t('hero.learnBtn')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
