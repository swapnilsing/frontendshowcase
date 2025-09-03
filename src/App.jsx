import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import './index.css';

export default function App() {
  const getInitialTheme = () => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  }, [dark]);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-200">
        <Nav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} dark={dark} setDark={setDark} />

        <main>
          <Hero />
          <Features />
          <Portfolio />
          <ContactForm />
        </main>

        <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
          Built with ❤️ — FrontendShowcase • © {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
