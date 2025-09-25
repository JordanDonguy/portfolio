"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from "./utils/useActiveSection";
import ContactForm from "./ContactForm";
import AnimatedHeroText from "./animations/AnimatedHeroText";
import { SlideFromLeft } from "./animations/SlideFromLeft";

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
    <section id="home"
      className="relative w-full overflow-hidden mx-auto min-h-[100svh] md:py-16 flex flex-col 
    lg:flex-row gap-[2%] lg:px-5 items-center justify-center lg:justify-evenly text-center lg:text-start"
    >

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
            className="will-change-transform will-change-opacity absolute z-10 max-w-5xl w-full h-full pt-8 md:pt-0 md:h-fit md:mt-16">
            <ContactForm showForm={showForm} handleFormButton={handleFormButton} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated image */}
      <div className="w-1/2 lg:w-1/3 hidden md:block">
        <SlideFromLeft>
          <img src="/img/hero-image.webp" alt="hero-image" />
        </SlideFromLeft>
      </div>

      {/* Animated text and buttons */}
      <AnimatedHeroText handleFormButton={handleFormButton} />
    </section>
  )
}
