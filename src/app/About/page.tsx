'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

const educationData = [
  { school: 'Veritas University', degree: 'BSc in Computer Science', year: '2024' },
  { school: 'Cisco', degree: 'Networking Certification', year: '2023' },
];

export default function AboutPage() {
  const [animatedIndex, setAnimatedIndex] = useState(-1);

  useEffect(() => {
    if (animatedIndex < educationData.length - 1) {
      const timer = setTimeout(() => {
        setAnimatedIndex(animatedIndex + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [animatedIndex]);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 pt-[100px]">
      <h1 className="text-4xl font-bold mb-6 text-primary font-heading text-center">
        Chidi Onyekwere
      </h1>
<div className={`${styles.imageWrapper} flex justify-center mb-10 rounded-full shadow-lg`}>
  <Image
    src="/accountant1.jpg"
    alt="Portrait of Chidi Onyekwere"
    width={192}
    height={192}
    className="rounded-full object-cover"
    priority
  />
</div>


      <p className="mb-10 font-body text-lg text-gray-700 text-center">
        Chidi Onyekwere is a passionate software developer and UI/UX designer with certifications
        from Cisco and a BSc in Computer Science from Veritas University.
      </p>

      <ul className="space-y-6">
        {educationData.map((item, index) => {
          const delayClass = styles[`delay${index}`] || '';
          return (
            <li
              key={index}
              className={`${styles.educationItem} ${index <= animatedIndex ? styles.visible : ''} ${delayClass} p-4 rounded-md shadow-md bg-white border border-gray-200`}
            >
              <h3 className="text-xl font-semibold text-primary">{item.school}</h3>
              <p className="text-gray-700">{item.degree}</p>
              <span className="text-sm text-gray-500">{item.year}</span>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(44, 122, 123, 0.7);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(44, 122, 123, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(44, 122, 123, 0);
          }
        }
      `}</style>
    </main>
  );
}
