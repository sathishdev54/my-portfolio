import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import img1 from "../assets/gym.png";
import img2 from "../assets/medi.png";

const projects = [
  {
    title: "Fitness Studio Website",
    description:
      "A modern fitness landing page with a clean UI, built to showcase gym services, trainers, and membership plans with smooth interactions and responsive design.",
    image: img1,
    tags: ["React", "Tailwind CSS"],
    link: "https://demo-gym-site.netlify.app/",
  },
  {
    title: "Medical Diagnosis ChatBot",
    description:
      "An AI-powered chatbot that assists users by analyzing symptoms, providing possible conditions, and suggesting remedies, diet plans, and health guidance.",
    image: img2,
    tags: ["Next.js", "Framer Motion"],
    link: "https://medical-chatbot-olive.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6 sm:px-8 md:px-12">
        {/* Heading */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-brand-600 rounded-full hover:bg-brand-500 transition"
                  >
                    <ExternalLink className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mt-2 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full border border-brand-500/20"
                    >
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
