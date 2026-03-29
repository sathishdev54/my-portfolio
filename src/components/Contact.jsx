import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let's Work Together
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-500 mx-auto rounded"
          />

          <p className="mt-6 text-slate-400 text-lg">
            Let’s turn your idea into a real product.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-slate-800 space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white">
              Contact Details
            </h3>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-brand-500/20 p-3 rounded-lg">
                <Mail className="text-brand-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <p className="text-white text-lg">sathishdev534@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-brand-500/20 p-3 rounded-lg">
                <Phone className="text-brand-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <p className="text-white text-lg">+91 9994658021</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-brand-500/20 p-3 rounded-lg">
                <MapPin className="text-brand-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white text-lg">Chennai, India</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-2xl border border-slate-800 flex flex-col justify-center text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Get in touch</h3>

            <p className="text-slate-300 text-lg mb-8">
              Ready for your project? <br />
              Let's get started together. Send me a request and receive a
              response within 12 hours.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-brand-600 to-brand-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-brand-500/40 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Book a Call
                <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* <a
                href="mailto:sathishdev534@gmail.com"
                className="px-8 py-4 rounded-2xl border border-slate-700 text-slate-300 hover:text-white hover:border-brand-500 transition-all duration-300"
              >
                Send Email
              </a> */}
            </div>

            <p className="text-slate-500 text-sm mt-8">
              Quick replies • Clear communication • Quality work
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
