import { useTranslations } from 'next-intl';
import { SlideFromLeft } from "./animations/SlideFromLeft"

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative w-full pb-10 border-b-2 md:border-0 border-zinc-700">
      <img src="/img/left.svg" loading="lazy" alt="" className="absolute z-[-1] top-0 left-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/right.svg" loading="lazy" alt="" className="absolute z-[-1] bottom-0 right-0 scale-y-[-1] max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <SlideFromLeft>
        <div className="pt-24 max-w-7xl text-center flex flex-col items-center justify-around md:mx-5 lg:mx-auto ">
          <h2 className="text-4xl font-bold mb-8">{t("title")}</h2>
          <div className="bg-glass px-2 md:px-12 py-8 rounded-asym text-gray-300 xl:w-6xl md:border-y border-zinc-700 2xl:py-12">
            <article className="text-md md:text-lg/10 max-w-6xl mx-auto 2xl:max-w-4xl">
              <h3 className="text-2xl pb-6 text-center text-cyan-500 font-bold">{t("presentation-title")}</h3>
              {t.rich("presentation", {
                b: (chunks) => <span className="text-white font-bold">{chunks}</span>
              })}
            </article>
            <article className="md:text-lg/10 pt-12 max-w-6xl mx-auto 2xl:max-w-4xl">
              <h3 className="text-2xl pb-6 text-center text-cyan-500 font-bold">{t("background-title")}</h3>
              {t.rich("background", {
                b: (chunks) => <span className="text-white font-bold">{chunks}</span>
              })}
            </article>
          </div>
        </div>
      </SlideFromLeft>
    </section>
  )
}
