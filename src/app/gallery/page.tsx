"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const photos = [
  // New gallery images
  { src: '/assets/gallery/WhatsApp Image 2024-04-30 at 14.30.59.jpeg', alt: 'UNSIKA Event 1', category: 'Events' },
  { src: '/assets/gallery/Jepang.jpg', alt: 'Japan Collaboration', category: 'Events' },
  { src: '/assets/gallery/IMG20231204122013.jpg', alt: 'Campus Activity 1', category: 'Campus' },
  { src: '/assets/gallery/IMG20241025145140 (1).jpg', alt: 'Campus Activity 2', category: 'Campus' },
  { src: '/assets/gallery/photo_2024-10-15_15-26-36 (1).jpg', alt: 'Student Activity 1', category: 'Students' },
  { src: '/assets/gallery/WhatsApp Image 2024-11-22 at 11.52.01 (1).jpeg', alt: 'Student Activity 2', category: 'Students' },
  { src: '/assets/gallery/WhatsApp Image 2024-11-22 at 11.52.00 (1).jpeg', alt: 'Student Activity 3', category: 'Students' },
  { src: '/assets/gallery/WhatsApp Image 2024-11-22 at 11.51.59.jpeg', alt: 'Student Activity 4', category: 'Students' },
  { src: '/assets/gallery/IMG_5173.jpg', alt: 'Campus Activity 3', category: 'Campus' },
  { src: '/assets/gallery/IMG_5155.jpg', alt: 'Campus Activity 4', category: 'Campus' },
  // Existing images
  { src: '/assets/01e696e9-ffac-4639-848b-9ce52e6d4dbb.jpg', alt: 'Student Activity 5', category: 'Students' },
  { src: '/assets/IMG_4610.jpeg', alt: 'Student Activity 6', category: 'Students' },
];
const categories = ['All', 'Events', 'Campus', 'Students'];

const videos = [
  { title: 'UNSIKA IO Introduction', url: 'https://www.youtube.com/embed/G5Dyn8dixHw' },
  { title: 'Universitas Singaperbangsa Karawang | Video Profile', url: 'https://www.youtube.com/watch?v=w6Ij7lqrZPg' },
  // Add your new video here - please provide the video URL
  // { title: 'New Video Title', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' },
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

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        {...fadeInUp} 
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Gallery</h1>
        <p className="text-lg text-gray-600">Explore our international programs, events, and activities through photos and videos.</p>
      </motion.div>

      <div className="space-y-12">
        {/* Events & Activities */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Events & Activities</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              '/assets/gallery/IMG_5155.jpg',
              '/assets/gallery/IMG_5173.jpg',
              '/assets/gallery/IMG20231204122013.jpg',
              '/assets/gallery/IMG20241025145140 (1).jpg',
              '/assets/gallery/Jepang.jpg',
              '/assets/gallery/photo_2024-10-15_15-26-36 (1).jpg',
              '/assets/gallery/WhatsApp Image 2024-04-30 at 14.30.59.jpeg',
              '/assets/gallery/WhatsApp Image 2024-11-22 at 11.51.59.jpeg',
              '/assets/gallery/WhatsApp Image 2024-11-22 at 11.52.00 (1).jpeg',
              '/assets/gallery/WhatsApp Image 2024-11-22 at 11.52.01 (1).jpeg',
            ].map((image, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="relative overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <span className="text-white font-medium">View Image</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Videos */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Videos</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'Profile of Universitas Singaperbangsa Karawang | UNSIKA 2025',
                url: 'https://www.youtube.com/embed/YZY0aJxMRz4',
                desc: 'Learn about our international programs and opportunities at UNSIKA International Office.'
              },
              {
                title: 'Universitas Singaperbangsa Karawang | Video Profile',
                url: 'https://www.youtube.com/embed/w6Ij7lqrZPg',
                desc: 'See our students\' experiences in international exchange programs and cultural activities.'
              },
            ].map((video, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className="space-y-3"
              >
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sky-700">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Campus Life */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Campus Life</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              '/assets/01e696e9-ffac-4639-848b-9ce52e6d4dbb.jpg',
              '/assets/IMG_4610.jpeg',
            ].map((image, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="relative overflow-hidden rounded-lg aspect-video"
              >
                <Image
                  src={image}
                  alt={`Campus life image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <span className="text-white font-medium text-sm">Campus Life</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* International Partners */}
        <motion.section 
          {...fadeInUp} 
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">International Partners</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              '/assets/Partner/1699343145215.jpg',
              '/assets/Partner/Mahidol_U.png',
              '/assets/Partner/Shanghai_University_of_Electric_Power_logo.png',
              '/assets/Partner/UiTM.png',
            ].map((logo, index) => (
              <motion.div 
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(80,120,255,0.15)' }}
                className="bg-white rounded-lg p-4 flex items-center justify-center aspect-square"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={150}
                  height={150}
                  className="object-contain max-w-full max-h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
} 