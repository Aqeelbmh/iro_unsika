"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-16">
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h1 className="text-3xl font-bold mb-8 text-gray-700">{t('contact.title')}</h1>
        <motion.form
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm p-6 flex flex-col gap-4 border border-gray-200/50"
          onSubmit={e => { e.preventDefault(); alert('Message sent! (placeholder)'); }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.input type="text" name="name" placeholder={t('contact.form.name')} className="border border-gray-200 rounded-lg px-4 py-3 bg-white/80 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required whileFocus={{ scale: 1.03, borderColor: '#60a5fa' }} />
          <motion.input type="email" name="email" placeholder={t('contact.form.email')} className="border border-gray-200 rounded-lg px-4 py-3 bg-white/80 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required whileFocus={{ scale: 1.03, borderColor: '#60a5fa' }} />
          <motion.textarea name="message" placeholder={t('contact.form.message')} className="border border-gray-200 rounded-lg px-4 py-3 bg-white/80 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" rows={5} required whileFocus={{ scale: 1.02, borderColor: '#60a5fa' }} />
          <motion.button type="submit" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium">{t('contact.form.sendMessage')}</motion.button>
        </motion.form>
      </motion.section>
      {/* Google Maps Embed */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-2xl font-bold mb-4 text-gray-700">{t('contact.location.title')}</h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }} className="aspect-video rounded-xl overflow-hidden shadow-sm border border-gray-200/50">
          <iframe
            src="https://maps.google.com/maps?q=Universitas%20Singaperbangsa%20Karawang&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="UNSIKA Location"
          ></iframe>
        </motion.div>
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-400 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          {t('contact.whatsapp')}
        </motion.a>
      </motion.section>
    </div>
  );
} 