'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TheProblem from './story/TheProblem';
import TheSolution from './story/TheSolution';
import TheOutcome from './story/TheOutcome';

export default function StorySection() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-[#0a0e17] relative z-10 overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[length:40px_40px] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('story.title')}
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        {t('story.subtitle')}
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12 md:gap-24">
                    <TheProblem />

                    {/* Connector Line 1 */}
                    <div className="hidden md:flex justify-center h-16 relative">
                        <motion.div
                            className="w-px bg-gradient-to-b from-red-500/0 via-red-500/50 to-blue-500/50"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: 1 }}
                        />
                    </div>

                    <TheSolution />

                    {/* Connector Line 2 */}
                    <div className="hidden md:flex justify-center h-16 relative">
                        <motion.div
                            className="w-px bg-gradient-to-b from-blue-500/50 via-green-500/50 to-green-500/0"
                            initial={{ height: 0 }}
                            whileInView={{ height: '100%' }}
                            transition={{ duration: 1 }}
                        />
                    </div>

                    <TheOutcome />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="mt-24 text-center"
                >
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed border-t border-white/5 pt-12">
                        Ready to write your success story? <Link href="/contact" className="text-white font-bold hover:text-blue-500 transition-colors">Devaura</Link> is ready to guide you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
