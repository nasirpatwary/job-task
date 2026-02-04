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
      // 1. Split the text
      const split = new SplitText(titleRef.current, { 
        type: 'chars, words', 
        charsClass: 'inline-block' // Wraps each line to allow a "reveal from bottom" clip
      });

      const tl = gsap.timeline();

      // 2. Animate the Split Lines
      tl.from(split.chars, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        stagger: 0.02,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
      // 3. Animate the rest of the content
      .from('.hero-sub', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2
      }, '-=0.6'); // Starts slightly before the title finish

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="flex items-center justify-center min-h-[calc(100vh-292px)]">
      <div className="text-center px-4">
        {/* We target this specifically for SplitText */}
        <h1 
          ref={titleRef} 
          className="text-6xl font-bold"
        >
          The Future of Commerce is Seamless.
        </h1>
        
        <p className="hero-sub text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Experience a production-ready Next.js application built with GSAP animations, 
          Express integration, and clean architectural principles.
        </p>
        
        <div className="hero-sub flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
            Explore Items
          </button>
          <button className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}