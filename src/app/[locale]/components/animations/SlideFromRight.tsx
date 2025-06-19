// components/animations/SlideFromLeft.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, ReactNode } from 'react';

interface SlideFromRightProps {
  children: ReactNode;
}

export const SlideFromRight = ({ children }: SlideFromRightProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

    const [threshold, setThreshold] = useState(0.2)
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile/tablet
        setThreshold(0.15);
      } else {
        // Desktop
        setThreshold(0.6);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const isInView = useInView(ref, { once: false, amount: threshold, margin: '250px' });
  return (
    <motion.div
      ref={ref}
      initial={{ x: 200, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
};
