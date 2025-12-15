'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollText, Shield, FileText, AlertCircle } from 'lucide-react';

export default function Terms() {
    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl mb-6">
                        <ScrollText size={32} className="text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
                    <p className="text-gray-400">Last updated: December 15, 2024</p>
                </div>

                <div className="bg-[#1e293b]/20 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                    <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">

                        <div className="flex gap-4 items-start mb-8 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                            <p className="text-sm text-gray-300 m-0">
                                Please read these terms carefully before using our services. By accessing or using our website and services, you agree to be bound by these terms.
                            </p>
                        </div>

                        <h2>1. Agreement to Terms</h2>
                        <p>
                            By accessing our website at Devaura, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>

                        <h2>2. Intellectual Property Rights</h2>
                        <p>
                            Other than the content you own, under these Terms, Devaura and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website.
                        </p>

                        <h2>3. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Devaura's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul>
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on Devaura's website;</li>
                            <li>remove any copyright or other proprietary notations from the materials; or</li>
                            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                        </ul>

                        <h2>4. Services and Engagement</h2>
                        <p>
                            Our services, including DevOps transformation, Cloud Architecture, and MLOps solutions, are subject to specific service agreements detailing the scope, timeline, and deliverables. These Terms of Service govern the general use of our website and preliminary interactions.
                        </p>

                        <h2>5. Disclaimer</h2>
                        <p>
                            The materials on Devaura's website are provided on an 'as is' basis. Devaura makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h2>6. Limitation of Liability</h2>
                        <p>
                            In no event shall Devaura or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Devaura's website, even if Devaura or a Devaura authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>

                        <h2>7. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of Tunisia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h3>Contact Us</h3>
                            <p>
                                If you have any questions about these Terms, please contact us at:
                                <br />
                                <strong>Email:</strong> legal@devaura.com
                                <br />
                                <strong>Address:</strong> Tunisia
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
