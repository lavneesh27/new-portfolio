import { Link } from 'wouter';
import { motion } from 'framer-motion';

export function Navbar() {
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-pill rounded-full px-6 py-3 flex items-center gap-8"
    >
      {navItems.map((item) => (
        <a 
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
        >
          {item.name}
        </a>
      ))}
    </motion.nav>
  );
}
