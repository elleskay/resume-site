"use client";

import { motion } from "motion/react";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { Aurora } from "@/components/aurora";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Aurora />
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-6 py-24 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3.5 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Open to Senior Full-Stack roles · Singapore
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[8.5rem]"
        >
          <span className="block text-foreground">Lum Soon Keong.</span>
          <span className="block text-gradient">Six years shipping</span>
          <span className="block text-gradient">
            Singapore&apos;s public stack.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl"
        >
          Full-stack engineer at NCS Group. I&apos;ve shipped production systems
          across <span className="text-foreground">IRAS</span>,{" "}
          <span className="text-foreground">MOM</span>, and{" "}
          <span className="text-foreground">DOS</span>: tax refunds, work passes,
          cross-agency APIs. .NET Core, Java, Angular, Kafka.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/chat"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90"
          >
            <Sparkles className="h-4 w-4 text-violet-500" />
            Ask my resume
          </Link>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-foreground/5 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-foreground/10"
          >
            See the work
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs text-foreground/50">
            <MapPin className="h-3.5 w-3.5" />
            Singapore · GMT+8
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/30"
      >
        scroll
      </motion.div>
    </section>
  );
}
