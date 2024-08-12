import ContactSection from "@/components/CalltoAction/ContactSection";
import HeroSection from "@/components/HeroSection/HeroSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import React from "react";

export default function Contact() {
  return (
    <div
      className="flex flex-col justify-center items-center place-content-center"
      style={{
        backgroundImage:
          'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #020617, #172554)',
      }}
    >
      <HeroSection />

      <div
        className="max-w-[800px] bg-repeat justify-center outline outline-offset-4 hover:outline-offset-0 mx-7 items-center place-content-center overflow-hidden rounded-xl hover:shadow-neon-indigo transition-all shadow-lg shadow-slate-950 duration-500 text-blue-100 md:text-xl animate__animated animate__fadeIn space-y-4"
        style={{
          backgroundImage:
            'url("/assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
        }}
      >
        <p className=" p-4  ">
          Engineer in Informatic Sciences with experience in Full Stack web
          development. Strong skills in technologies such as Laravel, React JS,
          Next JS, Java, PHP, and JavaScript. Knowledgeable in creating and
          consuming REST APIs, continuous integration and deployment (CI/CD),
          and data structures. Focused on efficient and high-quality solutions.
          Completed a postgraduate course in SCRUM for e- learning.
        </p>
      </div>
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
