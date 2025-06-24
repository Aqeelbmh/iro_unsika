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

export default function PartnershipsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Institutional Partnerships</h1>
        <p className="text-lg text-gray-600">Explore our network of international partnerships and collaboration opportunities with leading universities and organizations worldwide.</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnership Overview</h2>
            <p className="text-gray-600 mb-4">
              UNSIKA International Office maintains strategic partnerships with universities, research institutions, 
              and organizations across the globe. These partnerships enable collaborative research, student mobility, 
              faculty exchange, and joint academic programs.
            </p>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'Student exchange programs',
                'Joint research projects',
                'Faculty exchange opportunities',
                'Dual degree programs',
                'International conferences and workshops',
              ].map((item, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          {/* Partnership Categories */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnership Categories</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: 'Academic Partnerships',
                  items: ['Student exchange agreements', 'Joint degree programs', 'Credit transfer arrangements', 'Academic collaboration']
                },
                {
                  title: 'Research Partnerships',
                  items: ['Joint research projects', 'Publication collaboration', 'Research funding', 'Laboratory sharing']
                },
                {
                  title: 'Industry Partnerships',
                  items: ['Internship programs', 'Industry projects', 'Technology transfer', 'Professional development']
                },
                {
                  title: 'Cultural Partnerships',
                  items: ['Cultural exchange programs', 'Language learning', 'Cultural events', 'Community engagement']
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

          {/* Featured Partners */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Partners</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  name: 'University of Technology Sydney',
                  country: 'Australia',
                  countryColor: 'bg-green-100 text-green-700',
                  desc: 'Leading technology university with strong focus on innovation and industry collaboration.',
                  programs: ['Student Exchange', 'Joint Research', 'Faculty Exchange'],
                  focusAreas: ['Engineering', 'Technology', 'Innovation']
                },
                {
                  name: 'National University of Singapore',
                  country: 'Singapore',
                  countryColor: 'bg-red-100 text-red-700',
                  desc: 'Premier research university in Asia with comprehensive academic programs.',
                  programs: ['Student Exchange', 'Joint Research', 'Faculty Exchange'],
                  focusAreas: ['Engineering', 'Technology', 'Innovation']
                },
                {
                  name: 'Chulalongkorn University',
                  country: 'Thailand',
                  countryColor: 'bg-yellow-100 text-yellow-700',
                  desc: 'Regional partner for cultural exchange and Southeast Asian studies, promoting regional cooperation.',
                  programs: ['Cultural Exchange', 'Language Programs', 'Regional Studies'],
                  focusAreas: ['Languages', 'Culture', 'Regional Studies']
                },
              ].map((partner, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-sky-700 text-lg">{partner.name}</h3>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`${partner.countryColor} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {partner.country}
                    </motion.span>
                  </div>
                  <p className="text-gray-600 mb-3">{partner.desc}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Programs:</span>
                      <motion.ul 
                        variants={staggerContainer}
                        className="list-disc pl-4 text-gray-600 mt-1"
                      >
                        {partner.programs.map((program, programIndex) => (
                          <motion.li key={programIndex} variants={staggerItem}>
                            {program}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Focus Areas:</span>
                      <motion.ul 
                        variants={staggerContainer}
                        className="list-disc pl-4 text-gray-600 mt-1"
                      >
                        {partner.focusAreas.map((area, areaIndex) => (
                          <motion.li key={areaIndex} variants={staggerItem}>
                            {area}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Partnership Benefits */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Partnership Benefits</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                {
                  title: 'For Students',
                  items: ['International study opportunities', 'Cultural exchange experiences', 'Enhanced career prospects', 'Global networking', 'Language development']
                },
                {
                  title: 'For Faculty',
                  items: ['Research collaboration', 'Academic exchange programs', 'Joint publications', 'Professional development', 'International recognition']
                },
                {
                  title: 'For Institutions',
                  items: ['Enhanced reputation', 'Research funding opportunities', 'Student diversity', 'International accreditation', 'Global competitiveness']
                },
                {
                  title: 'For Industry',
                  items: ['Skilled workforce development', 'Innovation collaboration', 'Technology transfer', 'Market expansion', 'Research partnerships']
                },
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold text-sky-700 mb-2">{benefit.title}</h3>
                  <motion.ul 
                    variants={staggerContainer}
                    className="list-disc pl-4 text-gray-600 space-y-1 text-sm"
                  >
                    {benefit.items.map((item, itemIndex) => (
                      <motion.li key={itemIndex} variants={staggerItem}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
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
                { label: 'Total Partners', value: '50+ institutions' },
                { label: 'Countries', value: '25+ countries' },
                { label: 'Active Programs', value: '100+ programs' },
                { label: 'Students Exchanged', value: '500+ annually' },
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Partnership Regions */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Partnership Regions</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { region: 'Asia-Pacific', count: '25 partners', color: 'bg-sky-100 text-sky-700' },
                { region: 'Europe', count: '15 partners', color: 'bg-indigo-100 text-indigo-700' },
                { region: 'Americas', count: '8 partners', color: 'bg-green-100 text-green-700' },
                { region: 'Middle East', count: '5 partners', color: 'bg-yellow-100 text-yellow-700' },
              ].map((region, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600">{region.region}</span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`${region.color} px-2 py-1 rounded text-xs`}
                  >
                    {region.count}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Partnership Opportunities */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Partnership Opportunities</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { title: 'New Partnership', desc: 'Interested in establishing a partnership with UNSIKA?' },
                { title: 'Program Development', desc: 'Collaborate on developing new academic programs' },
                { title: 'Research Collaboration', desc: 'Joint research projects and funding opportunities' },
              ].map((opportunity, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="text-sm"
                >
                  <p className="font-medium text-gray-800">{opportunity.title}</p>
                  <p className="text-gray-600">{opportunity.desc}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.a 
              href="/contact" 
              className="text-sky-600 hover:text-sky-700 text-sm font-medium mt-3 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us for collaboration →
            </motion.a>
          </motion.div>

          {/* CTA */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold mb-2">Become a Partner</h3>
            <p className="text-gray-600 text-sm mb-3">Join our global network to foster academic excellence and innovation.</p>
            <motion.a 
              href="/contact" 
              className="bg-white text-sky-600 px-4 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 