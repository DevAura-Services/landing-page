'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'ar', name: 'العربية' }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, changeLanguage, t } = useLanguage();

    const currentLang = languages.find(lang => lang.code === language);

    return (
        <nav className="fixed w-full z-50 bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo-with-text.png" alt="Devaura Logo" className="h-10" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">{t('nav.home')}</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">{t('nav.about')}</Link>
                    <Link href="/services" className="text-gray-300 hover:text-white transition-colors">{t('nav.services')}</Link>
                    <Link href="/careers" className="text-gray-300 hover:text-white transition-colors">{t('nav.careers')}</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">{t('nav.contact')}</Link>

                    {/* Language Switcher */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="text-sm text-gray-400 hover:text-white flex items-center gap-1"
                        >
                            <span>{currentLang?.code.toUpperCase()}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>

                        {isLangOpen && (
                            <div className="absolute top-full mt-2 right-0 bg-[#1e293b] border border-white/10 rounded-lg shadow-lg overflow-hidden min-w-[150px]">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            changeLanguage(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full px-4 py-2 text-left hover:bg-white/5 transition-colors ${language === lang.code ? 'bg-white/10 text-white' : 'text-gray-300'
                                            }`}
                                    >
                                        <span className="text-sm">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                        {t('nav.schedule')}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#0a0e17] border-b border-white/10">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link href="/" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</Link>
                        <Link href="/services" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</Link>
                        <Link href="/careers" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t('nav.careers')}</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</Link>

                        {/* Mobile Language Switcher */}
                        <div className="flex gap-2 flex-wrap">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        changeLanguage(lang.code);
                                        setIsMenuOpen(false);
                                    }}
                                    className={`px-3 py-1 rounded text-sm ${language === lang.code
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-[#1e293b] text-gray-300'
                                        }`}
                                >
                                    {lang.code.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full text-center" onClick={() => setIsMenuOpen(false)}>
                            {t('nav.schedule')}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
