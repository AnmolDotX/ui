'use client';

import { BadgeDollarSign } from 'lucide-react';
import { motion } from 'motion/react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Animated Background Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Teal glow - top left */}
        <motion.div
          className="absolute -top-32 -left-32 size-96 rounded-full bg-teal-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Lime glow - bottom right */}
        <motion.div
          className="absolute -right-32 -bottom-32 size-96 rounded-full bg-lime-500/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Green glow - center */}
        <motion.div
          className="absolute top-1/2 left-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[80px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Grid lines overlay */}
      <div className="border-border/50 pointer-events-none absolute inset-0 grid grid-cols-1 md:grid-cols-3">
        <div className="border-border/30 border-r" />
        <div className="border-border/30 hidden border-r md:block" />
        <div />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="border-primary/30 bg-primary/10 text-primary mb-8 rounded-full border px-4 py-1.5 text-sm font-medium"
        >
          ✨ Coming Soon
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-foreground mb-2 text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="bg-linear-to-r from-lime-500 via-emerald-500 to-lime-500 bg-clip-text font-sans font-extrabold tracking-wide text-transparent">
            Baba UI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground mb-12 max-w-2xl text-center font-mono text-base md:text-lg"
        >
          A multi-theme UI component library with stunning design variations
        </motion.p>

        {/* Theme Styles Grid */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="border-border/50 mb-12 grid w-full max-w-4xl grid-cols-1 gap-0 overflow-hidden rounded-2xl border md:grid-cols-3"
        >
          {/* Glassmorphic Card */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
            className="border-border/50 group relative border-b p-8 backdrop-blur-xl md:border-r md:border-b-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-transparent" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/20 p-3 shadow-lg ring-1 shadow-white/10 ring-white/30 backdrop-blur-md dark:bg-white/10 dark:ring-white/20">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">Glassmorphic</h3>
              <p className="text-muted-foreground text-sm">
                Apple-inspired frosted glass aesthetics with subtle transparency and blur
              </p>
            </div>
          </motion.div>

          {/* Neobrutalism Card */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
            className="border-border/50 group relative border-b p-8 md:border-r md:border-b-0"
          >
            <div className="absolute inset-0 bg-lime-400/5" />
            <div className="relative">
              <div className="border-foreground mb-4 inline-flex -rotate-2 items-center justify-center rounded-none border-4 bg-lime-400 p-3 shadow-[4px_4px_0_0_var(--foreground)]">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-foreground mb-2 text-xl font-bold tracking-wide uppercase">Neobrutalism</h3>
              <p className="text-muted-foreground text-sm">
                Bold, raw, and unapologetic design with hard shadows and sharp edges
              </p>
            </div>
          </motion.div>

          {/* Neo-SaaS Card */}
          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
            className="group relative p-8"
          >
            <div className="absolute inset-0 bg-linear-to-br from-teal-500/5 to-transparent" />
            <div className="relative">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-linear-to-br from-slate-900 to-slate-950 p-3 shadow-lg shadow-slate-900/25">
                <span className="text-2xl">
                  <BadgeDollarSign />
                </span>
              </div>
              <h3 className="from-foreground to-foreground/70 mb-2 bg-linear-to-r bg-clip-text text-xl font-semibold text-transparent">
                Neo-SaaS
              </h3>
              <p className="text-muted-foreground text-sm">
                Modern, clean interfaces inspired by Linear, Vercel, and Stripe
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.div variants={fadeInUp} transition={{ duration: 0.6 }} className="text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            One library. Three stunning themes. Infinite possibilities.
          </p>
          <motion.div
            className="border-primary/50 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(var(--primary), 0)',
                '0 0 0 8px rgba(var(--primary), 0.1)',
                '0 0 0 0 rgba(var(--primary), 0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="relative flex size-2">
              <span className="bg-primary absolute inline-flex size-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary relative inline-flex size-2 rounded-full" />
            </span>
            Under Development
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Horizontal grid lines */}
      <div className="border-border/30 pointer-events-none absolute top-1/3 right-0 left-0 border-t" />
      <div className="border-border/30 pointer-events-none absolute top-2/3 right-0 left-0 border-t" />
    </div>
  );
};

export default Home;
