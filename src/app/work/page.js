"use client";
import DynamicProjectDisplay from "@/components/DynamicProjectDisplay/DynamicProjectDisplay";
import Link from "next/link";
/* import { CarouselDemo } from "./CarouselDemo"; */
/* import Carousel from "../ui/Carousel"; */
import React, { useState, useEffect } from "react";
/* import Carousel from "../ui/CarouselCustom"; */
/* import DynamicProjectDisplay from "../DynamicProjectDisplay/DynamicProjectDisplay"; */


export default function Work() {
  const [project, setProject] = useState(projects[0]);

  useEffect(() => {}, [project]);

  return (
    <section
      id="work"
      className="flex flex-col min-h-screen justify-center  items-center px-4 py-8"
      style={{
        backgroundImage: 'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #020617, #172554)',
      }}
    
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1
              className="md:text-3xl md:inline   bg-clip-text text-transparent text-2xl content-center  justify-center place-content-center font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none"
              style={{
                backgroundImage:
                  'url("/assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
              }}
            >
              My Work
            </h1>

            <p className="max-w-[900px]  md:text-xl/relaxed  text-blue-300 lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent projects and case studies.
            </p>
          </div>
          <div className="App">
            <DynamicProjectDisplay  projects={projects} />
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
    description:
      "Implementation of a schedule management system with authentication and realtime data handling.",
    imageSrc: "/imgs/image2.png",
    imageAlt: "Project 1",
    link: "#",
  },
  {
    id: 2,
    title: "Organization Information Management System in Cuba",
    description:
      "Development of a comprehensive system for managing organizational information, including administration and reporting features.",
    imageSrc: "/imgs/image1.png",
    imageAlt: "Project 2",
    link: "#",
  },
  {
    id: 3,
    title:
      "Guidance Manual for the Education of Deaf Children with Cochlear Implants",
    description:
      "Development of a blog platform with modern features and responsive design.",
    imageSrc: "/imgs/image.png",
    imageAlt: "Project 2",
    link: "#",
  },
  // Agrega más proyectos aquí si es necesario
];
