'use client';

import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function Privacy() {
    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl mb-6">
                        <Lock size={32} className="text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: December 15, 2024</p>
                </div>

                <div className="bg-[#1e293b]/20 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                    <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-400 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white">

                        <div className="flex gap-4 items-start mb-8 p-4 bg-blue-500/5 rounded-xl border border-blue-500/10">
                            <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                            <p className="text-sm text-gray-300 m-0">
                                Your privacy is important to us. It is Devaura's policy to respect your privacy regarding any information we may collect from you across our website.
                            </p>
                        </div>

                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, request a consultation, or contact us for support. This may include:
                        </p>
                        <ul>
                            <li>Personal identification information (Name, email address, phone number, etc.)</li>
                            <li>Company details (Company name, role, industry)</li>
                            <li>Project requirements and technical specifications</li>
                            <li>Communications data (contents of messages you send to us)</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>
                            We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Devaura and our users. Specific uses include:
                        </p>
                        <ul>
                            <li>Processing and managing your service requests</li>
                            <li>Sending technical notices, updates, and security alerts</li>
                            <li>Responding to your comments, questions, and customer service requests</li>
                            <li>Analyzing usage trends to improve our website and services</li>
                            <li>Sending marketing communications (which you can opt out of at any time)</li>
                        </ul>

                        <h2>3. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
                        </p>

                        <h2>4. Data Retention</h2>
                        <p>
                            We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your personal data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                        </p>

                        <h2>5. Data Security</h2>
                        <p>
                            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. We use industry-standard encryption protocols and secure storage solutions.
                        </p>

                        <h2>6. Third-Party Disclosures</h2>
                        <p>
                            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                        </p>

                        <h2>7. Your Data Rights</h2>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal data, including:
                        </p>
                        <ul>
                            <li>The right to access data we hold about you</li>
                            <li>The right to request correction of inaccurate data</li>
                            <li>The right to request deletion of your data ("Right to be Forgotten")</li>
                            <li>The right to restrict processing of your data</li>
                        </ul>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h3>Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                                <br />
                                <strong>Email:</strong> privacy@devaura.com
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
