import Image from "next/image";
import { SlideFromRight } from "./animations/SlideFromRight";

export default function SkillsSection() {
  const languagesList = ["JavaScript", "TypeScript"];
  const frontEndList = ["Html5", "CSS", "React", "React Router", "Redux", "NextdotJs", "Tailwind CSS"];
  const backEndList = ["NodedotJs", "ExpressdotJs", "PostgreSQL"];
  const toolsList = ["Git", "GitHub", "Netlify", "Vercel", "Railway", "Render", "Supabase"]

  return (
    <section id="skills" className="relative w-full min-h-screen overflow-hidden snap-start">
      <img src="/img/right.svg" loading="lazy" alt="" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/left.svg" loading="lazy" alt="" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <SlideFromRight>
        <div className="max-w-6xl mx-2 lg:mx-auto text-center pt-24 xl:max-w-7xl">
          <h2 className="text-4xl font-bold 2xl mb-8">Skills</h2>
          <div className="bg-glass pt-6 pb-4 border-y border-zinc-700 rounded-asym backdrop-blur-sm">
            <section className="max-w-6xl mx-auto mb-4 flex flex-col items-center pb-4">
              <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Languages</h3>
              <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
                {languagesList.map(item =>
                  <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={72} height={72} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                )}
              </div>
            </section>
            <section className="max-w-6xl mx-auto mb-4 md flex flex-col items-center border-t border-zinc-700 py-4">
              <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Front-end</h3>
              <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
                {frontEndList.map(item =>
                  <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={72} height={72} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                )}
              </div>
            </section>
            <section className="max-w-6xl mx-auto mb-4 flex flex-col items-center border-t border-zinc-700 py-4">
              <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Back-end</h3>
              <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
                {backEndList.map(item =>
                  <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={72} height={72} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                )}
              </div>
            </section>
            <section className="max-w-6xl mx-auto flex flex-col items-center border-t border-zinc-700 py-4">
              <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Tools</h3>
              <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
                {toolsList.map(item =>
                  <article key={item} className="flex flex-col items-center justify-evenly w-28 h-28 bg-[rgba(39,39,42,0.7)] rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={72} height={72} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                )}
              </div>
            </section>
          </div>
        </div>
      </SlideFromRight>
    </section>
  )
}
