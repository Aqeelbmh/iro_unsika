"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { news } from './news/newsData'; // Import the news array from the news page

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
};

const backgroundImages = [
  '/assets/hero/hero (1).jpeg',
  '/assets/hero/hero_2.jpeg',
  '/assets/hero/hero_3.jpeg'
];

export default function Home() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Banner */}
      <motion.section
        {...fadeInUp}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative text-gray-700 py-20 flex flex-col items-center justify-center text-center overflow-hidden min-h-[78vh]"
      >
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="UNSIKA Campus Background"
              fill
              className="object-cover object-center sm:object-top"
              priority={currentImage === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent z-10" /> {/* Enhanced overlay */}
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Welcome Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-4xl mx-auto px-4 text-center -mt-36 relative z-20">
        {/* UNSIKA logo & Title */}
        <motion.div 
          {...fadeIn} 
          transition={{ duration: 0.7, ease: 'easeOut' }} 
          className="mb-6 flex flex-col items-center bg-white/30 backdrop-blur-lg border border-white/40 p-8 rounded-3xl shadow-2xl"
        >
          <motion.div whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Image
              src="/assets/logo unsika (1).png" 
              alt="UNSIKA Logo" 
              width={160} 
              height={160} 
              className="object-contain mb-4 drop-shadow-lg"
              priority
            />
          </motion.div>
          <motion.span {...fadeIn} transition={{ duration: 0.7, ease: 'easeOut' }} className="text-2xl font-semibold text-gray-700 tracking-wide">International Relation Office</motion.span>
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-700 mt-8">Welcome to UNSIKA IRO</h1>
        <p className="text-lg md:text-xl text-gray-500">Empowering global engagement, partnerships, and opportunities for students and scholars at Universitas Singaperbangsa Karawang.</p>
      </motion.section>

      {/* About UNSIKA IRO */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">About UNSIKA IRO</h2>
        <p className="text-lg text-gray-500">{t('home.about.description')}</p>
      </motion.section>

      {/* Vision and Mission */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Vision</h2>
        <p className="mb-8 text-lg text-gray-500">
          To become a dynamic and globally connected gateway that advances Universitas Singaperbangsa Karawang&apos;s role as a center of excellence in education, research, and community engagement through international collaboration and intercultural understanding.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Mission</h2>
        <ul className="text-lg text-gray-500 list-disc list-inside space-y-3 text-left max-w-2xl mx-auto mb-8">
          <li>To develop and strengthen strategic international partnerships that support academic and research excellence.</li>
          <li>To facilitate international mobility programs for students, lecturers, and researchers that foster global competencies and cross-cultural experiences.</li>
          <li>To provide professional, accessible, and comprehensive services for international students, scholars, and partners.</li>
          <li>To promote UNSIKA&apos;s global visibility and active participation in international academic networks and forums.</li>
          <li>To ensure that all international programs reflect the values of integrity, innovation, inclusiveness, and contribution to sustainable development.</li>
        </ul>
      </motion.section>

      {/* IUP Experience Highlight */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-3xl mx-auto px-4 text-center bg-blue-50/60 rounded-xl shadow-sm p-8 border border-blue-100/50 mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Why Choose the International Undergraduate Program (IUP)?</h3>
        <p className="text-lg text-blue-900">
          The International Undergraduate Program (IUP) is not only about studying in college, but also about building cross-cultural experiences, strengthening global networks, and opening foreign students&apos; insights into Indonesia from within.
        </p>
      </motion.section>

      {/* Featured Programs */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-700">{t('home.featuredPrograms.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0,1,2].map(idx => (
            <motion.div
              key={idx}
              {...fadeInUp}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 + idx * 0.1 }}
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mb-4">
                {idx === 0 && (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                )}
              </div>
              <span className="text-blue-600 font-bold text-lg mb-2">
                {[
                  t('home.featuredPrograms.studentExchange.title'),
                  t('home.featuredPrograms.internships.title'),
                  t('home.featuredPrograms.scholarships.title'),
                ][idx]}
              </span>
              <p className="text-gray-500 text-center">
                {[
                  t('home.featuredPrograms.studentExchange.description'),
                  t('home.featuredPrograms.internships.description'),
                  t('home.featuredPrograms.scholarships.description'),
                ][idx]}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest News & Events */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-6xl mx-auto px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-3xl py-12 mb-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-blue-800 drop-shadow-lg">{t('home.newsEvents.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {news.slice(0, 3).map((item, idx: number) => (
            <motion.div
              key={item.slug}
              {...fadeInUp}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 + idx * 0.1 }}
              className="bg-white rounded-3xl shadow-xl border border-blue-100 p-7 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(80,120,255,0.18)' }}
            >
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-3 py-1 mb-3 self-start shadow-sm">{item.date}</span>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">{item.title}</h2>
              <p className="text-gray-600 mb-4 line-clamp-3 text-base">{item.desc}</p>
              <div className="mt-auto">
                <Link href={`/news/${item.slug}`} className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-semibold px-5 py-2 rounded-full shadow transition-colors duration-200">{t('news.readMore')}</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quick Links */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">{t('home.quickLinks.title')}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/programs/iup" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">International Undergraduate Program</Link>
          <span className="text-gray-400">|</span>
          <Link href="/programs/student-exchange" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Student Exchange</Link>
          <span className="text-gray-400">|</span>
          <Link href="/programs/internships" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Internships</Link>
          <span className="text-gray-400">|</span>
          <Link href="/downloads" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Downloads</Link>
        </div>
      </motion.section>
    </div>
  );
}
