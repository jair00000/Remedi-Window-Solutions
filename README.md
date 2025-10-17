# Remedi Window Solution Website

A professional, responsive website for Remedi Window Solution - a medium-sized business specializing in window installation, repair, and replacement services.

## 🚀 Features

- **Modern Design**: Clean, professional design with Tailwind CSS
- **Responsive**: Fully responsive across all devices
- **SEO Optimized**: Comprehensive SEO setup with meta tags, structured data, and sitemap
- **Performance**: Optimized for fast loading and Core Web Vitals
- **Accessibility**: Built with accessibility best practices
- **Reusable Components**: Modular component architecture for easy maintenance

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Helmet Async** - SEO meta tag management
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Header.js          # Navigation header
│   │   └── Footer.js          # Site footer
│   ├── UI/
│   │   ├── Button.js          # Reusable button component
│   │   ├── Card.js            # Card component
│   │   ├── Container.js       # Layout container
│   │   └── Section.js         # Page section wrapper
│   └── Common/
│       └── ScrollToTop.js     # Scroll to top utility
├── pages/
│   ├── Home.js                # Homepage
│   ├── About.js               # About page
│   ├── Services.js            # Services page
│   ├── Gallery.js             # Project gallery
│   ├── Contact.js             # Contact page
│   └── NotFound.js            # 404 page
├── App.js                     # Main app component
├── index.js                   # App entry point
└── index.css                  # Global styles and Tailwind imports

public/
├── images/                    # Image assets
├── index.html                 # HTML template
├── manifest.json              # PWA manifest
├── robots.txt                 # SEO robots file
└── sitemap.xml                # SEO sitemap
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones (#3b82f6, #2563eb, #1d4ed8)
- **Secondary**: Gray tones (#64748b, #475569, #334155)
- **Accent**: Yellow tones (#eab308, #ca8a04, #a16207)

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Components
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Cards**: Hover effects and consistent spacing
- **Sections**: Consistent padding and background options

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd remedi-window-solution
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📱 Pages

### Homepage (`/`)
- Hero section with call-to-action
- Services overview
- Company features
- Customer testimonials

### About (`/about`)
- Company story and values
- Team member profiles
- Statistics and achievements

### Services (`/services`)
- Detailed service descriptions
- Process overview
- Service benefits

### Gallery (`/gallery`)
- Project showcase
- Filterable project categories
- Customer testimonials

### Contact (`/contact`)
- Contact form
- Business information
- Service areas
- Emergency contact

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.js`
3. Update navigation in `src/components/Layout/Header.js`
4. Add to sitemap in `public/sitemap.xml`

### Modifying Styles

- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `@layer components` in `index.css`

### SEO Configuration

- Meta tags: Update in each page component using `react-helmet-async`
- Structured data: Modify in `public/index.html`
- Sitemap: Update `public/sitemap.xml`

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta tags for each page
- **Structured Data**: JSON-LD structured data for local business
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization

## 🎯 Performance

- **Code Splitting**: Automatic code splitting with React Router
- **Image Optimization**: Placeholder for optimized images
- **CSS Optimization**: Tailwind CSS purging in production
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 📞 Contact Information

Update the following in your components:
- Phone numbers
- Email addresses
- Physical address
- Business hours
- Service areas

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Connect your repository to Vercel
2. Framework preset: Create React App
3. Deploy automatically

### Traditional Hosting
1. Run `npm run build`
2. Upload `build` folder contents to your server
3. Configure server for SPA routing

## 📝 License

This project is proprietary to Remedi Window Solution.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about this website, contact the development team.
