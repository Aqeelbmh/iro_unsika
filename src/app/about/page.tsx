"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const team = [
  { name: 'Ikhwanussafa Sadidan', position: 'Director', photo: '/assets/Team/didan.jpeg' },
  { name: 'Refi Aksep Sativa', position: 'Secretary', photo: '/assets/Team/ms refi.jpeg' },
  { name: 'Mulia Putra', position: 'Program Coordinator', photo: '/assets/Team/mulia.jpeg' },
  { name: 'Mohamed Hakeel', position: 'Web Developer', photo: '/assets/Team/aqeel.png' },
  { name: 'Hasan Rabiev', position: 'Student Representative', photo: '/assets/Team/hasan.JPG' },
];

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

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About UNSIKA International Office</h1>
        <p className="text-lg text-gray-600">Learn about our mission, vision, and the dedicated team behind UNSIKA's international programs.</p>
      </motion.div>

      <div className="space-y-12">
        {/* Mission & Vision */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 variants={staggerItem} className="text-2xl font-bold text-gray-800 mb-4">Our Mission</motion.h2>
              <motion.p variants={staggerItem} className="text-gray-600 mb-4">
                To facilitate international collaboration, promote cultural exchange, and provide students with global learning opportunities 
                that prepare them for success in an interconnected world.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-2">
                {[
                  'Foster international partnerships and collaborations',
                  'Provide comprehensive support for international students',
                  'Promote cultural diversity and understanding',
                  'Enhance global competitiveness of our graduates',
                ].map((item, index) => (
                  <motion.li key={index} variants={staggerItem} className="flex items-center gap-2">
                    <span className="text-sky-500">•</span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.h2 variants={staggerItem} className="text-2xl font-bold text-gray-800 mb-4">Our Vision</motion.h2>
              <motion.p variants={staggerItem} className="text-gray-600 mb-4">
                To be a leading international office that creates transformative educational experiences and builds bridges 
                between cultures, fostering global citizenship and innovation.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-2">
                {[
                  'Global recognition for international excellence',
                  'Innovative international programs and partnerships',
                  'Sustainable international collaboration networks',
                  'Leadership in international education in Indonesia',
                ].map((item, index) => (
                  <motion.li key={index} variants={staggerItem} className="flex items-center gap-2">
                    <span className="text-sky-500">•</span>
                    <span className="text-gray-600">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
        </div>
      </motion.section>

        {/* Our Team */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <motion.h2 
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
          >
            Our Team
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Ikhwanussafa Sadidan',
                position: 'Director',
                image: '/assets/Team/didan.jpeg',
                desc: 'Leading the international office with over 10 years of experience in international education.'
              },
              {
                name: 'Refi Aksep Sativa',
                position: 'Secretary',
                image: '/assets/Team/ms refi.jpeg',
                desc: 'Managing administrative operations and coordinating international programs.'
              },
              {
                name: 'Mulia Putra',
                position: 'Program Coordinator',
                image: '/assets/Team/mulia.jpeg',
                desc: 'Coordinating student exchange programs and international partnerships.'
              },
              {
                name: 'Mohamed Hakeel',
                position: 'Web Developer',
                image: '/assets/Team/aqeel.png',
                desc: 'Developing and maintaining digital platforms for international communication.'
              },
              {
                name: 'Hasan Rabiev',
                position: 'Student Representative',
                image: '/assets/Team/hasan.JPG',
                desc: 'Representing student interests and facilitating student engagement in international programs.'
              },
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-sky-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Values */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <motion.h2 
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 mb-8 text-center"
          >
            Our Values
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: '🤝',
                title: 'Collaboration',
                desc: 'Working together with partners worldwide to achieve common goals'
              },
              {
                icon: '🌍',
                title: 'Diversity',
                desc: 'Embracing and celebrating cultural differences and perspectives'
              },
              {
                icon: '💡',
                title: 'Innovation',
                desc: 'Creating new and effective approaches to international education'
              },
              {
                icon: '🎯',
                title: 'Excellence',
                desc: 'Maintaining high standards in all our programs and services'
              },
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* History */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <motion.h2 
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl font-bold text-gray-800 mb-6"
          >
            Our History
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                year: '2015',
                title: 'Establishment',
                desc: 'UNSIKA International Office was established to promote international collaboration and student mobility.'
              },
              {
                year: '2017',
                title: 'First Partnerships',
                desc: 'Established our first international partnerships with universities in Asia and Europe.'
              },
              {
                year: '2019',
                title: 'Program Expansion',
                desc: 'Launched comprehensive student exchange and scholarship programs.'
              },
              {
                year: '2022',
                title: 'Digital Transformation',
                desc: 'Implemented digital platforms and online services for better international communication.'
              },
              {
                year: '2024',
                title: 'Global Network',
                desc: 'Expanded our network to 50+ partner institutions across 25+ countries.'
              },
            ].map((milestone, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
            >
                  {milestone.year}
                </motion.div>
                <div>
                  <h3 className="font-semibold text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our International Community</h2>
          <p className="text-lg mb-6 opacity-90">Be part of our mission to create global opportunities and foster international understanding.</p>
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
              Get in Touch
            </motion.a>
            <motion.a 
              href="/programs"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-sky-600 transition-colors duration-200"
            >
              Explore Programs
            </motion.a>
        </motion.div>
      </motion.section>
      </div>
    </div>
  );
} 