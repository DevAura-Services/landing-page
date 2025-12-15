import './globals.css'
import { basePath } from '@/lib/basePath';
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'
import CookieConsent from '@/components/CookieConsent'
import Analytics from '@/components/Analytics'
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const MouseGlow = dynamic(() => import('@/components/MouseGlow'), { ssr: false });
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    metadataBase: new URL('https://devaura-services.github.io/landing-page/'),
    title: {
        default: 'Devaura - DevOps & MLOps Agency',
        template: '%s | Devaura'
    },
    description: 'Future-Proof Your Infrastructure with Devaura. Expert DevOps, MLOps, and Cloud Architecture services to scale your business.',
    keywords: ['DevOps', 'MLOps', 'Cloud Architecture', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'SRE'],
    authors: [{ name: 'Devaura' }],
    creator: 'Devaura',
    publisher: 'Devaura',
    icons: {
        icon: `${basePath}/favicon.png`,
        apple: `${basePath}/favicon.png`,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://devaura-services.github.io/landing-page/',
        title: 'Devaura - DevOps & MLOps Agency',
        description: 'Future-Proof Your Infrastructure with Devaura. Expert DevOps, MLOps, and Cloud Architecture services.',
        siteName: 'Devaura',
        images: [
            {
                url: `${basePath}/og-image.jpg`,
                width: 1200,
                height: 630,
                alt: 'Devaura - DevOps Agency',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Devaura - DevOps & MLOps Agency',
        description: 'Future-Proof Your Infrastructure with Devaura. Expert DevOps, MLOps, and Cloud Architecture services.',
        images: [`${basePath}/og-image.jpg`],
        creator: '@devaura',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MouseGlow />
                <LanguageProvider>
                    <Suspense fallback={null}>
                        <Analytics />
                    </Suspense>
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
