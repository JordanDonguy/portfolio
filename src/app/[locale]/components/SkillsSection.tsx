import { useTranslations } from "next-intl";
import Image from "next/image";
import { ScaleUp } from "./animations/ScaleUp";

export default function SkillsSection() {
  const t = useTranslations("skills");

  const languagesList = ["JavaScript", "TypeScript"];
  const frontEndList = ["HTML5", "CSS", "NextdotJs", "React", "React Router", "Expo", "Redux", "Tailwind CSS"];
  const backEndList = ["NodedotJs", "ExpressdotJs", "PostgreSQL", "Prisma", "Sequelize", "JWT"];
  const toolsList = ["Git", "GitHub", "Jest", "ESLint", "GH Actions", "Docker", "Cloudflare", "Vercel", "Supabase"]

  return (
    <section id="skills" className="relative w-full overflow-hidden border-b-2 md:border-0 border-zinc-700">
      <div className="text-center pt-8">

        <h2 className="text-4xl font-bold py-8 md:py-16 mb-8 bg-[rgb(28,32,40))] w-full">{t("title")}</h2>

        <div className="pt-6 pb-4 max-w-6xl xl:max-w-7xl mx-2 lg:mx-auto">

          {/* ----------- Languages section ----------- */}
          <section className="max-w-6xl mx-auto mb-4 flex flex-col items-center pb-4">
            <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Languages</h3>
            <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
              {languagesList.map((item, index) =>
                <ScaleUp key={item} delay={index * 0.07}>
                  <article key={item} className="flex flex-col items-center justify-evenly w-24 h-24 text-sm bg-zinc-800 rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={56} height={56} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                </ScaleUp>
              )}
            </div>
          </section>

          {/* ----------- Frontend section ----------- */}
          <section className="max-w-6xl mx-auto mb-4 md flex flex-col items-center border-t border-zinc-700 py-4">
            <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Frontend</h3>
            <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
              {frontEndList.map((item, index) =>
                <ScaleUp key={item} delay={index * 0.07}>
                  <article key={item} className="flex flex-col items-center justify-evenly w-24 h-24 text-sm bg-zinc-800 rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={56} height={56} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                </ScaleUp>
              )}
            </div>
          </section>

          {/* ----------- Backend section ----------- */}
          <section className="max-w-6xl mx-auto mb-4 flex flex-col items-center border-t border-zinc-700 py-4">
            <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">Backend</h3>
            <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap mb-2 md:mb-0">
              {backEndList.map((item, index) =>
                <ScaleUp key={item} delay={index * 0.07}>
                  <article key={item} className="flex flex-col items-center justify-evenly w-24 h-24 text-sm bg-zinc-800 rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={56} height={56} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                </ScaleUp>
              )}
            </div>
          </section>

          {/* ----------- Tools section ----------- */}
          <section className="max-w-6xl mx-auto flex flex-col items-center border-t border-zinc-700 py-4">
            <h3 className="text-center text-cyan-500 font-bold h-12 text-xl min-w-36">{t("tools")}</h3>
            <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
              {toolsList.map((item, index) =>
                <ScaleUp key={item} delay={index * 0.07}>
                  <article key={item} className="flex flex-col items-center justify-evenly w-24 h-24 text-sm bg-zinc-800 rounded-xl">
                    <Image src={`/img/logo/${item}.svg`} alt={item} width={56} height={56} />
                    <p>{item.replace(/dot/g, ".")}</p>
                  </article>
                </ScaleUp>
              )}
            </div>
          </section>

        </div>
      </div>
    </section>
  )
}
