'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function DevOpsClient() {
    const { t } = useLanguage();
    const service = t('services.pillars.devops');

    return (
        <main className="min-h-screen bg-[#0a0e17]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mb-6 text-blue-500">
                                🚀
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
                                src="/devops_transformation_1764884707318.png"
                                alt="DevOps Transformation"
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
                        Why DevOps Transformation?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-white mb-3">Faster Delivery</h3>
                            <p className="text-gray-400">
                                Deploy code 10x faster with automated CI/CD pipelines and streamlined workflows.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold text-white mb-3">Higher Quality</h3>
                            <p className="text-gray-400">
                                Catch bugs early with automated testing and continuous quality checks.
                            </p>
                        </div>
                        <div className="bg-[#1e293b]/20 border border-white/5 rounded-2xl p-8">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-bold text-white mb-3">Cost Efficiency</h3>
                            <p className="text-gray-400">
                                Reduce operational costs through automation and optimized resource usage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Capabilities */}
            <section className="py-20 bg-[#05080f]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                        Our DevOps Services
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

            {/* Technology Stack */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Technologies We Use
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'GitHub Actions', 'ArgoCD'].map((tech, idx) => (
                            <div key={idx} className="bg-[#1e293b]/20 border border-white/5 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors">
                                <p className="text-gray-300 font-medium">{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Transform Your DevOps?
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg">
                            Let's discuss how we can accelerate your software delivery and improve your infrastructure.
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
