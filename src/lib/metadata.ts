import type { Metadata } from 'next';

/**
 * Site-wide configuration
 */
export const siteConfig = {
  name: 'Baba UI',
  url: 'https://ui.babacreates.in',
  description:
    'A multi-theme UI component library with Glassmorphic, Neobrutalism, and Neo-SaaS design variations. Built with React, Next.js, and Tailwind CSS.',
  author: {
    name: 'Anmol Kumar',
    url: 'https://babacreates.in',
  },
  social: {
    twitter: '@BabaCreatesUI',
  },
  images: {
    og: '/landingPage.png',
    ogWidth: 1200,
    ogHeight: 630,
  },
  keywords: [
    'UI library',
    'React components',
    'Tailwind CSS',
    'Glassmorphic',
    'Neobrutalism',
    'Neo-SaaS',
    'Next.js',
    'Design system',
    'Component library',
    'Multi-theme',
  ],
} as const;

/**
 * Generate metadata for a page
 * @param options - Page-specific metadata options
 * @returns Merged Metadata object
 */
export function createMetadata(options?: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const title = options?.title
    ? `${options.title} | ${siteConfig.name}`
    : `${siteConfig.name} - Multi Theme UI Library`;
  const description = options?.description ?? siteConfig.description;
  const image = options?.image ?? siteConfig.images.og;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.name,

    // Open Graph
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          width: siteConfig.images.ogWidth,
          height: siteConfig.images.ogHeight,
          alt: `${siteConfig.name} - Multi Theme UI Component Library`,
          type: 'image/png',
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      site: siteConfig.social.twitter,
      creator: siteConfig.social.twitter,
      title,
      description,
      images: {
        url: image,
        alt: `${siteConfig.name} - Multi Theme UI Component Library`,
      },
    },

    // Robots
    robots: options?.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },

    // Icons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

/**
 * Root metadata - use this in the root layout
 */
export const rootMetadata: Metadata = {
  ...createMetadata(),
  title: {
    default: `${siteConfig.name} - Multi Theme UI Library`,
    template: `%s | ${siteConfig.name}`,
  },
};
