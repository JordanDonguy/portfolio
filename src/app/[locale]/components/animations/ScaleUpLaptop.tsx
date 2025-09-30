'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, ReactNode } from 'react';

interface ScaleUpProps {
  children: ReactNode;
  delay?: number;
}

export const ScaleUpLaptop = ({ children, delay = 0 }: ScaleUpProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

    const [threshold, setThreshold] = useState(0.2)
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile/tablet
        setThreshold(0.15);
      } else {
        // Desktop
        setThreshold(0.4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const isInView = useInView(ref, { once: true, amount: threshold, margin: '100px 0px 100px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : {}}
      transition={{ duration: 0.8, ease: "linear", delay }}
      className="hidden md:block col-span-1 mx-auto w-3xl xl:w-4xl lg:absolute right-[-100px] xl:right-[-150px] top-30 z-0"
    >
      {children}
    </motion.div>
  )
};
