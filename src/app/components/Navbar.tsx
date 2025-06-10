export default function Navbar() {
  return (
    <nav className="max-w-7xl h-16 mx-auto flex justify-between items-center px-5 lg:px-0">
      <span className="font-bold text-xl cursor-pointer text-cyan-500">Portfolio</span>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-blue-400 text-cyan-500 font-bold border-r-2 border-neutral-700 h-full pr-5 underline underline-offset-29 ">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400   border-r-2 border-neutral-700 h-full pr-5">About</a></li>
        <li><a href="#skills" className="hover:text-blue-400 border-r-2 border-neutral-700 h-full pr-5">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-400 border-r-2 border-neutral-700 h-full pr-5">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  )
}
