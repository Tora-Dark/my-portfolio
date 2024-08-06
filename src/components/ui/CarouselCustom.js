"use client";
import React, { useState } from "react";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowBigLeft,
  ChevronsLeft,
  ChevronsRight,
  FastForward,
  PanelLeftClose,
  PanelRightClose,
  Rewind,
} from "lucide-react";
import { ArrowLeftIcon } from "lucide-react";

import { ArrowRightIcon } from "lucide-react";
import { Button } from "@nextui-org/react";
import { ImagePlay } from "lucide-react";
import { MonitorPlay } from "lucide-react";

const Carousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [project, setProject] = useState(projects[0]);
  const [animationClass, setAnimationClass] = useState("animate__fadeIn");
  const [animationTextClass, setAnimationTextClass] =
    useState("animate__fadeIn");

  const handleNext = () => {
    setAnimationClass("animate__rollOut");
    setAnimationTextClass("animate__fadeOut");
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % projects.length;
      setCurrentIndex(nextIndex);
      setProject(projects[nextIndex]);
      setAnimationClass("animate__jackInTheBox");
      setAnimationTextClass("animate__fadeIn");
    }, 500); // Duración de la animación en ms
  };

  const handlePrevious = () => {
    setAnimationClass("animate__rotateOut");
    setAnimationTextClass("animate__fadeOut");

    setTimeout(() => {
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      setCurrentIndex(prevIndex);
      setProject(projects[prevIndex]);
      setAnimationClass("animate__jackInTheBox");
      setAnimationTextClass("animate__fadeIn");
    }, 500); // Duración de la animación en ms
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full  max-w-xl">
        <div
          className={`overflow-hidden rounded-lg shadow-2xl   shadow-blue-600 animate__animated ${animationClass}`}
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
            className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
          >
            <Rewind />
            {/*    Previous */}
          </button>
          <button
            onClick={handleNext}
            className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
          >
            {/*  Next */}
            <FastForward />
          </button>
        </div>
      </div>
      <div
        className={`mt-4 text-center  animate__animated ${animationTextClass}`}
      >
        <h2 className="text-2xl mt-4 text-sky-400/100 font-bold">
          {project.title}
        </h2>
        <p className="mt-5 text-blue-300">{project.description}</p>
        <Link
          variant="ghost"
          href={project.link}
          className="inline-flex gap-2 h-9 items-center mt-4 outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  px-4 py-2 text-sm font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <MonitorPlay />
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
