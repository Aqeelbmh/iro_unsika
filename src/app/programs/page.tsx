"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function ProgramsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">International Programs</h1>
        <p className="text-lg text-gray-600">Discover the diverse range of international programs and opportunities available at UNSIKA.</p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {[
          {
            title: 'Student Exchange',
            desc: 'Study abroad opportunities at partner universities worldwide',
            icon: '🌍',
            href: '/programs/student-exchange',
            features: ['Semester abroad', 'Credit transfer', 'Cultural immersion', 'Global networking']
          },
          {
            title: 'International Internships',
            desc: 'Gain practical experience in international companies and organizations',
            icon: '💼',
            href: '/programs/internships',
            features: ['Professional development', 'Industry experience', 'International exposure', 'Career advancement']
          },
          {
            title: 'Scholarships',
            desc: 'Financial support for international education and research',
            icon: '🎓',
            href: '/programs/scholarships',
            features: ['Full tuition coverage', 'Monthly stipends', 'Research funding', 'Travel allowances']
          },
          {
            title: 'Short Courses',
            desc: 'Intensive programs for skill development and certification',
            icon: '📚',
            href: '/programs/short-courses',
            features: ['Skill development', 'Certification programs', 'Flexible duration', 'Industry focus']
          },
          {
            title: 'Partnerships',
            desc: 'Collaborative programs with international institutions',
            icon: '🤝',
            href: '/programs/partnerships',
            features: ['Joint research', 'Faculty exchange', 'Dual degrees', 'Academic collaboration']
          },
          {
            title: 'IUP Program',
            desc: 'International Undergraduate Program with English instruction',
            icon: '🎯',
            href: '/programs/iup',
            features: ['English instruction', 'International curriculum', 'Global perspective', 'Career readiness']
          },
        ].map((program, index) => (
          <motion.div 
            key={index}
            variants={staggerItem}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <div className="text-center mb-6">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-4xl mb-4"
              >
                {program.icon}
              </motion.div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h2>
              <p className="text-gray-600">{program.desc}</p>
            </div>
            
            <motion.ul 
              variants={staggerContainer}
              className="space-y-2 mb-6"
            >
              {program.features.map((feature, featureIndex) => (
                <motion.li 
                  key={featureIndex}
                  variants={staggerItem}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <span className="text-sky-500">•</span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div className="text-center">
              <motion.a 
                href={program.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-sky-600 hover:to-indigo-700 transition-all duration-200"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Program Statistics */}
      <motion.section 
        {...fadeInUp} 
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="mt-16 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Program Impact</h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: '500+', label: 'Students Exchanged', icon: '👥' },
            { number: '50+', label: 'Partner Universities', icon: '🏛️' },
            { number: '25+', label: 'Countries', icon: '🌎' },
            { number: '100+', label: 'Scholarships Awarded', icon: '🏆' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-3xl mb-2"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-sky-600 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        {...fadeInUp} 
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        className="mt-16 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-center text-white"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your International Journey?</h2>
        <p className="text-lg mb-6 opacity-90">Join our international programs and expand your horizons with UNSIKA.</p>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a 
            href="/contact"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-sky-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Contact Us
          </motion.a>
          <motion.a 
            href="/downloads"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-sky-600 transition-colors duration-200"
          >
            Download Brochure
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
} 