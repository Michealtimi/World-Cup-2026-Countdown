'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { FAQModal } from './faq-modal';

export function Navbar() {
	const [isFAQOpen, setIsFAQOpen] = useState(false);

	return (
		<>
			<nav className='fixed top-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
					<div className='flex items-center justify-between'>
						{/* Logo */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className='flex items-center gap-2'
						>
							<div className='w-8 h-8 bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 rounded flex items-center justify-center'>
								<span className='text-white dark:text-slate-900 font-bold text-lg'>
									⚽
								</span>
							</div>
							<h1 className='text-xl sm:text-2xl font-bold text-slate-900 dark:text-white hidden sm:block'>
								World Cup 2026
							</h1>
						</motion.div>

						{/* FAQ Button */}
						<motion.button
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							onClick={() => setIsFAQOpen(true)}
							className='inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-600 text-white font-semibold rounded-lg hover:from-slate-800 hover:to-slate-700 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95'
							aria-label='Open FAQ'
						>
							<HelpCircle className='w-5 h-5' />
							<span className='hidden sm:inline'>FAQ</span>
						</motion.button>
					</div>
				</div>
			</nav>

			{/* Add padding to account for fixed navbar */}
			<div className='h-16 sm:h-20' />

			{/* FAQ Modal */}
			<FAQModal
				isOpen={isFAQOpen}
				onClose={() => setIsFAQOpen(false)}
			/>
		</>
	);
}
