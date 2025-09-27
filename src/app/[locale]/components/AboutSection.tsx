import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { SlideFromLeft } from "./animations/SlideFromLeft"
import { SlideFromRight } from './animations/SlideFromRight';
import { ScaleUpLaptop } from './animations/ScaleUpLaptop';

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative w-full">
      <div className="py-8 text-center flex flex-col items-center justify-around">
        <h2 className="text-4xl font-bold py-8 md:py-16 mb-8 bg-[rgb(28,32,40))] w-full">{t("title")}</h2>
        <div className="max-w-7xl px-2 md:px-5 relative grid grid-cols-1 lg:grid-cols-2 w-full">

          {/* ----------- Presentation ----------- */}
          <SlideFromLeft>
            <div className="py-8 rounded-asym text-gray-300 border-zinc-700 2xl:py-12 lg:mx-auto">
              <article className="text-md md:text-lg/10 lg:text-start">
                <h3 className="text-2xl pb-6 text-center text-cyan-500 font-bold">{t("presentation-title")}</h3>
                {t.rich("presentation", {
                  b: (chunks) => <span className="text-white font-bold">{chunks}</span>
                })}
              </article>
            </div>
          </SlideFromLeft>

          {/* ----------- Laptop image ----------- */}
          <ScaleUpLaptop>
            <Image
              src="/img/laptop.webp"
              alt="laptop"
              width={2000}
              height={2000}
              quality={100}
              priority={true}
              className="mt-6 lg:mt-0"
            />
          </ScaleUpLaptop>
        </div>

        <div className="max-w-7xl px-2 md:px-5 relative grid grid-cols-1 lg:grid-cols-2 w-full md:mt-[-px] lg:mt-12">
          {/* ----------- Background image ----------- */}
          <SlideFromLeft>
            <Image
              src="/img/path.webp"
              alt="path"
              width={2000}
              height={2000}
              quality={100}
              priority={true}
              className="hidden lg:block col-span-1 mx-auto w-2xl xl:w-4xl z-0 mt-[-70px] ml-[-10px]"
            />
          </SlideFromLeft>

          {/* ----------- Background text ----------- */}
          <SlideFromRight>
            <article className="md:text-lg/10 max-w-7xl px-2 md:px-5 lg:text-start z-20 md:mt-[-70px] lg:mt-0">
              <h3 className="text-2xl pb-6 text-center text-cyan-500 font-bold">{t("background-title")}</h3>
              {t.rich("background", {
                b: (chunks) => <span className="text-white font-bold">{chunks}</span>
              })}
            </article>
          </SlideFromRight>

        </div>
      </div>
    </section>
  )
}
