# UNSIKA International Relation Office (IRO) Website

This is the official website for the International Relation Office (IRO) of Universitas Singaperbangsa Karawang (UNSIKA). Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion, it provides information about international programs, news, partnerships, gallery, downloads, and contact details for students, staff, and global partners.

## 🌏 Features
- **Modern, Responsive Design:** Fully responsive for mobile, tablet, and desktop.
- **International Programs:** Details on student exchange, internships, scholarships, short courses, and more.
- **News & Events:** Dynamic news section with images and detailed articles.
- **Gallery:** Photo and video gallery with category filtering and YouTube embeds.
- **Partners:** List of international partner institutions with logos and details.
- **Downloads:** Forms, brochures, and guidelines for students and partners.
- **Contact:** Contact form and office information.
- **Multilingual Support:** Language context for future translation support.
- **Animated UI:** Smooth transitions and interactive elements using Framer Motion.

## 📁 Project Structure
```
src/
  app/
    about/           # About IRO page
    contact/         # Contact form and info
    downloads/       # Downloadable resources
    gallery/         # Photo & video gallery
    news/            # News articles (dynamic routing)
    partners/        # International partners
    programs/        # Exchange, internships, scholarships, etc.
    layout.tsx       # Root layout (meta, navbar, footer)
    globals.css      # Global styles (Tailwind)
  components/        # Navbar, Footer, shared UI
  contexts/          # Language context
  lib/               # Translations, utilities
public/
  assets/            # Images, gallery, partner logos, etc.
```

## 🚀 Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production:**
   ```bash
   npm run build && npm start
   ```

## 🖼️ Adding Content
- **News:** Edit `src/app/news/newsData.ts` to add or update news articles and images.
- **Gallery:** Add images to `public/assets/gallery/` and update `src/app/gallery/page.tsx`.
- **Partners:** Update partner info and logos in `src/app/partners/page.tsx` and `public/assets/Partner/`.
- **Programs:** Edit program details in `src/app/programs/` subfolders.

## 🌐 Deployment
- **Vercel:** Recommended for seamless Next.js deployment. Connect your repo and deploy.
- **Other Hosts:** Any Node.js-compatible host (Netlify, DigitalOcean, etc.)

## 🤝 Contributing
1. Fork the repo and create your branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m 'Add some feature'`
3. Push to the branch: `git push origin feature/your-feature`
4. Open a Pull Request

## 📝 License
This project is for UNSIKA IRO and its community. For academic, non-commercial use. For other uses, please contact the IRO office.

---

For questions, contact the [UNSIKA IRO Office](mailto:iro@unsika.ac.id) or open an issue in this repository.
