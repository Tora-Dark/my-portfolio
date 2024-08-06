import Link from "next/link";
import { MountainIcon } from "@/components/icons/MountainIcon";
import { BiCodeCurly, BiSolidBusiness } from "react-icons/bi";
import { FaCodeFork } from "react-icons/fa6";
import { Badge, BriefcaseBusinessIcon, Code, HomeIcon } from "lucide-react";
import { FaDev } from "react-icons/fa";

export default function Header() {
  return (
    <header
      className="px-4 lg:px-6 bg-slate-950 text-white h-14 flex items-center"
      style={{
        backgroundImage:
          'url("./assets/classy-fabric.png"), linear-gradient(to right, #020617,  #172554)',
      }}
    >
      <Link
        href="/"
        className="flex gap-2 items-center justify-center text-indigo-500 hover:text-white transition-all duration-500 "
        prefetch={false}
      >
        <BriefcaseBusinessIcon className="h-6 w-6 " />
        <h3
          className=" bg-clip-text text-transparent md:text-2xl text-lg hover:text-white transition-all duration-500"
          style={{
            backgroundImage:
              'url("./assets/classy-fabric.png"), linear-gradient(to right, #6366f1, #14b8a6)',
          }}
        >
          Alejandro Romero's Portfolio
        </h3>
      </Link>
      <nav className="ml-auto md:flex  hidden gap-4 sm:gap-6">
        <Link
          href="#work"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Work
        </Link>
        <Link
          href="#skills"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
