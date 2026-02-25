export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I buy tickets for World Cup 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can register for the Random Selection Draw through FIFA.com during the designated registration periods. Tickets are allocated through a lottery system for popular matches. Remaining tickets are made available through the FIFA Resale Marketplace starting in April 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the 2026 World Cup Final?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 2026 FIFA World Cup Final will be held at MetLife Stadium in East Rutherford, New Jersey, on July 19, 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is special about the 2026 World Cup format?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 2026 World Cup will feature 48 teams (expanded from 32) and will be co-hosted by three nations: the United States, Canada, and Mexico. This is the first World Cup with 48 participating teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which stadiums will host matches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Multiple stadiums across the United States, Canada, and Mexico will host matches. The final will be at MetLife Stadium in New Jersey, and the opening match will be held at Estadio Azteca in Mexico City.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the FIFA Resale Marketplace work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FIFA Resale Marketplace allows ticket holders to resell their tickets to other fans. Starting in April 2026, remaining tickets from the allocation pool and resales will be available for purchase on the official marketplace.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the opening match of World Cup 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The opening match of the 2026 FIFA World Cup will be held on June 11, 2026, at Estadio Azteca in Mexico City, featuring Mexico vs. South Africa.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the ticket price ranges?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ticket prices vary by match and category. Group stage matches typically range from $100-$500 USD, while knockout matches and the final command premium prices starting at $1,000+ USD. Exact pricing will be announced by FIFA as the tournament approaches.',
      },
    },
  ],
};
