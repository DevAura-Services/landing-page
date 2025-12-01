'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Devaura Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-white">Devaura</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>

                    {/* Language Switcher Placeholder */}
                    <button className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                        <span>EN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
                        Schedule Consultation
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
                        <Link href="/" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                        <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full text-center" onClick={() => setIsMenuOpen(false)}>
                            Schedule Consultation
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
