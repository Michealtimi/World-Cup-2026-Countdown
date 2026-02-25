'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({
	current,
	next,
	shouldFlip,
}: {
	current: string;
	next: string;
	shouldFlip: boolean;
}) => {
	// Only animate when shouldFlip is true
	return (
		<div className='relative flip-container w-[120px] h-[180px] bg-black/80 rounded-2xl overflow-hidden font-bold font-sans shadow-xl'>
			{/* 1. TOP STATIC (next number's top half) */}
			<div className='absolute inset-0 flex flex-col pointer-events-none'>
				<div className='h-1/2 w-full bg-[#1a1a1a] rounded-t-md flex items-end justify-center overflow-hidden relative'>
					<span className='text-[90px] leading-none translate-y-1/2 text-rose-100 font-sans font-bold'>
						{next}
					</span>
					{/* Single thin divider line */}
					<div className='absolute bottom-0 left-0 w-full h-[1px] bg-black/60 z-10' />
				</div>
				{/* 2. BOTTOM STATIC (current number's bottom half) */}
				<div className='h-1/2 w-full bg-[#181818] rounded-b-md flex items-start justify-center overflow-hidden relative shadow-inner'>
					<span className='text-[90px] leading-none -translate-y-1/2 text-rose-100 font-sans font-bold'>
						{current}
					</span>
				</div>
			</div>

			{/* 3. THE FLIPPING LEAF (current number's top half) */}
			{shouldFlip && (
				<motion.div
					key={next}
					initial={{ rotateX: 0 }}
					animate={{ rotateX: -180 }}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
					style={{ transformOrigin: 'bottom', zIndex: 20 }}
					className='absolute top-0 w-full h-1/2 bg-[#121212] backface-hidden flex items-end justify-center overflow-hidden'
				>
					<span className='text-[90px] leading-none translate-y-1/2 text-rose-100 font-sans font-bold'>
						{current}
					</span>
				</motion.div>
			)}

			{/* 4. THE REVEALED LEAF (next number's bottom half) */}
			{shouldFlip && (
				<motion.div
					key={`bottom-${next}`}
					initial={{ rotateX: 90 }}
					animate={{ rotateX: 0 }}
					transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
					style={{ transformOrigin: 'top', zIndex: 10 }}
					className='absolute bottom-0 w-full h-1/2 bg-[#121212] backface-hidden flex items-start justify-center overflow-hidden'
				>
					<span className='text-[90px] leading-none -translate-y-1/2 text-rose-100 font-sans font-bold'>
						{next}
					</span>
				</motion.div>
			)}
		</div>
	);
};

// --- GROUP OF DIGITS FOR EACH UNIT ---
const UnitGroup = ({
	label,
	value,
	prevValue,
	flip,
}: {
	label: string;
	value: string;
	prevValue: string;
	flip: boolean[];
}) => (
	<div className='flex flex-col items-center'>
		<div className='flex gap-[16px]'>
			{value.split('').map((digit, i) => (
				<FlipCard
					key={i}
					current={prevValue[i] || digit}
					next={digit}
					shouldFlip={flip[i]}
				/>
			))}
		</div>
		<span className='mt-2 text-[#e6007a] font-bold text-[40px] tracking-widest font-sans drop-shadow-lg'>
			{label}
		</span>
	</div>
);

// --- COLON SEPARATOR ---
const Separator = () => (
	<div className='flex flex-col gap-4 pt-10'>
		<div className='w-2 h-2 bg-black rounded-full mx-2' />
		<div className='w-2 h-2 bg-black rounded-full mx-2' />
	</div>
);

// --- MAIN FLIP CLOCK COMPONENT ---
export function CountdownTimer() {
	const [timeLeft, setTimeLeft] = useState({
		days: '000',
		hours: '00',
		minutes: '00',
		seconds: '00',
	});
	const [prevTime, setPrevTime] = useState(timeLeft);
	const [flip, setFlip] = useState({
		days: [false, false, false],
		hours: [false, false],
		minutes: [false, false],
		seconds: [false, false],
	});

	useEffect(() => {
		const targetDate = new Date('2026-06-11T00:00:00').getTime();

		const update = () => {
			const now = new Date().getTime();
			const distance = targetDate - now;

			const days = Math.max(
				0,
				Math.floor(distance / (1000 * 60 * 60 * 24)),
			);
			const hours = Math.max(
				0,
				Math.floor(
					(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
				),
			);
			const minutes = Math.max(
				0,
				Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
			);
			const seconds = Math.max(
				0,
				Math.floor((distance % (1000 * 60)) / 1000),
			);

			const newTime = {
				days: days.toString().padStart(3, '0'),
				hours: hours.toString().padStart(2, '0'),
				minutes: minutes.toString().padStart(2, '0'),
				seconds: seconds.toString().padStart(2, '0'),
			};

			setFlip((prev) => ({
				days: newTime.days
					.split('')
					.map((d, i) => prevTime.days[i] !== d),
				hours: newTime.hours
					.split('')
					.map((d, i) => prevTime.hours[i] !== d),
				minutes: newTime.minutes
					.split('')
					.map((d, i) => prevTime.minutes[i] !== d),
				seconds: newTime.seconds
					.split('')
					.map((d, i) => prevTime.seconds[i] !== d),
			}));
			setPrevTime(timeLeft);
			setTimeLeft(newTime);
		};

		const interval = setInterval(update, 1000);
		return () => clearInterval(interval);
	}, [prevTime, timeLeft]);

	return (
		<div className='relative flex items-center justify-center w-full min-h-[320px]'>
			{/* Semi-transparent white background, full width */}
			<div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
				<div className='bg-black/80 rounded-2xl w-full h-full min-h-[320px]' />
			</div>
			{/* Timer content */}
			<div className='relative z-10 flex items-start gap-[48px] justify-center w-full flex-wrap py-8 px-4 sm:px-8'>
				<UnitGroup
					label='Days'
					value={timeLeft.days}
					prevValue={prevTime.days}
					flip={flip.days}
				/>
				<Separator />
				<UnitGroup
					label='Hours'
					value={timeLeft.hours}
					prevValue={prevTime.hours}
					flip={flip.hours}
				/>
				<Separator />
				<UnitGroup
					label='Minutes'
					value={timeLeft.minutes}
					prevValue={prevTime.minutes}
					flip={flip.minutes}
				/>
				<Separator />
				<UnitGroup
					label='Seconds'
					value={timeLeft.seconds}
					prevValue={prevTime.seconds}
					flip={flip.seconds}
				/>
			</div>
		</div>
	);
}
