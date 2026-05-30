import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function ZenQuote() {
  return (
    <section className="w-full py-24 md:py-32 bg-white flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-10"
      >
        {/* Subtle, thin quotation mark */}
        <Quote size={48} strokeWidth={1} className="text-slate-200" />
        
        {/* The Quote */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-800 leading-snug md:leading-tight tracking-tight">
          "Simplicity is the ultimate sophistication."
        </h2>
        
        {/* The Author & Separator */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <div className="w-12 h-[1px] bg-slate-300"></div>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-slate-400 font-medium">
            Leonardo da Vinci
          </p>
        </div>
      </motion.div>
    </section>
  );
}