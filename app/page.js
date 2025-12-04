'use client';

import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a0e17]">
            <Hero />
            <TechMarquee />

            {/* Services / Hub Section */}
            <section className="py-20 bg-[#05080f]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('services.title')}</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            {t('services.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { key: 'talent', icon: '👥' },
                            { key: 'cost', icon: '💰' },
                            { key: 'location', icon: '🌍' },
                            { key: 'ecosystem', icon: '🚀' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl hover:bg-[#1e293b]/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-2xl mb-6 text-blue-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{t(`services.${item.key}.title`)}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {t(`services.${item.key}.desc`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                {t('cta.title')}
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                {t('cta.description')}
                            </p>
                            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                                {t('cta.button')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
