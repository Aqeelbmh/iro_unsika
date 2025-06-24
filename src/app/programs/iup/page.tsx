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

export default function IUPPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">IUP – International Undergraduate Program</h1>
        <p className="text-lg text-gray-600">Through this program, international students receive full scholarships to pursue undergraduate education in various study programs available at UNSIKA. They study alongside local students, build international networks, and deepen their understanding of Indonesian culture.</p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Program Overview</h2>
            <p className="text-gray-600 mb-4">
              Since its inception, the IUP program has attracted students from various countries. The number of IUP students continues to grow:
              <br/>• 2021: 10 students
              <br/>• 2022: 7 students
              <br/>IUP students come from countries such as Sri Lanka, India, Kazakhstan, Pakistan, Tajikistan, Myanmar, Mali, and Yemen.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Fields of Study</h3>
            <motion.ul 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="list-disc pl-6 text-gray-600 space-y-2"
            >
              {[
                'Faculty of Computer Science – Informatics Engineering',
                'Faculty of Agriculture – Agrotechnology, Agribusiness',
                'Faculty of Economics – Accounting, Management',
                'Faculty of Social and Political Sciences – Communication Science, Government Science',
                'Faculty of Teacher Training and Education – English Language Education',
                'Faculty of Health Sciences – Nutrition',
                'Faculty of Engineering – Electrical Engineering',
                'Faculty of Law – Legal Studies',
                'Faculty of Islamic Studies – Islamic Religious Education',
              ].map((field, index) => (
                <motion.li key={index} variants={staggerItem}>
                  {field}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
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
              <motion.div variants={staggerItem}>
                <span className="text-sm text-gray-500">Scholarship Coverage</span>
                <motion.ul 
                  variants={staggerContainer}
                  className="list-disc pl-5 text-gray-800 text-sm mt-1 space-y-1"
                >
                  {[
                    'Return economy class air ticket (reimbursement)',
                    'Visa fee (reimbursement)',
                    'Tuition fee for 8 semesters',
                    'Accommodation (housing)',
                    'Monthly allowance',
                    'Health insurance',
                  ].map((item, index) => (
                    <motion.li key={index} variants={staggerItem}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div variants={staggerItem}>
                <span className="text-sm text-gray-500">Application Period</span>
                <p className="font-medium text-gray-800">Annually (see website for dates)</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <span className="text-sm text-gray-500">Eligibility</span>
                <p className="font-medium text-gray-800">Full-time international undergraduate students</p>
              </motion.div>
              <motion.div variants={staggerItem}>
                <span className="text-sm text-gray-500">Note</span>
                <p className="text-gray-700 text-xs">
                  One scholarship per study program (for faculties offering two programs, only one grantee per faculty).
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Testimonials */}
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-4">Student Testimonials</h3>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              <motion.div 
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="text-sm"
              >
                <p className="text-gray-600 italic">&ldquo;IUP gave me the chance to study in Indonesia and make friends from all over the world.&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Oumar Bagayoko, Mali</p>
              </motion.div>
              <motion.div 
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="text-sm"
              >
                <p className="text-gray-600 italic">&ldquo;The cultural experience and academic support at UNSIKA are amazing!&rdquo;</p>
                <p className="text-sky-600 font-medium mt-1">- Hamdan Ahmad, Pakistan</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 