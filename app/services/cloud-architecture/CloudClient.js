'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { Cloud, TrendingUp, ShieldCheck, Coins } from 'lucide-react';

export default function CloudClient() {
    const { t } = useLanguage();
    const service = t('services.pillars.cloud');

    return (
        <main className="min-h-screen bg-[#0a0e17]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500">
                                <Cloud size={40} />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-blue-400 font-medium mb-6">
                                {service.tagline}
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <a
                                href="https://calendly.com/kmarturki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                            >
                                {t('nav.schedule')}
                            </a>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/cloud_architecture_1764884725710.png"
                                alt="Cloud Architecture"
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
                        Why Cloud Architecture?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-blue-500"><TrendingUp size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Infinite Scalability</h3>
                            <p className="text-gray-400">
                                Scale your infrastructure automatically to handle any workload.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-blue-500"><ShieldCheck size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                            <p className="text-gray-400">
                                Built-in security and compliance with industry best practices.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-blue-500"><Coins size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Cost Optimization</h3>
                            <p className="text-gray-400">
                                Pay only for what you use with intelligent resource management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities */}
            <section className="py-20 bg-[#05080f]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Our Cloud Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-[#1e293b]/30 p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors">
                                <span className="text-blue-500 text-xl mt-1">✓</span>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">{feature}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cloud Platforms */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Cloud Platforms We Support
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-3">AWS</h3>
                            <p className="text-gray-400">Amazon Web Services - Complete cloud infrastructure</p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-3">Azure</h3>
                            <p className="text-gray-400">Microsoft Azure - Enterprise cloud platform</p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8 text-center hover:border-blue-500/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-3">GCP</h3>
                            <p className="text-gray-400">Google Cloud Platform - AI-powered cloud</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Migrate to the Cloud?
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Let's design a cloud architecture that scales with your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendly.com/kmarturki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
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
