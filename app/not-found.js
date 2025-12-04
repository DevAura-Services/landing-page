import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#0a0e17] flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* 404 Large Text */}
                <div className="mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-none">
                        404
                    </h1>
                </div>

                {/* Error Message */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                    >
                        Go Home
                    </Link>
                    <Link
                        href="/services"
                        className="bg-[#1e293b] hover:bg-[#2d3b4e] border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
                    >
                        View Services
                    </Link>
                </div>

                {/* Decorative Element */}
                <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto opacity-20">
                    <div className="h-2 bg-blue-500 rounded animate-pulse"></div>
                    <div className="h-2 bg-purple-500 rounded animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 bg-blue-500 rounded animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </main>
    );
}
