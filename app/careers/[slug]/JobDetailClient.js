'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { notFound } from 'next/navigation';

export default function JobDetailClient({ slug }) {
    const { t } = useLanguage();

    // Find the job by slug
    const jobs = t('careers.jobs');
    const job = jobs.find(j => j.slug === slug);

    // If job not found, show 404
    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
                    <Link href="/" className="hover:text-white transition-colors">
                        {t('nav.home')}
                    </Link>
                    <span>/</span>
                    <Link href="/careers" className="hover:text-white transition-colors">
                        {t('careers.title')}
                    </Link>
                    <span>/</span>
                    <span className="text-white">{job.title}</span>
                </nav>

                {/* Job Header */}
                <div className="max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {job.title}
                    </h1>
                    <div className="flex items-center gap-4 text-gray-400">
                        <span>📍 {t('careers.location')}: {t('careers.remote')}</span>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About the Role */}
                        <section className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {t('careers.aboutRole')}
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                {job.aboutRole}
                            </p>
                        </section>

                        {/* Key Responsibilities */}
                        <section className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {t('careers.keyResponsibilities')}
                            </h2>
                            <ul className="space-y-3">
                                {job.responsibilities.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-blue-500 mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Required Qualifications */}
                        <section className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {t('careers.requiredQualifications')}
                            </h2>
                            <ul className="space-y-3">
                                {job.qualifications.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-blue-500 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Nice to Have */}
                        <section className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {t('careers.niceToHave')}
                            </h2>
                            <ul className="space-y-3">
                                {job.niceToHave.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-gray-500 mt-1">+</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* What We Offer */}
                        <section className="bg-[#1e293b]/20 border border-white/5 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                {t('careers.whatWeOffer')}
                            </h2>
                            <ul className="space-y-3">
                                {job.benefits.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <span className="text-green-500 mt-1">★</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-4">
                            {/* Apply Card */}
                            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 p-6 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    Ready to Apply?
                                </h3>
                                <p className="text-gray-300 text-sm mb-6">
                                    Join our team and work on exciting projects with cutting-edge technologies.
                                </p>
                                <Link
                                    href={`/careers/${slug}/apply`}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors block text-center"
                                >
                                    {t('careers.applyBtn')}
                                </Link>
                            </div>

                            {/* Quick Info */}
                            <div className="bg-[#1e293b]/20 border border-white/5 p-6 rounded-2xl">
                                <h3 className="text-lg font-bold text-white mb-4">
                                    Quick Info
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <div className="text-gray-400 mb-1">{t('careers.location')}</div>
                                        <div className="text-white">{t('careers.remote')}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-400 mb-1">Employment Type</div>
                                        <div className="text-white">Full-time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Positions */}
                <div className="max-w-6xl mx-auto mt-16">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Other Open Positions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {jobs
                            .filter(j => j.slug !== slug)
                            .slice(0, 3)
                            .map((otherJob, idx) => (
                                <Link
                                    key={idx}
                                    href={`/careers/${otherJob.slug}`}
                                    className="bg-[#1e293b]/20 border border-white/5 p-6 rounded-2xl hover:border-blue-500/50 transition-colors group"
                                >
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                        {otherJob.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {otherJob.description}
                                    </p>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
