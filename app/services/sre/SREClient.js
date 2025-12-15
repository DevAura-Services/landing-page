'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, CheckCircle, TrendingUp, Search } from 'lucide-react';
import { basePath } from '@/lib/basePath';

export default function SREClient() {
    const { t } = useLanguage();
    const service = t('services.pillars.sre');

    return (
        <main className="min-h-screen bg-[#0a0e17]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-16 h-16 bg-green-600/20 rounded-2xl flex items-center justify-center text-green-500">
                                <Activity size={40} />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-green-400 font-medium mb-6">
                                {service.tagline}
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <a
                                href="https://calendly.com/kmarturki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                            >
                                {t('nav.schedule')}
                            </a>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src={`${basePath}/sre_monitoring_1764884768421.png`}
                                alt="SRE Monitoring"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Benefits */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Why Site Reliability Engineering?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-green-500"><CheckCircle size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">99.9% Uptime</h3>
                            <p className="text-gray-400">
                                Ensure maximum availability with proactive monitoring and incident management.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-green-500"><TrendingUp size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Performance Optimization</h3>
                            <p className="text-gray-400">
                                Continuously improve system performance through data-driven insights.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-green-500"><Search size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Full Observability</h3>
                            <p className="text-gray-400">
                                Complete visibility into your systems with comprehensive monitoring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities */}
            <section className="py-20 bg-[#05080f]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Our SRE Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-[#1e293b]/30 p-6 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors">
                                <span className="text-green-500 text-xl mt-1">✓</span>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">{feature}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Monitoring Tools */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Monitoring & Observability Stack
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Prometheus', 'Grafana', 'Datadog', 'New Relic', 'PagerDuty', 'ELK Stack', 'Jaeger', 'OpenTelemetry'].map((tech, idx) => (
                            <div key={idx} className="bg-[#1e293b]/20 border border-white/5 rounded-xl p-6 text-center hover:border-green-500/30 transition-colors">
                                <p className="text-gray-300 font-medium">{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-green-900/40 to-blue-900/40 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Improve Your System Reliability?
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Let's build robust SRE practices that ensure your systems stay online.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendly.com/kmarturki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                            >
                                Schedule Consultation
                            </a>
                            <Link
                                href="/services"
                                className="bg-[#1e293b] hover:bg-[#2d3b4e] border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
