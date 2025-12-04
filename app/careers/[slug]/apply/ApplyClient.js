'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ApplyClient({ slug }) {
    const { t } = useLanguage();

    // Find job details
    const jobs = t('careers.jobs');
    const job = jobs.find(j => j.slug === slug);

    if (!job) {
        notFound();
    }

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        yearsExp: '',
        currentCompany: '',
        noticePeriod: '',
        whyFit: '',
        resume: null,
        coverLetter: null
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission - in real app, send to API/S3
        console.log('Application Submitted:', { job: job.title, ...formData });
        setIsSubmitted(true);
        window.scrollTo(0, 0);
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, [field]: file }));
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-[#1e293b]/30 border border-white/5 p-12 rounded-3xl max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-green-500">
                            ✓
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-4">
                            {t('application.successTitle')}
                        </h1>
                        <p className="text-gray-400 mb-8 text-lg">
                            {t('application.successMsg')}
                        </p>
                        <Link
                            href="/careers"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            {t('application.backToJobs')}
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-3xl mx-auto mb-12">
                    <Link href={`/careers/${slug}`} className="text-gray-400 hover:text-white mb-4 inline-block transition-colors">
                        ← Back to Job Details
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {t('application.title')} <span className="text-blue-500">{job.title}</span>
                    </h1>
                    <p className="text-gray-400">
                        {t('careers.location')}: {t('careers.remote')}
                    </p>
                </div>

                {/* Application Form */}
                <div className="max-w-3xl mx-auto bg-[#1e293b]/20 border border-white/5 rounded-3xl p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Info */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                                {t('application.personalInfo')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.fullName')} *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.fullName}
                                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.email')} *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.phone')} *</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.linkedin')} *</label>
                                    <input
                                        type="url"
                                        required
                                        placeholder="https://linkedin.com/in/..."
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.linkedin}
                                        onChange={e => setFormData({ ...formData, linkedin: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.portfolio')}</label>
                                    <input
                                        type="url"
                                        placeholder="https://github.com/..."
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.portfolio}
                                        onChange={e => setFormData({ ...formData, portfolio: e.target.value })}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Experience */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                                {t('application.experience')}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.yearsExp')} *</label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.yearsExp}
                                        onChange={e => setFormData({ ...formData, yearsExp: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.noticePeriod')} *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. 1 month, Immediate"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.noticePeriod}
                                        onChange={e => setFormData({ ...formData, noticePeriod: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.currentCompany')}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.currentCompany}
                                        onChange={e => setFormData({ ...formData, currentCompany: e.target.value })}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Documents */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                                Documents
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.resume')} (PDF) *</label>
                                    <input
                                        type="file"
                                        required
                                        accept=".pdf"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
                                        onChange={e => handleFileChange(e, 'resume')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('application.coverLetter')} (PDF)</label>
                                    <input
                                        type="file"
                                        accept=".pdf"
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#1e293b] file:text-white hover:file:bg-[#2d3b4e] transition-colors"
                                        onChange={e => handleFileChange(e, 'coverLetter')}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Additional Questions */}
                        <section className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{t('application.whyFit')} *</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    value={formData.whyFit}
                                    onChange={e => setFormData({ ...formData, whyFit: e.target.value })}
                                ></textarea>
                            </div>
                        </section>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/20 text-lg"
                        >
                            {t('application.submit')}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
