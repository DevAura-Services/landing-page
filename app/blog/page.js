'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: "The Future of DevOps: 2025 Trends",
        excerpt: "Explore the emerging technologies and methodologies shaping the future of DevOps, from AI-driven operations to platform engineering.",
        date: "Dec 12, 2024",
        author: "Mahdi Ben Slima",
        category: "Industry Trends",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1667372393119-c81c0cda0a29?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Mastering Kubernetes Costs with FinOps",
        excerpt: "Learn practical strategies to optimize your Kubernetes spending without compromising on performance or reliability.",
        date: "Nov 28, 2024",
        author: "Kmar Turki",
        category: "Cloud Cost",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1667372335957-c558c7365287?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Building Resilient ML Pipelines",
        excerpt: "A deep dive into MLOps best practices for creating robust, scalable, and reproducible machine learning workflows.",
        date: "Nov 15, 2024",
        author: "Team Devaura",
        category: "MLOps",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2940&auto=format&fit=crop"
    }
];

export default function Blog() {
    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Blog</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Insights, tutorials, and thought leadership on DevOps, Cloud Architecture, and MLOps.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#1e293b]/40 transition-colors">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-blue-900/20 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] to-transparent opacity-60" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-4 text-xs text-blue-400 font-medium mb-3">
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-32 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Subscribe to our newsletter to get the latest DevOps and MLOps insights delivered straight to your inbox.
                    </p>
                    <form className="max-w-md mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
