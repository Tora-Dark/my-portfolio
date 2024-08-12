/* import Image from "next/image";
import { BackgroundBeamsDemo } from "./BackgroundBeamsDemo/page";

export default function Home() {
  return (
  );
}
 */

import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import WorkSection from "@/components/WorkSection/WorkSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import Footer from "@/components/Footer/Footer";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { NextUIProvider } from "@nextui-org/react";
import AboutMe from "@/components/AboutMe/AboutMe";
import Education from "@/components/Education/Education";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import ContactSection from "@/components/CalltoAction/ContactSection";

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex flex-col min-h-[100dvh]">
        <main
          className="flex-1 bg-gradient-to-b from-slate-950 to-blue-950"
          // In your main `Home` component and any other component that uses background images
          style={{
            backgroundImage:
              'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #020617, #172554)',
          }}
        >
          <TracingBeam className="px-3 md:px-0">
            <HeroSection />
            <SkillsSection />
            <WorkSection />
            <WorkExperience />
            <Education />
            {/*    <AboutMe /> */}
          </TracingBeam>
          <ContactSection />
        </main>
      </div>
    </NextUIProvider>
  );
}
