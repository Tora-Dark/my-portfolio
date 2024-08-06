import Link from "next/link";
import "animate.css";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { Linkedin, Mail, Facebook } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full flex py-12 md:py-24 lg:py-32 bg-transparent">
      <div className="container flex flex-col items-center px-4 md:px-6 gap-6 lg:gap-12 text-center">
        <h2 className="text-3xl font-bold animate__animated animate__fadeIn tracking-tighter sm:text-4xl text-sky-500 xl:text-5xl">
          Contact Me
        </h2>
        <p className="max-w-[600px] text-blue-300 md:text-xl animate__animated animate__fadeIn">
          Feel free to reach out to me through any of the following platforms. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex justify-center gap-4 animate__animated animate__fadeIn">
          <Link
            href="https://www.facebook.com/yourprofile"
            className="inline-flex gap-2 w-12 h-12 md:w-16 md:h-16 items-center justify-center rounded-full bg-primary hover:text-indigo-500 hover:shadow-neon-indigo shadow-slate-950 text-sky-300 text-2xl font-medium hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-500 ease-in-out"
          >
            <Facebook />
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
      </div>
    </section>
  );
}
