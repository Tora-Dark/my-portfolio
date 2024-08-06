import Link from "next/link";
import "animate.css";
import { ArrowDownRightFromSquareIcon } from "lucide-react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { GithubIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full flex py-12 space-x-4 md:py-24 bg-transparent lg:py-32">
      <div className="container flex md:flex-row flex-col px-4 md:px-6grid gap-6 lg:grid-cols-3 lg:gap-12">
        <h1
          className="md:text-3xl md:hidden   text-2xl content-center bg-clip-text text-transparent  font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all bg-gradient-to-r from-pink-500 to-violet-500 hover:text-white xl:text-6xl/none"
          style={{
            backgroundImage:
              'url("./assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
          }}
        >
          Hi, I'm Alejandro Romero
        </h1>
        <div className="flex flex-col md:order-1 order-2  col-span-2 w-full align-middle  md:items-start items-center place-content-center space-y-4">
          <div className=" space-y-2">
            <h1
              className="md:text-3xl md:inline hidden   bg-clip-text text-transparent text-2xl content-center justify-center place-content-center font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none"
              style={{
                backgroundImage:
                  'url("./assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
              }}
            >
              Hi, I'm Alejandro Romero
            </h1>
            <p className="max-w-[600px]  text-blue-300  md:text-xl">
              Engineer in Computer Science with experience in Full Stack web
              development.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex gap-2 w-40 h-9 items-center mt-4 outline outline-offset-2 transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  px-4 py-2 text-sm font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <ArrowDownRightFromSquareIcon />
            Get in Touch
          </Link>
        </div>
        <div className="flex flex-col md:order-2  order-1 gap-4 items-center place-content-center">
          <img
            src="./imgs/image5.png"
            width="200"
            height="200"
            alt="Hero"
            className=" mx-auto rounded-full aspect-square  outline outline-offset-2 neon-blue hover:neon-indigo hover:shadow-indigo-500 hover:shadow-neon-slate transition-all duration-1000  object-cover sm:w-full"
            style={{
              backgroundImage:
                'url("./assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
            }}
          />
          <h3 className="md:inline hidden text-lg mt-4 font-bold animate__animated animate__flash tracking-tighter sm:text-lg ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-lg">
            Contact me
          </h3>
          <div className="md:flex hidden justify-center neon-blue gap-4 ">
            <Link
              href="#contact"
              className="inline-flex gap-2 md:w-10 md:h-8 w-8  h-8 items-center mt-4 outline outline-offset-2  transition-all duration-500 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Facebook />
            </Link>
            {/*  <Link
              href="#contact"
              className="inline-flex gap-2 w-40 h-9 items-center mt-4 outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <FaXTwitter />
            </Link> */}
            <Link
              size="icon"
              href="#contact"
              className="inline-flex gap-2  md:w-10 md:h-8 w-8  h-8 items-center mt-4 outline outline-offset-2  transition-all duration-500 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Linkedin />
            </Link>

            <Link
              href="#contact"
              className="inline-flex md:w-10 md:h-8 w-8  h-8 items-center mt-4 outline outline-offset-2  transition-all duration-500 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300 text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Mail />
            </Link>

            <Link
              href="#contact"
              className="inline-flex md:w-10 md:h-8 w-8  h-8 items-center mt-4 outline outline-offset-2  transition-all duration-500 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300 text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <GithubIcon />
            </Link>
            <Link
              href="#contact"
              className="inline-flex md:w-10 md:h-8 w-8  h-8 items-center mt-4 text-xl outline outline-offset-2  transition-all duration-500 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <FaTelegramPlane className="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
