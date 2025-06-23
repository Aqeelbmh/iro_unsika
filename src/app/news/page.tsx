"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export const news = [
  {
    slug: 'rector-of-unsika-highlights-legal-and-ethical-aspects-of-artificial-intelligence',
    title: 'Higher Education at International Forum in China',
    date: '2025-05-23/24',
    desc: "This activity marks the continuation of UNSIKA's participation in the 2025 Belt and Road Academic Conference on Technical and Vocational Education and Training (TVET), held on May 23–24, 2025, in Shenzhen, China.",
  },
  { slug: 'international-summer-course-2024', title: 'International Summer Course 2024', date: '2024-07-15', desc: 'Join our upcoming summer course with international lecturers and students.' },
  { slug: 'scholarship-applications-open', title: 'Scholarship Applications Open', date: '2024-08-01', desc: 'Apply now for scholarships for the 2024/2025 academic year.' },
  { slug: 'new-partnership-with-seoul-university', title: 'New Partnership with Seoul University', date: '2024-07-20', desc: 'UNSIKA IRO establishes a new partnership for joint research and student exchange.' },
];

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