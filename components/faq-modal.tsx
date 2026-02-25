'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'When does ticket sales start for World Cup 2026?',
    answer:
      'The FIFA World Cup 2026 ticket sales process includes multiple phases. The Random Selection Draw phase has ended, and the next phase of Last-Minute Sales will begin in April 2026.',
  },
  {
    question: 'How can I purchase World Cup 2026 tickets?',
    answer:
      'Tickets will be available through the official FIFA Ticketing platform at FIFA.com. You can register for the drawing, participate in sales phases, or purchase remaining tickets during the Last-Minute Sales period starting April 2026.',
  },
  {
    question: 'What is the FIFA Resale Marketplace?',
    answer:
      'The FIFA Resale Marketplace allows fans who cannot attend their selected matches to resell their tickets to other supporters. This ensures more fans get the opportunity to experience the World Cup.',
  },
  {
    question: 'Where will the World Cup 2026 final be held?',
    answer:
      'The final match of the 2026 FIFA World Cup will be held at MetLife Stadium in East Rutherford, New Jersey, on July 19, 2026.',
  },
  {
    question: 'How many teams will participate in World Cup 2026?',
    answer:
      'The 2026 FIFA World Cup will feature 48 teams, an expansion from the traditional 32-team format. This is the first World Cup to feature 48 participating nations.',
  },
  {
    question: 'Which countries are hosting World Cup 2026?',
    answer:
      'The 2026 FIFA World Cup will be co-hosted by three nations: the United States, Canada, and Mexico. This is the first World Cup to be held across three countries.',
  },
];

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
          >
            <div className="bg-white dark:bg-slate-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 px-6 sm:px-8 py-6 flex items-center justify-between border-b border-slate-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
                <button
                  onClick={onClose}
                  className="text-slate-300 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto flex-1">
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-0"
                    >
                      <button
                        onClick={() => toggleExpand(index)}
                        className="w-full px-6 sm:px-8 py-4 sm:py-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-between gap-4"
                      >
                        <h3 className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">
                          {item.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-slate-500" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-8 py-4 sm:py-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
