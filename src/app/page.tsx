'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './HoverMessageSection.module.css';

function HoverMessageSection() {
  return (
    <div className={styles.wrapper}>
      <Image
        src="/accountant1.jpg"
        alt="Decorative"
        width={400}
        height={400}
        className="rounded-2xl shadow-lg object-cover"
        priority
      />
      <div className={styles.innerText}>
        Welcome to Accountant Pro
      </div>
    </div>
  );
}

function BannerSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-6 mb-20">
      <Image
        src="/accountant1.jpg"
        alt="Banner"
        width={1200}
        height={600}
        className="w-full h-auto object-cover rounded-2xl shadow-lg"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <p className="text-white text-3xl md:text-4xl font-heading fade-in-text text-center px-6">
          Empowering Financial Clarity for Every Business
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* 1. First Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl font-heading text-accent mb-6 leading-tight">
            Professional Accounting Solutions for Your Business
          </h1>
          <p className="text-lg font-body text-gray-700 dark:text-gray-300 mb-6">
            We help businesses stay financially healthy with expert accounting
            and tax services tailored to your needs.
          </p>
          <Link href="/Contact">
            <button className="bg-accent text-white px-6 py-3 rounded-lg font-body hover:bg-accent-hover transition">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          {/* Optional placeholder can remain or be removed */}
        </div>
      </section>

      {/* 2. Second Section: Image + Description */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Animated Image */}
        <div className="md:w-1/2 flex justify-center">
          <HoverMessageSection />
        </div>
        {/* Right: Static Text Block */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-heading text-accent mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg font-body text-gray-700 dark:text-gray-300 mb-4">
            At Accountant Pro, our mission is to provide tailored financial
            guidance that empowers small and medium businesses to grow
            confidently. We combine deep industry expertise with cutting-edge
            technology to ensure accuracy, transparency, and peace of mind.
          </p>
          <p className="text-lg font-body text-gray-700 dark:text-gray-300">
            Whether you need bookkeeping, tax planning, or full-service
            accounting, our dedicated team is here to streamline your finances—
            so you can focus on running your business.
          </p>
        </div>
      </section>

      {/* ✅ 3. New Banner Section (before Accolades) */}
      <BannerSection />

      {/* 4. Third Section: Accolades & Achievements */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-heading text-accent mb-8">
          Accolades & Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* All accolades kept exactly the same */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v5h6v-5c0-1.657-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11v-2a7 7 0 00-14 0v2" />
              </svg>
            </div>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300">
              ISO 9001 Certified Firm
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m0 0l-2-2-4 4m6 4h.01M12 4v4m0 8v4" />
              </svg>
            </div>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300">
              Top 100 Accounting Firms 2023
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300">
              Client Satisfaction Rate 98%
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </div>
            <p className="text-lg font-body text-gray-700 dark:text-gray-300">
              20+ Years Industry Experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
