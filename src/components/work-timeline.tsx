"use client";

import { motion } from "motion/react";
import { experience } from "@/lib/resume-data";
import { TiltCard } from "@/components/tilt-card";

export function WorkTimeline() {
  return (
    <section id="work" className="relative px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-foreground/40">
            Work
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Built for{" "}
            <span className="text-gradient-accent">millions of citizens</span>
            <span className="text-foreground">.</span> Under audit. Under load.
          </h2>
        </motion.div>

        <div className="relative">
          {/* timeline rail */}
          <div className="pointer-events-none absolute left-2.5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />

          <div className="space-y-12 md:space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative md:pl-16"
              >
                {/* dot */}
                <div className="absolute left-0 top-2 hidden h-5 w-5 items-center justify-center md:flex">
                  <div className="absolute h-5 w-5 rounded-full bg-foreground/5" />
                  <div className="h-2 w-2 rounded-full bg-foreground" />
                </div>

                <TiltCard maxTilt={4} lift={20}>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                        {job.role}
                      </h3>
                      <span className="font-mono text-xs text-foreground/40 sm:text-sm">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/50">{job.company}</p>
                    <p className="mt-4 text-base text-foreground/70">{job.context}</p>

                    <ul className="mt-6 space-y-3">
                      {job.bullets.map((b, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm leading-relaxed text-foreground/75"
                        >
                          <span className="mt-2 inline-block h-px w-4 shrink-0 bg-foreground/30" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-2 py-1 font-mono text-[10px] text-foreground/60"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
