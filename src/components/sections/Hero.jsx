'use client';

import { useEffect, useRef } from 'react';
import { gsap, SplitText } from '@/lib/gsap';
// Register the plugin
gsap.registerPlugin(SplitText);

export default function Hero() {
  const root = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const split = new SplitText(titleRef.current, { 
        type: 'chars, words', 
        charsClass: 'inline-block' 
      });

      const tl = gsap.timeline();

      tl.from(split.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })

      .from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
      }, '-=0.6');

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="flex items-center justify-center min-h-[calc(100vh-292px)]">
      <div className="text-center px-4 space-y-4">
        <h1 
          ref={titleRef} 
          className="text-3xl md:text-5xl lg:text-6xl font-bold"
        >
          Upgrade Your Lifestyle. Everyday
        </h1>
        
        <p className="hero-sub text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Sub-headline: Explore the latest in Electronics, trendiest Fashion, and smartest Home
        </p>
        
        <div className="hero-sub flex flex-wrap gap-4 justify-center">
          <button className="px-8 py-3 w-full md:w-fit bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
          <button className="px-8 py-3 w-full md:w-fit border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            Explore Deals
          </button>
        </div>
      </div>
    </section>
  );
}