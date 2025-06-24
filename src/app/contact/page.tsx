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

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">Get in touch with the UNSIKA International Office. We're here to help with your international education needs.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Form */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Send us a Message</h2>
            <motion.form 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div variants={staggerItem} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <motion.input 
                    whileFocus={{ scale: 1.02 }}
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <motion.input 
                  whileFocus={{ scale: 1.02 }}
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <motion.select 
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="exchange">Student Exchange</option>
                  <option value="scholarship">Scholarship Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="other">Other</option>
                </motion.select>
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02 }}
                  rows={6} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </motion.div>
              
              <motion.button 
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-sky-600 hover:to-indigo-700 transition-all duration-200"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.section>

          {/* Office Hours */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Office Hours</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { day: 'Monday - Friday', hours: '8:00 AM - 4:00 PM' },
                { day: 'Saturday', hours: '9:00 AM - 12:00 PM' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((schedule, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                >
                  <span className="font-medium text-gray-800">{schedule.day}</span>
                  <span className="text-gray-600">{schedule.hours}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Info */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Contact Information</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  icon: '📍',
                  title: 'Address',
                  content: 'Jl. HS Ronggowaluyo Telukjambe Timur, Karawang, West Java, Indonesia'
                },
                {
                  icon: '📞',
                  title: 'Phone',
                  content: '+62 267 401-1234'
                },
                {
                  icon: '📧',
                  title: 'Email',
                  content: 'international@unsika.ac.id'
                },
                {
                  icon: '🌐',
                  title: 'Website',
                  content: 'www.unsika.ac.id'
                },
              ].map((info, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <h4 className="font-medium text-gray-800">{info.title}</h4>
                    <p className="text-gray-600 text-sm">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { title: 'Student Exchange', href: '/programs/student-exchange' },
                { title: 'Scholarships', href: '/programs/scholarships' },
                { title: 'Partnerships', href: '/programs/partnerships' },
                { title: 'Downloads', href: '/downloads' },
                { title: 'Gallery', href: '/gallery' },
              ].map((link, index) => (
                <motion.a 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, x: 5 }}
                  href={link.href}
                  className="block text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200"
                >
                  {link.title} →
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Media */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { platform: 'Instagram', handle: '@unsika_international', color: 'text-pink-600' },
                { platform: 'Facebook', handle: 'UNSIKA International Office', color: 'text-blue-600' },
                { platform: 'LinkedIn', handle: 'UNSIKA International', color: 'text-blue-700' },
                { platform: 'YouTube', handle: 'UNSIKA International', color: 'text-red-600' },
              ].map((social, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600">{social.platform}</span>
                  <span className={`${social.color} font-medium`}>{social.handle}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Emergency Contact */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Emergency Contact</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.div variants={staggerItem}>
                <p className="text-gray-600 text-sm mb-2">For urgent matters outside office hours:</p>
                <p className="font-medium text-gray-800">+62 812-3456-7890</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <p className="text-gray-600 text-sm">Available 24/7 for international students</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 