import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

const skillGroups = [
  {
    label: 'Back-end',
    items: ['C#', 'ASP.NET', 'ASP.NET MVC', 'Web APIs', 'Microservices', 'GraphQL', 'ADO.NET'],
  },
  {
    label: 'Front-end',
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Tools & Cloud',
    items: ['Git', 'Docker', 'Microsoft Azure', 'SQL Server', 'HangFire', 'Sentry', 'Serilog'],
  },
  {
    label: 'CS Fundamentals',
    items: ['OOP', 'DSA', 'DBMS', 'Design Patterns'],
  },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Behind the screen</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  I'm a Full Stack Developer with hands-on experience building SaaS and microservices
                  applications at scale. At CodeTrade India, I've optimised APIs to cut response times
                  from ~10 s to ~500 ms — a 20× improvement — and engineered configurable systems
                  for email notifications, dynamic forms, and template resolution.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  I care deeply about writing high-quality, maintainable code and designing architectures
                  that grow gracefully. Outside of work you'll find me grinding LeetCode
                  (500+ problems solved) or contributing to competitive programming communities.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    Jaipur, India
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    B.Tech Computer Engineering — CGPA 8.7
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Open to opportunities
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-start gap-8">
                {skillGroups.map((group, gi) => (
                  <div key={group.label}>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                      {group.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: gi * 0.05 + index * 0.04 + 0.2, duration: 0.35 }}
                          className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-white/80"
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
