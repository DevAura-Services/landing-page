'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';


export default function Hero() {
    const { t } = useLanguage();


    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0a0e17]">
            {/* Enhanced Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Prominent Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)'
                    }}
                />

                {/* Moving Grid Overlay for Depth */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #60a5fa 1px, transparent 1px),
                            linear-gradient(to bottom, #60a5fa 1px, transparent 1px)
                        `,
                        backgroundSize: '100px 100px',
                        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 60%)',
                        animation: 'pulse 10s infinite ease-in-out'
                    }}
                />

                {/* Animated Sparkles */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                            style={{
                                width: Math.random() * 3 + 1 + 'px',
                                height: Math.random() * 3 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                                opacity: Math.random() * 0.7 + 0.3,
                                animation: `twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>

                {/* Major Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[100px] rounded-full mix-blend-screen" />

                {/* Seamless Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/80 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <style jsx>{`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.5); }
                    }
                `}</style>
                <div className="relative inline-block mb-6">
                    <h1
                        className="text-5xl md:text-7xl font-bold tracking-tight"
                        style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 30%, rgba(59,130,246,1) 50%, rgba(255,255,255,0.9) 70%, rgba(255,255,255,0.8) 100%)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            animation: 'textGlow 4s linear infinite',
                            filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.3))'
                        }}
                    >
                        {t('hero.title')} <br />
                        <span
                            style={{
                                background: 'linear-gradient(90deg, rgba(139,92,246,0.8) 0%, rgba(139,92,246,0.9) 30%, rgba(168,85,247,1) 50%, rgba(139,92,246,0.9) 70%, rgba(139,92,246,0.8) 100%)',
                                backgroundSize: '200% auto',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                animation: 'textGlow 4s linear infinite',
                                filter: 'drop-shadow(0 0 20px rgba(168,85,247,0.3))'
                            }}
                        >
                            {t('hero.titleHighlight')}
                        </span>
                    </h1>
                </div>

                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                    {t('hero.description')}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link href="/contact" className="relative group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] overflow-hidden">
                        <span className="relative z-10">{t('hero.scheduleBtn')}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                    <Link href="/about" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all hover:border-white/40 backdrop-blur-sm">
                        {t('hero.learnBtn')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
