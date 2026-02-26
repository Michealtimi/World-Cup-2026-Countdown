'use client';

import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function TicketAlertBanner() {
	return (
		<section className='w-full py-8 sm:py-10 bg-linear-to-r from-red-900 to-red-950 dark:from-red-950 dark:to-red-900'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Alert className='bg-transparent border-2 border-red-400/50 backdrop-blur-sm'>
						<AlertCircle className='h-5 w-5 sm:h-6 sm:w-6 text-red-300 shrink-0' />
						<AlertDescription className='ml-4 flex flex-col gap-1'>
							<p className='font-bold text-red-100 text-sm sm:text-base'>
								Random Selection Draw CLOSED
							</p>
							<p className='text-red-200 text-xs sm:text-sm'>
								Next Phase: April 2026 Last-Minute Sales
							</p>
						</AlertDescription>
					</Alert>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='mt-4 text-center'
					>
						<p className='text-red-100 text-sm sm:text-base font-semibold'>
							Registration for the Random Selection Draw has
							ended. Remaining tickets will be available for
							purchase starting April 1, 2026.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
