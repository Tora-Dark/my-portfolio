import Link from "next/link";
import "animate.css";
import { ArrowDownRightFromSquareIcon } from "lucide-react";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-transparent lg:py-32">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col col-span-2 w-full justify-center space-y-4">
          <div className=" space-y-2">
            <h1 className="text-3xl  font-bold animate__animated animate__flash tracking-tighter sm:text-5xl ease-in-out duration-700 hover:neon-blue transition-all text-sky-500 hover:text-white xl:text-6xl/none">
              Hi, I'm Alejandro Romero
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              I'm a passionate web developer and designer, creating beautiful
              and functional websites.
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex gap-2 w-40 h-9 items-center mt-4 outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  px-4 py-2 text-sm font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <ArrowDownRightFromSquareIcon />
            Get in Touch
          </Link>
        </div>
        <div>
          <img
            src="./imgs/WhatsApp Image 2024-07-04 at 11.04.59 PM.jpeg"
            width="200"
            height="200"
            alt="Hero"
            className="transition duration-500 ease-in-out mx-auto aspect-square scale-75 transform-gpu animate__animated animate__flash  shadow-xl shadow-indigo-500 overflow-hidden rounded-full object-cover sm:w-full"
          />
          <div className="flex justify-center neon-blue gap-4 ">
            <Link
              href="#contact"
              className="inline-flex gap-2 w-40 h-9 items-center mt-4 outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
              className="inline-flex gap-2 w-40 h-9 items-center mt-4 outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Linkedin />
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-40 h-9 items-center mt-4 outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300 text-xl font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Mail />
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-40 h-9 items-center mt-4 text-xl outline outline-offset-2  transition-all duration-700 ease-in-out justify-center rounded-2xl bg-primary   hover:text-indigo-500  hover:shadow-neon-indigo  shadow-slate-950 text-sky-300  font-medium   hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <FaTelegramPlane className="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
