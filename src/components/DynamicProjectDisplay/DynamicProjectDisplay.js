"use client";
import React, { useState, useEffect } from "react";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { Rewind, FastForward, MonitorPlay } from "lucide-react";

const DynamicProjectDisplay = ({ projects, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [project, setProject] = useState(projects[initialIndex]);
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  const [animationTextClass, setAnimationTextClass] =
    useState("animate__fadeIn");

  useEffect(() => {
    setProject(projects[currentIndex]);
  }, [currentIndex, projects]);

  const handleNext = () => {
    setAnimationClass("animate__rollOut");
    setAnimationTextClass("animate__fadeOut");
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % projects.length;
      setCurrentIndex(nextIndex);
      setAnimationClass("animate__jackInTheBox");
      setAnimationTextClass("animate__fadeIn");
    }, 500);
  };

  const handlePrevious = () => {
    setAnimationClass("animate__rotateOut");
    setAnimationTextClass("animate__fadeOut");
    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setCurrentIndex(prevIndex);
      setAnimationClass("animate__jackInTheBox");
      setAnimationTextClass("animate__fadeIn");
    }, 500);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-xl">
        <div
          className={`overflow-hidden rounded-lg shadow-2xl shadow-blue-600 animate__animated ${animationClass}`}
        >
          <Image
            width={550}
            height={300}
            src={project.imageSrc}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full outline bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
          >
            <Rewind />
          </button>
          <button
            onClick={handleNext}
            className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center outline  rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
          >
            <FastForward />
          </button>
        </div>
      </div>
      <div
        className={`mt-4 text-center animate__animated ${animationTextClass}`}
      >
        <h2 className="text-2xl mt-4 text-sky-400/100 font-bold">
          {project.title}
        </h2>
        <p className="mt-5 text-blue-300">{project.description}</p>
        <Link
          href={`/work/${currentIndex}`} // Use template literals correctly here
          className="inline-flex gap-2 h-9 items-center mt-4 outline outline-offset-2 transition-all shadow-neon-blue duration-700 rounded-2xl hover:text-indigo-500 hover:scale-105 hover:shadow-neon-indigo text-sky-300 px-4 py-2 text-sm font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <MonitorPlay />
          View Project
        </Link>
      </div>
    </div>
  );
};

export default DynamicProjectDisplay;
