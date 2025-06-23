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

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col gap-12">
      <motion.h1 {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="text-3xl font-bold mb-8">Downloads</motion.h1>
      {downloads.map((cat, idx) => (
        <motion.section
          key={idx}
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
          className="mb-8 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center">
              <h2 className="text-xl font-semibold mb-4">{cat.category}</h2>
            </div>
          </div>
          <ul className="list-disc pl-6">
            {cat.files.map((file, fidx) => (
              <motion.li
                key={fidx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + fidx * 0.08, ease: 'easeOut' }}
              >
                <motion.a
                  href={file.url}
                  className="text-teal-600 hover:underline"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {file.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
} 