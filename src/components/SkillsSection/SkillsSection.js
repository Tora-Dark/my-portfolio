"use client";
import React from "react";
import { CodeIcon } from "../icons/CodeIcon";
import { Database, Settings, BrainCircuit } from "lucide-react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import useScrollAnimation from "@/hooks/useScrollAnimation ";

const skills = [
  {
    category: "Front-end Development",
    icon: <CodeIcon className="h-12 rounded-full bg-gradient-to-t p-1 text-sky-700 w-12" />,
    technologies: [
      { name: "HTML", rating: 5 },
      { name: "CSS", rating: 4 },
      { name: "React JS", rating: 4 },
      { name: "Next JS", rating: 4 },
      { name: "JavaScript", rating: 5 },
      { name: "Tailwind", rating: 5 },
      { name: "Bootstrap", rating: 5 },
    ],
  },
  {
    category: "Back-end Development",
    icon: <Database className="h-12 rounded-full bg-gradient-to-t p-1 text-sky-700 w-12" />,
    technologies: [
      { name: "Laravel", rating: 5 },
      { name: "PHP", rating: 4 },
      { name: "Java", rating: 4 },
    ],
  },
  {
    category: "DevOps",
    icon: <Settings className="h-12 rounded-full bg-gradient-to-t shadow-slate-700 p-1 text-sky-700 w-12" />,
    technologies: [
      { name: "GitHub", rating: 5 },
      { name: "CI/CD", rating: 4 },
      { name: "Railway", rating: 4 },
      { name: "GitHub Pages", rating: 4 },
    ],
  },
  {
    category: "Others",
    icon: <BrainCircuit className="h-12 rounded-full bg-gradient-to-t p-1 text-sky-700 w-12" />,
    technologies: [
      { name: "Data Structures", rating: 4 },
      { name: "Good Programming Practices", rating: 5 },
      { name: "Clean Code", rating: 5 },
      { name: "SOLID Principles", rating: 4 },
      { name: "REST API", rating: 4 },
    ],
  },
];

const renderStars = (rating) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="text-sky-500" />
        ) : (
          <FaRegStar key={index} className="text-blue-500" />
        )
      )}
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="border-none max-w-[610px]" shadow="sm">
              <h2 className="text-3xl font-bold tracking-tighter text-sky-500 sm:text-5xl">
                My Skills
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have expertise in a variety of web development and design technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl  gap-6 py-12 lg:grid-cols-2 md:grid-cols-2 lg:gap-12  md:justify-normal justify-center items-center place-content-center">
          {skills.map((skill, index) => {
            const [ref, animationClass] = useScrollAnimation("animate__pulse");
            return (
              <Card
                key={index}
                ref={ref}
                className={` flex flex-col max-w-[400px]  h-72  space-y-2 p-6 bg-current rounded-xl outline outline-blue-600 shadow-slate-950 shadow-xl hover:shadow-neon-blue transition-all duration-700 animate__animated ${animationClass}`}
                shadow="sm"
              >
                <CardHeader className="flex gap-3">
                  {skill.icon}
                  <h3 className="text-xl text-sky-500 font-bold">{skill.category}</h3>
                </CardHeader>
                <Divider className="my-4 bg-white" orientation="horizontal" />
                <CardBody>
                  <ul className="text-muted-foreground list-disc list-inside">
                    {skill.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex justify-between items-center text-blue-500">
                        {tech.name}
                        {renderStars(tech.rating)}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
