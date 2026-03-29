import { motion } from "framer-motion";
import {
  Code2,
  MonitorPlay,
  Zap,
  Server,
  Smartphone,
  Layout,
} from "lucide-react";

const services = [
  // {
  //   title: 'Frontend Development',
  //   description: 'Building modern, interactive, and responsive user interfaces using React, Vue, and Tailwind CSS.',
  //   icon: <MonitorPlay className="w-8 h-8 text-brand-400" />
  // },
  // {
  //   title: 'Backend Development',
  //   description: 'Developing scalable backend architectures and RESTful APIs using Node.js, Python, and robust databases.',
  //   icon: <Server className="w-8 h-8 text-brand-400" />
  // },
  {
    title: "Full Stack Solutions",
    description:
      "End-to-end web application development from foundational database design to the final UI polish.",
    icon: <Code2 className="w-8 h-8 text-brand-400" />,
  },
  {
    title: "Performance Optimization",
    description:
      "Improving website performance, SEO optimization, and ensuring blazing fast load speeds.",
    icon: <Zap className="w-8 h-8 text-brand-400" />,
  },
  // {
  //   title: 'Web Application Design',
  //   description: 'Crafting thoughtful user experiences (UX) and beautiful user interfaces (UI) before coding begins.',
  //   icon: <Layout className="w-8 h-8 text-brand-400" />
  // },
  {
    title: "Mobile-First Design",
    description:
      "Ensuring your website looks perfect and functions seamlessly on all screen sizes and mobile devices.",
    icon: <Smartphone className="w-8 h-8 text-brand-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-500 mx-auto rounded"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-slate-400 text-lg"
          >
            I provide the best and most modern web development solutions. Here
            is what I can do for you to help your business grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-800/80 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
