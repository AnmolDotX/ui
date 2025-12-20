import { cn } from '@/lib/utils';

interface GridWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * GridWrapper - Tailwind-inspired layout with decorative grid lines
 */
export function GridWrapper({ children, className }: GridWrapperProps) {
  return (
    <div
      className={cn(
        'relative grid min-h-screen grid-cols-[1fr_1px_minmax(0,85rem)_1px_1fr]',
        '[--pattern-fg:var(--color-lime-950)]/5 dark:[--pattern-fg:var(--color-lime-50)]/10',
        'bg-white dark:bg-gray-950',
        className,
      )}
    >
      {/* Left decorative column with diagonal stripes */}
      <div className="relative col-start-1 row-span-full border-r border-r-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />

      {/* Left vertical line */}
      <div className="col-start-2 row-span-full bg-[--pattern-fg]" />

      {/* Main content area */}
      <div className="col-start-3 row-span-full">{children}</div>

      {/* Right vertical line */}
      <div className="col-start-4 row-span-full bg-[--pattern-fg]" />

      {/* Right decorative column with diagonal stripes */}
      <div className="relative col-start-5 row-span-full border-l border-l-[--pattern-fg] bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
    </div>
  );
}
