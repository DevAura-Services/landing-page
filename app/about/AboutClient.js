'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award, Users, Clock, CheckCircle, Linkedin } from 'lucide-react';
import Link from 'next/link';

const StatsSection = ({ t }) => {
    const stats = t('about.stats') || [];
    return (
        <div className="grid grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center p-6 bg-[#1e293b]/30 rounded-2xl border border-white/5"
                >
                    <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    );
};

const ProcessSection = ({ t }) => {
    const process = t('about.process');
    if (!process) return null;

    return (
        <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{process.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative p-6 bg-[#0a0e17] border border-white/10 rounded-xl hover:border-blue-500/50 transition-colors"
                    >
                        <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg">
                            {idx + 1}
                        </div>
                        <h3 className="text-xl font-bold text-white mt-4 mb-3">{step.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const TeamSection = ({ t }) => {
    const team = t('about.team');
    if (!team) return null;

    return (
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">{team.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {team.members.map((member, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-[#1e293b]/30 border border-white/5 rounded-2xl overflow-hidden group relative"
                    >
                        <div className="h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                            <Users size={64} className="text-blue-500/50 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                            {member.linkedin && (
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
                                >
                                    <Linkedin size={16} />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default function About() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">{t('about.title')}</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {t('about.intro')}
                        </p>
                    </div>

                    <StatsSection t={t} />

                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                        <div className="bg-gradient-to-br from-blue-900/10 to-transparent p-8 rounded-3xl border border-white/5 service-card">
                            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                                <Award className="text-blue-500" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('about.mission')}</h2>
                            <p className="text-gray-400 leading-relaxed">
                                {t('about.missionText')}
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-900/10 to-transparent p-8 rounded-3xl border border-white/5 service-card">
                            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="text-purple-500" size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">{t('about.vision')}</h2>
                            <p className="text-gray-400 leading-relaxed">
                                {t('about.visionText')}
                            </p>
                        </div>
                    </div>

                    <ProcessSection t={t} />

                    <TeamSection t={t} />

                    {/* Why Choose Us */}
                    <div className="bg-[#1e293b]/20 border border-white/5 rounded-3xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('about.whyChoose')}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(t('about.reasons') || []).map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle className="text-blue-500 flex-shrink-0" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
