"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const team = [
  { name: 'Ikhwanussafa Sadidan', position: 'Director', photo: '/assets/Team/didan.jpeg' },
  { name: 'Refi Aksep Sativa', position: 'Secretary', photo: '/assets/Team/ms refi.jpeg' },
  { name: 'Mulia Putra', position: 'Program Coordinator', photo: '/assets/placeholder.svg' },
  { name: 'Mohamed Hakeel', position: 'Web Developer', photo: '/assets/Team/aqeel.png' },
  { name: 'Hasan Rabiev', position: 'Student Representative', photo: '/assets/Team/hasan.JPG' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">
      {/* Vision & Mission */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h1 className="text-4xl font-extrabold mb-6 text-blue-800">About UNSIKA IRO</h1>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Vision</h2>
        <p className="mb-4 text-gray-500">
          To become a dynamic and globally connected gateway that advances Universitas Singaperbangsa Karawang&apos;s role as a center of excellence in education, research, and community engagement through international collaboration and intercultural understanding.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Mission</h2>
        <ul className="list-disc pl-6 text-gray-500 mb-8">
          <li>To develop and strengthen strategic international partnerships that support academic and research excellence.</li>
          <li>To facilitate international mobility programs for students, lecturers, and researchers that foster global competencies and cross-cultural experiences.</li>
          <li>To provide professional, accessible, and comprehensive services for international students, scholars, and partners.</li>
          <li>To promote UNSIKA&apos;s global visibility and active participation in international academic networks and forums.</li>
          <li>To ensure that all international programs reflect the values of integrity, innovation, inclusiveness, and contribution to sustainable development.</li>
        </ul>
      </motion.section>

      {/* Internationalization at UNSIKA */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Internationalization at UNSIKA</h2>
        <p className="text-lg text-gray-500 mb-4">
          Singaperbangsa Karawang University (UNSIKA) continues to be committed to becoming a superior university that is globally competitive. One real form of this commitment is the launch of the International Undergraduate Program (IUP), an undergraduate scholarship program for foreign students who wish to study in Indonesia, especially in Karawang. The IUP program was launched in 2020 and officially accepted its first international students in 2021. The aim of this program is to encourage the internationalization of higher education and open up opportunities for cross-cultural and academic collaboration between UNSIKA and various countries.
        </p>
      </motion.section>

      {/* International Student Life */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }} className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">International Student Life</h2>
        <div className="text-lg text-gray-500 space-y-4 text-left max-w-3xl mx-auto">
          <div>
            <strong>Accommodation:</strong> IUP foreign students live in boarding houses located not far from UNSIKA Campus 1, making it easier for them to access academic facilities and campus activities.
          </div>
          <div>
            <strong>Academic & Community Engagement:</strong> In addition to attending lectures, they are also active in various activities organized by UNSIKA and by other agencies, such as the Karawang Regional Government and other partner campuses. During their studies, foreign students will also gain direct learning experience in the community through Real Work Lectures (KKN) in villages, or undergo Field Work Practices (PKL) in companies. This experience not only broadens their academic and professional horizons, but also provides an opportunity to interact directly with the Indonesian community.
          </div>
          <div>
            <strong>Non-Academic Activities:</strong> Outside of academic activities, foreign students can also participate in various non-academic activities such as sports (futsal, basketball, tennis, and others) and join student organizations at the university and faculty levels. This involvement supports their integration into the campus community and enriches their experience while studying in Indonesia.
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-2xl font-bold mb-6 text-gray-700">{t('about.team.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.12, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100">
                <Image src={member.photo} alt={member.name} width={96} height={96} className="object-cover w-full h-full" />
              </div>
              <span className="font-semibold text-blue-600">{member.name}</span>
              <span className="text-gray-500 text-sm">{member.position}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Contact Info */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-2xl font-bold mb-4 text-gray-700">{t('about.contact.title')}</h2>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }} className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6">
          <p className="mb-2 text-gray-600"><span className="font-semibold text-gray-700">{t('about.contact.email')}</span> international.affairs@unsika.ac.id</p>
          <p className="mb-2 text-gray-600"><span className="font-semibold text-gray-700">{t('Instagram')}</span>:
            <a
              href="https://instagram.com/international.affairs.unsika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline ml-1"
            >
              @international.affairs.unsika
            </a>
          </p>
          <p className="text-gray-600"><span className="font-semibold text-gray-700">{t('about.contact.address')}</span> Jl. HS. Ronggowaluyo, Telukjambe Timur, Karawang, Indonesia</p>
        </motion.div>
      </motion.section>
    </div>
  );
} 