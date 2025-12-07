'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ style }) => (
    <motion.span
        style={style}
        className="absolute inline-block text-[#FFD700] pointer-events-none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: Math.random() * 2 }}
    >
        ✨
    </motion.span>
);

export default function Sparkles({ count = 20 }) {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const generateSparkles = () => {
            const newSparkles = Array.from({ length: count }).map((_, i) => ({
                id: i,
                style: {
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 10 + 10}px`,
                },
            }));
            setSparkles(newSparkles);
        };

        generateSparkles();
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {sparkles.map((sparkle) => (
                <Sparkle key={sparkle.id} style={sparkle.style} />
            ))}
        </div>
    );
}
