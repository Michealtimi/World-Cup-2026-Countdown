'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

export function TicketPhaseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden border-2 border-slate-200 dark:border-slate-700">
        {/* Header - Closed Status */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 px-6 sm:px-8 py-6 sm:py-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Random Selection Draw
            </h3>
          </div>
          <p className="text-red-300 text-lg sm:text-xl font-semibold ml-9 sm:ml-12">
            CLOSED
          </p>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-6 sm:py-8">
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-6">
            Registration for the Random Selection Draw has ended. Remaining tickets will be available for purchase starting:
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r p-4 sm:p-5 mb-6"
          >
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-amber-900 dark:text-amber-100 text-base sm:text-lg">
                  Next Phase: April 2026
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm sm:text-base mt-1">
                  Last-Minute Sales
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r p-4 sm:p-5"
          >
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-green-900 dark:text-green-100 text-base sm:text-lg">
                  Already Have Tickets?
                </p>
                <p className="text-green-800 dark:text-green-200 text-sm sm:text-base mt-1">
                  Check your email for updates on your selected matches
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
