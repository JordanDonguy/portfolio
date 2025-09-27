// components/animations/SlideFromLeft.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, ReactNode } from 'react';
import { useActiveSection } from "../utils/useActiveSection";

interface SlideFromTopOrBottom {
  children: ReactNode;
}

export const SlideFromTopOrBottom = ({ children }: SlideFromTopOrBottom) => {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const { fromTop } = useActiveSection(sectionIds, 0.6);

  const ref = useRef<HTMLDivElement | null>(null);

  const [threshold, setThreshold] = useState(0.2);
  const [margin, setMargin] = useState(250)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile/tablet
        setThreshold(0.1);
        setMargin(600)
      } else {
        // Desktop threshold
        setThreshold(0.3);
        setMargin(150)
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isInView = useInView(ref, { once: true, amount: threshold, margin: `${margin}px` });
  return (
    <motion.div
      ref={ref}
      initial={{ y: fromTop ? -200 : 200, opacity: 0, scale: 0 }}
      animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
};
