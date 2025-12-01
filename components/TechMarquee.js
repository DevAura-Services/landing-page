const technologies = [
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
    { name: 'Jenkins', icon: '🤵' },
    { name: 'Terraform', icon: '🏗️' },
    { name: 'Ansible', icon: '📜' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'Prometheus', icon: '🔥' },
    { name: 'Grafana', icon: '📊' },
    { name: 'Git', icon: '📦' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'Python', icon: '🐍' },
];

const MarqueeRow = ({ items, direction = 'left', speed = 'fast' }) => {
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    return (
        <div className="flex overflow-hidden py-4 group">
            <div className={`flex gap-8 ${animationClass} whitespace-nowrap`}>
                {[...items, ...items, ...items].map((tech, idx) => (
                    <div
                        key={`${tech.name}-${idx}`}
                        className="flex items-center gap-3 bg-[#1e293b]/50 border border-white/5 px-6 py-3 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-colors cursor-default"
                    >
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-gray-300 font-medium">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function TechMarquee() {
    return (
        <section className="py-20 bg-[#0a0e17]">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Technologies</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We leverage a modern stack of leading technologies to build robust and scalable solutions for our clients.
                </p>
            </div>

            <div className="flex flex-col gap-6">
                {/* Row 1: Left to Right (Wait, user asked for Left to Right first?) 
            User Request: "scroll from left to right , the second line from right to left and the third line from left to right"
            Usually "scroll left" means content moves TO the left (Right -> Left).
            "scroll from left to right" means content moves TO the right (Left -> Right).
            
            Let's interpret "from left to right" as moving towards the right.
            So Row 1: Right direction.
            Row 2: Left direction.
            Row 3: Right direction.
        */}
                <MarqueeRow items={technologies.slice(0, 6)} direction="right" />
                <MarqueeRow items={technologies.slice(6, 12)} direction="left" />
                <MarqueeRow items={technologies} direction="right" />
            </div>
        </section>
    );
}
