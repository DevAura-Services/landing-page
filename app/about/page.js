'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{t('about.title')}</h1>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {t('about.intro')}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t('about.mission')}</h2>
                                <p className="text-gray-400">
                                    {t('about.missionText')}
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t('about.vision')}</h2>
                                <p className="text-gray-400">
                                    {t('about.visionText')}
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#1e293b]/30 border border-white/5 rounded-2xl p-8 mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">{t('about.whyChoose')}</h2>
                            <ul className="space-y-4">
                                {t('about.reasons').map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-blue-500">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
