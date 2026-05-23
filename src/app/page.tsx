import { Hero } from "@/components/hero";
import { StatsStrip } from "@/components/stats-strip";
import { Marquee } from "@/components/marquee";
import { WorkTimeline } from "@/components/work-timeline";
import { Bento } from "@/components/bento";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Marquee />
      <WorkTimeline />
      <Bento />
      <Contact />
    </>
  );
}
