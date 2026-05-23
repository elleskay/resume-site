"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react";

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  lift = 40,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  lift?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const px = useMotionValue(50);
  const py = useMotionValue(50);

  const rotX = useSpring(rx, SPRING);
  const rotY = useSpring(ry, SPRING);

  const spotX = useTransform(px, (v) => `${v}%`);
  const spotY = useTransform(py, (v) => `${v}%`);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = x / rect.width - 0.5;
    const dy = y / rect.height - 0.5;
    ry.set(dx * maxTilt * 2);
    rx.set(-dy * maxTilt * 2);
    px.set((x / rect.width) * 100);
    py.set((y / rect.height) * 100);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    px.set(50);
    py.set(50);
  }

  return (
    <div style={{ perspective: 1000 }} className={className}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full w-full rounded-2xl border border-foreground/10 bg-foreground/[0.03] backdrop-blur transition-colors hover:border-foreground/20"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [spotX, spotY],
              ([x, y]) =>
                `radial-gradient(420px circle at ${x} ${y}, oklch(0.7 0.18 290 / 0.18), transparent 60%)`,
            ),
          }}
        />
        <div style={{ transform: `translateZ(${lift}px)` }} className="relative h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
