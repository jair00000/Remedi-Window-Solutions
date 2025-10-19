# Images Directory

This directory contains all the images used throughout the Remedi Window Solution website, organized by page and service type.

## Folder Structure

```
images/
├── home/                        # Home page images
├── about/                       # About Us page images
├── solutions/                   # Main Solutions page images
├── contactUs/                   # Contact Us page images
├── residential-solutions/       # Residential window tinting images
├── commercial-solutions/        # Commercial window tinting images
├── government-schools/          # Government and school facility images
└── gallery/                     # Project gallery images
```

## Image Guidelines

### File Formats
- **WebP** (preferred) - Best compression and quality
- **JPEG** - For photographs
- **PNG** - For images with transparency
- **SVG** - For icons and simple graphics

### Sizing Guidelines
- **Hero images**: 1920x1080px minimum
- **Service images**: 800x600px minimum
- **Gallery images**: 1200x800px minimum
- **Detail images**: 600x400px minimum
- **Team photos**: 400x400px (square)
- **Icons**: 64x64px or SVG
- **Logos**: Multiple sizes (32x32, 64x64, 128x128, 256x256)

### Optimization
- Compress all images before uploading
- Use appropriate file formats
- Include alt text for accessibility
- Consider lazy loading for gallery images

## Page-Specific Image Requirements

### Home Page (`/home/`)
- Hero background image
- Service category images (residential, commercial, government)
- Feature benefit images (energy efficiency, UV protection, etc.)
- CTA background image

### About Page (`/about/`)
- Company hero image
- Team photos
- Office/building images
- Company values demonstration images

### Solutions Page (`/solutions/`)
- Solutions overview hero
- Process step images
- Service category overviews
- Benefit demonstration images

### Contact Page (`/contactUs/`)
- Contact hero image
- Office exterior/interior
- Service area map
- Team contact photos

### Service-Specific Pages
- **Residential** (`/residential-solutions/`): Home types, window types, benefits
- **Commercial** (`/commercial-solutions/`): Building types, business benefits
- **Government/Schools** (`/government-schools/`): Facility types, compliance, safety

### Gallery (`/gallery/`)
- Before/after comparisons
- Project showcases
- Installation process photos
- Customer testimonials
- Detail shots of quality work

## Usage in Components

Images should be imported and used like this:

```jsx
import heroImage from '../images/home/hero-bg.jpg';

<img 
  src={heroImage} 
  alt="Professional window tinting service" 
  className="w-full h-auto"
/>
```

### File Naming Convention
- Use lowercase letters and hyphens
- Be descriptive and specific
- Include page/service context
- Example: `commercial-office-building-exterior.jpg`

## SEO Considerations

- Use descriptive filenames
- Include relevant keywords in alt text
- Optimize file sizes for faster loading
- Use structured data for images when appropriate
