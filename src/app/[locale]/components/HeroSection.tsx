"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from "./utils/useActiveSection";
import ContactForm from "./ContactForm";
import AnimatedHeroBorders from "./animations/AnimatedHeroBorders";
import AnimatedHeroText from "./animations/AnimatedHeroText";

export default function HeroSection() {
  const { activeSection } = useActiveSection(["home", "about"], 0.6)
  const [showForm, setShowForm] = useState(false);
  const handleFormButton = () => {
    setShowForm(prev => !prev);
  };

  useEffect(() => {
    if (activeSection !== "home") {
      setShowForm(false)
    }
  }, [activeSection]);

  return (
    <section id="home" className="relative w-full overflow-hidden mx-auto h-[100svh] flex flex-col items-center text-center justify-center">

      <AnimatePresence>
        {showForm && (
          <motion.div
            key="contact-form"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { type: "tween", duration: 0.3, ease: "easeInOut" },
              opacity: { type: "tween", duration: 0.2, ease: "easeInOut" },
            }}
            className="will-change-transform will-change-opacity absolute z-10 max-w-5xl w-full h-full pt-16 md:pt-0 md:h-3/4">
            <ContactForm showForm={showForm} handleFormButton={handleFormButton} />
          </motion.div>
        )}
      </AnimatePresence>

      <img src="/img/right.svg" loading="lazy" alt="" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <img src="/img/left.svg" loading="lazy" alt="" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3 aspect-auto" />
      <div className="relative duration-200 border-zinc-700 mt-16 rounded-asym w-full lg:w-6xl">
        {/* Animated borders */}
        <AnimatedHeroBorders showForm={showForm} />

        {/* Animated text, buttons and background */}
        <AnimatedHeroText showForm={showForm} handleFormButton={handleFormButton} />
      </div>
    </section>
  )
}
