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

export default function ShortCoursesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Short Courses & Summer Programs</h1>
        <p className="text-lg text-gray-600">Enhance your skills and knowledge through intensive short courses, summer programs, and specialized training opportunities.</p>
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
              Our Short Courses and Summer Programs offer intensive learning experiences ranging from 1 week to 3 months. 
              These programs are designed to provide specialized knowledge, practical skills, and international exposure 
              in a condensed timeframe.
            </p>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'Duration: 1 week to 3 months',
                'Intensive learning format',
                'Certificate upon completion',
                'Cultural immersion activities',
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Available Courses */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Available Courses</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: 'Language & Culture',
                  items: ['Intensive English Program', 'Japanese Language & Culture', 'Korean Language & Culture', 'Chinese Language & Culture']
                },
                {
                  title: 'Business & Management',
                  items: ['International Business', 'Digital Marketing', 'Entrepreneurship', 'Project Management']
                },
                {
                  title: 'Technology & Innovation',
                  items: ['AI & Machine Learning', 'Web Development', 'Data Science', 'Cybersecurity']
                },
                {
                  title: 'Engineering & Science',
                  items: ['Renewable Energy', 'Robotics & Automation', 'Environmental Science', 'Biotechnology']
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

          {/* Summer Programs */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Summer Programs</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  title: 'Summer School 2024',
                  desc: 'Join our intensive 4-week summer program featuring multiple course tracks and cultural activities.',
                  tags: ['June 15 - July 12', 'Multiple Tracks', 'Cultural Activities'],
                  borderColor: 'border-sky-500',
                  tagColor: 'bg-sky-100 text-sky-700'
                },
                {
                  title: 'Research Summer Program',
                  desc: 'Work on cutting-edge research projects with international faculty and students.',
                  tags: ['July 1 - August 15', 'Research Focus', 'Mentorship'],
                  borderColor: 'border-indigo-500',
                  tagColor: 'bg-indigo-100 text-indigo-700'
                },
              ].map((program, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className={`border-l-4 ${program.borderColor} pl-4`}
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{program.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tagIndex}
                        whileHover={{ scale: 1.05 }}
                        className={`${program.tagColor} px-2 py-1 rounded text-xs`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Requirements */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
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
                <h3 className="font-semibold text-sky-700 mb-2">General Requirements</h3>
                <motion.ul 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="list-disc pl-4 text-gray-600 space-y-1 text-sm"
                >
                  {[
                    'Current student or recent graduate',
                    'Good academic standing',
                    'Motivation letter',
                    'Basic English proficiency',
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
                <h3 className="font-semibold text-sky-700 mb-2">Course-Specific</h3>
                <motion.ul 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="list-disc pl-4 text-gray-600 space-y-1 text-sm"
                >
                  {[
                    'Prerequisites vary by course',
                    'Some courses require portfolios',
                    'Technical courses need basic skills',
                    'Language courses: no prior knowledge needed',
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
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
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
                { step: '1', title: 'Choose Course', desc: 'Select your preferred course or program from our offerings' },
                { step: '2', title: 'Submit Application', desc: 'Complete online application with required documents' },
                { step: '3', title: 'Review & Acceptance', desc: 'Applications reviewed and acceptance letters sent' },
                { step: '4', title: 'Enrollment', desc: 'Complete enrollment and prepare for your program' },
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
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
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
                { label: 'Application Deadline', value: 'Varies by program' },
                { label: 'Program Fee', value: '$500 - $3,000' },
                { label: 'Accommodation', value: 'On-campus available' },
                { label: 'Meals', value: 'Included in some programs' },
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Upcoming Programs */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Upcoming Programs</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { title: 'Intensive English', date: 'March 1-15, 2024', color: 'border-sky-500' },
                { title: 'AI & ML Workshop', date: 'April 10-20, 2024', color: 'border-indigo-500' },
                { title: 'Summer School', date: 'June 15 - July 12, 2024', color: 'border-sky-500' },
              ].map((program, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className={`border-l-2 ${program.color} pl-3`}
                >
                  <p className="font-medium text-gray-800 text-sm">{program.title}</p>
                  <p className="text-gray-500 text-xs">{program.date}</p>
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
            <h3 className="font-bold mb-2">Ready to Enroll?</h3>
            <p className="text-gray-600 text-sm mb-3">Choose your course and start your learning journey today.</p>
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