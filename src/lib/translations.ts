export type Language = 'en' | 'id';

export interface Translations {
  // Navigation
  nav: {
    aboutUs: string;
    programs: string;
    partners: string;
    newsEvents: string;
    gallery: string;
    downloads: string;
    contact: string;
    studentExchange: string;
    internships: string;
    shortCourses: string;
    scholarships: string;
    partnerships: string;
  };

  // Home Page
  home: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      applyNow: string;
    };
    about: {
      title: string;
      description: string;
    };
    featuredPrograms: {
      title: string;
      studentExchange: {
        title: string;
        description: string;
      };
      internships: {
        title: string;
        description: string;
      };
      scholarships: {
        title: string;
        description: string;
      };
    };
    newsEvents: {
      title: string;
      newsTitle: string;
      eventTitle: string;
      announcement: string;
      readMore: string;
    };
    quickLinks: {
      title: string;
      downloadForms: string;
      contact: string;
      applyNow: string;
    };
  };

  // About Page
  about: {
    title: string;
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      items: string[];
    };
    team: {
      title: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      address: string;
    };
  };

  // Programs Page
  programs: {
    title: string;
    description: string;
    studentExchange: {
      title: string;
      description: string;
      features: string[];
    };
    internships: {
      title: string;
      description: string;
      features: string[];
    };
    shortCourses: {
      title: string;
      description: string;
      features: string[];
    };
    scholarships: {
      title: string;
      description: string;
      features: string[];
    };
    partnerships: {
      title: string;
      description: string;
      features: string[];
    };
    customPrograms: {
      title: string;
      description: string;
      features: string[];
    };
    statistics: {
      title: string;
      studentsExchanged: string;
      partnerInstitutions: string;
      countries: string;
      activePrograms: string;
    };
    cta: {
      title: string;
      description: string;
      applyNow: string;
      contactUs: string;
    };
  };

  // Contact Page
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      sendMessage: string;
    };
    location: {
      title: string;
    };
    whatsapp: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    copyright: string;
  };

  // Common
  common: {
    learnMore: string;
    contactUs: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      aboutUs: 'About Us',
      programs: 'Programs',
      partners: 'Partners',
      newsEvents: 'News & Events',
      gallery: 'Gallery',
      downloads: 'Downloads',
      contact: 'Contact',
      studentExchange: 'Student Exchange',
      internships: 'Internships',
      shortCourses: 'Short Courses',
      scholarships: 'Scholarships',
      partnerships: 'Partnerships',
    },
    home: {
      hero: {
        title: 'Welcome to UNSIKA IO',
        subtitle: 'International Office',
        description: 'Empowering global engagement, partnerships, and opportunities for students and scholars at Universitas Singaperbangsa Karawang.',
        applyNow: 'Apply Now',
      },
      about: {
        title: 'About UNSIKA IO',
        description: 'The International Office at UNSIKA facilitates international programs, partnerships, and student mobility, supporting the university\'s vision to be a globally recognized institution.',
      },
      featuredPrograms: {
        title: 'Featured Programs',
        studentExchange: {
          title: 'Student Exchange',
          description: 'Experience studying abroad with our partner universities worldwide.',
        },
        internships: {
          title: 'Internships',
          description: 'Gain international work experience through our internship programs.',
        },
        scholarships: {
          title: 'Scholarships',
          description: 'Explore scholarship opportunities for international students and scholars.',
        },
      },
      newsEvents: {
        title: 'Latest News & Events',
        newsTitle: '[News Title]',
        eventTitle: '[Event Title]',
        announcement: '[Announcement]',
        readMore: 'Read more',
      },
      quickLinks: {
        title: 'Quick Links',
        downloadForms: 'Download Forms',
        contact: 'Contact',
        applyNow: 'Apply Now',
      },
    },
    about: {
      title: 'About Us',
      vision: {
        title: 'Vision',
        description: 'To be a leading international office supporting global engagement and academic excellence at UNSIKA.',
      },
      mission: {
        title: 'Mission',
        items: [
          'Facilitate international programs and partnerships.',
          'Support student and staff mobility.',
          'Promote UNSIKA on the global stage.',
        ],
      },
      team: {
        title: 'Our Team',
      },
      contact: {
        title: 'Contact Information',
        email: 'Email:',
        phone: 'Phone:',
        address: 'Address:',
      },
    },
    programs: {
      title: 'Our Programs',
      description: 'Discover our comprehensive range of international programs designed to enhance your academic journey, develop global competencies, and create meaningful international experiences.',
      studentExchange: {
        title: 'Student Exchange',
        description: 'Study abroad for one or two semesters at our partner universities worldwide.',
        features: ['1-2 semesters duration', 'Transferable credits', 'Cultural immersion', 'Global networking'],
      },
      internships: {
        title: 'Internships',
        description: 'Gain international work experience through our internship programs.',
        features: ['2-6 months duration', 'Paid opportunities', 'Professional development', 'Industry connections'],
      },
      shortCourses: {
        title: 'Short Courses',
        description: 'Intensive courses and summer programs for skill enhancement.',
        features: ['1 week to 3 months', 'Certificate upon completion', 'Cultural activities', 'Specialized training'],
      },
      scholarships: {
        title: 'Scholarships',
        description: 'Financial support for international education and research.',
        features: ['Full and partial awards', 'Merit-based selection', 'Research funding', 'Multiple sources'],
      },
      partnerships: {
        title: 'Partnerships',
        description: 'Collaborative opportunities with international institutions.',
        features: ['50+ partner institutions', 'Joint research projects', 'Faculty exchange', 'Academic collaboration'],
      },
      customPrograms: {
        title: 'Custom Programs',
        description: 'Tailored programs designed for specific needs and requirements.',
        features: ['Customized curriculum', 'Flexible duration', 'Specialized focus', 'Group programs'],
      },
      statistics: {
        title: 'Program Impact',
        studentsExchanged: 'Students Exchanged',
        partnerInstitutions: 'Partner Institutions',
        countries: 'Countries',
        activePrograms: 'Active Programs',
      },
      cta: {
        title: 'Ready to Start Your International Journey?',
        description: 'Explore our programs, check eligibility requirements, and take the first step towards your global education experience.',
        applyNow: 'Apply Now',
        contactUs: 'Contact Us',
      },
    },
    contact: {
      title: 'Contact Us',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        sendMessage: 'Send Message',
      },
      location: {
        title: 'Our Location',
      },
      whatsapp: 'WhatsApp Us',
    },
    footer: {
      description: 'Empowering global engagement, partnerships, and opportunities for students and scholars at UNSIKA.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: 'UNSIKA International Office. All rights reserved.',
    },
    common: {
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
    },
  },
  id: {
    nav: {
      aboutUs: 'Tentang Kami',
      programs: 'Program',
      partners: 'Mitra',
      newsEvents: 'Berita & Acara',
      gallery: 'Galeri',
      downloads: 'Unduhan',
      contact: 'Kontak',
      studentExchange: 'Pertukaran Mahasiswa',
      internships: 'Magang',
      shortCourses: 'Kursus Singkat',
      scholarships: 'Beasiswa',
      partnerships: 'Kemitraan',
    },
    home: {
      hero: {
        title: 'Selamat Datang di UNSIKA IO',
        subtitle: 'Kantor Internasional',
        description: 'Memberdayakan keterlibatan global, kemitraan, dan peluang bagi mahasiswa dan akademisi di Universitas Singaperbangsa Karawang.',
        applyNow: 'Daftar Sekarang',
      },
      about: {
        title: 'Tentang UNSIKA IO',
        description: 'Kantor Internasional UNSIKA memfasilitasi program internasional, kemitraan, dan mobilitas mahasiswa, mendukung visi universitas untuk menjadi institusi yang diakui secara global.',
      },
      featuredPrograms: {
        title: 'Program Unggulan',
        studentExchange: {
          title: 'Pertukaran Mahasiswa',
          description: 'Rasakan belajar di luar negeri dengan universitas mitra kami di seluruh dunia.',
        },
        internships: {
          title: 'Magang',
          description: 'Dapatkan pengalaman kerja internasional melalui program magang kami.',
        },
        scholarships: {
          title: 'Beasiswa',
          description: 'Jelajahi peluang beasiswa untuk mahasiswa dan akademisi internasional.',
        },
      },
      newsEvents: {
        title: 'Berita & Acara Terbaru',
        newsTitle: '[Judul Berita]',
        eventTitle: '[Judul Acara]',
        announcement: '[Pengumuman]',
        readMore: 'Baca selengkapnya',
      },
      quickLinks: {
        title: 'Tautan Cepat',
        downloadForms: 'Unduh Formulir',
        contact: 'Kontak',
        applyNow: 'Daftar Sekarang',
      },
    },
    about: {
      title: 'Tentang Kami',
      vision: {
        title: 'Visi',
        description: 'Menjadi kantor internasional terkemuka yang mendukung keterlibatan global dan keunggulan akademik di UNSIKA.',
      },
      mission: {
        title: 'Misi',
        items: [
          'Memfasilitasi program dan kemitraan internasional.',
          'Mendukung mobilitas mahasiswa dan staf.',
          'Mempromosikan UNSIKA di panggung global.',
        ],
      },
      team: {
        title: 'Tim Kami',
      },
      contact: {
        title: 'Informasi Kontak',
        email: 'Email:',
        phone: 'Telepon:',
        address: 'Alamat:',
      },
    },
    programs: {
      title: 'Program Kami',
      description: 'Temukan berbagai program internasional komprehensif kami yang dirancang untuk meningkatkan perjalanan akademik Anda, mengembangkan kompetensi global, dan menciptakan pengalaman internasional yang bermakna.',
      studentExchange: {
        title: 'Pertukaran Mahasiswa',
        description: 'Belajar di luar negeri selama satu atau dua semester di universitas mitra kami di seluruh dunia.',
        features: ['Durasi 1-2 semester', 'Kredit yang dapat ditransfer', 'Imersi budaya', 'Jaringan global'],
      },
      internships: {
        title: 'Magang',
        description: 'Dapatkan pengalaman kerja internasional melalui program magang kami.',
        features: ['Durasi 2-6 bulan', 'Peluang berbayar', 'Pengembangan profesional', 'Koneksi industri'],
      },
      shortCourses: {
        title: 'Kursus Singkat',
        description: 'Kursus intensif dan program musim panas untuk peningkatan keterampilan.',
        features: ['1 minggu hingga 3 bulan', 'Sertifikat setelah selesai', 'Aktivitas budaya', 'Pelatihan khusus'],
      },
      scholarships: {
        title: 'Beasiswa',
        description: 'Dukungan keuangan untuk pendidikan dan penelitian internasional.',
        features: ['Penghargaan penuh dan parsial', 'Seleksi berbasis prestasi', 'Pendanaan penelitian', 'Berbagai sumber'],
      },
      partnerships: {
        title: 'Kemitraan',
        description: 'Peluang kolaboratif dengan institusi internasional.',
        features: ['50+ institusi mitra', 'Proyek penelitian bersama', 'Pertukaran fakultas', 'Kolaborasi akademik'],
      },
      customPrograms: {
        title: 'Program Kustom',
        description: 'Program yang disesuaikan untuk kebutuhan dan persyaratan tertentu.',
        features: ['Kurikulum yang disesuaikan', 'Durasi fleksibel', 'Fokus khusus', 'Program kelompok'],
      },
      statistics: {
        title: 'Dampak Program',
        studentsExchanged: 'Mahasiswa Bertukar',
        partnerInstitutions: 'Institusi Mitra',
        countries: 'Negara',
        activePrograms: 'Program Aktif',
      },
      cta: {
        title: 'Siap Memulai Perjalanan Internasional Anda?',
        description: 'Jelajahi program kami, periksa persyaratan kelayakan, dan ambil langkah pertama menuju pengalaman pendidikan global Anda.',
        applyNow: 'Daftar Sekarang',
        contactUs: 'Hubungi Kami',
      },
    },
    contact: {
      title: 'Hubungi Kami',
      form: {
        name: 'Nama Anda',
        email: 'Email Anda',
        message: 'Pesan Anda',
        sendMessage: 'Kirim Pesan',
      },
      location: {
        title: 'Lokasi Kami',
      },
      whatsapp: 'WhatsApp Kami',
    },
    footer: {
      description: 'Memberdayakan keterlibatan global, kemitraan, dan peluang bagi mahasiswa dan akademisi di UNSIKA.',
      quickLinks: 'Tautan Cepat',
      contactInfo: 'Info Kontak',
      copyright: 'Kantor Internasional UNSIKA. Semua hak dilindungi.',
    },
    common: {
      learnMore: 'Pelajari Lebih Lanjut',
      contactUs: 'Hubungi Kami',
    },
  },
}; 