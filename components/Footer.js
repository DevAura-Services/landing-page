'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#05080f] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <img src="/logo-with-text.png" alt="Devaura Logo" className="h-10" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">{t('footer.company')}</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-blue-500 transition-colors">{t('footer.aboutUs')}</Link></li>
                            <li><Link href="/services" className="hover:text-blue-500 transition-colors">{t('footer.services')}</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-500 transition-colors">{t('footer.careers')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">{t('footer.resources')}</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/blog" className="hover:text-blue-500 transition-colors">{t('footer.blog')}</Link></li>
                            <li><Link href="/case-studies" className="hover:text-blue-500 transition-colors">{t('footer.caseStudies')}</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-500 transition-colors">{t('footer.contact')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">{t('footer.connect')}</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">GitHub</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>{t('footer.rights')}</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
