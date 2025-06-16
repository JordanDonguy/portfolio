"use client";

import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[], threshold: number) {
  const [active, setActive] = useState<string>("");
  const [fromTop, setFromTop] = useState<boolean | null>(null); // null = first load
  const prevActiveRef = useRef<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        if (visible.length === 0) return;

        const topMost = visible[0];
        const currentId = topMost.target.id;

        if (currentId !== prevActiveRef.current) {
          if (prevActiveRef.current) {
            const prevIndex = sectionIds.indexOf(prevActiveRef.current);
            const currIndex = sectionIds.indexOf(currentId);
            setFromTop(prevIndex < currIndex); // true = scrolling down
          }

          prevActiveRef.current = currentId;
          setActive(currentId);
        }
      },
      {
        root: document.querySelector("#scroll-container"), // remove this if not using scroll container
        threshold: threshold !== undefined ? threshold : 0.6,
      }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds, threshold]);

  return { activeSection: active, fromTop };
}
