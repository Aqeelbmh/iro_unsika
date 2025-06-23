"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Turan International University', logo: '/assets/Partner/1699343145215.jpg', brief: 'Collaboration in research and student exchange.', country: 'Uzbekistan', flag: '🇺🇿' },
  { name: 'Universiti Teknologi Mara', logo: '/assets/Partner/UiTM.png', brief: 'Joint summer courses and scholarships.', country: 'Malaysia', flag: '🇲🇾' },
  { name: 'Mahidol University Kanchanaburi Campus', logo: '/assets/Partner/Mahidol_U.png', brief: 'Internship and training programs.', country: 'Thailand', flag: '🇹🇭' },
  { name: 'Shanghai University of Electrical Power', logo: '/assets/Partner/Shanghai_University_of_Electric_Power_logo.png', brief: 'Collaboration in research and student exchange.', country: 'China', flag: '🇨🇳' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function PartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h1 className="text-3xl font-bold mb-8">Our Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.12, ease: 'easeOut' }}
              whileHover={{
                scale: 1.07,
                rotate: -2,
                boxShadow: '0 12px 36px 0 rgba(80,120,255,0.18)',
                zIndex: 2
              }}
              className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-300 min-h-[340px]"
            >
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-2 border-blue-100 shadow-md bg-white/60">
                <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
              </div>
              <span className="font-semibold text-blue-700 text-lg mb-1 text-center">{partner.name}</span>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                  {partner.flag}
                </span>
                <span className="text-gray-500 text-sm">{partner.country}</span>
              </div>
              <p className="text-gray-600 text-sm text-center mt-2">{partner.brief}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 