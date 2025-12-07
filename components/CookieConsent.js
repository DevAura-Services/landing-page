'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true,
        marketing: false
    });
    const { t } = useLanguage();

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptAll = () => {
        localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, marketing: true }));
        setIsVisible(false);
    };

    const savePreferences = () => {
        localStorage.setItem('cookie-consent', JSON.stringify(preferences));
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[480px] bg-[#0f172a] border border-white/10 p-6 rounded-2xl shadow-2xl z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-bold text-lg">{t('cookie.title')}</h3>
                <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
                    <X size={20} />
                </button>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {t('cookie.description')}
                <Link href="/legal/privacy" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                    {t('cookie.learnMore', 'Learn More')} / Terms
                </Link>
            </p>

            {showDetails && (
                <div className="mb-6 space-y-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white font-medium text-sm">Strictly Necessary</p>
                            <p className="text-gray-500 text-xs">Essential for the website to function.</p>
                        </div>
                        <input type="checkbox" checked disabled className="accent-blue-600 w-4 h-4" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white font-medium text-sm">Marketing & Analytics</p>
                            <p className="text-gray-500 text-xs">Used to improved your experience.</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={preferences.marketing}
                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                            className="accent-blue-600 w-4 h-4"
                        />
                    </div>
                </div>
            )}

            <div className="flex gap-3 flex-col sm:flex-row">
                <button
                    onClick={acceptAll}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-bold transition-colors"
                >
                    {t('cookie.acceptAll', 'Accept All')}
                </button>
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-lg text-sm font-medium transition-colors border border-white/10"
                >
                    {showDetails ? 'Save Preferences' : 'Manage Preferences'}
                </button>
            </div>

            {showDetails && (
                <button
                    onClick={savePreferences}
                    className="w-full mt-3 text-gray-400 text-xs hover:text-white underline"
                >
                    Save Selected Preferences
                </button>
            )}
        </div>
    );
}
