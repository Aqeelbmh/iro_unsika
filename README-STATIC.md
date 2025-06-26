# Unsika International Relation Office - Static HTML Version

This is a static HTML version of the Unsika IRO website, converted from the original Next.js project. All functionality has been preserved while removing React dependencies.

## Table of Contents
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

## Project Structure
The file structure has been simplified to standard HTML, CSS (via Tailwind CDN), and JavaScript:

- **`index.html`**: The main landing page.
- **`about.html`**: About Us page with vision, mission, and team.
- **`programs/`**: Directory containing pages for different programs:
  - `iup.html`: International Undergraduate Program.
  - `student-exchange.html`: Student Exchange Program.
  - `internships.html`: International Internship Program.
  - `scholarships.html`: Scholarship information.
- **`partners.html`**: Information about partner universities.
- **`news.html`**: News and events listing.
- **`news/{slug}.html`**: Individual news article pages.
- **`gallery.html`**: Photo and video gallery.
- **`downloads.html`**: Downloadable documents (brochures, forms).
- **`contact.html`**: Contact information and form.
- **`js/`**:
  - `main.js`: Core JavaScript for interactivity (mobile menu, animations, sliders).
  - `news-data.js`: Contains the data for news articles.
- **`public/`**: Contains all static assets like images, logos, and documents.

## Key Features
- **Static Site**: No server or build process required. Can be hosted on any static hosting provider.
- **Responsive Design**: Fully responsive layout for all devices.
- **Interactive UI**: Includes a hero slider, scroll animations, a filterable gallery, and a mobile-friendly navigation menu.
- **Modular JavaScript**: Code is organized into a main script and a data script for news.

## Pages
- **Home** (`index.html`): Hero section, about, featured programs, and latest news.
- **About** (`about.html`): Information about Unsika IRO, vision, mission, and team.
- **Programs**: Detailed pages for each international program.
- **Partners**: List of international partner institutions.
- **News & Events**: Latest updates and articles.
- **Gallery**: Visual showcase of campus life and events.
- **Downloads**: Essential documents for students and partners.
- **Contact**: Office address, contact details, and a map.

## Getting Started
To run the website locally, simply open any of the `.html` files in your web browser. No special setup is needed.

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Navigate to the directory:**
   ```bash
   cd UNSIKA-IOR
   ```
3. **Open `index.html` in your browser:**
   You can do this by double-clicking the file or using a live server extension in your code editor (like Live Server for VS Code).

## Deployment
This static website can be deployed to any static hosting service, such as:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

Simply upload the contents of this directory to your chosen provider. No build step is necessary.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hero slides, mobile menu, contact forms
- **All Original Pages**: Home, About, Contact, Programs, etc.
- **No Dependencies**: Pure HTML, CSS, and JavaScript

## File Structure

```
├── index.html              # Home page
├── about.html              # About page
├── contact.html            # Contact page
├── programs/
│   └── iup.html           # IUP program page
├── js/
│   └── main.js            # Main JavaScript file
├── public/                # All assets (images, etc.)
└── README-STATIC.md       # This file
```

## How to Use

1. **Simple Setup**: Just open `index.html` in any web browser
2. **Local Server**: For best experience, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Deploy**: Upload all files to any web hosting service

## Pages Included

- **Home** (`index.html`): Welcome page with hero slides, featured programs, and latest news
- **About** (`about.html`): Information about Unsika IRO, vision, mission, and team
- **Contact** (`contact.html`): Contact form and information
- **IUP Program** (`programs/iup.html`): Details about the International Undergraduate Program

## Key Features

### Navigation
- Responsive navigation with mobile menu
- Dropdown menus for programs
- Active page highlighting

### Animations
- Smooth fade-in animations on scroll
- Hero image slideshow
- Hover effects and transitions

### Interactive Elements
- Contact form with validation
- Mobile menu toggle
- Smooth scrolling

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

## Customization

### Colors
The website uses Tailwind CSS classes. Main colors:
- Primary: Blue (`blue-500`, `blue-600`)
- Secondary: Gray (`gray-600`, `gray-800`)
- Accent: Various colors for different sections

### Content
- Edit HTML files to change text content
- Replace images in the `public/` folder
- Modify `js/main.js` for JavaScript functionality

### Styling
- All styles are in the HTML files using Tailwind CSS
- Custom CSS is in `<style>` tags within each file
- Easy to modify colors, spacing, and layout

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance

- Fast loading with CDN-hosted Tailwind CSS
- Optimized images
- Minimal JavaScript
- No external dependencies

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect GitHub repository

### Vercel
1. Import from GitHub
2. Deploy automatically

### Traditional Hosting
1. Upload all files to web server
2. Ensure proper file permissions
3. Configure server if needed

## Maintenance

- Update content by editing HTML files
- Replace images in `public/` folder
- Modify JavaScript in `js/main.js`
- No build process required

## Support

For questions or issues:
- Check browser console for errors
- Ensure all files are in correct locations
- Verify image paths are correct
- Test on different browsers

---

**Note**: This static version maintains all the visual appeal and functionality of the original Next.js site while being much simpler to deploy and maintain. 