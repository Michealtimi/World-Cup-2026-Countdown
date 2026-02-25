'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function LiveMatchHub() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
            Opening Match Day
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            The tournament kicks off with an iconic matchup
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex justify-center mb-6">
                <Badge className="bg-amber-500 text-black hover:bg-amber-600 px-4 py-2 text-sm font-bold">
                  OPENING MATCH
                </Badge>
              </div>

              <div className="text-center mb-8 sm:mb-10">
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-4">
                  June 11, 2026 • 8:00 PM UTC
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-6">
                  Estadio Azteca • Mexico City, Mexico
                </p>

                <div className="flex items-center justify-center gap-6 sm:gap-10">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black text-green-600 dark:text-green-400 mb-2">
                      MEX
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-semibold">
                      Mexico
                    </p>
                  </motion.div>

                  <div className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-black text-slate-400 mb-2">
                      vs
                    </span>
                  </div>

                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-5xl sm:text-6xl md:text-7xl font-black text-amber-600 dark:text-amber-400 mb-2">
                      RSA
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-semibold">
                      South Africa
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-4 sm:p-6 text-center">
                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base font-semibold">
                  The newest champion will face the continent's latest powerhouse in what promises to be an unforgettable opening ceremony and first match of World Cup 2026.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
