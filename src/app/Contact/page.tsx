'use client';

import { useEffect, useState } from 'react';

export default function ContactPage() {
  // Simple fade-in effect on mount
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contacts = [
    {
      icon: (
        <svg
          className="h-10 w-10 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2M7 8h2a2 2 0 012 2v6a2 2 0 01-2 2H7M7 8V6a4 4 0 014-4h2a4 4 0 014 4v2"
          ></path>
        </svg>
      ),
      title: 'Address',
      description: '123 Finance Street, Suite 456, Lagos, Nigeria',
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.148-1.758-.867-2.03-.967-.273-.099-.47-.148-.67.148-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.152-.174.203-.297.305-.495.099-.198.05-.371-.025-.52-.074-.148-.67-1.615-.916-2.21-.242-.579-.487-.5-.67-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.694.248-1.29.173-1.41-.074-.118-.272-.198-.57-.347z" />
        </svg>
      ),
      title: 'WhatsApp',
      description: '+234 901 234 5678',
      link: 'https://wa.me/2349012345678',
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-blue-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M20 4H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zM4 6h16l-8 5-8-5zm0 12V8l7.5 4.68c.292.18.626.27.95.27s.658-.09.95-.27L20 8v10H4z" />
        </svg>
      ),
      title: 'Email',
      description: 'contact@accountantpro.fake',
      link: 'mailto:contact@accountantpro.fake',
    },
    {
      icon: (
        <svg
          className="h-10 w-10 text-pink-600"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M7 2C4.243 2 2 4.243 2 7c0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.757-2.243-5-5-5zm7 3h2v10h-2V5zm5 1a3 3 0 110 6 3 3 0 010-6z" />
        </svg>
      ),
      title: 'Instagram',
      description: '@accountantpro_official',
      link: 'https://instagram.com/accountantpro_official',
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1
        className={`text-5xl font-heading text-accent mb-12 text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Get in Touch with Us
      </h1>

      <p
        className={`text-center text-lg font-body text-gray-600 dark:text-gray-400 mb-16 max-w-xl mx-auto transition-opacity duration-1000 delay-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Whether you have questions, want a free consultation, or just want to say hello — we are here to help! Reach out to Accountant Pro through any of the methods below.
      </p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 gap-10 transition-opacity duration-1000 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {contacts.map(({ icon, title, description, link }) =>
          link ? (
            <button
              key={title}
              type="button"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-start gap-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => window.open(link, '_blank')}
            >
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            </button>
          ) : (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-start gap-6 shadow-lg"
            >
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-accent mb-1">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
