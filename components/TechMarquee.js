'use client';

import { useLanguage } from '@/contexts/LanguageContext';

const technologies = [
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/FFFFFF' },
    { name: 'Kubernetes', logo: 'https://cdn.simpleicons.org/kubernetes/FFFFFF' },
    { name: 'Jenkins', logo: 'https://cdn.simpleicons.org/jenkins/FFFFFF' },
    { name: 'Terraform', logo: 'https://cdn.simpleicons.org/terraform/FFFFFF' },
    { name: 'Ansible', logo: 'https://cdn.simpleicons.org/ansible/FFFFFF' },
    { name: 'AWS', logo: 'https://img.icons8.com/material-outlined/96/FFFFFF/amazon-web-services.png' },
    { name: 'Google Cloud', logo: 'https://cdn.simpleicons.org/googlecloud/FFFFFF' },
    { name: 'Prometheus', logo: 'https://cdn.simpleicons.org/prometheus/FFFFFF' },
    { name: 'Grafana', logo: 'https://cdn.simpleicons.org/grafana/FFFFFF' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/FFFFFF' },
    { name: 'GitLab', logo: 'https://cdn.simpleicons.org/gitlab/FFFFFF' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/FFFFFF' },
];

const TechItem = ({ tech }) => {
    return (
        <div className="flex items-center gap-3 px-8 py-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
            <img
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8 object-contain filter grayscale brightness-200"
            />
            <span className="text-gray-400 font-medium text-lg whitespace-nowrap">{tech.name}</span>
        </div>
    );
};

export default function TechMarquee() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-[#0a0e17] overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('techMarquee.title')}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {t('techMarquee.description')}
                </p>
            </div>

            {/* Single Line Infinite Scroll */}
            <div className="relative w-full">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0e17] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0e17] to-transparent z-10"></div>

                <div className="flex overflow-hidden">
                    <div className="flex gap-4 animate-scroll-left">
                        {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
                            <TechItem key={`${tech.name}-${idx}`} tech={tech} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
