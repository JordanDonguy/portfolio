"use client";

import Image from "next/image";
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
      className="relative w-full overflow-hidden mx-auto min-h-[100svh] md:py-20 flex flex-col max-w-5xl xl:max-w-7xl
    lg:flex-row gap-[10%] lg:pl-[2%] xl:pl-5 items-center justify-center xl:justify-between text-center lg:text-start"
    >

      {/* -------- Contact form (overlay) -------- */}
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
            className="will-change-transform will-change-opacity absolute z-30 w-full h-full pt-8 md:pt-0 md:h-fit md:mt-16">
            <ContactForm showForm={showForm} handleFormButton={handleFormButton} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------- Animated image -------- */}
      <div className="h-90 lg:h-full shrink-0 hidden md:block">
        <SlideFromLeft>
          {/* Medium and small screen */}
          <Image
            src="/img/hero-image.webp"
            alt="hero-image"
            width={380}
            height={450}
            quality={100}
            priority={true}
            className="hidden xl:block"
          />
          {/* Large screen */}
          <Image
            src="/img/hero-image.webp"
            alt="hero-image"
            width={320}
            height={400}
            quality={100}
            priority={true}
            className="block xl:hidden"
          />
        </SlideFromLeft>
      </div>

      {/* -------- Animated text and buttons -------- */}
      <AnimatedHeroText handleFormButton={handleFormButton} />
    </section>
  )
}
