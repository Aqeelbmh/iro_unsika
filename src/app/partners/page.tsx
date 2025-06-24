"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

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

export default function PartnersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Partners</h1>
        <p className="text-lg text-gray-600">Discover our network of international partners and collaborators from around the world.</p>
      </motion.div>

      <div className="space-y-12">
        {/* Featured Partners */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-br from-white/40 via-sky-50 to-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-sky-500 rounded-full mr-2"></span>
            Featured Partners
          </h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              { 
                name: 'Turan International University', 
                logo: '/assets/Partner/1699343145215.jpg', 
                brief: 'Collaboration in research and student exchange.', 
                country: 'Uzbekistan', 
                flag: '🇺🇿' 
              },
              { 
                name: 'Universiti Teknologi Mara', 
                logo: '/assets/Partner/UiTM.png', 
                brief: 'Joint summer courses and scholarships.', 
                country: 'Malaysia', 
                flag: '🇲🇾' 
              },
              { 
                name: 'Mahidol University Kanchanaburi Campus', 
                logo: '/assets/Partner/Mahidol_U.png', 
                brief: 'Internship and training programs.', 
                country: 'Thailand', 
                flag: '🇹🇭' 
              },
              { 
                name: 'Shanghai University of Electrical Power', 
                logo: '/assets/Partner/Shanghai_University_of_Electric_Power_logo.png', 
                brief: 'Collaboration in research and student exchange.', 
                country: 'China', 
                flag: '🇨🇳' 
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  scale: 1.07,
                  rotate: -2,
                  boxShadow: '0 12px 36px 0 rgba(80,120,255,0.18)',
                  zIndex: 2
                }}
                className="relative bg-white/60 backdrop-blur-lg border border-sky-100 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 min-h-[340px] overflow-hidden group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-sky-200 shadow-md bg-white/80"
                >
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </motion.div>
                <span className="font-semibold text-sky-700 text-lg mb-1 text-center group-hover:text-sky-900 transition-colors duration-200">{partner.name}</span>
                <div className="flex items-center gap-2 mb-2">
                  <motion.span 
                    whileHover={{ scale: 1.2 }}
                    className="w-5 h-5 bg-sky-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600"
                  >
                    {partner.flag}
                  </motion.span>
                  <span className="text-gray-500 text-sm">{partner.country}</span>
                </div>
                <p className="text-gray-600 text-sm text-center mt-2 group-hover:text-gray-800 transition-colors duration-200">{partner.brief}</p>
                <div className="absolute inset-0 bg-gradient-to-t from-sky-100/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Partner Categories */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partner Categories</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Academic Partners',
                desc: 'Universities and educational institutions for student exchange and research collaboration',
                icon: '🎓',
                count: '25+ partners'
              },
              {
                title: 'Research Partners',
                desc: 'Research institutions and laboratories for joint research projects',
                icon: '🔬',
                count: '15+ partners'
              },
              {
                title: 'Industry Partners',
                desc: 'Companies and organizations for internships and professional development',
                icon: '🏢',
                count: '20+ partners'
              },
              {
                title: 'Government Partners',
                desc: 'Government agencies and ministries for policy research and capacity building',
                icon: '🏛️',
                count: '10+ partners'
              },
              {
                title: 'Cultural Partners',
                desc: 'Cultural organizations for cultural exchange and language programs',
                icon: '🌍',
                count: '8+ partners'
              },
              {
                title: 'Technology Partners',
                desc: 'Tech companies for innovation and digital transformation initiatives',
                icon: '💻',
                count: '12+ partners'
              },
            ].map((category, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-3xl mb-4"
                >
                  {category.icon}
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.desc}</p>
                <span className="text-sky-600 font-medium text-sm">{category.count}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Regional Partners */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partners by Region</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                region: 'Asia-Pacific',
                count: '25 partners',
                countries: ['Japan', 'South Korea', 'Singapore', 'Thailand', 'Malaysia'],
                color: 'bg-sky-100 text-sky-700'
              },
              {
                region: 'Europe',
                count: '15 partners',
                countries: ['Germany', 'Netherlands', 'Sweden', 'France', 'Italy'],
                color: 'bg-indigo-100 text-indigo-700'
              },
              {
                region: 'Americas',
                count: '8 partners',
                countries: ['USA', 'Canada', 'Brazil', 'Mexico'],
                color: 'bg-green-100 text-green-700'
              },
              {
                region: 'Middle East',
                count: '5 partners',
                countries: ['UAE', 'Qatar', 'Saudi Arabia'],
                color: 'bg-yellow-100 text-yellow-700'
              },
            ].map((region, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-800">{region.region}</h3>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`${region.color} px-2 py-1 rounded text-xs font-medium`}
                  >
                    {region.count}
                  </motion.span>
                </div>
                <motion.ul variants={staggerContainer} className="space-y-1">
                  {region.countries.map((country, countryIndex) => (
                    <motion.li 
                      key={countryIndex}
                      variants={staggerItem}
                      className="text-gray-600 text-sm"
                    >
                      • {country}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Partnership Benefits */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partnership Benefits</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'For Students',
                benefits: [
                  'International study opportunities',
                  'Cultural exchange experiences',
                  'Enhanced career prospects',
                  'Global networking',
                  'Language development'
                ]
              },
              {
                title: 'For Faculty',
                benefits: [
                  'Research collaboration',
                  'Academic exchange programs',
                  'Joint publications',
                  'Professional development',
                  'International recognition'
                ]
              },
              {
                title: 'For Institutions',
                benefits: [
                  'Enhanced reputation',
                  'Research funding opportunities',
                  'Student diversity',
                  'International accreditation',
                  'Global competitiveness'
                ]
              },
              {
                title: 'For Industry',
                benefits: [
                  'Skilled workforce development',
                  'Innovation collaboration',
                  'Technology transfer',
                  'Market expansion',
                  'Research partnerships'
                ]
              },
            ].map((group, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold text-sky-700 mb-3">{group.title}</h3>
                <motion.ul variants={staggerContainer} className="space-y-2">
                  {group.benefits.map((benefit, benefitIndex) => (
                    <motion.li 
                      key={benefitIndex}
                      variants={staggerItem}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="text-sky-500">•</span>
                      {benefit}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Partnership Opportunities */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Partnership Opportunities</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'New Partnership',
                desc: 'Interested in establishing a partnership with UNSIKA?',
                icon: '🤝',
                action: 'Contact us for collaboration'
              },
              {
                title: 'Program Development',
                desc: 'Collaborate on developing new academic programs',
                icon: '📚',
                action: 'Explore program opportunities'
              },
              {
                title: 'Research Collaboration',
                desc: 'Joint research projects and funding opportunities',
                icon: '🔬',
                action: 'Discuss research initiatives'
              },
            ].map((opportunity, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-6 text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-4xl mb-4"
                >
                  {opportunity.icon}
                </motion.div>
                <h3 className="font-bold text-gray-800 mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{opportunity.desc}</p>
                <motion.a 
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sky-600 hover:text-sky-700 text-sm font-medium"
                >
                  {opportunity.action} →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="bg-gradient-to-r from-sky-500 to-indigo-600 rounded-2xl shadow-xl p-8 text-center text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-lg mb-6 opacity-90">Join our global network to foster academic excellence and innovation.</p>
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
              href="/programs/partnerships"
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-sky-600 transition-colors duration-200"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
} 