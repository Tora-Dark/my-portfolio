const aboutMe = [
  "I am Alejandro Romero, an Engineer in Computer Science with experience in Full Stack web development. I am passionate about coding and always eager to learn new technologies. With a strong background in both frontend and backend development, I am committed to creating efficient and innovative solutions.",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full flex py-12 md:py-24 lg:py-32 bg-transparent"
    >
      <div className="container flex flex-col items-center px-4 md:px-6 gap-6 lg:gap-12 text-center">
        <h2 className="text-3xl font-bold animate__animated animate__fadeIn tracking-tighter sm:text-4xl text-sky-500 xl:text-5xl">
          About Me
        </h2>
        <div
          className="max-w-[800px] bg-repeat  overflow-hidden rounded-xl hover:shadow-neon-indigo transition-all shadow-lg shadow-slate-950 duration-500 text-blue-100 md:text-xl animate__animated animate__fadeIn space-y-4"
          style={{
            backgroundImage:
                  'url("/assets/classy-fabric.png"), linear-gradient(to right, #0284c7, #1e3a8a)',
          }}
        >
          {aboutMe.map((text, index) => (
            <p key={index} className=" p-4  ">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
