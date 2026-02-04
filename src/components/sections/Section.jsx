// components/Section.jsx
"use client";
import { motion } from "framer-motion";

export default function Section({ title, bg, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`h-screen flex flex-col items-center justify-center ${bg} p-10`}
    >
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      {children}
    </motion.section>
  );
}