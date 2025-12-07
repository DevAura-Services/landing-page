'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { Brain, Rocket, BarChart, RefreshCw } from 'lucide-react';

export default function MLOpsClient() {
    const { t } = useLanguage();
    const service = t('services.pillars.mlops');

    return (
        <main className="min-h-screen bg-[#0a0e17]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500">
                                <Brain size={40} />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-purple-400 font-medium mb-6">
                                {service.tagline}
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {service.desc}
                            </p>
                            <a
                                href="https://calendly.com/kmarturki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                            >
                                {t('nav.schedule')}
                            </a>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/mlops_pipeline_1764884744914.png"
                                alt="MLOps Pipeline"
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
                        Why MLOps?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-purple-500"><Rocket size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Faster Model Deployment</h3>
                            <p className="text-gray-400">
                                Deploy ML models to production in hours, not months.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-purple-500"><BarChart size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Better Model Performance</h3>
                            <p className="text-gray-400">
                                Continuous monitoring and automated retraining keep models accurate.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="mb-4 text-purple-500"><RefreshCw size={40} /></div>
                            <h3 className="text-xl font-bold text-white mb-3">Reproducibility</h3>
                            <p className="text-gray-400">
                                Version control and tracking for all experiments and models.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities */}
            <section className="py-20 bg-[#05080f]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Our MLOps Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-[#1e293b]/30 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-colors">
                                <span className="text-purple-500 text-xl mt-1">✓</span>
                                <div>
                                    <h3 className="text-white font-semibold mb-2">{feature}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ML Tools & Platforms */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        ML Tools & Platforms
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['TensorFlow', 'PyTorch', 'MLflow', 'Kubeflow', 'SageMaker', 'Vertex AI', 'Feast', 'DVC'].map((tech, idx) => (
                            <div key={idx} className="bg-[#1e293b]/20 border border-white/5 rounded-xl p-6 text-center hover:border-purple-500/30 transition-colors">
                                <p className="text-gray-300 font-medium">{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Operationalize Your ML Models?
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Let's build reliable ML infrastructure that scales your AI initiatives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendly.com/kmarturki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
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
