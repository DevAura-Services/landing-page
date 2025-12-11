'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AlertCircle, Compass, Zap } from 'lucide-react';

export default function StorySection() {
    const { t } = useLanguage();

    const stages = [
        {
            key: 'challenge',
            icon: AlertCircle,
            color: 'text-red-500',
            bgColor: 'bg-red-500/10'
        },
        {
            key: 'guide',
            icon: Compass,
            color: 'text-blue-500',
            bgColor: 'bg-blue-500/10'
        },
        {
            key: 'transformation',
            icon: Zap,
            color: 'text-green-500',
            bgColor: 'bg-green-500/10'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1]
            }
        }
    };

    const numberVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section className="py-20 bg-gradient-to-b from-[#0a0e17] via-[#0f1420] to-[#05080f] relative z-10 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t('story.title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('story.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6"
                >
                    {stages.map((stage, index) => {
                        const Icon = stage.icon;
                        const stageData = t(`story.stages.${stage.key}`);

                        return (
                            <motion.div
                                key={stage.key}
                                variants={itemVariants}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur" />

                                <div className="relative bg-gradient-to-br from-[#1e293b]/40 to-[#0f172a]/40 border border-white/5 rounded-2xl p-8 backdrop-blur-sm hover:border-white/10 transition-all duration-500 h-full">
                                    <div className="flex items-start gap-4 mb-6">
                                        <motion.div
                                            variants={numberVariants}
                                            className="flex-shrink-0"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-xl blur" />
                                                <div className="relative bg-[#0a0e17] border border-blue-600/30 rounded-xl p-4 flex items-center justify-center min-w-[60px] h-[60px]">
                                                    <span className="text-2xl font-bold text-blue-400">
                                                        {stageData.number}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        <div className={`w-14 h-14 rounded-xl ${stage.bgColor} flex items-center justify-center ${stage.color}`}>
                                            <Icon size={28} />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {stageData.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {stageData.description}
                                    </p>

                                    <ul className="space-y-3">
                                        {stageData.points.map((point, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                viewport={{ once: true }}
                                                className="flex items-start gap-2 text-gray-300 text-sm"
                                            >
                                                <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                                <span>{point}</span>
                                            </motion.li>
                                        ))}
                                    </ul>

                                    {index < stages.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                            <motion.div
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="text-blue-600/40 text-2xl"
                                            >
                                                →
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Ready to transform your infrastructure? Our experts are here to guide you every step of the way.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
