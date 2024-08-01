import Link from "next/link";
import { MountainIcon } from "@/components/icons/MountainIcon";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 bg-slate-950 text-white h-14 flex items-center">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">John Doe's Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#work" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Work
        </Link>
        <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Skills
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
