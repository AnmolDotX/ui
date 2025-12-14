'use client';

import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { Github, Linkedin, Twitter, Instagram, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import { FOOTER_COLUMNS, SOCIAL_LINKS, SITE_CONFIG, type SocialLink } from '@/constants/navigation';

const SocialIcon = ({ icon }: { icon: SocialLink['icon'] }) => {
  const icons = {
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
    instagram: Instagram,
  };
  const Icon = icons[icon];
  return <Icon className="size-5" />;
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement waitlist submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer className="border-border bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Waitlist Section */}
        <div className="bg-primary/5 border-primary/20 mb-12 rounded-2xl border p-6 lg:p-8">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h3 className="text-foreground mb-2 text-xl font-semibold">Join the Waitlist</h3>
              <p className="text-muted-foreground text-sm">
                Get early access to new components, templates, and updates. No spam, unsubscribe anytime.
              </p>
            </div>
            <form onSubmit={handleWaitlistSubmit} className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background flex-1"
              />
              <Button type="submit" disabled={isSubmitting} className="shrink-0 cursor-not-allowed">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Send className="size-4 animate-pulse" />
                    Joining...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Subscribe
                    <ArrowRight className="size-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="bg-primary flex size-9 items-center justify-center rounded-lg">
                <span className="text-primary-foreground text-sm font-bold">{SITE_CONFIG.logo.text}</span>
              </div>
              <span className="text-foreground text-lg font-semibold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-muted-foreground mb-6 text-sm">{SITE_CONFIG.description}</p>

            {/* Social Links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:bg-accent flex size-9 items-center justify-center rounded-md transition-colors"
                  aria-label={social.label}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-foreground mb-4 text-sm font-semibold">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : '_self'}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-border mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ by{' '}
            <a
              href="https://babacreates.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Anmol Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
