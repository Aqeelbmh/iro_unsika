"use client";

import { motion } from 'framer-motion';

const downloads = [
  { category: 'Forms', files: [
    { name: 'Application Form', url: '/downloads/application-form.pdf' },
    { name: 'Exchange Form', url: '/downloads/exchange-form.pdf' },
  ]},
  { category: 'Brochures', files: [
    { name: 'UNSIKA IO Brochure', url: '/downloads/brochure.pdf' },
  ]},
  { category: 'Guidelines', files: [
    { name: 'Student Exchange Guidelines', url: '/downloads/guidelines.pdf' },
  ]},
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

export default function DownloadsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Downloads & Resources</h1>
        <p className="text-lg text-gray-600">Access important documents, forms, and resources for international programs at UNSIKA.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Brochures */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Brochures & Information</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: 'UNSIKA International Office Brochure',
                  desc: 'Comprehensive guide to international programs and opportunities',
                  size: '2.5 MB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/brochure.pdf'
                },
                {
                  title: 'Student Exchange Program Guide',
                  desc: 'Detailed information about exchange opportunities and application process',
                  size: '1.8 MB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/exchange-guide.pdf'
                },
                {
                  title: 'Scholarship Application Handbook',
                  desc: 'Complete guide to available scholarships and application procedures',
                  size: '3.2 MB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/scholarship-handbook.pdf'
                },
              ].map((file, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                  className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-sky-700 mb-1">{file.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{file.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{file.size}</span>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`${file.typeColor} px-2 py-1 rounded text-xs`}
                      >
                        {file.type}
                      </motion.span>
                    </div>
                  </div>
                  <motion.a 
                    href={file.href}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Application Forms */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Application Forms</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: 'Student Exchange Application Form',
                  desc: 'Official application form for student exchange programs',
                  size: '156 KB',
                  type: 'DOCX',
                  typeColor: 'bg-blue-100 text-blue-700',
                  href: '/downloads/exchange-application.docx'
                },
                {
                  title: 'Scholarship Application Form',
                  desc: 'Application form for international scholarships',
                  size: '203 KB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/scholarship-application.pdf'
                },
                {
                  title: 'Internship Application Form',
                  desc: 'Application form for international internship programs',
                  size: '178 KB',
                  type: 'DOCX',
                  typeColor: 'bg-blue-100 text-blue-700',
                  href: '/downloads/internship-application.docx'
                },
                {
                  title: 'Partnership Proposal Template',
                  desc: 'Template for institutional partnership proposals',
                  size: '245 KB',
                  type: 'DOCX',
                  typeColor: 'bg-blue-100 text-blue-700',
                  href: '/downloads/partnership-template.docx'
                },
              ].map((file, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                  className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-sky-700 mb-1">{file.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{file.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{file.size}</span>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`${file.typeColor} px-2 py-1 rounded text-xs`}
                      >
                        {file.type}
                      </motion.span>
                    </div>
                  </div>
                  <motion.a 
                    href={file.href}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Guidelines & Policies */}
          <motion.section 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Guidelines & Policies</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                {
                  title: 'International Student Guidelines',
                  desc: 'Comprehensive guidelines for international students at UNSIKA',
                  size: '1.2 MB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/international-guidelines.pdf'
                },
                {
                  title: 'Academic Policies & Procedures',
                  desc: 'Academic policies and procedures for international programs',
                  size: '890 KB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/academic-policies.pdf'
                },
                {
                  title: 'Code of Conduct for International Students',
                  desc: 'Behavioral guidelines and code of conduct for international students',
                  size: '567 KB',
                  type: 'PDF',
                  typeColor: 'bg-red-100 text-red-700',
                  href: '/downloads/code-of-conduct.pdf'
                },
              ].map((file, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                  className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-sky-700 mb-1">{file.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{file.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{file.size}</span>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`${file.typeColor} px-2 py-1 rounded text-xs`}
                      >
                        {file.type}
                      </motion.span>
                    </div>
                  </div>
                  <motion.a 
                    href={file.href}
                    download
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-sky-500 text-white p-2 rounded-lg hover:bg-sky-600 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </motion.a>
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
            <h3 className="font-bold text-gray-800 mb-4">Download Info</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { label: 'Total Files', value: '10 documents' },
                { label: 'Total Size', value: '12.5 MB' },
                { label: 'Last Updated', value: 'March 15, 2024' },
                { label: 'File Types', value: 'PDF, DOCX' },
              ].map((item, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <span className="text-sm text-gray-500">{item.label}</span>
                  <p className="font-medium text-gray-800">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* File Categories */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">File Categories</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                { category: 'Brochures', count: '3 files', color: 'bg-blue-100 text-blue-700' },
                { category: 'Application Forms', count: '4 files', color: 'bg-green-100 text-green-700' },
                { category: 'Guidelines', count: '3 files', color: 'bg-purple-100 text-purple-700' },
              ].map((cat, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-600">{cat.category}</span>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`${cat.color} px-2 py-1 rounded text-xs`}
                  >
                    {cat.count}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Download Tips */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Download Tips</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                'Ensure stable internet connection',
                'Use modern browser for best compatibility',
                'Check file size before downloading',
                'Save files in organized folders',
                'Contact us if download fails',
              ].map((tip, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-2"
                >
                  <span className="text-sky-500 text-sm">•</span>
                  <span className="text-gray-600 text-sm">{tip}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Need Help */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Need Help?</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.div variants={staggerItem}>
                <p className="text-gray-600 text-sm mb-3">Having trouble downloading files or need assistance?</p>
                <motion.a 
                  href="/contact" 
                  className="text-sky-600 hover:text-sky-700 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact our support team →
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 