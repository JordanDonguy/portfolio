"use client";

import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string>("");
  const [fromTop, setFromTop] = useState<boolean | null>(null); // null = first load
  const prevActiveRef = useRef<string | null>(null);

  useEffect(() => {
    // rootMargin shrinks the root to a 0-height line at 30% from viewport top, so a
    // section is "intersecting" only while it contains that line — works regardless
    // of section height (threshold-based detection misses sections taller than ~1.67vh).
    const observer = new IntersectionObserver(
      entries => {
        const intersecting = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target.id)
          .sort((a, b) => sectionIds.indexOf(a) - sectionIds.indexOf(b));
        if (intersecting.length === 0) return;

        const currentId = intersecting[0];

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
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return { activeSection: active, fromTop };
}
