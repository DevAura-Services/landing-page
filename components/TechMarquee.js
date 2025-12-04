'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const technologies = [
    { name: 'Docker', emoji: '🐳', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Kubernetes', emoji: '☸️', logo: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
    { name: 'Jenkins', emoji: '🤵', logo: 'https://cdn.simpleicons.org/jenkins/D24939' },
    { name: 'Terraform', emoji: '🏗️', logo: 'https://cdn.simpleicons.org/terraform/7B42BC' },
    { name: 'Ansible', emoji: '📜', logo: 'https://cdn.simpleicons.org/ansible/EE0000' },
    { name: 'AWS', emoji: '☁️', logo: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
    { name: 'Google Cloud', emoji: '☁️', logo: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
    { name: 'Prometheus', emoji: '🔥', logo: 'https://cdn.simpleicons.org/prometheus/E6522C' },
    { name: 'Grafana', emoji: '📊', logo: 'https://cdn.simpleicons.org/grafana/F46800' },
    { name: 'Git', emoji: '📦', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'GitLab', emoji: '🦊', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
    { name: 'Python', emoji: '🐍', logo: 'https://cdn.simpleicons.org/python/3776AB' },
];

const TechItem = ({ tech }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="flex items-center gap-3 bg-[#1e293b]/50 border border-white/5 px-6 py-3 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-colors cursor-default min-w-[160px]">
            <div className="relative w-8 h-8 flex items-center justify-center">
                <span
                    className={`text-2xl absolute transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                >
                    {tech.emoji}
                </span>

                <img
                    src={tech.logo}
                    alt={tech.name}
                    className={`w-6 h-6 object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setIsLoaded(true)}
                />
            </div>
            <span className="text-gray-300 font-medium">{tech.name}</span>
        </div>
    );
};

const MarqueeRow = ({ items, direction = 'left' }) => {
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
        <div className="flex overflow-hidden py-4 group">
            <div className={`flex gap-8 ${animationClass} whitespace-nowrap`}>
                {[...items, ...items, ...items].map((tech, idx) => (
                    <TechItem key={`${tech.name}-${idx}`} tech={tech} />
                ))}
            </div>
        </div>
    );
};

export default function TechMarquee() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-[#0a0e17]">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('techMarquee.title')}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {t('techMarquee.description')}
                </p>
            </div>

            <div className="flex flex-col gap-6">
                <MarqueeRow items={technologies.slice(0, 6)} direction="right" />
                <MarqueeRow items={technologies.slice(6, 12)} direction="left" />
                <MarqueeRow items={technologies} direction="right" />
            </div>
        </section>
    );
}
