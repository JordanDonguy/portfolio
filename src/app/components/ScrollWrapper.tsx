"use client";

import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollbarInstance = useRef<Scrollbar | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.08,
    });

    scrollbarInstance.current = scrollbar;

    const handleScrollButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("[data-scroll-to]") as HTMLElement | null;

      if (!button) return;

      const sectionId = button.getAttribute("data-scroll-to");
      if (!sectionId) return;

      const section = document.getElementById(sectionId);
      if (section) {
        scrollbar.scrollIntoView(section, {
          offsetTop: 0,
          alignToTop: true,
          onlyScrollIfNeeded: false,
        });
      }
    };

    document.addEventListener("click", handleScrollButtonClick);

    return () => {
      scrollbar.destroy();
      document.removeEventListener("click", handleScrollButtonClick);
    };
  }, []);

  return (
    <main ref={scrollRef} style={{ height: "100vh", overflow: "hidden" }}>
      {children}
    </main>
  );
}
