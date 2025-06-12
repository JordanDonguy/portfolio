export default function SkillsSection() {
  const languagesList = ["JavaScript", "TypeScript"];
  const frontEndList = ["Html5", "CSS", "React", "React Router", "Redux", "NextdotJs", "Tailwind CSS"];
  const backEndList = ["NodedotJs", "ExpressdotJs", "PostgreSQL"];
  const toolsList = ["Git", "GitHub", "Netlify", "Vercel", "Railway", "Render", "Supabase"]

  return (
    <section id="skills" className="relative w-full min-h-screen">
      <img src="/img/right.svg" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3" />
      <img src="/img/left.svg" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3" />
      <div className="max-w-6xl mx-2 md:mx-5 lg:mx-auto text-center pt-24 xl:max-w-7xl">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="bg-glass pt-6 pb-4 border-2 border-zinc-700 rounded-3xl">
          <section className="max-w-6xl mx-auto 2xl:mb-4 md:px-4 xl:px-0 flex flex-col items-center md:flex-row border-t border-zinc-600 py-4 md:pt-2 2xl:py-4">
            <h3 className="text-center md:text-start text-cyan-500 font-bold h-12 md:h-28 text-xl min-w-36 md:mr-6">Languages</h3>
            <div className="flex justify-center items-center md:items-start md:justify-start gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
              {languagesList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
          <section className="max-w-6xl mx-auto 2xl:mb-4 md:px-4 xl:px-0 flex flex-col items-center md:flex-row border-t border-zinc-600 py-4 md:pt-2 2xl:py-4">
            <h3 className="text-center md:text-start text-cyan-500 font-bold h-12 md:h-28 text-xl min-w-36 md:mr-6">Front-end</h3>
            <div className="flex justify-center items-center md:items-start md:justify-start gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
              {frontEndList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
          <section className="max-w-6xl mx-auto 2xl:mb-4 md:px-4 xl:px-0 flex flex-col items-center md:flex-row border-t border-zinc-600 py-4 md:pt-2 2xl:py-4">
            <h3 className="text-center md:text-start text-cyan-500 font-bold h-12 md:h-28 text-xl min-w-36 md:mr-6">Back-end</h3>
            <div className="flex justify-center items-center md:items-start md:justify-start gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
              {backEndList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
          <section className="max-w-6xl mx-auto md:px-4 xl:px-0 flex flex-col items-center md:flex-row border-t border-zinc-600 py-4 md:pt-2 2xl:py-4">
            <h3 className="text-center md:text-start text-cyan-500 font-bold h-12 md:h-28 text-xl min-w-36 md:mr-6">Tools</h3>
            <div className="flex justify-center items-center md:items-start md:justify-start gap-x-8 gap-y-4 flex-wrap">
              {toolsList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
