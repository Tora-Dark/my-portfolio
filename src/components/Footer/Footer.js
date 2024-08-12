import Link from "next/link";

export default function Footer() {
  return (
    <footer  className="px-4 lg:px-6 bg-slate-950 text-white h-14 flex items-center"
    style={{
      backgroundImage:
        'url("/assets/classy-fabric.png"), linear-gradient(to left, #020617,  #172554)',
    }}
  >
      <p className="text-xs text-muted-foreground">
        &copy; 2024 Alejandro Romero. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/work"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          work
        </Link>
        <Link
          href="/contact"
          className="text-xs hover:underline underline-offset-4"
          prefetch={false}
        >
          contact
        </Link>
      </nav>
    </footer>
  );
}
