'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-06-11T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6">
        {[0, 1, 2, 3].map((idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-16 h-20 sm:w-20 sm:h-28 md:w-24 md:h-32 bg-black rounded flex items-center justify-center shadow-xl">
              <div className="text-slate-600 text-2xl sm:text-3xl md:text-4xl font-mono font-bold">00</div>
            </div>
            <div className="text-pink-500 text-xs sm:text-sm font-bold mt-2 sm:mt-3 uppercase">-</div>
          </div>
        ))}
      </div>
    );
  }

  const FlipCard = ({ value, label }: { value: string; label: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <motion.div
          key={value}
          initial={{ rotateX: 90 }}
          animate={{ rotateX: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="w-16 h-20 sm:w-20 sm:h-28 md:w-24 md:h-32 bg-black rounded shadow-2xl border-4 border-slate-800 flex items-center justify-center overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          <span className="text-white text-2xl sm:text-3xl md:text-4xl font-mono font-bold tabular-nums">
            {value}
          </span>
        </motion.div>
        <div className="text-pink-500 text-xs sm:text-sm md:text-base font-bold mt-2 sm:mt-3 uppercase tracking-wider">
          {label}
        </div>
      </motion.div>
    );
  };

  const units = [
    { value: String(timeLeft.days).padStart(3, '0'), label: 'Days' },
    { value: String(timeLeft.hours).padStart(2, '0'), label: 'Hours' },
    { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Minutes' },
    { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Seconds' },
  ];

  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8">
      <div className="flex justify-center items-end gap-2 sm:gap-4 md:gap-6 flex-wrap">
        {units.map((unit, idx) => (
          <FlipCard key={idx} value={unit.value} label={unit.label} />
        ))}
      </div>
    </div>
  );
}
