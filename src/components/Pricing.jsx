import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Site',
    price: '$999',
    description: 'Perfect for individuals and small businesses needing a landing page.',
    features: ['1-3 Pages', 'Responsive Design', 'Basic SEO Setup', 'Contact Form', '1 Week Delivery'],
    popular: false,
  },
  {
    name: 'Pro App',
    price: '$2,499+',
    description: 'Ideal for businesses requiring a full-stack modern web application.',
    features: ['Up to 10 Pages', 'Custom UI/UX Design', 'Database Integration', 'User Authentication', 'Advanced SEO & Performance', '1 Month Support'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Complex applications, SaaS products, or long-term projects.',
    features: ['Unlimited Pages', 'Microservices Architecture', 'Custom API Development', 'Third-Party Integrations', 'Priority 24/7 Support'],
    popular: false,
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Pricing Plans
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-brand-500 mx-auto rounded" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass p-8 rounded-3xl border ${plan.popular ? 'border-brand-500 shadow-[0_0_30px_rgba(99,102,241,0.2)] transform md:-translate-y-4' : 'border-slate-800'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="bg-brand-500/20 p-1 rounded-full">
                      <Check className="w-4 h-4 text-brand-400" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-600 hover:bg-brand-500 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
