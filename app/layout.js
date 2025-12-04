import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import CookieConsent from '@/components/CookieConsent'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Devaura - DevOps Agency',
    description: 'Future-Proof Your Infrastructure with Devaura',
    icons: {
        icon: '/favicon.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LanguageProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <Chatbot />
                    <CookieConsent />
                </LanguageProvider>
            </body>
        </html>
    )
}
