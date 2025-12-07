'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Terms() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">Last updated: December 2024</p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
                    <p className="text-gray-400">By accessing our website at Devaura, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
                    <p className="text-gray-400">Permission is granted to temporarily download one copy of the materials (information or software) on Devaura's website for personal, non-commercial transitory viewing only.</p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
                    <p className="text-gray-400">The materials on Devaura's website are provided on an 'as is' basis. Devaura makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                </div>
            </div>
        </main>
    );
}
