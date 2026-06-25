import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  animatedBorder?: boolean;
}

export function GlassCard({ children, className, animatedBorder = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      {...props}
      className={cn(
        animatedBorder ? "animated-border-card" : "glass-panel rounded-2xl p-6",
        className
      )}
    >
      {animatedBorder ? (
        <div className="relative z-10 p-6 h-full flex flex-col">
          {children}
        </div>
      ) : (
        children
      )}
    </motion.div>
  );
}
