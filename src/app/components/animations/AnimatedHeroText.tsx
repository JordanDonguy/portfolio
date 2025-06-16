'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from "lucide-react";

interface AnimatedHeroTextProps {
  showForm: boolean,
  handleFormButton: () => void,
}

export default function AnimatedHeroText({ showForm, handleFormButton }: AnimatedHeroTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5, margin: '100px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.5, delay: 0.5 }}
      className={`${!showForm ? "backdrop-blur-sm bg-[rgba(11,11,14,0.5)]" : ""} duration-200 w-full py-12 px-8 rounded-asym flex flex-col items-center`}
    >
      <h1 className="text-3xl md:text-5xl/20 text-white font-bold pb-10 animate-grow-subtle">
        Hi, I&apos;m Jordan 👋,<br></br>
        <span className="bg-gradient-to-l from-blue-400 to-gray-100 bg-clip-text text-transparent">Let&pos;s make awesome apps together!</span>
      </h1>

      <p className="text-xl md:text-2xl/12 text- max-w-3xl pb-10">I&apos;m a full-stack developer who loves to turn ideas into clean and modern apps that people enjoy using!</p>

      <div className="md:w-xl flex flex-col md:flex-row justify-between items-center duration-500 gap-8 md:gap-0">
        <button
          onClick={handleFormButton}
          className="text-2xl w-48 md:w-3xs h-16 md:h-20 box-border rounded-full bg-gradient-to-l from-blue-600 inline-flex items-center justify-center hover:scale-110 hover:cursor-pointer active:scale-90 duration-150"
        >
          Say hello 👋
        </button>
        <button className="text-2xl w-48 h-16 md:h-20 box-border rounded-full border inline-flex items-center justify-center hover:scale-110 hover:bg-[rgba(60,60,82,0.2)] hover:cursor-pointer active:scale-90 duration-150">
          Resume&nbsp;<Download />
        </button>
      </div>
    </motion.div>
  )
}
