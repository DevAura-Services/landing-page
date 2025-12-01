import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0a0e17]">
            <Hero />
            <TechMarquee />

            {/* Services / Hub Section based on design */}
            <section className="py-20 bg-[#05080f]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">A Hub of Unmatched Advantages</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            From a deep talent pool to a thriving tech ecosystem, Tunisia offers a unique combination of benefits for global tech companies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Top-Tier Talent', desc: 'Access a growing pool of highly skilled, multilingual engineers.', icon: '👥' },
                            { title: 'Cost-Effectiveness', desc: 'Benefit from competitive operational costs without compromising quality.', icon: '💰' },
                            { title: 'Strategic Location', desc: 'Ideal time zone alignment for seamless collaboration.', icon: '🌍' },
                            { title: 'Thriving Ecosystem', desc: 'A supportive environment with government incentives and innovation hubs.', icon: '🚀' },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl hover:bg-[#1e293b]/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center text-2xl mb-6 text-blue-500">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Leverage Tunisia's Tech Talent?
                            </h2>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                Let Devaura connect you with the best DevOps and MLOps engineers to scale your operations.
                            </p>
                            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
                                Start a Project with Tunisian Talent
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
