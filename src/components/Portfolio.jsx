import { motion } from 'framer-motion';
import { ExternalLink, Link } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard Overview',
    description: 'A modern analytics dashboard for a fintech company featuring real-time data visualization and a dark-mode first design.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['React', 'Tailwind CSS', 'Recharts'],
    link: '#',
  },
  {
    title: 'E-Commerce Mobile App',
    description: 'A seamless mobile shopping experience built with React Native. Includes secure checkout and real-time inventory.',
    image: 'https://images.unsplash.com/photo-1607528359288-51828ac95da9?q=80&w=800&auto=format&fit=crop',
    tags: ['Next.js', 'Framer Motion', 'Stripe'],
    link: '#',
  },
  {
    title: 'Agency Landing Page',
    description: 'A high-conversion landing page for a creative agency, focusing on premium typography, micro-interactions and performance.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    tags: ['Vite', 'React', 'GSAP'],
    link: '#',
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-500 mx-auto rounded" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-colors group"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={project.link} className="p-3 bg-brand-600 rounded-full hover:bg-brand-500 transition text-white">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.link} className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white">
                    <Link size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-semibold bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full border border-brand-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
