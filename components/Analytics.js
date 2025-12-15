'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { initializeTelemetry } from '@/lib/telemetry';

// You would typically move these to environment variables
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
const META_PIXEL_ID = '0000000000000000';

export default function Analytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Initialize OpenTelemetry
        initializeTelemetry();
    }, []);

    useEffect(() => {
        // Google Analytics Pageview
        if (pathname && window.gtag) {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: pathname,
            });
        }

        // Meta Pixel Pageview
        if (pathname && window.fbq) {
            window.fbq('track', 'PageView');
        }
    }, [pathname, searchParams]);

    return (
        <>
            {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
            >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                `}
            </Script>

            {/* Meta Pixel */}
            <Script
                id="meta-pixel"
                strategy="afterInteractive"
            >
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '${META_PIXEL_ID}');
                    fbq('track', 'PageView');
                `}
            </Script>
        </>
    );
}
