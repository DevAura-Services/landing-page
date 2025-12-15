'use client';

import { ArrowRight, BarChart, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
    {
        id: 1,
        title: "FinTech Migration to Kubernetes",
        client: "GlobalFinance Corp",
        industry: "Finance",
        result: "40% Cost Reduction",
        description: "Migrated a legacy monolithic banking application to a microservices architecture on Kubernetes, resulting in improved scalability and significant cost savings.",
        stats: [
            { label: "Uptime", value: "99.99%" },
            { label: "Deployment Time", value: "-75%" }
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Automated MLOps Pipeline for HealthTech",
        client: "MediAI Solutions",
        industry: "Healthcare",
        result: "10x Faster Model Deployment",
        description: "Built an end-to-end MLOps pipeline automating data validation, training, and deployment, enabling rapid iteration of diagnostic models.",
        stats: [
            { label: "Model Accuracy", value: "+15%" },
            { label: "Time-to-Market", value: "2 Weeks" }
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Zero-Trust Security Implementation",
        client: "SecureNet Systems",
        industry: "Cybersecurity",
        result: "SOC2 Compliance Achieved",
        description: "Implemented a comprehensive Zero-Trust architecture across a multi-cloud environment, securing critical data and achieving industry compliance.",
        stats: [
            { label: "Vulnerabilities", value: "-90%" },
            { label: "Audit Time", value: "-50%" }
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    }
];

export default function CaseStudies() {
    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Case Studies</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Real-world success stories of how we've helped companies transform their infrastructure and accelerate innovation.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="flex flex-col gap-12">
                    {caseStudies.map((study, idx) => (
                        <article key={study.id} className={`group bg-[#1e293b]/20 border border-white/5 rounded-3xl overflow-hidden hover:bg-[#1e293b]/40 transition-colors flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Image Section */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${study.image})` }}
                                />
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-blue-400 uppercase mb-4">
                                    <span>{study.client}</span>
                                    <span>•</span>
                                    <span>{study.industry}</span>
                                </div>

                                <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                    {study.title}
                                </h2>

                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {study.description}
                                </p>

                                <div className="grid grid-cols-2 gap-8 mb-8 pt-8 border-t border-white/5">
                                    <div>
                                        <p className="text-3xl font-bold text-white mb-1">{study.result}</p>
                                        <p className="text-sm text-gray-500">Key Outcome</p>
                                    </div>
                                    <div className="space-y-2">
                                        {study.stats.map((stat, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-gray-500">{stat.label}</span>
                                                <span className="text-white font-medium">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <button className="text-white font-bold group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                        Read Full Case Study <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-32 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to write your success story?</h2>
                    <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                        Schedule a Consultation
                    </Link>
                </div>
            </div>
        </main>
    );
}
