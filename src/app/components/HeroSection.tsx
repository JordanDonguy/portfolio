import { Download } from "lucide-react";
import { CircleArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden mx-auto h-screen flex flex-col items-center text-center justify-center snap-start">
      <img src="/bg-1.svg" className="absolute z-[-1] w-full h-full object-cover" />
      <div className="bg-glass mt-16 py-12 px-8 border-2 border-zinc-700 rounded-4xl flex flex-col items-center w-2xl lg:w-6xl">

        <h1 className="text-5xl/20 text-white font-bold pb-10 animate-grow-subtle">
          Hi, I'm Jordan 👋,<br></br>
          <span className="bg-gradient-to-l from-blue-400 to-gray-100 bg-clip-text text-transparent">Let's make awesome apps together!</span>
        </h1>
        <p className="text-2xl/12 text- max-w-3xl pb-10">I'm a full-stack developer who loves to turn ideas into clean and modern apps that people enjoy using!</p>

        <div className="w-xl flex justify-between duration-500">
          <button className="text-2xl w-3xs h-20 z-10 box-border rounded-full bg-gradient-to-l from-blue-600 inline-flex items-center justify-center hover:scale-110 hover:cursor-pointer duration-150">
            Say hello 👋
          </button>
          <button className="text-2xl w-48 h-20 z-10 box-border rounded-full border-2 inline-flex items-center justify-center hover:scale-110 hover:cursor-pointer duration-150">
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
