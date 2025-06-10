"use client";

import { useActiveSection } from "./utils/useActiveSection";

export default function Navbar() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useActiveSection(sectionIds);

  return (
    <nav className="max-w-7xl h-16 mx-auto flex justify-between items-center px-5 lg:px-0">
      <span className="font-bold text-xl cursor-pointer text-cyan-500">Portfolio</span>

      <ul className="flex space-x-6">
        {sectionIds.map(id => 
        <li key={id}>
          <button
            data-scroll-to={id}
            className={`hover:text-blue-400 hover:cursor-pointer font-bold  border-neutral-700 h-full pr-5
              ${(sectionIds.findIndex(x => x === id) < (sectionIds.length - 1)) && "border-r-2"}
              ${(activeSection === id) ? "text-cyan-500 underline underline-offset-29" : ""}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </button>
        </li>
        )}
        
      </ul>

    </nav>
  )
}
