'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Download } from "lucide-react";

interface AnimatedHeroTextProps {
  showForm: boolean,
  handleFormButton: () => void,
}

export default function AnimatedHeroText({ showForm, handleFormButton }: AnimatedHeroTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5, margin: '150px' });

  const t = useTranslations('home');
  const locale = useLocale();

  // Define delay with a useMemo to make sure window's available when running the function
  const delay = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 0 : 0.5;
    }
    return 0.5;
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: delay }}
      className={`${!showForm ? "md:backdrop-blur-sm md:bg-[rgba(11,11,14,0.5)]" : ""} duration-200 w-full py-12 px-2 rounded-asym flex flex-col items-center justify-evenly h-full md:h-fit`}
    >
      <h1 className="text-4xl md:text-5xl/20 text-white font-bold pb-10 animate-grow-subtle">
        {t.rich("greeting", {
          br: () => <br className="block sm:hidden" />
        })}<br></br>
        <span className="bg-gradient-to-l from-blue-400 to-gray-100 bg-clip-text text-transparent">{t("intro")}</span>
      </h1>

      <p className="text-xl md:text-2xl/12 max-w-3xl pb-10">{t("presentation")}</p>

      <div className="w-full md:w-xl flex flex-col md:flex-row justify-between items-center duration-500 gap-8 md:gap-16">
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
    </motion.div>
  )
}
