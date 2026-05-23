"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Layers,
  Shield,
  Workflow,
  GraduationCap,
} from "lucide-react";
import { TiltCard } from "@/components/tilt-card";

const cells = [
  {
    icon: Code2,
    title: "Full-stack",
    body: ".NET Core · Spring Boot · Angular · TypeScript",
    span: "sm:col-span-2",
  },
  {
    icon: Workflow,
    title: "Event-driven",
    body: "Apache Kafka pipelines from ingest to recovery",
    span: "sm:col-span-1",
  },
  {
    icon: Shield,
    title: "Secure SDLC",
    body: "Fortify · SonarQube · Dependency Check inside CI/CD",
    span: "sm:col-span-1",
  },
  {
    icon: Database,
    title: "Data layer",
    body: "Oracle SQL · MSSQL · Entity Framework Core · Hibernate",
    span: "sm:col-span-2",
  },
  {
    icon: Layers,
    title: "API-first",
    body: "Cross-agency REST platforms on WebLogic with JNDI security",
    span: "sm:col-span-2",
  },
  {
    icon: GraduationCap,
    title: "MTech",
    body: "Software Engineering, National University of Singapore, 2026",
    span: "sm:col-span-1",
  },
];

export function Bento() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-foreground/40">
            Stack
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Two ecosystems.{" "}
            <span className="text-gradient-accent">One operator.</span>
          </h2>
          <p className="mt-4 text-foreground/60">
            Most engineers pick a side: Java or .NET. I ship in both, plus the
            frontend that sits on top.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {cells.map((cell, i) => {
            const Icon = cell.icon;
            return (
              <motion.div
                key={cell.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cell.span}
              >
                <TiltCard>
                  <div className="p-6">
                    <Icon
                      className="h-5 w-5 text-foreground/50 transition group-hover:text-foreground"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-6 text-lg font-semibold text-foreground sm:text-xl">
                      {cell.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">{cell.body}</p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
