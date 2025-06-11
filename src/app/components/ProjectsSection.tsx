export default function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full h-screen snap-start">
      <img src="/img/left.svg" className="absolute z-[-1] top-0 left-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3" />
      <img src="/img/right.svg" className="absolute z-[-1] bottom-0 right-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3" />
      <div className="max-w-7xl mx-auto h-full text-center pt-24 pb-40">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="w-full h-full bg-glass rounded-3xl border-2 border-zinc-700"></div>
      </div>
      {/* Projects list */}
    </section>
  )
}
