import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // The official address for this field
  const baseUrl = 'https://worldcup.logik.website';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    // Points to the map we are about to build
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
