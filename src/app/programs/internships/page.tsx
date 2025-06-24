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

export default function InternshipsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">International Internship Program</h1>
        <p className="text-lg text-gray-600">Gain valuable international work experience through our internship programs with leading companies and organizations worldwide.</p>
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
              Our International Internship Program connects UNSIKA students with internship opportunities at companies, 
              research institutions, and organizations around the world. This program provides hands-on experience in 
              your field of study while developing cross-cultural competencies.
            </p>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'Duration: 2-6 months',
                'Paid and unpaid opportunities available',
                'Academic credit available',
                'Professional development support',
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Available Internships */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Internships</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: 'Technology & IT',
                  items: ['Software Development', 'Data Science', 'Cybersecurity', 'Digital Marketing']
                },
                {
                  title: 'Business & Finance',
                  items: ['Marketing & Sales', 'Financial Analysis', 'Human Resources', 'Operations Management']
                },
                {
                  title: 'Engineering',
                  items: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Industrial Engineering']
                },
                {
                  title: 'Research & Academia',
                  items: ['Research Assistant', 'Laboratory Work', 'Academic Projects', 'Data Analysis']
                },
              ].map((category, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-sky-700 mb-2">{category.title}</h3>
                  <motion.ul 
                    variants={staggerContainer}
                    className="text-gray-600 text-sm space-y-1"
                  >
                    {category.items.map((item, itemIndex) => (
                      <motion.li key={itemIndex} variants={staggerItem}>
                        • {item}
                      </motion.li>
                    ))}
                  </motion.ul>
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
                    'Minimum GPA: 2.8',
                    'Completed at least 3 semesters',
                    'Relevant coursework completed',
                    'Faculty recommendation',
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
                <h3 className="font-semibold text-sky-700 mb-2">Language & Skills</h3>
                <motion.ul 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="list-disc pl-4 text-gray-600 space-y-1 text-sm"
                >
                  {[
                    'English proficiency (TOEFL/IELTS)',
                    'Relevant technical skills',
                    'Professional communication',
                    'Adaptability & cultural awareness',
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
                { step: '1', title: 'Submit Application', desc: 'Complete application with resume, cover letter, and academic records' },
                { step: '2', title: 'Skills Assessment', desc: 'Complete technical assessment or interview if required' },
                { step: '3', title: 'Matching Process', desc: 'We match you with suitable internship opportunities' },
                { step: '4', title: 'Placement', desc: 'Finalize placement and begin pre-departure preparation' },
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
                { label: 'Application Deadline', value: 'Rolling applications' },
                { label: 'Duration', value: '2-6 months' },
                { label: 'Stipend', value: 'Varies by position' },
                { label: 'Accommodation', value: 'Assistance provided' },
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Partner Companies */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Partner Companies</h3>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-2 text-sm"
            >
              {[
                'Google',
                'Microsoft',
                'Samsung',
                'Toyota',
                'Research institutions',
              ].map((company, index) => (
                <motion.li 
                  key={index} 
                  variants={staggerItem}
                  className="text-gray-600"
                >
                  • {company}
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

          {/* Success Stories */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
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
                  quote: 'My internship at Google helped me develop both technical and soft skills. The international experience was invaluable.',
                  author: 'Sarah, Computer Science'
                },
                {
                  quote: 'Working at a research institution in Singapore opened up new career opportunities I never considered before.',
                  author: 'Ahmad, Engineering'
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
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold mb-2">Ready to Apply?</h3>
            <p className="text-gray-600 text-sm mb-3">Gain real-world experience and start your international career.</p>
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