"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from "./utils/useActiveSection";
import { Menu } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();              // current locale ('en' or 'fr')
  const router = useRouter();              // Next router
  const pathname = usePathname();          // current path

  const switchLocale = () => {
    const segments = pathname.split('/');
    segments[1] = locale === "en" ? "fr" : "en";
    const newPath = segments.join('/');

    router.push(newPath);
  };

  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const { activeSection } = useActiveSection(sectionIds, 0.6);
  const { activeSection: activeSectionMobile } = useActiveSection(sectionIds, 0.2);

  const [menuVisibility, setMenuVisibility] = useState(false);

  // Define delay with a useMemo to make sure window's available when running the function
  const delay = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640 ? 0 : 0.5;
    }
    return 0.5;
  }, []);

  const handleToggleVisibility = () => {
    return setMenuVisibility(prev => !prev);
  };

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}>

      {/* Navbar Desktop */}
      <nav className="w-full h-16 hidden md:block bg-glass border-b border-zinc-700 shadow-md">
        <div className="max-w-7xl h-full mx-auto flex justify-between items-center md:pr-5 xl:px-5">
          <a href="#home" className="font-bold text-xl text-cyan-500 pl-5 xl:pl-0 hover:scale-110 active:scale-90 duration-100">Portfolio</a>
          <ul className="hidden md:flex space-x-3 lg:space-x-6 pr-5 lg:pr-0 items-center">
            {sectionIds.map(id =>
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`hover:text-blue-400 hover:cursor-pointer font-bold  border-neutral-700 h-full pr-3 lg:pr-5
                  ${(sectionIds.findIndex(x => x === id) < (sectionIds.length - 1)) && "border-r-2"}
                  ${(activeSection === id) ? "text-cyan-500 underline underline-offset-28" : ""}`}
                >
                  {t(id)}
                </a>
              </li>
            )}
            <li className="h-full">
              <button
                onClick={switchLocale}
                className="group relative bg-[rgba(54,54,63,0.1)] w-18 py-2 text-sm font-bold border-2 border-zinc-700 rounded-lg hover:bg-[rgba(91,91,115,0.15)] hover:cursor-pointer hover:scale-110 hover:border-zinc-600 hover:text-blue-300 active:scale-90 duration-100"
              >
                <span className="group-hover:hidden">{locale.toUpperCase()}</span>
                <span className="hidden group-hover:block">{(locale === "en" ? "fr" : "en").toUpperCase()}</span>
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav className="md:hidden w-full h-16 border-b border-zinc-700 shadow-md">
        <div className="w-full h-full bg-[rgba(11,11,14,0.5)] backdrop-blur-md flex justify-between items-center">
          <a href="#home" className="font-bold text-xl text-cyan-500 pl-4">Portfolio</a>
          <div className="flex gap-8">
            <button onClick={handleToggleVisibility} aria-label="Open menu" className="pr-4 hover:cursor-pointer">
              <Menu size={36} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuVisibility && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed w-screen h-[100svh] flex flex-col items-center justify-center top-16 md:hidden z-50 bg-[rgba(11,11,16,0.98)]">
              <ul className="flex flex-col w-full h-full max-h-[700px] justify-evenly items-center pb-16">
                <li>
                  <button onClick={switchLocale} className="bg-[rgba(54,54,63,0.3)] px-6 py-3 border-2 border-zinc-500 rounded-lg hover:bg-gray-300 text-sm font-bold active:scale-90">
                    {locale.toUpperCase()}
                  </button>
                </li>
                {sectionIds.map(id =>
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={handleToggleVisibility}
                      className={`hover:text-blue-400 hover:cursor-pointer text-xl font-bold h-full
                    ${(activeSectionMobile === id) ? "text-cyan-500 underline underline-offset-8" : ""}`}
                    >
                      {t(id)}
                    </a>
                  </li>
                )}
              </ul>

            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.div>
  )
}
