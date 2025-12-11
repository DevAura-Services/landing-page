'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function TheProblem() {
    const { t } = useLanguage();
    const content = t('story.stages.challenge');

    // Chaos Animation Variants
    const lineVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 0.6,
            transition: {
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        })
    };

    const alertVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: [1, 1.2, 1],
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: i * 0.5 + 2,
                repeat: Infinity,
                repeatDelay: 2
            }
        })
    };

    return (
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">
            {/* Visual Side - The Chaos Graph */}
            <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-red-500/5 rounded-full blur-3xl transform scale-75" />

                <div className="relative w-full h-full bg-[#161b22]/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm p-6">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                        {/* Chaotic Connections */}
                        <motion.path
                            d="M 50 150 Q 150 50 200 150 T 350 150"
                            fill="transparent"
                            stroke="#EF4444"
                            strokeWidth="2"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                        />
                        <motion.path
                            d="M 50 200 Q 100 100 200 200 T 350 100"
                            fill="transparent"
                            stroke="#F87171"
                            strokeWidth="2"
                            strokeDasharray="5 5"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={2}
                        />
                        <motion.path
                            d="M 100 250 C 150 100 250 250 300 50"
                            fill="transparent"
                            stroke="#FECACA"
                            strokeWidth="1"
                            variants={lineVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={3}
                        />

                        {/* Server Nodes */}
                        <circle cx="50" cy="150" r="6" fill="#64748B" />
                        <circle cx="350" cy="150" r="6" fill="#64748B" />
                        <circle cx="200" cy="150" r="8" fill="#EF4444" />
                        <circle cx="200" cy="200" r="6" fill="#64748B" />
                        <circle cx="100" cy="250" r="6" fill="#64748B" />
                        <circle cx="300" cy="50" r="6" fill="#64748B" />

                        {/* Alert Icons */}
                        <motion.g
                            transform="translate(190, 130)"
                            variants={alertVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={0}
                        >
                            <rect x="0" y="0" width="20" height="20" rx="4" fill="#EF4444" />
                            <text x="10" y="15" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">!</text>
                        </motion.g>

                        <motion.g
                            transform="translate(290, 40)"
                            variants={alertVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={1}
                        >
                            <rect x="0" y="0" width="16" height="16" rx="3" fill="#F59E0B" />
                            <text x="8" y="12" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
                        </motion.g>
                    </svg>

                    {/* Overlay Text */}
                    <div className="absolute bottom-4 right-4 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-1">
                        <span className="text-red-400 text-xs font-mono">STATUS: CRITICAL</span>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-red-500 font-mono text-xl">01.</span>
                        <h3 className="text-2xl font-bold text-white">{content.title}</h3>
                    </div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {content.description}
                    </p>

                    <ul className="space-y-4">
                        {content.points.map((point, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-center gap-3 text-gray-300"
                            >
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
