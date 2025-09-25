import { useTranslations } from 'next-intl';
import { SlideFromLeft } from "./animations/SlideFromLeft"

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative w-full border-b-2 md:border-0 border-zinc-700">
      <div className="pt-8 text-center flex flex-col items-center justify-around">
        <h2 className="text-4xl font-bold py-8 md:py-16 mb-8 bg-[rgb(28,32,40))] w-full">{t("title")}</h2>
        <SlideFromLeft>
          <div className="px-2 max-w-7xl md:px-12 py-8 rounded-asym text-gray-300 xl:w-6xl border-zinc-700 2xl:py-12 md:mx-5 lg:mx-auto">
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
        </SlideFromLeft>
      </div>
    </section>
  )
}
