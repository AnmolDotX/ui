import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

/**
 * Robots.txt configuration
 * Next.js will automatically serve this at /robots.txt
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
