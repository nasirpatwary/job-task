'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';
import Container from '@/shared/Container';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { 
    name: "Alex Rivet", 
    role: "UI Designer", 
    image: "https://i.pravatar.cc/150?u=alex",
    text: "The GSAP integration is buttery smooth. Best starter kit I've used for high-end SaaS projects." 
  },
  { 
    name: "Sarah Chen", 
    role: "Fullstack Dev", 
    image: "https://i.pravatar.cc/150?u=sarah",
    text: "The combination of TanStack Query and Axios makes data management a breeze. Truly production-ready." 
  },
  { 
    name: "Ben Carter", 
    role: "Lead Engineer", 
    image: "https://i.pravatar.cc/150?u=ben",
    text: "Clean architecture and perfect folder structure. It saved us weeks of boilerplate setup time." 
  }
];

export default function Testimonials() {
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 60,
      rotationX: -15,
      stagger: 0.2,
      duration: 1.2,
      ease: "power4.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-16 bg-zinc-950 text-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by Builders
          </h2>
          <p className="text-zinc-500 max-w-lg mx-auto">
            Used by world-class engineers to build scalable, animated interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div 
              key={i} 
              className="testimonial-card group relative p-8 bg-zinc-900/50 rounded-3xl border border-zinc-800 hover:border-blue-500/50 transition-colors duration-500 backdrop-blur-sm"
            >
              {/* Profile Image with Border Glow */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={r.image} 
                  alt={r.name} 
                  className="relative w-full h-full rounded-full border-2 border-zinc-700 object-cover"
                />
              </div>

              {/* Quote Icon */}
              <div className="text-3xl text-blue-500 opacity-30 mb-4 font-serif">“</div>
              
              <p className="text-zinc-300 italic mb-8 leading-relaxed">
                {r.text}
              </p>

              <div className="pt-6 border-t border-zinc-800 text-center">
                <p className="font-bold text-lg">{r.name}</p>
                <p className="text-sm text-blue-500 font-medium uppercase tracking-wider">
                  {r.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}