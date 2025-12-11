'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function TheOutcome() {
    const { t } = useLanguage();
    const content = t('story.stages.transformation');

    return (
        <div className="flex flex-col md:flex-row items-center gap-12 py-12">
            {/* Visual Side - The Outcome Stats */}
            <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-green-500/5 rounded-full blur-3xl transform scale-75" />

                <div className="relative w-full h-full bg-[#161b22]/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm p-6 flex flex-col gap-6">

                    {/* Uptime Chart */}
                    <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-xs text-gray-400 font-mono">SYSTEM UPTIME</div>
                            <div className="text-xs text-green-400 font-bold">99.99%</div>
                        </div>
                        <div className="h-24 w-full relative overflow-hidden">
                            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
                                <motion.path
                                    d="M0 40 L10 38 L20 42 L30 35 L40 38 L50 20 L60 22 L70 15 L80 18 L90 5 L100 5"
                                    fill="transparent"
                                    stroke="#22C55E"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                <motion.linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0)" />
                                </motion.linearGradient>
                                <motion.path
                                    d="M0 40 L10 38 L20 42 L30 35 L40 38 L50 20 L60 22 L70 15 L80 18 L90 5 L100 5 V 50 H 0 Z"
                                    fill="url(#gradient)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Deploy Count */}
                    <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/5 flex items-center justify-between">
                        <div>
                            <div className="text-xs text-gray-400 font-mono mb-1">DEPLOY FQ</div>
                            <div className="text-3xl font-bold text-white">12<span className="text-sm text-gray-500 font-normal">/day</span></div>
                        </div>
                        <div className="h-12 w-24 flex items-end gap-1">
                            {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                                <motion.div
                                    key={i}
                                    className="w-full bg-blue-500/50 rounded-t-sm"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Overlay Text */}
                    <div className="absolute bottom-4 right-4 bg-green-500/10 border border-green-500/20 rounded-lg px-3 py-1">
                        <span className="text-green-400 text-xs font-mono">PERFORMANCE: PEAK</span>
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
                        <span className="text-green-500 font-mono text-xl">03.</span>
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
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
