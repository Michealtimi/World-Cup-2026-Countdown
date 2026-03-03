import type { Metadata, Viewport } from 'next'; // Added Viewport
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import React from 'react';
import './globals.css';
import 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BING_VERIFICATION?: string;
    }
  }
}

declare module 'next' {
  interface Metadata {
    verification?: {
      google?: string;
      bing?: string;
    };
  }
}

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

// 1. Viewport is now a separate export
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    colorScheme: 'light dark',
};



export const metadata: Metadata = {
    verification: {
        google: 'google5ece4f89518f4897.html',
    } as any,
    title: 'World Cup 2026 Countdown | Official Tickets & Information',
    description: 'Official World Cup 2026 countdown hub. Track ticket sales, venues, and more.',
    keywords: 'World Cup 2026, FIFA tickets 2026, football championship 2026',
    
    // FIX: Update this to your real URL!
    metadataBase: new URL('https://worldcup.logik.website'),
    
    applicationName: 'World Cup 2026 Hub',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://worldcup.logik.website', // FIX: Update this too!
        siteName: 'World Cup 2026 Countdown Hub',
        title: 'World Cup 2026 Countdown',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                {/* 2. Added the Verification Meta Tag for Google AdSense */}
                <meta
                    name='google-adsense-account'
                    content='ca-pub-3191981833978007'
                />
            </head>
            <body className='font-sans antialiased'>
                {children}
                <Analytics />
                {/* 3. The Script is good, kept it here for performance */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3191981833978007"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}