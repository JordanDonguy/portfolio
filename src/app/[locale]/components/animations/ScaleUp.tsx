'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect, ReactNode } from 'react';

interface ScaleUpProps {
  children: ReactNode;
  delay?: number;
}

export const ScaleUp = ({ children, delay = 0 }: ScaleUpProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

    const [threshold, setThreshold] = useState(0.2)
    const [margin, setMargin] = useState(0);
    const [effectiveDelay, setEffectiveDelay] = useState(delay);

    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile/tablet
        setThreshold(0.1);
        setMargin(100);
        setEffectiveDelay(0)
      } else {
        // Desktop
        setThreshold(0.4);
        setMargin(0);
        setEffectiveDelay(delay);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [delay]);

    const isInView = useInView(ref, { once: true, amount: threshold, margin: `${margin}px` });
  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay: effectiveDelay }}
    >
      {children}
    </motion.div>
  )
};
