import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Aether OS",
    description: "A decentralized operating system concept built entirely in the browser. Features a custom window manager and real-time P2P collaboration.",
    tags: ["React", "WebRTC", "Three.js"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Lumina Data",
    description: "High-performance financial data visualization dashboard. Handles millions of data points with WebGL-accelerated charting.",
    tags: ["TypeScript", "WebGL", "Rust", "PostgreSQL"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Sonic Canvas",
    description: "An interactive audio-visual synthesizer that generates real-time 3D environments reacting to microphone input.",
    tags: ["Web Audio API", "React Three Fiber", "GLSL"],
    links: { github: "#", live: "#" }
  },
  {
    title: "Nexus CRM",
    description: "Modern customer relationship manager designed for creative agencies, featuring an AI-assisted pipeline builder.",
    tags: ["Next.js", "Tailwind", "OpenAI API", "Prisma"],
    links: { github: "#", live: "#" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Selected Works
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 0.98, rotateX: 2, rotateY: -2 }}
              className="perspective-1000"
            >
              <GlassCard animatedBorder={idx === 0} className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <div className="flex gap-3">
                      <a href={project.links.github} className="text-white/50 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.links.live} className="text-white/50 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 text-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white/5 rounded-full text-white/70 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
