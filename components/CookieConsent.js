'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-[#1e293b] border border-white/10 p-6 rounded-xl shadow-2xl z-50 animate-in slide-in-from-bottom-10 fade-in duration-500">
            <h3 className="text-white font-bold mb-2">We use cookies</h3>
            <p className="text-gray-400 text-sm mb-4">
                We use cookies to enhance your browsing experience and analyze our traffic.
            </p>
            <div className="flex gap-3">
                <button
                    onClick={acceptCookies}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    Accept
                </button>
                <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 bg-transparent border border-white/20 hover:bg-white/5 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    Decline
                </button>
            </div>
        </div>
    );
}
