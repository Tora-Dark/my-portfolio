"use client";
import Link from "next/link";
import { CarouselDemo } from "./CarouselDemo";
/* import Carousel from "../ui/Carousel"; */
import React, { useState, useEffect } from "react";
import Carousel from "../ui/CarouselCustom";

export default function WorkSection() {
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {}, [project]);

  return (
    <section
      id="work"
      className="w-full py-12 md:py-24 bg-transparent lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-sky-400/100 sm:text-5xl">
              My Work
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent projects and case studies.
            </p>
          </div>
          <div className="App">
            <Carousel projects={projects} />
          </div>
          {/* <CarouselDemo setProject={setProject}/> */}
        </div>

        {/*  <Card className=" h-full shadow-md shadow-blue-500 " >
                <CardContent className="flex aspect-auto  items-center justify-center p-6">
                 

                </CardContent>
              </Card> */}
      </div>
    </section>
  );
}
const projects = [
  {
    id: 1,
    title: "Web Application for Teacher Schedule Management",
    description: "Implementation of a schedule management system with authentication and realtime data handling.",
    imageSrc: "/imgs/image2.png",
    imageAlt: "Project 1",
    link: "#",
  },
  {
    id: 2,
    title: "Organization Information Management System in Cuba",
    description: "Development of a comprehensive system for managing organizational information, including administration and reporting features.",
    imageSrc: "/imgs/image1.png",
    imageAlt: "Project 2",
    link: "#",
  },
  {
    id: 3,
    title: "Guidance Manual for the Education of Deaf Children with Cochlear Implants",
    description:
      "Development of a blog platform with modern features and responsive design.",
    imageSrc: "/imgs/image.png",
    imageAlt: "Project 2",
    link: "#",
  },
  // Agrega más proyectos aquí si es necesario
];
