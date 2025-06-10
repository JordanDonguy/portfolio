export default function SkillsSection() {
  const languagesList = ["JavaScript", "TypeScript"];
  const frontEndList = ["Html5", "CSS", "React", "React Router", "Redux", "NextdotJs", "Tailwind CSS"];
  const backEndList = ["NodedotJs", "ExpressdotJs", "PostgreSQL"];
  const toolsList = ["Git", "GitHub", "Netlify", "Vercel", "Railway", "Render", "Supabase"]

  return (
    <section id="skills" className="relative w-full min-h-screen px-5 xl:px-0 snap-start">
      <img src="/bg-1.svg" className="absolute z-[-1] w-full h-full object-cover" />
      <div className="max-w-6xl mx-auto text-center pt-24 xl:max-w-7xl">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>

        <div className="bg-glass py-4 border-2 border-zinc-700 rounded-3xl">
          <section className="max-w-6xl mx-auto mt-4 2xl:mb-4 px-4 xl:px-0 flex border-t border-zinc-600 pt-2 2xl:py-4">
            <h3 className="text-start text-cyan-500 font-bold h-28 text-xl min-w-36 mr-6">Languages</h3>
            <div className="flex space-x-8 space-y-4 flex-wrap">
              {languagesList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
          <section className="max-w-6xl mx-auto 2xl:mb-4 px-4 xl:px-0 flex border-t border-zinc-600 pt-2 2xl:py-4">
            <h3 className="text-start text-cyan-500 font-bold h-28 text-xl min-w-36 mr-6">Front-end</h3>
            <div className="flex space-x-8 space-y-4 flex-wrap">
              {frontEndList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
          <section className="max-w-6xl mx-auto 2xl:mb-4 px-4 xl:px-0 flex border-t border-zinc-600 pt-2 2xl:py-4">
            <h3 className="text-start text-cyan-500 font-bold h-28 text-xl min-w-36 mr-6">Back-end</h3>
            <div className="flex w-full space-x-8 space-y-4 flex-wrap">
              {backEndList.map(item =>
                <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                  <img src={`/img/logo/${item}.svg`} className="w-18"></img>
                  <p>{item.replace(/dot/g, ".")}</p>
                </article>
              )}
            </div>
          </section>
          <section className="max-w-6xl mx-auto px-4 xl:px-0 flex border-t border-zinc-600 pt-2 2xl:pt-4">
            <h3 className="text-start text-cyan-500 font-bold h-28 text-xl min-w-36 mr-6">Tools</h3>
            <div className="flex space-x-8 space-y-4 flex-wrap">
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
