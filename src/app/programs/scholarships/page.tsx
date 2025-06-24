"use client";

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function ScholarshipsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Scholarships & Financial Aid</h1>
        <p className="text-lg text-gray-600">Discover scholarship opportunities to support your international education journey at UNSIKA and partner institutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Program Overview */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Scholarship Overview</h2>
            <p className="text-gray-600 mb-4">
              UNSIKA International Office offers various scholarship opportunities for both incoming and outgoing students. 
              These scholarships are designed to support academic excellence, research initiatives, and international collaboration.
            </p>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'Full and partial scholarships available',
                'Merit-based and need-based options',
                'Research and academic scholarships',
                'Government and private funding sources',
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Available Scholarships */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Scholarships</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: 'UNSIKA Excellence Scholarship',
                  type: 'Full Tuition',
                  typeColor: 'bg-green-100 text-green-700',
                  desc: 'Full tuition coverage for outstanding students with exceptional academic records and research potential.',
                  eligibility: ['GPA 3.8+', 'Research proposal', 'English proficiency'],
                  coverage: ['Full tuition', 'Monthly stipend', 'Research allowance']
                },
                {
                  title: 'International Student Scholarship',
                  type: 'Partial',
                  typeColor: 'bg-blue-100 text-blue-700',
                  desc: 'Partial tuition coverage for international students demonstrating academic excellence and financial need.',
                  eligibility: ['GPA 3.5+', 'Financial need', 'English proficiency'],
                  coverage: ['50% tuition', 'Accommodation support', 'Health insurance']
                },
                {
                  title: 'Research Fellowship',
                  type: 'Research',
                  typeColor: 'bg-purple-100 text-purple-700',
                  desc: 'Research funding for graduate students conducting innovative research in collaboration with international partners.',
                  eligibility: ['Graduate student', 'Research proposal', 'Faculty recommendation'],
                  coverage: ['Research funding', 'Travel allowance', 'Conference support']
                },
                {
                  title: 'Exchange Program Scholarship',
                  type: 'Exchange',
                  typeColor: 'bg-orange-100 text-orange-700',
                  desc: 'Financial support for students participating in exchange programs with partner universities.',
                  eligibility: ['Exchange program participant', 'GPA 3.0+', 'Language proficiency'],
                  coverage: ['Travel allowance', 'Monthly stipend', 'Insurance coverage']
                },
              ].map((scholarship, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-sky-700 text-lg">{scholarship.title}</h3>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`${scholarship.typeColor} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {scholarship.type}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 mb-3">{scholarship.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Eligibility:</span>
                      <motion.ul 
                        variants={staggerContainer}
                        className="list-disc pl-4 text-gray-600 mt-1"
                      >
                        {scholarship.eligibility.map((item, itemIndex) => (
                          <motion.li key={itemIndex} variants={staggerItem}>
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Coverage:</span>
                      <motion.ul 
                        variants={staggerContainer}
                        className="list-disc pl-4 text-gray-600 mt-1"
                      >
                        {scholarship.coverage.map((item, itemIndex) => (
                          <motion.li key={itemIndex} variants={staggerItem}>
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Requirements */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Requirements</h2>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'GPA 3.5+',
                'Research proposal',
                'English proficiency',
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Application Process */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Process</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { step: '1', title: 'Check Eligibility', desc: 'Review scholarship requirements and ensure you meet all criteria' },
                { step: '2', title: 'Prepare Documents', desc: 'Gather required documents including transcripts, letters of recommendation, and essays' },
                { step: '3', title: 'Submit Application', desc: 'Complete online application form and upload all required documents' },
                { step: '4', title: 'Review & Interview', desc: 'Applications reviewed and selected candidates invited for interview' },
                { step: '5', title: 'Award Notification', desc: 'Successful candidates notified and award letters sent' },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-8 h-8 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  >
                    {item.step}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { label: 'Application Deadline', value: 'March 31, 2024' },
                { label: 'Notification Date', value: 'May 15, 2024' },
                { label: 'Scholarship Types', value: '4 different types' },
                { label: 'Total Awards', value: '50+ scholarships' },
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Success Stories */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Success Stories</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                {
                  quote: 'The Excellence Scholarship allowed me to focus on my research without financial worries.',
                  author: 'Dr. Sarah Chen, PhD'
                },
                {
                  quote: 'Thanks to the International Student Scholarship, I could pursue my dream of studying abroad.',
                  author: 'Ahmad Hassan, Undergraduate'
                },
              ].map((story, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="text-sm"
                >
                  <p className="text-gray-600 italic">&ldquo;{story.quote}&rdquo;</p>
                  <p className="text-sky-600 font-medium mt-1">- {story.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold mb-2">Ready to Apply?</h3>
            <p className="text-gray-600 text-sm mb-3">Don\'t miss the opportunity to fund your international education.</p>
            <motion.a 
              href="/apply" 
              className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 