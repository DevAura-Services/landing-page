export default function About() {
    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Devaura</h1>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Devaura is a premier DevOps and MLOps agency dedicated to helping businesses modernize their infrastructure and accelerate their development pipelines.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                                <p className="text-gray-400">
                                    To bridge the gap between complex infrastructure challenges and seamless operational excellence. We believe in automation, scalability, and security as the pillars of modern software delivery.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                                <p className="text-gray-400">
                                    To be the global partner of choice for companies looking to leverage the best engineering talent from Tunisia and beyond, fostering a culture of innovation and continuous improvement.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#1e293b]/30 border border-white/5 rounded-2xl p-8 mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h2>
                            <ul className="space-y-4">
                                {[
                                    'Expertise in Cloud Native Technologies',
                                    'Proven Track Record in DevOps Transformation',
                                    'Dedicated MLOps Solutions',
                                    '24/7 Support and Monitoring',
                                    'Cost-Effective Scaling Strategies'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                                        <span className="text-blue-500">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
