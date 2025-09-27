import { useTranslations, useLocale } from 'next-intl';
import { Download } from "lucide-react";
import { SlideFromRight } from './SlideFromRight';

interface AnimatedHeroTextProps {
  handleFormButton: () => void,
}

export default function AnimatedHeroText({ handleFormButton }: AnimatedHeroTextProps) {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <SlideFromRight>
        <div className="relative duration-200 mt-16 max-h-[700px] h-full md:h-fit px-5 max-w-3xl flex flex-col items-center xl:items-end">
          <h1 className="w-full lg:max-w-xl xl:max-w-2xl text-4xl md:text-4xl/16 xl:text-5xl/20 text-white font-bold pb-10 animate-grow-subtle mx-4 md:mx-0">
            {t.rich("greeting", {
              br: () => <br className="block sm:hidden" />
            })}<br></br>
            <span className="bg-gradient-to-l from-blue-400 to-gray-100 bg-clip-text text-transparent">{t("intro")}</span>
          </h1>
          <p className="text-xl md:text-xl/10 xl:text-2xl/12 max-w-xl xl:max-w-2xl pb-10">{t("presentation")}</p>
          <div className="w-full self-start lg:w-lg xl:w-xl flex flex-col md:flex-row justify-between items-center duration-500 gap-8 md:gap-16">
            <button
              onClick={handleFormButton}
              className="text-2xl w-9/10 min-w-48 h-16 md:h-20 box-border rounded-full bg-gradient-to-l from-blue-600 inline-flex items-center justify-center hover:scale-110 hover:cursor-pointer active:scale-90 duration-150"
            >
              {t("contact")}
            </button>
            <a
              href={`/resume/${locale === "fr" ? "CV Jordan Donguy (fr).pdf" : "Resume Jordan Donguy (en).pdf"}`}
              download
              className="text-2xl w-9/10 min-w-48 h-16 md:h-20 box-border rounded-full border inline-flex items-center justify-center bg-[rgba(11,11,14,0.7)] md:bg-transparent hover:scale-110 hover:bg-[rgba(60,60,82,0.2)] hover:cursor-pointer active:scale-90 duration-150"
            >
              {t("resume")}&nbsp;<Download />
            </a>
          </div>
        </div>
    </SlideFromRight>
  )
}
