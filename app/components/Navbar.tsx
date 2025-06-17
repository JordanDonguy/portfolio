"use client";

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from "./utils/useActiveSection";
import { Menu } from "lucide-react";

export default function Navbar() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const { activeSection } = useActiveSection(sectionIds, 0.6);
  const { activeSection: activeSectionMobile } = useActiveSection(sectionIds, 0.2);

  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleToggleVisibility = () => {
    return setMenuVisibility(prev => !prev);
  };

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}>
      {/* Navbar Desktop */}
      <nav className="w-full h-16 hidden md:block bg-glass border-b border-zinc-700 shadow-md backdrop-blur-md">
        <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
          <a href="#home" className="font-bold text-xl text-cyan-500 pl-5 lg:pl-0">Portfolio</a>
          <ul className="hidden md:flex space-x-6 pr-5 lg:pr-0">
            {sectionIds.map(id =>
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`hover:text-blue-400 hover:cursor-pointer font-bold  border-neutral-700 h-full pr-5
                  ${(sectionIds.findIndex(x => x === id) < (sectionIds.length - 1)) && "border-r-2"}
                  ${(activeSection === id) ? "text-cyan-500 underline underline-offset-28" : ""}`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            )}
          </ul>
        </div>

      {/* Navbar Mobile */}
      </nav>
      <nav className="md:hidden w-full h-16 border-b border-zinc-700 shadow-md">
        <div className="w-full h-full bg-glass flex justify-between items-center">
          <a href="#home" className="font-bold text-xl text-cyan-500 pl-5 lg:pl-0">Portfolio</a>
          <button onClick={handleToggleVisibility} className="pr-5 hover:cursor-pointer">
            <Menu size={36} />
          </button>
        </div>

        <AnimatePresence>
          {menuVisibility && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="fixed w-screen h-[100svh] top-16 md:hidden z-50">
              <ul className="flex flex-col w-full h-full justify-center items-center gap-16 pb-16 bg-[rgba(11,11,16,0.98)]">
                {sectionIds.map(id =>
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={handleToggleVisibility}
                      className={`hover:text-blue-400 hover:cursor-pointer text-xl font-bold  h-full pr-5
                    ${(activeSectionMobile === id) ? "text-cyan-500 underline underline-offset-8" : ""}`}
                    >
                      {id.charAt(0).toUpperCase() + id.slice(1)}
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
