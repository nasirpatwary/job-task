'use client';
import { gsap } from '@/lib/gsap';
import { useState, useRef } from 'react';


const faqs = [
  { 
    q: "Is the authentication real?", 
    a: "It uses a mock cookie-based system ideal for prototyping production flows and testing middleware logic without complex OAuth setup." 
  },
  { 
    q: "Can I use this with a real DB?", 
    a: "Absolutely. The Express.js backend is structured to be easily swapped with Mongoose (MongoDB) or Prisma (PostgreSQL) models." 
  },
  { 
    q: "How does the animation work?", 
    a: "We use GSAP to calculate the 'auto' height of the container, allowing for a smooth transition from 0 to the natural size of the text." 
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const container = useRef();

  const toggleFAQ = (index) => {
    const isOpening = open !== index;
    const content = document.querySelector(`.faq-content-${index}`);
    const arrow = document.querySelector(`.faq-arrow-${index}`);

    // Close all others
    faqs.forEach((_, i) => {
      if (i !== index) {
        gsap.to(`.faq-content-${i}`, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(`.faq-arrow-${i}`, { rotate: 0, duration: 0.4 });
      }
    });

    // Toggle current
    if (isOpening) {
      setOpen(index);
      gsap.fromTo(content, 
        { height: 0, opacity: 0 }, 
        { height: "auto", opacity: 1, duration: 0.5, ease: "slow(0.7, 0.7, false)" }
      );
      gsap.to(arrow, { rotate: 45, duration: 0.4, color: "#3b82f6" });
    } else {
      setOpen(null);
      gsap.to(content, { height: 0, opacity: 0, duration: 0.4, ease: "power2.inOut" });
      gsap.to(arrow, { rotate: 0, duration: 0.4, color: "currentColor" });
    }
  };

  return (
    <section ref={container} className="py-10 max-w-3xl mx-auto px-6">
      <h2 className="text-2xl md:text-4xl font-bold mb-16 text-center tracking-tight">
        Questions? <span className="text-blue-600">We have answers.</span>
      </h2>
      
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`group rounded-2xl border transition-colors duration-300 ${
              open === i ? 'border-blue-500/30 bg-blue-50/30 dark:bg-blue-900/5' : 'border-zinc-200 dark:border-zinc-800'
            }`}
          >
            <button 
              className="w-full flex justify-between items-center p-6 text-left outline-none"
              onClick={() => toggleFAQ(i)}
            >
              <h3 className={`font-semibold text-lg transition-colors ${open === i ? 'text-blue-600' : ''}`}>
                {faq.q}
              </h3>
              <span className={`faq-arrow-${i} text-2xl transition-transform inline-block`}>
                +
              </span>
            </button>
            
            <div className={`faq-content-${i} overflow-hidden h-0 opacity-0`}>
              <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}