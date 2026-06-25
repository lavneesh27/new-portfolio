import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-5xl w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 backdrop-blur-md">
            <Terminal className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium tracking-wider uppercase">Full-Stack Developer</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">digital</span> <br/>
          experiences that feel alive.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          I craft mesmerizing interfaces and robust systems. Precise craftsmanship meets visual daring.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center">
              View Work <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a href="#contact" className="px-8 py-4 glass-pill rounded-full font-medium text-white hover:bg-white/10 transition-colors">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
