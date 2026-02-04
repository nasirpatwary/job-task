'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from "./Logo";

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {
    gsap.from(".footer-section", {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-zinc-900 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="footer-section lg:col-span-2">
            <div className="mb-6 flex items-center gap-2 text-white">
              <Logo />
              <span className="text-xl font-bold tracking-tighter uppercase italic">VEO ARCHITECT</span>
            </div>
            <p className="max-w-xs mb-6 text-sm leading-relaxed">
              Crafting premium digital experiences with Next.js 15, GSAP, and a touch of architectural precision. Reliable tech since 1992.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 rounded-full border border-zinc-800 hover:border-blue-500 hover:text-blue-500 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h6 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h6>
            <ul className="space-y-4 text-sm">
              {['Branding', 'Design', 'Marketing', 'Advertisement'].map((item) => (
                <li key={item}>
                  <a className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h6 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h6>
            <ul className="space-y-4 text-sm">
              {['About us', 'Contact', 'Jobs', 'Press kit'].map((item) => (
                <li key={item}>
                  <a className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h6 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal</h6>
            <ul className="space-y-4 text-sm">
              {['Terms of use', 'Privacy policy', 'Cookie policy'].map((item) => (
                <li key={item}>
                  <a className="hover:text-blue-500 hover:translate-x-1 transition-all inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-section border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
          <p>© {new Date().getFullYear()} VEO Architect Industries Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Server Status</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;