"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function ProgramsPage() {
  const { t, getTranslation } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-700 mb-4">{t('programs.title')}</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
          {t('programs.description')}
        </p>
      </motion.div>

      {/* Programs Grid */}
      <motion.div {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {Array.from({ length: 6 }).map((_, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + idx * 0.12, ease: 'easeOut' }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/** The card content is unchanged, just animated */}
            {(() => {
              const cards = [
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: t('programs.studentExchange.title'),
                  desc: t('programs.studentExchange.description'),
                  features: getTranslation('programs.studentExchange.features') as string[],
                  link: '/programs/student-exchange',
                  cta: t('common.learnMore'),
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  ),
                  title: t('programs.internships.title'),
                  desc: t('programs.internships.description'),
                  features: getTranslation('programs.internships.features') as string[],
                  link: '/programs/internships',
                  cta: t('common.learnMore'),
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  ),
                  title: t('programs.shortCourses.title'),
                  desc: t('programs.shortCourses.description'),
                  features: getTranslation('programs.shortCourses.features') as string[],
                  link: '/programs/short-courses',
                  cta: t('common.learnMore'),
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  ),
                  title: t('programs.scholarships.title'),
                  desc: t('programs.scholarships.description'),
                  features: getTranslation('programs.scholarships.features') as string[],
                  link: '/programs/scholarships',
                  cta: t('common.learnMore'),
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: t('programs.partnerships.title'),
                  desc: t('programs.partnerships.description'),
                  features: getTranslation('programs.partnerships.features') as string[],
                  link: '/programs/partnerships',
                  cta: t('common.learnMore'),
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: t('programs.customPrograms.title'),
                  desc: t('programs.customPrograms.description'),
                  features: getTranslation('programs.customPrograms.features') as string[],
                  link: '/contact',
                  cta: t('common.contactUs'),
                },
              ];
              const card = cards[idx];
              return (
                <>
                  <div className="flex-grow">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mb-4">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">{card.title}</h3>
                    <p className="text-gray-500 mb-4">{card.desc}</p>
                    <ul className="text-sm text-gray-500 mb-6 space-y-1">
                      {card.features?.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a href={card.link} className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200 mt-auto">
                    {card.cta}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </>
              );
            })()}
          </motion.div>
        ))}
      </motion.div>

      {/* Program Statistics */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-700 mb-8 text-center">{t('programs.statistics.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { value: '500+', label: t('programs.statistics.studentsExchanged') },
            { value: '50+', label: t('programs.statistics.partnerInstitutions') },
            { value: '25+', label: t('programs.statistics.countries') },
            { value: '100+', label: t('programs.statistics.activePrograms') },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application CTA */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="text-center bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">{t('programs.cta.title')}</h2>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          {t('programs.cta.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a href="/apply" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-8 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            {t('programs.cta.applyNow')}
          </motion.a>
          <motion.a href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="border-2 border-blue-400 text-blue-500 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
            {t('programs.cta.contactUs')}
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
} 