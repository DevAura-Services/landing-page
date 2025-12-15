'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { blogPosts } from '@/lib/data';

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
                        <Link href={`/blog/${post.slug}`} key={post.id} className="group bg-[#1e293b]/20 border border-white/5 rounded-2xl overflow-hidden hover:bg-[#1e293b]/40 transition-colors block">
                            {/* Image Placeholder */}
                            <div className="h-48 bg-blue-900/20 relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
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
                        </Link>
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
