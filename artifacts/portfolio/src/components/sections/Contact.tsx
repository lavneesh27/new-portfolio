import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Mail, Linkedin } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">Let's build something.</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto relative z-10">
              Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a 
                href="mailto:hello@example.com"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden flex items-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Say Hello
              </a>
              
              <div className="flex gap-4">
                <a href="#" className="p-4 glass-pill rounded-full text-white/70 hover:text-white transition-colors group">
                  <SiGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-4 glass-pill rounded-full text-white/70 hover:text-white transition-colors group">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-4 glass-pill rounded-full text-white/70 hover:text-white transition-colors group">
                  <SiX className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
        
        <footer className="mt-20 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} — Designed & Built with precise craftsmanship.</p>
        </footer>
      </div>
    </section>
  );
}
