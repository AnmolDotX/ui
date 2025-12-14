'use client';

import { useState } from 'react';
import { Link } from 'next-view-transitions';
import { Menu } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/shadcn/sheet';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NAV_ITEMS, SITE_CONFIG } from '@/constants/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-muted flex size-9 items-center justify-center rounded-lg">
            {/* Placeholder logo - replace with actual image */}
            <span className="text-foreground text-sm font-bold">{SITE_CONFIG.logo.text}</span>
          </div>
          <span className="text-foreground text-lg font-semibold">{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : '_self'}
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="border-border ml-3 flex items-center border-l pl-3">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="size-9">
                <Menu className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-[280px] border-l sm:w-[350px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3">
                  <div className="bg-muted flex size-9 items-center justify-center rounded-lg">
                    <span className="text-foreground text-sm font-bold">{SITE_CONFIG.logo.text}</span>
                  </div>
                  <span className="text-foreground">{SITE_CONFIG.name}</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.external ? '_blank' : '_self'}
                    onClick={() => setIsOpen(false)}
                    className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-3 text-base font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
