export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'twitter' | 'linkedin' | 'github' | 'instagram';
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Components', href: '/docs' },
  { label: 'Templates', href: '/templates' },
  { label: 'Blocks', href: '/blocks' },
  { label: 'GitHub', href: 'https://github.com/AnmolDotX/ui', external: true },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Components', href: '/docs' },
      { label: 'Templates', href: '/templates' },
      { label: 'Blocks', href: '/blocks' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'Blog', href: 'https://blogs.babacreates.in/', external: true },
      { label: 'GitHub', href: 'https://github.com/AnmolDotX/ui', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
  {
    title: 'Developer',
    links: [
      { label: 'Portfolio', href: 'https://babacreates.in', external: true },
      { label: 'Other Projects', href: 'https://babacreates.in/works', external: true },
      { label: 'Hire Me', href: 'https://babacreates.in/contact', external: true },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Twitter', href: 'https://x.com/BabaCreatesUI', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anmoldotx/', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/AnmolDotX', icon: 'github' },
  { label: 'Instagram', href: 'https://www.instagram.com/babacreates/', icon: 'instagram' },
];

export const SITE_CONFIG = {
  name: 'Baba UI',
  logo: {
    text: 'UI',
    // Replace with actual image path when ready
    image: null as string | null,
  },
  description: 'Multiple theme UI library developed by https://babacreates.in',
  email: 'hello@babacreates.in',
} as const;
