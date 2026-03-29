import { motion } from "framer-motion";
import myPic from "../assets/my-pic.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 to-purple-500 rounded-2xl blur-2xl opacity-20 -z-10 transform scale-95" />
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop"
              alt="Sathish S"
              className="w-full h-auto rounded-2xl shadow-2xl border border-slate-800 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            {/* Image Card */}
            <div className="relative w-[380px] md:w-[380px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
              {/* Image */}
              <img
                src={myPic}
                alt="Sathish"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-5 left-5">
                {/* Tag */}
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-2 w-fit">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-xs text-white">
                    Full Stack Developer
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-2xl font-bold text-white">Sathish</h3>

                {/* Info */}
                <p className="text-slate-300 text-xs">Chennai, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            {/* <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-brand-500 mb-8 rounded" />

            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              I am a passionate Full Stack Developer with expertise in crafting
              robust, scalable, and visually stunning web applications. Over the
              years, I've had the privilege of working with a diverse range of
              clients, delivering solutions that not only look great but perform
              flawlessly under pressure.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              My approach focuses on writing clean, maintainable code and
              building seamless, intuitive user experiences from the ground up,
              utilizing modern technologies to provide the best outcomes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">1+</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">2+</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                  Projects Built
                </p>
              </div> 
            </div>*/}
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-20 h-1 bg-brand-500 mb-8 rounded" />

            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              One mind, clear vision. I'm Sathish — the developer behind every
              project you see here. No big team, no unnecessary delays, just
              focused work and real results.
            </p>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              I build modern, fast, and scalable websites that help businesses
              grow. From idea to execution, I handle everything with efficiency,
              clean code, and attention to detail — delivering exactly what
              works, without wasting time.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">100%</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-white mb-2">2026</h4>
                <p className="text-slate-400 text-sm uppercase tracking-wider font-semibold">
                  Started Journey
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
