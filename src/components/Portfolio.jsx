import React from 'react';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const gridVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const itemVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="container-max py-10">
      <h2 className="text-2xl font-semibold">Portfolio</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Select work — click to view (placeholder links).</p>

      <motion.div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={gridVariant} initial="hidden" animate="visible">
        {projects.map(p => (
          <motion.a key={p.id} href="#" className="block group rounded-xl overflow-hidden border bg-white dark:bg-gray-800" variants={itemVariant} whileHover={{ scale: 1.02 }}>
            <div className="h-40 bg-gradient-to-r from-gray-100 to-white dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <span className="text-xl font-bold tracking-tight">{p.title}</span>
            </div>
            <div className="p-4">
              <div className="font-semibold">{p.subtitle}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">A short description that illustrates the project type and technologies used.</div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
