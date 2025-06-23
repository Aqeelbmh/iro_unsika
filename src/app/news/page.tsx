"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { news } from './newsData';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-20">
      {/* Latest News Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h1 className="text-4xl font-extrabold mb-10 text-blue-800 tracking-tight">{t('news.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {news.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(80,120,255,0.18)' }}
              className="bg-white rounded-2xl shadow-lg border border-blue-100 p-7 flex flex-col justify-between hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-3 py-1 mb-3">{item.date}</span>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight line-clamp-2">{item.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.desc}</p>
              </div>
              <Link href={`/news/${item.slug}`} className="text-blue-600 hover:underline font-semibold mt-auto">{t('news.readMore')}</Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-3xl font-bold mb-8 text-blue-800 tracking-tight">Upcoming Events</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">15</div>
            <div>
              <span className="font-semibold text-gray-800">July 2024</span>
              <div className="text-gray-600">International Summer Course</div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg">01</div>
            <div>
              <span className="font-semibold text-gray-800">August 2024</span>
              <div className="text-gray-600">Scholarship Application Deadline</div>
            </div>
          </li>
        </ul>
      </motion.section>
    </div>
  );
} 