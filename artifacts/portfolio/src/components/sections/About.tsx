import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

export function About() {
  const skills = [
    "React", "TypeScript", "Three.js", "Node.js", "TailwindCSS", "Next.js", "PostgreSQL", "Framer Motion", "GraphQL"
  ];

  return (
    <section id="about" className="py-32 px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
            {/* Subtle glow effect behind content */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Behind the screen</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a developer who treats code like a craft. I specialize in building immersive web experiences that bridge the gap between robust engineering and stunning visual design.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  When I'm not writing shaders or optimizing database queries, I'm exploring the intersection of creative coding and human-computer interaction.
                </p>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
