import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { Mail, Linkedin } from 'lucide-react';
import { SiGithub, SiLeetcode } from 'react-icons/si';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/lavneesh27',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lavneesh-rajput',
    icon: Linkedin,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/lavneeshrajput/',
    icon: SiLeetcode,
  },
];

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
              Currently open to new opportunities. If you have a role or project in mind, drop me an email
              and I'll get back to you quickly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a
                href="mailto:lavirajput376@gmail.com"
                data-testid="link-email"
                className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden flex items-center"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <Mail className="mr-2 w-5 h-5 relative" />
                <span className="relative">lavirajput376@gmail.com</span>
              </a>

              <div className="flex gap-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    data-testid={`link-social-${label.toLowerCase()}`}
                    className="p-4 glass-pill rounded-full text-white/70 hover:text-white transition-colors group"
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <footer className="mt-20 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Lavneesh Rajput — Designed & Built with precise craftsmanship.</p>
        </footer>
      </div>
    </section>
  );
}
