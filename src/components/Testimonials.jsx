import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CEO, TechNova',
    content: "Sathish is simply phenomenal. The modern design and fast load times he delivered completely transformed our company's digital presence. Best full stack developer we've worked with.",
  },
  {
    name: 'Sarah Williams',
    role: 'Founder, CreativeSpace',
    content: 'The attention to detail and smooth micro-animations on our agency portfolio really made us stand out against the competition. Sathish understood our vision perfectly.',
  },
  {
    name: 'David Lee',
    role: 'Product Manager, SaaS Corp',
    content: 'Very professional, incredibly responsive, and writes exceptionally clean code. The dashboard he built for us is highly intuitive and scalable. Highly recommend!',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 border-y border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Client Testimonials
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-500 mx-auto rounded" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 p-8 rounded-2xl border border-slate-800 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800 rotate-180 opacity-50" />
              <p className="text-slate-300 leading-relaxed mb-6 italic relative z-10">"{test.content}"</p>
              <div>
                <h4 className="text-white font-bold">{test.name}</h4>
                <p className="text-brand-400 text-sm">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
