import React from 'react';

export default function Nav({ mobileOpen, setMobileOpen, dark, setDark }) {
  return (
    <header className="container-max py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold tracking-tight">Front<span className="text-indigo-600 dark:text-indigo-400">Dev</span></div>
          <p className="text-sm text-gray-500 dark:text-gray-300 hidden sm:block">Build modern, responsive UIs</p>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#portfolio" className="hover:text-indigo-600">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
          <button
            onClick={() => setDark(!dark)}
            aria-pressed={dark}
            className="ml-2 px-3 py-1 rounded-lg border hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md border"
            aria-label="Toggle theme"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <button
            className="p-2 rounded-md border"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="mt-3 md:hidden bg-white dark:bg-gray-800 rounded-lg p-4 border">
          <a href="#features" className="block py-2">Features</a>
          <a href="#portfolio" className="block py-2">Portfolio</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  );
}
