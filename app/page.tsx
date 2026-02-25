import { CountdownTimer } from '@/components/countdown-timer';
import { TicketPhaseCard } from '@/components/ticket-phase-card';
import { Navbar } from '@/components/navbar';
import { JsonLdSchemas } from '@/components/json-ld-schemas';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
	title: 'World Cup 2026 Countdown | Tickets & Information',
	description:
		'Official World Cup 2026 countdown hub. 48 teams, three nations, infinite possibilities. Track ticket sales, opening match details, and tournament schedule for the greatest football spectacle.',
	keywords:
		'World Cup 2026 tickets, FIFA tickets, World Cup countdown, MetLife Stadium final, Mexico South Africa opening match, 48-team tournament',
	openGraph: {
		title: 'World Cup 2026 Countdown | Tickets & Information',
		description:
			'Official World Cup 2026 countdown hub with ticket information and tournament details.',
		type: 'website',
		url: 'https://worldcup2026.example.com',
		siteName: 'World Cup 2026 Hub',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'World Cup 2026 Countdown',
		description: 'Track the countdown to the greatest tournament on Earth',
	},
};

export default function Home() {
	return (
		<>
			<JsonLdSchemas />
			<Navbar />
			<main className='w-full'>
				{/* Unified Hero + Countdown Section */}
				<section
					className='relative w-full min-h-[700px] md:min-h-[800px] flex flex-col items-center justify-center overflow-hidden pb-0'
					style={{
						backgroundImage: 'url(/worldcup-2026-hero.jpg)',
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundAttachment: 'fixed',
					}}
				>
					{/* Dark Overlay */}
					<div className='absolute inset-0 bg-black/55 dark:bg-black/65' />

					{/* Unified Content */}
					<div className='relative z-10 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12'>
						<h1 className='text-5xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tight drop-shadow-lg'>
							World Cup 2026
						</h1>
						<p className='text-xl sm:text-2xl md:text-3xl font-bold mb-4 drop-shadow-md'>
							48 Teams • 3 Nations • Infinite Possibilities
						</p>
						<p className='text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md mb-6'>
							June 11 – July 19, 2026
						</p>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 mt-2'>
							Countdown to Kickoff
						</h2>
						<p className='text-gray-300 text-sm sm:text-base mb-6'>
							Opening Match: Mexico vs South Africa at Estadio
							Azteca
						</p>
						<CountdownTimer />
					</div>
				</section>

				{/* Ticket Phase Card Section */}
				<section className='w-full bg-white dark:bg-slate-950 py-12 sm:py-16 md:py-20'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<TicketPhaseCard />
					</div>
				</section>

				{/* SEO Content Section for AdSense */}
				<section className='w-full bg-white dark:bg-slate-950 py-12 sm:py-16 md:py-20'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6'>
							World Cup 2026: The Ultimate Guide to the
							Tournament, Tickets, and Global Impact
						</h2>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							The FIFA World Cup 2026 is set to be the most
							expansive and inclusive tournament in football
							history, featuring 48 teams across three host
							nations: the United States, Canada, and Mexico. This
							historic event marks the first time the World Cup
							will be co-hosted by three countries, promising a
							celebration of global unity, sporting excellence,
							and cultural diversity. With the tournament
							scheduled from June 11 to July 19, 2026, fans
							worldwide are preparing for a month-long spectacle
							that will redefine the landscape of international
							football.
						</p>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							The expanded format introduces new dynamics, with 48
							teams competing in 80 matches across 12 iconic
							stadiums. The opening match at Estadio Azteca in
							Mexico City will see Mexico face South Africa,
							setting the stage for a tournament filled with
							unforgettable moments. The final, hosted at MetLife
							Stadium in New Jersey, will crown the world’s best
							team in front of over 82,000 spectators. Fans can
							expect thrilling group stages, intense knockout
							rounds, and a showcase of football’s rising stars
							and legendary veterans.
						</p>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							Ticketing for World Cup 2026 is a major focus, with
							FIFA implementing a Random Selection Draw and a
							regulated Resale Marketplace to ensure fair access.
							Registration periods allow fans to enter lotteries
							for popular matches, while the Resale Marketplace
							opens in April 2026, providing opportunities to
							purchase remaining tickets at capped prices. This
							system aims to prevent scalping and make the
							tournament accessible to fans from all backgrounds.
						</p>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							The World Cup’s impact extends beyond the pitch.
							Host cities across North America are preparing for a
							surge in tourism, economic activity, and cultural
							exchange. The tournament is expected to generate
							billions in revenue, create thousands of jobs, and
							foster lasting legacies in infrastructure and
							community development. From the vibrant streets of
							Mexico City to the bustling avenues of New York, the
							World Cup will unite fans and nations in a shared
							celebration of sport and humanity.
						</p>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							For those seeking information, this hub provides
							comprehensive details on tournament schedules,
							ticket phases, stadiums, and frequently asked
							questions. Whether you’re a seasoned football
							enthusiast or a newcomer to the sport, the World Cup
							2026 offers something for everyone. Stay updated
							with live match hubs, ticket alerts, and expert
							insights as the countdown to kickoff continues.
						</p>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							The legacy of World Cup 2026 will be measured not
							only in goals and trophies but in the connections
							forged between people and cultures. As the world’s
							eyes turn to North America, the tournament stands as
							a beacon of hope, excitement, and possibility. Join
							millions of fans in celebrating the beautiful game,
							and experience the magic of football’s greatest
							stage.
						</p>
						<p className='text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8'>
							Plan your journey, secure your tickets, and immerse
							yourself in the World Cup 2026 experience. From the
							opening ceremony to the final whistle, this
							tournament promises to deliver memories that will
							last a lifetime. Welcome to the future of
							football—welcome to World Cup 2026.
						</p>
					</div>
				</section>

				{/* FAQ Section */}
				<section className='w-full bg-slate-50 dark:bg-slate-900 py-12 sm:py-16 md:py-20'>
					<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='text-center mb-12 sm:mb-16'>
							<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
								Frequently Asked Questions
							</h2>
							<p className='text-slate-600 dark:text-slate-400 text-base sm:text-lg'>
								Click the FAQ button in the navbar for quick
								access to common questions
							</p>
						</div>

						<Accordion
							type='single'
							collapsible
							className='w-full'
						>
							<AccordionItem value='item-1'>
								<AccordionTrigger>
									How can I buy tickets for World Cup 2026?
								</AccordionTrigger>
								<AccordionContent>
									You can register for the Random Selection
									Draw through FIFA.com during designated
									registration periods. Tickets are allocated
									through a lottery system for popular
									matches. Remaining tickets are made
									available through the FIFA Resale
									Marketplace starting in April 2026.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-2'>
								<AccordionTrigger>
									Where is the 2026 World Cup Final being
									held?
								</AccordionTrigger>
								<AccordionContent>
									The 2026 FIFA World Cup Final will be held
									at MetLife Stadium in East Rutherford, New
									Jersey, on July 19, 2026. With a capacity of
									over 82,000 spectators, MetLife Stadium is
									one of the premier venues in North America.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-3'>
								<AccordionTrigger>
									What makes the 2026 World Cup format
									different?
								</AccordionTrigger>
								<AccordionContent>
									The 2026 World Cup will feature 48 teams
									(expanded from the traditional 32), making
									it the largest World Cup tournament in
									history. Teams will be divided into 16
									groups of 3, with the top two teams
									advancing to the knockout stage.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-4'>
								<AccordionTrigger>
									Which stadiums will host World Cup 2026
									matches?
								</AccordionTrigger>
								<AccordionContent>
									Matches will be hosted across stadiums in
									the United States, Canada, and Mexico. Key
									venues include MetLife Stadium (New Jersey),
									AT&T Stadium (Texas), and Estadio Azteca
									(Mexico City). A total of 12 stadiums across
									three countries will host the 80 matches.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-5'>
								<AccordionTrigger>
									How does the FIFA Resale Marketplace work?
								</AccordionTrigger>
								<AccordionContent>
									The FIFA Resale Marketplace allows ticket
									holders to resell their tickets to other
									fans at regulated prices. Starting in April
									2026, remaining tickets from the allocation
									pool and resales will be available for
									purchase on the official marketplace. Resale
									prices are capped to prevent scalping.
								</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-6'>
								<AccordionTrigger>
									When is the opening match and who plays?
								</AccordionTrigger>
								<AccordionContent>
									The opening match of World Cup 2026 is
									scheduled for June 11, 2026, at Estadio
									Azteca in Mexico City. Mexico will face
									South Africa in this historic first match.
									The opening ceremony will precede the match
									and showcase the combined culture of the
									three host nations.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</section>

				{/* AdSense Placeholders */}
				<section className='w-full bg-white dark:bg-slate-950 py-8 sm:py-12 md:py-16'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='bg-slate-100 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg p-8 sm:p-12 text-center'>
							<p className='text-slate-600 dark:text-slate-400 font-semibold'>
								AdSense Placeholder - Sidebar Ad
							</p>
						</div>
					</div>
				</section>

				{/* Footer */}
				<footer className='w-full bg-slate-900 dark:bg-slate-950 text-slate-300 py-8 sm:py-12 md:py-16 border-t border-slate-800'>
					<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
							<div>
								<h3 className='font-bold text-white mb-4'>
									Tournament
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Overview
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Schedule
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Teams
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-bold text-white mb-4'>
									Tickets
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Buy Tickets
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Resale Marketplace
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Hospitality
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-bold text-white mb-4'>
									Venues
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Stadiums
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Host Cities
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Transportation
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3 className='font-bold text-white mb-4'>
									Info
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											About
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Contact
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-white transition'
										>
											Privacy
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='border-t border-slate-800 pt-8 text-center text-sm'>
							<p>
								&copy; 2026 FIFA World Cup. Official tournament
								information and ticketing.
							</p>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
