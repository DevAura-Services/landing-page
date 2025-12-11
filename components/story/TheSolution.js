'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function TheSolution() {
    const { t } = useLanguage();
    const content = t('story.stages.guide');

    // Architecture Animation Variants
    const nodeVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100
            }
        })
    };

    const connectionVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                delay: 1 + i * 0.1,
                duration: 1.5,
                ease: "easeInOut"
            }
        })
    };

    // Grid positions for clean architecture
    const nodes = [
        { cx: 200, cy: 50, label: "LB" },    // Load Balancer
        { cx: 100, cy: 150, label: "App" },  // App 1
        { cx: 200, cy: 150, label: "App" },  // App 2
        { cx: 300, cy: 150, label: "App" },  // App 3
        { cx: 150, cy: 250, label: "DB" },   // DB Primary
        { cx: 250, cy: 250, label: "DB" },   // DB Replica
    ];

    const connections = [
        "M 200 65 L 100 135", // LB -> App 1
        "M 200 65 L 200 135", // LB -> App 2
        "M 200 65 L 300 135", // LB -> App 3
        "M 100 165 L 150 235", // App 1 -> DB 1
        "M 200 165 L 150 235", // App 2 -> DB 1
        "M 300 165 L 250 235", // App 3 -> DB 2
        "M 150 250 L 250 250", // DB sync
    ];

    return (
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 py-12">
            {/* Visual Side - The Clean Architecture */}
            <div className="w-full md:w-1/2 relative h-[400px] flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl transform scale-75" />

                <div className="relative w-full h-full bg-[#161b22]/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm p-6">
                    <svg className="w-full h-full" viewBox="0 0 400 300">
                        {/* Connecting Lines */}
                        {connections.map((d, i) => (
                            <motion.path
                                key={i}
                                d={d}
                                fill="transparent"
                                stroke="#3B82F6"
                                strokeWidth="2"
                                variants={connectionVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={i}
                            />
                        ))}

                        {/* Nodes */}
                        {nodes.map((node, i) => (
                            <motion.g
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={nodeVariants}
                                custom={i}
                            >
                                <circle cx={node.cx} cy={node.cy} r="20" fill="#1E293B" stroke="#60A5FA" strokeWidth="2" />
                                <text x={node.cx} y={node.cy} dy="4" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                                    {node.label}
                                </text>
                            </motion.g>
                        ))}

                        {/* Animated Packets */}
                        <motion.circle r="3" fill="white">
                            <motion.animateMotion
                                dur="3s"
                                repeat={Infinity}
                                path="M 200 65 L 100 135 L 150 235"
                            />
                        </motion.circle>
                        <motion.circle r="3" fill="white">
                            <motion.animateMotion
                                dur="3s"
                                repeat={Infinity}
                                path="M 200 65 L 300 135 L 250 235"
                                begin="1.5s"
                            />
                        </motion.circle>
                    </svg>

                    {/* Overlay Text */}
                    <div className="absolute bottom-4 left-4 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-1">
                        <span className="text-blue-400 text-xs font-mono">ARCH: OPTIMIZED</span>
                    </div>
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-blue-500 font-mono text-xl">02.</span>
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
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                {point}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
