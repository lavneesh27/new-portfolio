import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ExternalLink, Github, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Twitter Clone',
    description:
      'Responsive social media web app inspired by Twitter/X. Modular Angular components, dynamic feed rendering, and real-time messaging & post sharing via Socket.IO. Focused on scalable architecture and a clean user experience.',
    tags: ['ASP.NET Core', 'Angular', 'TypeScript', 'HTML/CSS', 'REST API', 'Socket.IO'],
    links: { github: 'https://github.com/lavneesh27/twitter-clone', live: null },
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with authentication, REST APIs, product catalogue, and cart management. Responsive modular architecture with optimised database operations throughout.',
    tags: ['ASP.NET Core', 'Web API', 'C#', 'MS SQL Server', 'Angular'],
    links: { github: 'https://github.com/lavneesh27/e-commerce', live: null },
  },
  {
    title: 'SaaS Risk & Cost Monitor',
    description:
      'Multi-tenant SaaS platform for commercial risk and cost monitoring. Built dynamic form logic driven entirely by database config — fields can be made mandatory, removable, or addable without any code changes.',
    tags: ['ASP.NET', 'Microservices', 'SQL Server', 'Angular', 'HangFire'],
    links: { github: null, live: null },
    workProject: true,
  },
  {
    title: 'Healthcare Kanban Dashboard',
    description:
      'Microservices healthcare project with a GraphQL API gateway built on .NET Ocelot. Kanban dashboard with pagination and caching to handle large data objects and eliminate repeated DB calls.',
    tags: ['GraphQL', 'ASP.NET Core', 'Angular', 'MS SQL Server', '.NET Ocelot'],
    links: { github: null, live: null },
    workProject: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-muted-foreground text-center mb-16"
        >
          Personal projects and professional highlights
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 0.98, rotateX: 2, rotateY: -2 }}
              className="perspective-1000"
            >
              <GlassCard animatedBorder={idx === 0} className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      {project.workProject && (
                        <span
                          title="Professional project"
                          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20"
                        >
                          <Briefcase className="w-3 h-3" />
                          Work
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3 items-center">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`link-github-${idx}`}
                          className="text-white/50 hover:text-white transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`link-live-${idx}`}
                          className="text-white/50 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.workProject && !project.links.github && !project.links.live && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10">
                          Private / NDA
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white/5 rounded-full text-white/70 border border-white/5"
                    >
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
