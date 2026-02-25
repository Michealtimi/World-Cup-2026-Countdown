import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
	verification: {
		google: 'google5ece4f89518f4897.html',
		bing: '9EB8584660318EFB5DD5C9C06E7543BC',
	},
	title: 'World Cup 2026 Countdown | Official Tickets & Information',
	description:
		'Official World Cup 2026 countdown hub. 48 teams, three host nations, and infinite possibilities. Track ticket sales, opening match details, venue information, and more for the greatest football tournament on Earth.',
	keywords:
		'World Cup 2026, FIFA tickets 2026, World Cup tickets, MetLife Stadium final, Estadio Azteca, Mexico vs South Africa, 48-team tournament, football championship 2026',
	metadataBase: new URL('https://worldcup2026.example.com'),
	applicationName: 'World Cup 2026 Hub',
	creator: 'FIFA',
	publisher: 'FIFA',
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-snippet': -1,
			'max-image-preview': 'large',
			'max-video-preview': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://worldcup2026.example.com',
		siteName: 'World Cup 2026 Countdown Hub',
		title: 'World Cup 2026 Countdown | Official Tickets & Information',
		description:
			'Track the countdown to the 2026 FIFA World Cup and learn about tickets, venues, and tournament information.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'World Cup 2026 Countdown',
		description: 'Official countdown to the 2026 FIFA World Cup',
	},
	icons: {
		icon: [
			{
				url: '/icon-light-32x32.png',
				media: '(prefers-color-scheme: light)',
			},
			{
				url: '/icon-dark-32x32.png',
				media: '(prefers-color-scheme: dark)',
			},
			{
				url: '/icon.svg',
				type: 'image/svg+xml',
			},
		],
		apple: '/apple-icon.png',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 5,
		userScalable: true,
		colorScheme: 'light dark',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className='font-sans antialiased'>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
