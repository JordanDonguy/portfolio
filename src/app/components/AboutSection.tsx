export default function AboutSection() {
  return (
    <section id="about" className="relative w-full min-h-screen">
      <img src="/img/left.svg" className="absolute z-[-1] top-0 left-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3" />
      <img src="/img/right.svg" className="absolute z-[-1] bottom-0 right-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3" />
      <div className="pt-24 max-w-7xl text-center flex flex-col items-center justify-around  mx-2 md:mx-5 lg:mx-auto ">

        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="bg-glass px-2 md:px-12 py-8 rounded-asym text-gray-300 xl:w-6xl border-y border-zinc-700 2xl:py-12 backdrop-blur-sm">
          <article className="text-md md:text-lg/10 max-w-6xl mx-auto 2xl:max-w-4xl">
            <h3 className="text-2xl pb-6 text-center text-cyan-500 font-bold">👋 Hey there!</h3>
            <p>I’m Jordan, a <span className="text-white font-bold">full-stack developer</span> wrapping up a <span className="text-white font-bold">remote Bachelor’s degree</span> from a Paris based school named O'Clock.
              I recently completed <span className="text-white font-bold">Codecademy’s Full-Stack Engineer</span> path and have been building with <span className="text-white font-bold">React, Node.js, and PostgreSQL</span>.
              Lately I’ve been diving into <span className="text-white font-bold">Next.js</span> and planning to bring <span className="text-white font-bold">AI tools</span> into some upcoming projects.
              My goal is to work on <span className="text-white font-bold">modern tech stacks</span>, combining <span className="text-white font-bold">solid development</span> with <span className="text-white font-bold">smart user experiences</span>.</p>
          </article>

          <article className="md:text-lg/10 pt-12 max-w-6xl mx-auto 2xl:max-w-4xl">
            <h3 className="text-2xl pb-6 text-center text-cyan-500 font-bold">📚 A bit of background</h3>
            <p>
              Before getting into development, I worked for <span className="text-white font-bold">several years</span> as an <span className="text-white font-bold">automotive electrician </span>
              — installing new equipment, programming vehicles, and troubleshooting electrical systems.
              It’s where I built a strong foundation in <span className="text-white font-bold">logical thinking, problem-solving, and teamwork</span>.
              Since then, I’ve shifted into full-stack web development, combining my <span className="text-white font-bold">technical background</span> with a passion for <span className="text-white font-bold">building digital tools and apps</span>.
              I'm always open to new opportunities, collaborations, or ideas — feel free to&nbsp;
              <button className="text-blue-600 font-bold hover:cursor-pointer hover:underline underline-offset-4">reach out!</button>
            </p>
          </article>
        </div>

      </div>
    </section>
  )
}
