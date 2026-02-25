export const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'FIFA World Cup 2026',
  description:
    'The 2026 FIFA World Cup is an international football tournament featuring 48 teams competing across multiple venues in the United States, Canada, and Mexico.',
  startDate: '2026-06-11',
  endDate: '2026-07-19',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  organizer: {
    '@type': 'Organization',
    name: 'FIFA',
    url: 'https://www.fifa.com',
    sameAs: 'https://www.wikidata.org/wiki/Q18204',
  },
  image: 'https://www.fifa.com/fifaplus/en/articles/fifa-world-cup-2026',
  offers: {
    '@type': 'Offer',
    url: 'https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup',
    price: '100',
    priceCurrency: 'USD',
    availability: 'https://schema.org/PreOrder',
    validFrom: '2024-01-01T00:00:00Z',
  },
  location: [
    {
      '@type': 'Place',
      name: 'MetLife Stadium',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'One MetLife Stadium Drive',
        addressLocality: 'East Rutherford',
        addressRegion: 'NJ',
        postalCode: '07073',
        addressCountry: 'US',
      },
      url: 'https://www.metlifestadium.com',
    },
    {
      '@type': 'Place',
      name: 'Estadio Azteca',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calzada de Tlalpan 3465',
        addressLocality: 'Mexico City',
        addressRegion: 'CDMX',
        postalCode: '14020',
        addressCountry: 'MX',
      },
      url: 'https://estadioazteca.com',
    },
  ],
  performer: {
    '@type': 'SportsTeam',
    name: 'National Football Teams',
    sameAs: 'https://www.fifa.com',
  },
};
