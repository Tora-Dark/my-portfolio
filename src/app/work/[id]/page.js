/* import { useRouter } from "next/router"; */
"use client";

/* import { useRouter } from "next/router"; */
import { notFound,useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaReact, FaLaravel } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { ArrowUpRightFromSquareIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Web Application for Teacher Schedule Management",
    description: "Implementation of a schedule management system with authentication and realtime data handling.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Laravel", icon: <FaLaravel /> },
    ],
    imageSrc: "/imgs/image2.png",
    imageAlt: "Project 1",
    link: "#",
  },
  // More projects...
];

const ProjectInfo = ({ params }) => {
  const router = useRouter();


  const projectIndex = parseInt(params.id, 10);

  if (isNaN(projectIndex) || projectIndex >= projects.length || projectIndex < 0) {
    return notFound();
  }

  const project = projects[projectIndex];

  return (
    <div
      className="flex flex-col min-h-screen justify-center  items-center px-4 py-8"
      style={{
        backgroundImage: 'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #020617, #172554)',
      }}
    >
      <div
        className="flex flex-col items-center w-full max-w-4xl  p-6  text-sky-500 rounded-lg transform transition-transform duration-300 hover:scale-105"
     /*    style={{
          backgroundImage: 'url("/assets/classy-fabric.png"), linear-gradient(to top, #020617,  #172554)',
        }} */
      >
        <div className="w-full h-auto overflow-hidden rounded-lg shadow-2xl  shadow-blue-600 mb-4">
          <Image
            width={650}
            height={400}
            src={project.imageSrc}
            alt={project.title}
            className="object-cover w-full rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-sky-500 text-center mb-4">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-sky-500 text-center mb-4">
          {project.description}
        </p>
        <div className="text-lg md:text-xl text-sky-500  text-center mb-6">
          <span className="font-semibold text-sky-400">Technologies:</span>
          <div className="flex flex-wrap justify-center mt-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="flex items-center bg-gray-900 text-white rounded-full px-3 py-1 mr-2 mb-2 text-sm"
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={project.link}
          className="flex items-center px-6 py-3 gap-2 text-lg font-medium text-white outline outline-offset-2 transition-all shadow-neon-blue duration-500 rounded-full hover:bg-blue-700 transform hover:scale-105 h-9 mt-4 ease-in-out justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRightFromSquareIcon />
          Visit Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectInfo;
