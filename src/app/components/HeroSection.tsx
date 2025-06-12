"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "./utils/useActiveSection";
import ContactForm from "./ContactForm";
import { Download } from "lucide-react";
import { CircleArrowDown } from 'lucide-react';

export default function HeroSection() {
  const activeSection = useActiveSection(["home", "about"])
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
    <section id="home" className="relative w-full overflow-hidden mx-auto h-screen flex flex-col items-center text-center justify-center">
      {showForm && (
        <div className="absolute z-10 max-w-5xl w-full h-full pt-16 md:pt-0 md:h-3/4">
          <ContactForm showForm={showForm} handleFormButton={handleFormButton} />
        </div>
      )}
      <img src="/img/right.svg" className="absolute z-[-1] top-0 right-0 max-w-1/2 lg:max-w-1/3" />
      <img src="/img/left.svg" className="absolute z-[-1] bottom-0 left-0 max-w-1/2 lg:max-w-1/3" />
      <div className={`${!showForm ? "bg-glass border-y md:border-2 border-zinc-700" : ""} mt-16 py-12 px-8  md:rounded-4xl flex flex-col items-center w-full md:x-2xl lg:w-6xl`}>

        <h1 className="text-3xl md:text-5xl/20 text-white font-bold pb-10 animate-grow-subtle">
          Hi, I'm Jordan 👋,<br></br>
          <span className="bg-gradient-to-l from-blue-400 to-gray-100 bg-clip-text text-transparent">Let's make awesome apps together!</span>
        </h1>
        <p className="text-xl md:text-2xl/12 text- max-w-3xl pb-10">I'm a full-stack developer who loves to turn ideas into clean and modern apps that people enjoy using!</p>

        <div className="md:w-xl flex flex-col md:flex-row justify-between items-center duration-500 gap-8 md:gap-0">
          <button
            onClick={handleFormButton}
            className="text-2xl w-48 md:w-3xs h-16 md:h-20 box-border rounded-full bg-gradient-to-l from-blue-600 inline-flex items-center justify-center hover:scale-110 hover:cursor-pointer active:scale-90 duration-150"
          >
            Say hello 👋
          </button>
          <button className="text-2xl w-48 h-16 md:h-20 box-border rounded-full border-2 inline-flex items-center justify-center hover:scale-110 hover:cursor-pointer active:scale-90 duration-150">
            Resume&nbsp;<Download />
          </button>
        </div>

      </div>

      {/* <a href="#about" className="z-10 absolute bottom-0 mb-15 animate-subtle-bounce hover:scale-110 hover:cursor-pointer duration-150">
        <CircleArrowDown size={64} strokeWidth={1} color="rgb(113,113,122)" />
      </a> */}
    </section>
  )
}
