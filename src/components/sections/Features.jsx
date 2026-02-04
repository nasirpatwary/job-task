'use client';
import { useRef } from 'react';
import { Zap, Shield, Cpu, Globe } from 'lucide-react';
import { gsap, useGSAP } from '@/lib/gsap';
import Container from '@/shared/Container';

const features = [
  { icon: <Zap />, title: "Ultra Fast", desc: "Next.js 16 App Router for instant transitions." },
  { icon: <Shield />, title: "Secure Auth", desc: "Zod-validated forms and secure cookie handling." },
  { icon: <Cpu />, title: "TanStack Power", desc: "State-of-the-art data fetching and caching." },
  { icon: <Globe />, title: "Global Scale", desc: "Express.js API ready for production deployment." }
];

export default function Features() {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".feat-card", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: "power2.out"
    });
  }, { scope: container });

  return (
    <Container ref={container} className="py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="feat-card p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:border-blue-500 transition-colors">
            <div className="text-blue-600 mb-4">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-sm opacity-60">{f.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}