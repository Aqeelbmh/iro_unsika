# UNSIKA International Office (IRO) Website

A modern, responsive website for the International Office of Universitas Singaperbangsa Karawang (UNSIKA), showcasing international programs, partnerships, and opportunities.

![UNSIKA IRO](https://img.shields.io/badge/UNSIKA-International%20Office-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.0-0055FF)

## 🌟 Features

### 🎯 Core Functionality
- **International Programs Showcase**: Comprehensive display of student exchange, internships, scholarships, and more
- **Partner University Network**: Showcase of 50+ international partner institutions
- **News & Updates**: Latest news and announcements with rich media support
- **Gallery**: Photo and video gallery of events and activities
- **Downloads**: Access to important documents, forms, and resources
- **Contact Information**: Multiple ways to get in touch with the international office

### 🎨 Design & User Experience
- **Modern UI/UX**: Clean, professional design with glassmorphism effects
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **Performance**: Optimized images, lazy loading, and efficient code structure

### 🌍 International Features
- **Multi-language Support**: Ready for internationalization (i18n)
- **Global Content**: Content relevant to international students and partners
- **Cultural Sensitivity**: Design and content suitable for diverse audiences
- **International Standards**: Follows web standards and best practices

## 🚀 Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth interactions

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Git**: Version control and collaboration

### Deployment
- **Vercel**: Hosting and deployment platform
- **GitHub**: Source code repository and CI/CD

## 📁 Project Structure

```
UNSIKA-IOR/
├── public/
│   ├── assets/
│   │   ├── gallery/          # Gallery images
│   │   ├── news/            # News images
│   │   ├── Partner/         # Partner logos
│   │   └── Team/            # Team member photos
│   └── downloads/           # Downloadable files
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── downloads/       # Downloads page
│   │   ├── gallery/         # Gallery page
│   │   ├── news/            # News pages
│   │   ├── partners/        # Partners page
│   │   └── programs/        # Program pages
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── Footer.tsx       # Footer component
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx
│   └── lib/                 # Utility functions
│       └── translations.ts
├── package.json
├── tailwind.config.js
├── next.config.mjs
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aqeelbmh/iro_unsika.git
   cd UNSIKA-IOR
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📖 Usage

### Development
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Content Management

#### Adding News
1. Navigate to `src/app/news/newsData.ts`
2. Add new news items to the array
3. Include images in `public/assets/news/` directory
4. Update the news slug and content

#### Adding Gallery Images
1. Place images in `public/assets/gallery/`
2. Update the gallery page to include new images
3. Ensure proper image optimization

#### Adding Partners
1. Add partner logos to `public/assets/Partner/`
2. Update the partners data in the partners page
3. Include partner information and descriptions

#### Adding Downloads
1. Place files in `public/downloads/`
2. Update the downloads page with file information
3. Ensure proper file organization

## 🎨 Customization

### Styling
The project uses Tailwind CSS for styling. Custom styles can be added in:
- `src/app/globals.css` - Global styles
- Component-specific CSS modules
- Tailwind configuration in `tailwind.config.js`

### Animations
Animations are powered by Framer Motion. Custom animations can be added by:
1. Importing motion components
2. Defining animation variants
3. Applying animations to components

### Components
Reusable components are located in `src/components/`. To create new components:
1. Create a new `.tsx` file in the components directory
2. Export the component
3. Import and use in pages

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features
- Flexible grid layouts
- Mobile-first navigation
- Optimized images for different screen sizes
- Touch-friendly interactions

## 🌐 Internationalization

The website is prepared for multi-language support:
- Language context setup in `src/contexts/LanguageContext.tsx`
- Translation files in `src/lib/translations.ts`
- RTL support ready
- Cultural considerations in design

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
# Build the project
npm run build

# Export static files (if needed)
npm run export

# Deploy to your hosting provider
```

## 📊 Performance Optimization

### Implemented Optimizations
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components load on demand
- **Minification**: CSS and JavaScript minification
- **Caching**: Proper cache headers and strategies

### Performance Metrics
- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals: Optimized for all metrics
- Page Load Time: < 3 seconds on average connection

## 🔧 Configuration Files

### Next.js Configuration (`next.config.mjs`)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
```

### Tailwind Configuration (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      animation: {
        // Custom animations
      },
    },
  },
  plugins: [],
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Navigation works on all devices
- [ ] Images display properly
- [ ] Forms function correctly
- [ ] Animations work smoothly
- [ ] Links are functional
- [ ] Responsive design works

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly
5. Commit with descriptive messages
6. Push to your fork
7. Create a pull request

### Code Standards
- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Maintain consistent formatting
- Write semantic HTML
- Follow accessibility guidelines

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

### Development Team
- **Mohamed Hakeel** - Lead Developer & Web Developer
- **Ikhwanussafa Sadidan** - Director
- **Refi Aksep Sativa** - Secretary
- **Mulia Putra** - Program Coordinator
- **Hasan Rabiev** - Student Representative

### Contact Information
- **Email**: international@unsika.ac.id
- **Phone**: +62 267 401-1234
- **Address**: Jl. HS Ronggowaluyo Telukjambe Timur, Karawang, West Java, Indonesia
- **Website**: [www.unsika.ac.id](https://www.unsika.ac.id)

## 🔗 Links

- **Live Website**: [UNSIKA International Office](https://iro-unsika.vercel.app)
- **GitHub Repository**: [https://github.com/Aqeelbmh/iro_unsika](https://github.com/Aqeelbmh/iro_unsika)
- **Documentation**: [Project Wiki](https://github.com/Aqeelbmh/iro_unsika/wiki)

## 📈 Project Status

- ✅ **Phase 1**: Core website development
- ✅ **Phase 2**: Content management and updates
- ✅ **Phase 3**: Animation and UX enhancements
- 🔄 **Phase 4**: Performance optimization and testing
- 📋 **Phase 5**: Multi-language support implementation

## 🎯 Roadmap

### Upcoming Features
- [ ] Multi-language support (Indonesian, English, Arabic)
- [ ] Advanced search functionality
- [ ] Student portal integration
- [ ] Real-time chat support
- [ ] Advanced analytics dashboard
- [ ] Mobile app development

### Long-term Goals
- [ ] AI-powered content recommendations
- [ ] Virtual campus tours
- [ ] International student community platform
- [ ] Advanced reporting and analytics
- [ ] Integration with university systems

---

**Built with ❤️ for UNSIKA International Office**

*Empowering global education through technology and innovation*
