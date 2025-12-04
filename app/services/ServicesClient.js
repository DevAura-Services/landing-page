'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function ServicesClient() {
    const { t } = useLanguage();
    const pillars = t('services.pillars');

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {t('services.title')}
                    </h1>
                    <p className="text-xl text-blue-400 font-medium mb-4">
                        {t('services.subtitle')}
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {t('services.description')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
                    {Object.entries(pillars).map(([key, service], idx) => {
                        const slugs = {
                            devops: 'devops-transformation',
                            cloud: 'cloud-architecture',
                            mlops: 'mlops',
                            sre: 'sre',
                            security: 'devsecops'
                        };

                        return (
                            <Link
                                key={key}
                                href={`/services/${slugs[key]}`}
                                className="bg-[#1e293b]/20 border border-white/5 rounded-3xl p-8 md:p-12 hover:border-blue-500/50 hover:bg-[#1e293b]/30 transition-all duration-300 cursor-pointer group"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                                    {/* Service Info */}
                                    <div className="lg:col-span-1">
                                        <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mb-6 text-blue-500 group-hover:scale-110 transition-transform">
                                            {['🚀', '☁️', '🧠', '⚡', '🛡️'][idx]}
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-blue-400 font-medium mb-4">
                                            {service.tagline}
                                        </p>
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            {service.desc}
                                        </p>
                                        <span className="text-blue-500 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Learn More
                                            <span className="text-xl">→</span>
                                        </span>
                                    </div>

                                    {/* Features List */}
                                    <div className="lg:col-span-2">
                                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-white/10 pb-2 inline-block">
                                            Key Capabilities
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {service.features.map((feature, fIdx) => (
                                                <div key={fIdx} className="flex items-start gap-3 bg-[#0a0e17]/50 p-4 rounded-xl border border-white/5">
                                                    <span className="text-blue-500 mt-1">✓</span>
                                                    <span className="text-gray-300">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Transform Your Infrastructure?
                        </h2>
                        <p className="text-gray-300 mb-8">
                            Let's discuss how our services can help you achieve operational excellence.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                        >
                            {t('nav.schedule')}
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
