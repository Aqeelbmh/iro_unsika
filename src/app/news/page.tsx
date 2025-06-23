"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { news } from './newsData';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function NewsPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Latest News Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h1 className="text-4xl font-extrabold mb-10 text-blue-800 tracking-tight text-center drop-shadow-lg">{t('news.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {news.map((item, idx) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(80,120,255,0.18)' }}
              className="bg-white rounded-3xl shadow-xl border border-blue-100 p-0 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {item.images && item.images.length > 0 && (
                <div className="h-48 w-full overflow-hidden flex items-center justify-center bg-blue-50">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    priority={idx === 0}
                  />
                </div>
              )}
              <div className="p-7 flex flex-col flex-1">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold rounded-full px-3 py-1 mb-3 self-start shadow-sm">{item.date}</span>
                <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-200">{item.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3 text-base">{item.desc}</p>
                <div className="mt-auto">
                  <Link href={`/news/${item.slug}`} className="inline-block text-white bg-blue-700 hover:bg-blue-800 font-semibold px-5 py-2 rounded-full shadow transition-colors duration-200">{t('news.readMore')}</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-3xl font-bold mb-8 text-blue-800 tracking-tight text-center">Upcoming Events</h2>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg shadow">15</div>
            <div>
              <span className="font-semibold text-gray-800">July 2024</span>
              <div className="text-gray-600">International Summer Course</div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg shadow">01</div>
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