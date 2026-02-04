'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Container from '@/shared/Container';
import { gsap, ScrollTrigger } from '@/lib/gsap';

 gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: '01', title: 'Create Account', desc: 'Sign up in seconds with our secure mock auth.' },
  { id: '02', title: 'List Gear', desc: 'Use our Zod-validated form to upload your items.' },
  { id: '03', title: 'Get Paid', desc: 'Seamlessly manage transactions with our Express API.' }
];

export default function HowItWorks() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.step-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-10 bg-zinc-50 dark:bg-zinc-900/50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.id} className="step-card group relative p-8 bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <span className="text-5xl font-black opacity-10 absolute top-4 right-6">{step.id}</span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="opacity-70 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}