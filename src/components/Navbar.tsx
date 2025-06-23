"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder for language switcher (to be integrated with i18n)
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'id', label: 'ID' },
];

const linkVariants = {
  initial: { opacity: 1, y: 0 },
  hover: { y: -2, color: '#2563eb', transition: { stiffness: 400, damping: 20 } },
};

const programSlugToKey: Record<string, string> = {
  'student-exchange': 'studentExchange',
  'internships': 'internships',
  'short-courses': 'shortCourses',
  'scholarships': 'scholarships',
  'partnerships': 'partnerships',
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <Image 
                src="/assets/logo unsika (1).png" 
                alt="UNSIKA Logo" 
                width={80} 
                height={80} 
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-2">
            <motion.div>
              <Link href="/about" className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200">{t('nav.aboutUs')}</Link>
            </motion.div>
            <div className="relative group">
              <motion.button className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-1">
                {t('nav.programs')}
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-20">
                <div className="py-2">
                  <Link href="/programs/iup" className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium">IUP</Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {["student-exchange","internships","short-courses","scholarships","partnerships"].map(slug => (
                    <Link key={slug} href={`/programs/${slug}`} className="block px-4 py-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
                      {t(`nav.${programSlugToKey[slug]}`)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <motion.div>
              <Link href="/partners" className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200">{t('nav.partners')}</Link>
            </motion.div>
            <motion.div>
              <Link href="/news" className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200">{t('nav.newsEvents')}</Link>
            </motion.div>
            <motion.div>
              <Link href="/gallery" className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200">{t('nav.gallery')}</Link>
            </motion.div>
            <motion.div>
              <Link href="/downloads" className="text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200">{t('nav.downloads')}</Link>
            </motion.div>
            {/* Language Switcher */}
            <select
              className="mx-2 border-gray-200 rounded-lg px-3 py-2 text-sm bg-gray-50 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
              value={language}
              onChange={e => setLanguage(e.target.value as 'en' | 'id')}
              aria-label="Select language"
            >
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
            {/* Contact CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="bg-blue-500 text-white font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-blue-600 transition-all duration-300">
                {t('nav.contact')}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-500 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-500 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-500 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden border-t border-white/30 bg-white/20 backdrop-blur-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { href: '/about', label: t('nav.aboutUs') },
                  { href: '/partners', label: t('nav.partners') },
                  { href: '/news', label: t('nav.newsEvents') },
                  { href: '/gallery', label: t('nav.gallery') },
                  { href: '/downloads', label: t('nav.downloads') },
                  { href: '/contact', label: t('nav.contact') }
                ].map(item => (
                  <motion.div key={item.href} variants={linkVariants} initial="initial" whileHover="hover">
                    <Link href={item.href} className="block py-3 text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200" onClick={() => setMenuOpen(false)}>{item.label}</Link>
                  </motion.div>
                ))}
                <div className="space-y-2">
                  <span className="block text-sm font-semibold text-gray-400 uppercase tracking-wide">{t('nav.programs')}</span>
                  <div className="pl-4 space-y-2">
                    <motion.div key="iup-mobile" variants={linkVariants} initial="initial" whileHover="hover">
                      <Link href="/programs/iup" className="block py-2 text-gray-500 hover:text-blue-500 transition-colors duration-200" onClick={() => setMenuOpen(false)}>IUP</Link>
                    </motion.div>
                    {[
                      "student-exchange","internships","short-courses","scholarships","partnerships"].map(slug => (
                      <motion.div key={slug} variants={linkVariants} initial="initial" whileHover="hover">
                        <Link href={`/programs/${slug}`} className="block py-2 text-gray-500 hover:text-blue-500 transition-colors duration-200" onClick={() => setMenuOpen(false)}>{t(`nav.${programSlugToKey[slug]}`)}</Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Language Switcher */}
                <select
                  className="w-full mt-4 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white/80 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  value={language}
                  onChange={e => setLanguage(e.target.value as 'en' | 'id')}
                  aria-label="Select language"
                >
                  {languages.map(l => (
                    <option key={l.code} value={l.code}>{l.label}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}