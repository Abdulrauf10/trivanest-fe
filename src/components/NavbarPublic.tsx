'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Services', href: '/service' },
  { name: 'Appointment', href: '/appointment' },
];

export default function NanbarPublic() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);
  const [open, setOpen] = useState(false);

  // Load saved active link from localStorage on component mount
  useEffect(() => {
    if (pathname) {
      setActiveLink(pathname);
    }
  }, [pathname]);

  return (
    <>
      <nav className="bg-white shadow-md p-4 w-full fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={'/'}>
            <Image
              src={'/home/trivanest-black.png'}
              width={100}
              height={100}
              alt="trivanest"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className={`capitalize transition-colors ${
                    activeLink === link.href
                      ? 'text-[#5A189A]'
                      : `text-[#7b7b7b] hover:text-[#5A189A]`
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <Link
            href={'https://wa.me/6285236375312'}
            target="_blank"
            className="text-white px-3.5 py-1 rounded-2xl bg-[#FF9E00] text-[15px] hidden md:flex"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 space-y-2"
            >
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`block px-4 py-2 capitalize transition-colors ${
                    activeLink === link.href
                      ? 'text-white bg-[#5A189A]'
                      : 'text-[#7b7b7b] hover:bg-[#5A189A] hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Link
                href={'https://wa.me/6285236375312'}
                target="_blank"
                className="text-white px-3.5 py-1 rounded-2xl bg-[#FF9E00] text-[15px] md:hidden ml-3"
              >
                Contact Us
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
