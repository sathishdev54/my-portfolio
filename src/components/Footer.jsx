import { Code, Briefcase, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-brand-400 to-purple-500 bg-clip-text text-transparent">
            Sathish<span className="text-white">.S</span>
          </a>
          <p className="text-slate-500 mt-2 text-sm">
            © {new Date().getFullYear()} Sathish S. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 text-slate-400 hover:text-brand-400 hover:bg-slate-900 rounded-lg transition-colors">
            <Code size={20} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-brand-400 hover:bg-slate-900 rounded-lg transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="#" className="p-2 text-slate-400 hover:text-brand-400 hover:bg-slate-900 rounded-lg transition-colors">
            <MessageSquare size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
