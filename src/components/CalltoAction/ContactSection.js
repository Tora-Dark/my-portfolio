"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import "animate.css";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { Linkedin, Mail, Facebook } from "lucide-react";
import AboutSection from "../AboutMe/AboutMe";
import { BiUser, BiUserCircle } from "react-icons/bi";
import { FaUser, FaUserTie } from "react-icons/fa6";
import { UserCircle } from "lucide-react";
import { SiSuperuser } from "react-icons/si";
import { IoCloudDownloadSharp } from "react-icons/io5";
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el formulario.
    console.log(form);
  };

  return (
    <section
      id="contact"
      className="w-full flex py-12 md:py-24 lg:py-32 bg-transparent"
    >
      <div className="container flex flex-col items-center px-4 md:px-6 gap-6 lg:gap-12 text-center">
        <h2
          className="md:text-3xl md:inline bg-clip-text text-transparent text-2xl content-center justify-center place-content-center font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none"
          style={{
            backgroundImage:
              'url("./assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
          }}
        >
          Contact
        </h2>
        <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-blue-300 md:text-xl animate__animated animate__fadeIn">
        
          <div
            className="max-w-[800px] bg-repeat justify-center items-center place-content-center overflow-hidden rounded-xl hover:shadow-neon-indigo transition-all shadow-lg shadow-slate-950 duration-500 text-blue-100 md:text-xl animate__animated animate__fadeIn space-y-4"
            style={{
              backgroundImage:
                'url("./assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
            }}
          >
            {aboutMe.map((text, index) => (
              <p key={index} className=" p-4  ">
                {text}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center text-blue-300">
            <div className="flex flex-col items-center mb-4">
              <FaEnvelope className="text-2xl mb-2" />
              <p>alejandroromeromartinez9@gmail.com</p>
            </div>
            <div className="flex flex-col items-center mb-4">
              <FaPhone className="text-2xl mb-2" />
              <p>(53) 54744902</p>
            </div>
            
            <div className="flex justify-center gap-4 animate__animated animate__fadeIn">
              <Link
                href="https://www.facebook.com/yourprofile"
                className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourprofile"
                className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
              >
                <Linkedin />
              </Link>
              <Link
                href="mailto:your.email@example.com"
                className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
              >
                <Mail />
              </Link>
              <Link
                href="https://t.me/yourusername"
                className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
              >
                <FaTelegramPlane />
              </Link>
            </div>
            <a className="max-w-[800px] bg-repeat m-5 h-full flex justify-center items-center outline place-content-center overflow-hidden rounded-xl hover:shadow-neon-indigo transition-all shadow-lg shadow-slate-950 duration-500 text-blue-100 md:text-xl animate__animated animate__fadeIn space-y-4" accordion 
             style={{
              backgroundImage:
                'url("./assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
            }}
             href="/Alejandro_Romero_CV.pdf"
            download>
              <FaUser className="text-9xl -translate-x-14 "/>
              <div
                href="/Alejandro_Romero_CV.pdf"
               className="m-5 flex flex-row gap-2 justify-center items-center place-content-center "
              
              >
                <IoCloudDownloadSharp/>
                Download CV
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
const aboutMe = [
  "I am Alejandro Romero, an Engineer in Computer Science with experience in Full Stack web development. I am passionate about coding and always eager to learn new technologies. With a strong background in both frontend and backend development, I am committed to creating efficient and innovative solutions.",
];
