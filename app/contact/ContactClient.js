'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';



export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        inquiryType: t('contact.inquiryTypes.general'),
        message: ''
    });

    const [status, setStatus] = useState({ loading: false, error: null, success: false });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            const formDataToSend = new FormData();
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const response = await fetch('/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Something went wrong');
            }

            setStatus({ loading: false, error: null, success: true });
            setFormData({
                name: '',
                company: '',
                email: '',
                inquiryType: t('contact.inquiryTypes.general'),
                message: ''
            });
            setStatus({ loading: false, error: null, success: true });
            setIsSubmitted(true);
            window.scrollTo(0, 0);
            setFormData({
                name: '',
                company: '',
                email: '',
                inquiryType: t('contact.inquiryTypes.general'),
                message: ''
            });
            // alert(result.message || 'Message sent successfully!');
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: false });
            alert('Error: ' + error.message);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="bg-[#1e293b]/30 border border-white/5 p-12 rounded-3xl max-w-2xl mx-auto">
                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 text-green-500">
                            ✓
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-4">
                            {t('contact.successTitle')}
                        </h1>
                        <p className="text-gray-400 mb-8 text-lg">
                            {t('contact.successMsg')}
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                        >
                            {t('contact.backToHome')}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0a0e17] pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column */}
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('contact.title')}</h1>
                        <p className="text-xl text-gray-400 mb-12">
                            {t('contact.description')}
                        </p>

                        <div className="space-y-8">
                            <div className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">{t('contact.scheduleTitle')}</h3>
                                <p className="text-gray-400 mb-6">
                                    {t('contact.scheduleDesc')}
                                </p>
                                <a
                                    href="https://calendly.com/kmarturki"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-[#1e293b] hover:bg-[#2d3b4e] border border-white/10 text-white py-3 rounded-lg font-medium transition-colors block text-center"
                                >
                                    {t('contact.scheduleBtn')}
                                </a>
                            </div>

                            <div className="bg-[#1e293b]/30 border border-white/5 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-white mb-4">{t('contact.otherWays')}</h3>
                                <p className="text-gray-400 mb-2">{t('contact.otherDesc')}</p>
                                <a href="mailto:contact@devaura.com" className="text-blue-500 hover:text-blue-400 block mb-4">contact@devaura.com</a>
                                <div className="flex gap-4">
                                    <a href="https://linkedin.com/company/devaura" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="https://instagram.com/devaura" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a href="https://facebook.com/devaura" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-[#1e293b]/20 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
                        <h2 className="text-2xl font-bold text-white mb-8">{t('contact.formTitle')}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('contact.name')}</label>
                                    <input
                                        type="text"
                                        placeholder={t('contact.namePlaceholder')}
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('contact.company')}</label>
                                    <input
                                        type="text"
                                        placeholder={t('contact.companyPlaceholder')}
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('contact.email')}</label>
                                    <input
                                        type="email"
                                        placeholder={t('contact.emailPlaceholder')}
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">{t('contact.inquiryType')}</label>
                                    <select
                                        className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none"
                                        value={formData.inquiryType}
                                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                                    >
                                        <option>{t('contact.inquiryTypes.general')}</option>
                                        <option>{t('contact.inquiryTypes.project')}</option>
                                        <option>{t('contact.inquiryTypes.partnership')}</option>
                                        <option>{t('contact.inquiryTypes.careers')}</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">{t('contact.message')}</label>
                                <textarea
                                    placeholder={t('contact.messagePlaceholder')}
                                    rows="4"
                                    className="w-full bg-[#0a0e17] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full font-bold py-4 rounded-lg transition-colors shadow-lg ${status.loading
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
                                    } text-white`}
                            >
                                {status.loading ? 'Sending...' : t('contact.sendBtn')}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
