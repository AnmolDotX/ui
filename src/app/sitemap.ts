import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/metadata';

/**
 * Dynamic sitemap generation for SEO
 * Next.js will automatically serve this at /sitemap.xml
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    '',
    '/docs',
    '/templates',
    '/blocks',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // TODO: Add dynamic routes here when you have them
  // Example: fetch all blog posts, component pages, etc.
  // const dynamicRoutes = await fetchAllPosts();

  return [...staticRoutes];
}
