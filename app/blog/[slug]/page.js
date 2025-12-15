import { blogPosts } from '@/lib/data';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <article className="container mx-auto max-w-4xl">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8">
                    <ArrowLeft size={16} />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-blue-400 font-medium mb-4">
                        <span className="bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <User size={18} className="text-blue-500" />
                            <span className="text-white font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={18} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </header>

                {/* Featured Image */}
                <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden mb-12 border border-white/10">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-[#1e293b]/50 prose-pre:border prose-pre:border-white/10">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Author Bio / Footer */}
                <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="bg-[#1e293b]/20 rounded-2xl p-8 border border-white/5 flex items-start gap-6">
                        <div className="bg-blue-600 rounded-full p-4 shrink-0">
                            <User size={32} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">About {post.author}</h3>
                            <p className="text-gray-400">
                                Expert in DevOps and Cloud Architecture at Devaura. Dedicated to helping organizations scale their infrastructure and adopt modern engineering practices.
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
