import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="container-max grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      <motion.div initial="hidden" animate="visible" variants={heroVariants}>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Craft beautiful<br/>responsive websites</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A compact starter for frontend developers — components, layout patterns, and responsive design best practices.</p>

        <div className="mt-6 flex gap-3">
          <a href="#portfolio" className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-500">See portfolio</a>
          <a href="#contact" className="px-5 py-3 border rounded-lg">Contact me</a>
        </div>

        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          <strong>Tip:</strong> Resize the browser to see responsive breakpoints in action.
        </div>
      </motion.div>

      <motion.div className="order-first md:order-last" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <div className="w-full h-64 sm:h-72 md:h-80 bg-gradient-to-br from-indigo-100 to-white dark:from-indigo-900 dark:to-gray-800 rounded-2xl border flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-2xl font-bold">Responsive by design</div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Flex and Grid together make layouts that adapt.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
