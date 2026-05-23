"use client";

import { motion } from "motion/react";

const stats = [
  { value: "6+", label: "Years shipping production" },
  { value: "3", label: "Singapore government agencies" },
  { value: "4", label: "Live national platforms" },
  { value: "MTech", label: "Software Engineering, NUS" },
];

export function StatsStrip() {
  return (
    <section className="relative border-y border-foreground/10 bg-foreground/[0.02]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-foreground/5 sm:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-background px-6 py-10 sm:px-8 sm:py-14"
          >
            <div className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-widest text-foreground/50 sm:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
