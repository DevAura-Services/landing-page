'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Hero() {
    const { t } = useLanguage();


    return (
        <section
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
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="relative inline-block mb-6">
                    <h1
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                        style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 30%, rgba(59,130,246,1) 50%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.4) 100%)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'textGlow 4s linear infinite'
                        }}
                    >
                        {t('hero.title')} <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0.6) 30%, rgba(168,85,247,1) 50%, rgba(139,92,246,0.6) 70%, rgba(139,92,246,0.6) 100%)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'textGlow 4s linear infinite'
                            }}
                        >
                            {t('hero.titleHighlight')}
                        </span>
                    </h1>
                </div>

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
