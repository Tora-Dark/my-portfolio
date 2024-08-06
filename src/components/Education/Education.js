import { GraduationCap } from "lucide-react";
import { FaUserGraduate } from "react-icons/fa";
import { TbUserUp } from "react-icons/tb";
const education = [
  {
    degree: "Engineer in Informatic Sciences",
    institution: " University of Informatic Sciences",
    period: "2018-2022",
    icon: <FaUserGraduate className="text-blue-100 mb-2" size={36} />,
  },
  {
    degree: "Postgraduate in SCRUM for e-learning",
    institution: " University of Informatic Sciences",
    period: "2023",
    icon: <TbUserUp className="text-blue-100 mb-2" size={36} />,
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full flex py-12 md:py-24 lg:py-32 bg-transparent"
    >
      <div className="container flex flex-col items-center px-4 md:px-6 gap-6 lg:gap-12 text-center">
        <h2
          className="md:text-3xl md:inline   bg-clip-text text-transparent text-2xl content-center  justify-center place-content-center font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none"
          style={{
            backgroundImage:
              'url("./assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
          }} >
          Education
        </h2>
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  text-blue-300 md:text-xl animate__animated animate__fadeIn">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gradient-to-r text-cyan-100 from-sky-600 to-blue-800  hover:bg-slate-100 p-4 rounded-xl shadow-xl hover:shadow-neon-cyan  shadow-slate-950 transition-all duration-500 w-full h-full"
              style={{
                backgroundImage:
                  'url("./assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
              }}
            >
              {edu.icon}
              <h3 className="text-xl font-semibold ">{edu.degree}</h3>
              <p className="">
                {edu.institution}, {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
