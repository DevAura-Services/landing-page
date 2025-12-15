'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, GraduationCap, Globe, Scale } from 'lucide-react';

export default function CareersClient() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {t('careers.title')}
                    </h1>
                    <p className="text-xl text-gray-400">
                        {t('careers.subtitle')}
                    </p>
                </div>

                {/* Why Join Section */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        {t('careers.whyJoin')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {['innovative', 'learning', 'exposure', 'balance'].map((key, idx) => {
                            const iconMap = {
                                innovative: Rocket,
                                learning: GraduationCap,
                                exposure: Globe,
                                balance: Scale
                            };
                            const Icon = iconMap[key];
                            return (
                                <div key={idx} className="group bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl hover:bg-[#1e293b]/50 transition-all hover:-translate-y-1 hover:border-blue-500/30">
                                    <div className="mb-4 inline-block p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                        <Icon
                                            size={32}
                                            className="text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {t(`careers.benefits.${key}.title`)}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {t(`careers.benefits.${key}.desc`)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Open Positions Section */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        {t('careers.openPositions')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {t('careers.jobs').map((job, idx) => (
                            <Link
                                key={idx}
                                href={`/careers/${job.slug}`}
                                className="bg-[#1e293b]/20 border border-white/5 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group block"
                            >
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                                    {job.description}
                                </p>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs text-gray-500">
                                        {t('careers.location')}: {t('careers.remote')}
                                    </span>
                                </div>
                                <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 flex items-center gap-1">
                                    View Details <span className="text-lg">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('cta.description')}
                    </p>
                    <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                        {t('nav.contact')}
                    </Link>
                </div>
            </div>
        </main>
    );
}
