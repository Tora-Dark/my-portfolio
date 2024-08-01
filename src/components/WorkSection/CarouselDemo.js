"use client";
import React, { useState,useEffect } from 'react';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
export function CarouselDemo({setProject}) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
    setProject(projects[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
    setProject(projects[prevIndex]);
  };

  return (
    <Carousel className="max-w-screen-md   md:max-w-xl  ">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem className="    rounded h-full " key={index}>
            <div className=" h-full  m-3 md:p-10">
            <Image
              src={project.imageSrc}
              width="550"
              height="300"
              alt={project.imageAlt}
              className={`transition duration-500 ease-in-out shadow-lg shadow-cyan-700   w-full     mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full`}
            />
          
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious onClick={handlePrevious} />
      <CarouselNext onClick={handleNext} />
    </Carousel>
  )
}
const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      imageSrc: "/imgs/image2.png",
      imageAlt: "Project 1",
      link: "#",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
      imageSrc: "/imgs/image.png",
      imageAlt: "Project 2",
      link: "#",
    },
    {
        id: 2,
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
        imageSrc: "/imgs/image3.png",
        imageAlt: "Project 3",
        link: "#",
      },
    // Agrega más proyectos aquí si es necesario
  ];