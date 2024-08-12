import { BackpackIcon } from "lucide-react";
import { ServerCogIcon } from "lucide-react";
import { UniversityIcon } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { LucideVenetianMask } from "lucide-react";
import { Briefcase } from "lucide-react";
import { FaBackspace } from "react-icons/fa";

const workExperience = [
  {
    title: "Frontend Developer",
    projects: [
      "Developed and maintained the front-end of multiple web applications using React and Next.js.",
      "Ensured responsive design and cross-browser compatibility.",
      "Collaborated with backend developers and designers to improve usability.",
    ],
    icon: (
      <LucideVenetianMask className="text-sky-400 mb-2 mx-auto" size={36} />
    ),
  },
  {
    title: "Backend Developer",
    projects: [
      "Implemented server-side logic using Laravel.",
      "Designed and managed databases using MySQL.",
      "Integrated third-party APIs and ensured data security and integrity.",
    ],
    icon: <ServerCogIcon className="text-sky-400 mb-2 mx-auto" size={36} />,
  },
  {
    title: "Full Stack Developer",
    projects: [
      "Guidance Manual for the Education of Deaf Children with Cochlear Implants - Frontend with React and Next.js",
      "Web Application for Teacher Schedule Management - Full stack with React and Laravel",
      "Organization Information Management System in Cuba - Backend with Laravel",
    ],
    icon: <MonitorSmartphone className="text-sky-400 mb-2 mx-auto" size={36} />,
  },
  {
    title: "Programming Instructor in Java at the University of Informatic Sciences",
    projects: [
      "Data Structures",
      "Good Programming Practices",
      "Clean Code",
      "SOLID Principles",
    ],
    icon: <UniversityIcon className="text-sky-400 mb-2 mx-auto" size={36} />,
  },
];

export default function WorkExperienceSection() {
  return (
    <section
      id="work-experience"
      className="w-full flex py-12 md:py-24 lg:py-32 bg-transparent"
    >
      <div className="container flex flex-col items-center px-4 md:px-6 gap-6 lg:gap-12 text-center">
        <h2
                className="md:text-3xl md:inline   bg-clip-text text-transparent text-2xl content-center  justify-center place-content-center font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none"
          style={{
            backgroundImage:
              'url("/assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
          }}
        >
          Work Experience
        </h2>
        <div className="max-w-[800px]  text-blue-300 md:text-xl space-y-9 animate__animated animate__fadeIn">
          {workExperience.map((work, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-indigo-950 to-black outline outline-offset-4 hover:outline-offset-0 outline-indigo-500 p-4 rounded-xl shadow-lg hover:shadow-neon-indigo transition-all duration-500"
              style={{
                backgroundImage:
                  'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #1e1b4b,  #020617)',
              }}
            >
              {work.icon}
              <h3 className="text-xl font-semibold text-sky-400">
                {work.title}
              </h3>
              <ul className="list-disc list-inside  text-blue-300 space-y-2">
                {work.projects.map((project, i) => (
                  <li
                    key={i}
                    className="hover:text-white p-2 transition-all duration-500"
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
