import Link from "next/link";
import "animate.css";
import { ArrowDownRightFromSquareIcon } from "lucide-react";
import Image from "next/image";
import Gif from "/public/assets/wired-lineal-742-code.gif";

export default function HeroSection() {
  return (
    <section className="w-full flex py-12 space-x-4 md:py-24 bg-transparent lg:py-32">
      <div className="container flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 px-4 md:px-6 gap-2">
          <div className="flex flex-col justify-center items-center place-content-center gap-4">
        <div className="flex flex-row items-center md:gap-2 ">


          {/* GIF pequeño al lado izquierdo del nombre */}
          <div className="w-10 h-full md:w-14 justify-center place-content-center rounded-full items-center md:h-14 flex-shrink-0 mr-4">
            <Image
              src={Gif.src}
              alt="IT Developer GIF"
              width={56}  // Tamaño del GIF
              height={56} // Tamaño del GIF
              className="rounded-full"
            />
          </div>

          <h1
            className="md:text-3xl text-xl font-bold animate__animated animate__flash  sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white xl:text-5xl h-full  py-4"
            style={{
              backgroundImage:
                'url("/assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
            }}
          >
            Hi, I&apos;m Alejandro Romero
          </h1>
        </div>

        <p className="max-w-[600px] text-blue-300 md:text-xl">
          Engineer in Informatic Sciences with experience in Full Stack web
          development.
        </p>

        <Link
          href="#contact"
          className="inline-flex gap-2 h-9 items-center mt-4 w-40 justify-center outline outline-offset-2 transition-all shadow-neon-blue duration-700 rounded-2xl hover:text-indigo-500 hover:scale-105 hover:shadow-neon-indigo text-sky-300 px-4 py-2 text-sm font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          <ArrowDownRightFromSquareIcon />
          Get in Touch
        </Link>
        </div>
        <div className="aspect-square"
            >
          <div className="flex  justify-center items-center w-72 h-full outline outline-offset-4 transition-all overflow-hidden duration-700  hover:text-indigo-500 rounded-full hover:shadow-neon-indigo text-sky-300 px-4 py-2"
        
        style={{
          backgroundImage:
            'url("/assets/classy-fabric.png"), linear-gradient(to bottom, #0284c7, #1e3a8a)',
        }}
            >

          <Image
            src="/imgs/image5.png"
            width={700}
            height={400}
            alt="Hero"
            className=" rounded-full  text-white outline outline-offset-2 scale-125  "
            />
            </div>
        </div>
      </div>
    </section>
  );
}
