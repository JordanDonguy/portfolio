'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedHeroBordersProps {
  showForm: boolean,
}

export default function AnimatedHeroBorder({ showForm }: AnimatedHeroBordersProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5, margin: '200px' });
  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ scaleX: 0, borderTopLeftRadius: "0" }}
        animate={isInView ? { scaleX: 1, borderTopLeftRadius: "5rem" } : {}}
        transition={{
          scaleX: { duration: 0.4, ease: "linear" },
          borderTopLeftRadius: { duration: 0.4, delay: 0.2 }
        }}
        style={{ originX: 1 }}
        className={`${!showForm ? "md:border-t" : ""} z-20 pointer-events-none duration-100 ease-linear absolute top-0 right-0 mt-[-1px] h-full w-full border-zinc-700 rounded-asym`}
      />
      <motion.div
        ref={ref}
        initial={{ scaleX: 0, borderTopRightRadius: "0" }}
        animate={isInView ? { scaleX: 1, borderTopRightRadius: "5rem" } : {}}
        transition={{
          scaleX: { duration: 0.4 },
          borderTopRightRadius: { duration: 0.4, delay: 0.2 }
        }}
        style={{ originX: 0 }}
        className={`${!showForm ? "md:border-b" : ""} z-20 pointer-events-none duration-100 ease-linear absolute bottom-0 left-0 mb-[-1px] h-full w-full border-zinc-700 rounded-asym`}
      />
    </div>
  )
}
