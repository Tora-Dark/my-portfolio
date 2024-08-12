"use client";
import React from "react";
import { CodeIcon } from "../icons/CodeIcon";
import { Database, Settings, BrainCircuit } from "lucide-react";
import {
  FaStar,
  FaRegStar,
  FaPhp,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import useScrollAnimation from "@/hooks/useScrollAnimation ";
import { Github } from "lucide-react";
import { FaLaravel } from "react-icons/fa6";
import {
  RiJavascriptFill,
  RiNextjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { GitCompareArrows } from "lucide-react";
import { SiGithubactions, SiRailway } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";
import { PiTreeStructure } from "react-icons/pi";
import { TbApi } from "react-icons/tb";
import { BiSolidGridAlt } from "react-icons/bi";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { CheckCircle } from "lucide-react";

const skills = [
  {
    category: "Front-end Development",
    icon: (
      <CodeIcon className="h-12 rounded-full bg-gradient-to-t p-1 text-sky-500 w-12" />
    ),
    technologies: [
      {
        name: "HTML",
        rating: 5,
        icon: <FaHtml5 className=" text-2xl " />,
      },
      {
        name: "CSS",
        rating: 4,
        icon: <FaCss3 className=" text-2xl " />,
      },
      {
        name: "React JS",
        rating: 4,
        icon: <FaReact className=" text-2xl" />,
      },
      {
        name: "Next JS",
        rating: 4,
        icon: <RiNextjsLine className=" text-2xl" />,
      },
      {
        name: "JavaScript",
        rating: 5,
        icon: <RiJavascriptFill className="  text-2xl" />,
      },
      {
        name: "Tailwind",
        rating: 5,
        icon: <RiTailwindCssFill className="  text-2xl" />,
      },
      {
        name: "Bootstrap",
        rating: 5,
        icon: <FaBootstrap className=" text-2xl " />,
      },
    ],
  },
  {
    category: "Back-end Development",
    icon: (
      <Database className="h-12 rounded-full bg-gradient-to-t p-1 text-sky-500 w-12" />
    ),
    technologies: [
      {
        name: "Laravel",
        rating: 5,
        icon: <FaLaravel className=" text-2xl " />,
      },
      {
        name: "PHP",
        rating: 4,
        icon: <FaPhp className=" text-2xl " />,
      },
      {
        name: "Java",
        rating: 4,
        icon: <FaJava className=" text-2xl" />,
      },
    ],
  },
  {
    category: "DevOps",
    icon: (
      <Settings className=" h-12 rounded-full bg-gradient-to-t p-1 text-sky-500 w-12" />
    ),
    technologies: [
      {
        name: "GitHub",
        rating: 5,
        icon: <Github className="  text-2xl" />,
      },
      {
        name: "CI/CD",
        rating: 4,
        icon: <GitCompareArrows className="  text-2xl" />,
      },
      {
        name: "Railway",
        rating: 4,
        icon: <SiRailway className=" text-2xl " />,
      },
      {
        name: "GitHub Pages",
        rating: 4,
        icon: <SiGithubactions className="text-2xl   " />,
      },
    ],
  },
  {
    category: "Others",
    icon: (
      <BrainCircuit className="h-12 rounded-full bg-gradient-to-t p-1 text-sky-500  w-12" />
    ),
    technologies: [
      {
        name: "Data Structures",
        rating: 4,
        icon: <PiTreeStructure className=" text-2xl" />,
      },
      {
        name: "Good Practices",
        rating: 5,
        icon: <CheckCircle className=" text-2xl" />,
      },
      {
        name: "Clean Code",
        rating: 5,
        icon: <TbDeviceDesktopStar className=" text-2xl " />,
      },
      {
        name: "Solid Principles",
        rating: 4,
        icon: <BiSolidGridAlt className=" text-2xl" />,
      },
      { name: "REST API", rating: 4, icon: <TbApi className=" text-2xl" /> },
    ],
  },
];

const renderStars = (rating) => {
  return (
    <div className="flex flex-row ">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="text-sky-500 " />
        ) : (
          <FaRegStar key={index} className="text-blue-500" />
        )
      )}
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 md:my-24 lg:py-32 bg-transparent"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="border-none max-w-[610px]" shadow="sm">
              <h2
                className="md:text-3xl md:inline   bg-clip-text text-transparent text-2xl content-center  justify-center place-content-center font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none"
                style={{
                  backgroundImage:
                    'url("/assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
                }}
              >
                My Skills
              </h2>

              <p className="max-w-[900px] text-blue-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I have expertise in a variety of web development and design
                technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 md:grid-cols-2 justify-center items-center">
          {skills.map((skill, index) => {
            return (
              <SkillCard key={index} skill={skill} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const [ref, animationClass] = useScrollAnimation("animate__pulse");

  return (
    <div className="flex justify-center items-center w-full">
      <Card
        ref={ref}
        className={`flex flex-col w-full max-w-md md:h-96 h-full p-6  rounded-xl outline outline-blue-600 shadow-slate-950 shadow-xl hover:shadow-neon-blue transition-all duration-700 animate__animated ${animationClass}`}
        shadow="sm"
        style={{
          backgroundImage:
            'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #020617,  #172554)',
        }}
      >
        <CardHeader className="flex gap-3">
          {skill.icon}
          <h3 className="text-xl text-sky-500 font-bold">
            {skill.category}
          </h3>
        </CardHeader>
        <Divider className="my-4 bg-white" orientation="horizontal" />
        <CardBody className="flex-1 flex flex-col ">
          <ul className="text-muted-foreground">
            {skill.technologies.map((tech, techIndex) => (
              <li
                key={techIndex}
                className="flex gap-2 justify-between pb-3 items-center place-content-center text-sky-500"
              >
                <div className="flex flex-row transition-all duration-100 ease-in-out hover:neon-blue hover:text-white">
                  <span className="font-semibold text-md">{tech.name}</span>
                  <span className="pl-2">{tech.icon}</span>
                </div>
                {renderStars(tech.rating)}
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
