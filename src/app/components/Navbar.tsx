'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About Us' },
  { href: '/Contact', label: 'Contact Me' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Trigger header animation only on client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`${styles.header} bg-white shadow-md px-4 py-4 fixed top-0 w-full z-50`}>
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-heading text-accent">accountant_pro</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 font-body text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-accent font-semibold'
                    : 'text-gray-700'
                } hover:text-accent transition`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Toggle for Mobile */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-accent transform transition duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-accent transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-accent transform transition duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
            }`}
          />
        </button>
      </nav>

      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-heading text-accent">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-accent text-2xl focus:outline-none"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        {/* Apply styles.navOpen to <ul> when open */}
        <ul className={`${styles.navList} ${isOpen && mounted ? styles.navOpen : ''}`}>
          {links.map((link) => (
            <li key={link.href} className={styles.navItem}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.href
                    ? 'text-accent font-semibold'
                    : 'text-gray-700'
                } hover:text-accent transition`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}
