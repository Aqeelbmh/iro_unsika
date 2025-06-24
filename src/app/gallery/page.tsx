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
  { title: 'Student Exchange Program', url: 'https://www.youtube.com/embed/9bZkp7q19f0' },
  // Add your new video here - please provide the video URL
  // { title: 'New Video Title', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col gap-16">
      {/* Photo Gallery */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
        <div className="flex gap-4 mb-6">
          {categories.map(cat => (
            <motion.button
              key={cat}
              className={`px-4 py-2 rounded-2xl transition-colors duration-300 ${filter === cat ? 'bg-blue-600 text-white shadow-lg' : 'bg-white/20 backdrop-blur-lg border border-white/30 text-gray-700'}`}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.filter(p => filter === 'All' || p.category === filter).map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,120,255,0.10)' }}
              className="relative w-full h-48 rounded shadow overflow-hidden"
            >
              <Image 
                src={p.src} 
                alt={p.alt} 
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
      {/* Video Gallery */}
      <motion.section {...fadeInUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-2xl font-bold mb-6">Video Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
              className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/30 bg-white/20 backdrop-blur-lg"
            >
              <iframe
                src={video.url}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={video.title}
              ></iframe>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
} 