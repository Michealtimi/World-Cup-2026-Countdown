import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worldcup.logik.website';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add your main World Cup sections here
    {
      url: `${baseUrl}/matches`,
      lastModified: new Date(),
      changeFrequency: 'always', // Scores change fast!
      priority: 0.9,
    },
    {
      url: `${baseUrl}/groups`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
}
