'use client';

export default function Privacy() {
    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">Last updated: December 2024</p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
                    <p className="text-gray-400">We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.</p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-400">We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Devaura and our users.</p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Data Security</h2>
                    <p className="text-gray-400">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                </div>
            </div>
        </main>
    );
}
