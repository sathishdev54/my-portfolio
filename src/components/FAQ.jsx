import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Why Sathish?",
    answer:
      'My motto: "Faster live, faster growth". Simple projects are often completed in 1-2 weeks. Complex platforms require more time depending on scope.',
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A standard minimal portfolio website takes about 1-2 weeks. Full-scale web applications typically take anywhere from 1 to 3 months depending on the scope, features, and revisions.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "All prices are calculated individually on request. Every project is unique and priced based on your specific requirements and scope. Contact me for a free, no-obligation quote.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I specialize in React, Next.js, and Vite for the frontend alongside Tailwind CSS and Framer Motion for styling and animations. For the backend, I frequently use Node.js, Express, and PostgreSQL/MongoDB.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Absolutely. Depending on the pricing plan or agreement, I provide ongoing maintenance, server support, bug fixes, and feature updates so you can focus on your business.",
  },
  {
    question: "Do you offer in-person consultations?",
    answer:
      "Yes, personal meetings can be arranged if necessary. However, we primarily work digitally via video calls — flexible to your schedule.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-500 mx-auto rounded"
          />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-800 rounded-xl overflow-hidden glass"
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-500 flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
