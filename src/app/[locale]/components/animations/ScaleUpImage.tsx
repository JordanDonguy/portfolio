'use client';
import { motion, useInView } from 'framer-motion';
import { type ReactNode, useRef } from 'react';

interface ScaleUpImageProps {
  children: ReactNode;
}

export const ScaleUpImage = ({ children }: ScaleUpImageProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3, margin: '100px 0px 100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ transformOrigin: 'center' }}
    >
      {children}
    </motion.div>
  );
};
