'use client';
import Link from "next/link";
import { useRef } from "react";
import { IoLogoAmplify } from "react-icons/io5";
import { gsap } from "gsap";

const Logo = () => {
  const logoRef = useRef();

  // GSAP Hover Animation
  const onMouseEnter = () => {
    gsap.to(".logo-icon", { 
      rotate: 360, 
      duration: 0.8, 
      ease: "back.out(1.7)" 
    });
    gsap.to(".logo-text", { 
      color: "#3b82f6", // Blue-500
      duration: 0.3 
    });
  };

  const onMouseLeave = () => {
    gsap.to(".logo-icon", { 
      rotate: 0, 
      duration: 0.6, 
      ease: "power2.inOut" 
    });
    gsap.to(".logo-text", { 
      color: "currentColor", 
      duration: 0.3 
    });
  };

  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 group transition-all"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        {/* Background Glow on Hover */}
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <IoLogoAmplify className="logo-icon relative text-3xl text-primary transition-transform" />
      </div>

      <span className="logo-text text-2xl font-black tracking-tighter uppercase italic">
        NASIR<span className="text-primary italic">.</span>IO
      </span>
    </Link>
  );
};

export default Logo;