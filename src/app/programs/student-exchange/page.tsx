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

export default function StudentExchangePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Student Exchange Program</h1>
        <p className="text-lg text-gray-600">Experience studying abroad with our partner universities worldwide and broaden your academic and cultural horizons.</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600 mb-4">
              The Student Exchange Program allows UNSIKA students to study at partner universities for one or two semesters. 
              This program provides an excellent opportunity to experience different academic environments, cultures, and perspectives.
            </p>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'Duration: 1-2 semesters',
                'Credits: Transferable academic credits',
                'Language: English-taught courses available',
                'Support: Pre-departure orientation and ongoing assistance',
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Requirements */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h3 className="font-semibold text-sky-700 mb-2">Academic Requirements</h3>
                <motion.ul 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="list-disc pl-4 text-gray-600 space-y-1 text-sm"
                >
                  {[
                    'Minimum GPA: 3.0',
                    'Completed at least 2 semesters at UNSIKA',
                    'Good academic standing',
                    'Approval from academic advisor',
                  ].map((item, index) => (
                    <motion.li key={index} variants={staggerItem}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <h3 className="font-semibold text-sky-700 mb-2">Language Requirements</h3>
                <motion.ul 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="list-disc pl-4 text-gray-600 space-y-1 text-sm"
                >
                  {[
                    'TOEFL iBT: 80+ or IELTS: 6.0+',
                    'Or equivalent language proficiency',
                    'Some programs may require higher scores',
                  ].map((item, index) => (
                    <motion.li key={index} variants={staggerItem}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </motion.section>

          {/* Application Process */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
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
                { step: '1', title: 'Submit Application', desc: 'Complete the online application form with required documents' },
                { step: '2', title: 'Document Review', desc: 'Our team reviews your application and supporting documents' },
                { step: '3', title: 'Interview', desc: 'Attend an interview with the selection committee' },
                { step: '4', title: 'Nomination', desc: 'Selected students are nominated to partner universities' },
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
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
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
                { label: 'Application Deadline', values: ['March 15 (Fall)', 'October 15 (Spring)'] },
                { label: 'Program Fee', values: ['Varies by destination'] },
                { label: 'Scholarships', values: ['Available for eligible students'] },
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <span className="text-sm text-gray-500">{item.label}</span>
                  {item.values.map((value, vIndex) => (
                    <p key={vIndex} className="font-medium text-gray-800">{value}</p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Partner Universities */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Partner Universities</h3>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-2 text-sm"
            >
              {[
                'University of Technology Sydney',
                'National University of Singapore',
                'Chulalongkorn University',
                'University of Malaya',
                'And many more...',
              ].map((university, index) => (
                <motion.li 
                  key={index} 
                  variants={staggerItem}
                  className="text-gray-600"
                >
                  • {university}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a 
              href="/partners" 
              className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all partners →
            </motion.a>
          </motion.div>

          {/* CTA */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold mb-2">Ready to Apply?</h3>
            <p className="text-gray-600 text-sm mb-3">Submit your application before the deadline to be considered for the program.</p>
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