import React from 'react';

const features = [
  { title: 'Responsive Layouts', desc: 'Grid + Flexbox patterns that scale gracefully.' },
  { title: 'Components', desc: 'Reusable UI components: buttons, cards, navs.' },
  { title: 'Accessibility', desc: 'Focus states, semantic markup, ARIA where needed.' },
  { title: 'Performance', desc: 'Optimized images, lazy load, minimal CSS.' },
];

export default function Features() {
  return (
    <section id="features" className="container-max py-10">
      <h2 className="text-2xl font-semibold">Features</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">Small collection of patterns used in modern frontends.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <article key={idx} className="p-4 rounded-xl border bg-white dark:bg-gray-800">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
