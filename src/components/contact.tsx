"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-foreground/10 px-6 py-24 sm:px-10 sm:py-32">
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -z-10 h-[480px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.5 0.22 290 / 0.55), transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-foreground/40">
          Next chapter
        </div>
        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Let&apos;s build the{" "}
          <span className="text-gradient">next one</span> together.
        </h2>
        <p className="mt-6 text-base text-foreground/60 sm:text-lg">
          I&apos;m open to Senior Full-Stack and Backend roles in Singapore.
          Comfortable across Java, .NET Core, and modern TypeScript stacks.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:LSKpes10@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            <Mail className="h-4 w-4" />
            LSKpes10@gmail.com
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://linkedin.com/in/lum-soon-keong"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-foreground/10"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            LinkedIn
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </motion.div>

      <div className="mx-auto mt-24 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/40">
        <span>© {new Date().getFullYear()} Lum Soon Keong</span>
        <span>Built with Next.js · Tailwind · Motion · shadcn/ui</span>
      </div>
    </section>
  );
}
