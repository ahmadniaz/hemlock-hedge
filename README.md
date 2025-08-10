# Hemlock Point Lodge - Luxury Vacation Rental Website

A modern, responsive website for Hemlock Point Lodge, a luxury vacation rental property in the Adirondack Mountains. Built with React, TypeScript, and Material-UI (MUI).

## 🏔️ About

Hemlock Point Lodge is a 4,000 sq ft luxury lodge nestled on 100+ acres with a private 15-acre lake, sleeping up to 16 guests. This website showcases the property's unique appeal and drives direct bookings through a premium user experience.

## ✨ Features

- **Modern Design**: Rustic luxury meets modern sophistication
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Smooth animations and engaging user experience
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance Focused**: Lazy loading, code splitting, and optimized images
- **Accessibility**: WCAG compliant with proper focus management

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **UI Framework**: Material-UI (MUI) v5
- **Styling**: Emotion (CSS-in-JS)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Yup validation
- **SEO**: React Helmet Async
- **Icons**: Material-UI Icons
- **Development**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/hemlock-point-lodge.git
cd hemlock-point-lodge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (Header, Footer, etc.)
│   ├── home/           # Homepage-specific components
│   ├── accommodations/ # Accommodations page components
│   ├── activities/     # Activities page components
│   ├── gallery/        # Gallery page components
│   └── contact/        # Contact page components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── styles/             # Theme and global styles
└── assets/             # Images, videos, and other assets
```

## 🎨 Design System

### Color Palette
- **Primary**: #2D4A36 (Deep Forest Green)
- **Secondary**: #B8860B (Dark Golden Rod)
- **Accent**: #D4A574 (Warm Beige/Cream)
- **Background**: #FAF9F6 (Warm White)
- **Text Primary**: #2C2C2C (Dark Charcoal)
- **Text Secondary**: #6B6B6B (Medium Gray)

### Typography
- **Primary Font**: Playfair Display (serif)
- **Secondary Font**: Open Sans (sans-serif)
- **Accent Font**: Dancing Script (script)

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive navigation with hamburger menu
- Adaptive typography and spacing
- Touch-optimized interactions
- Optimized images for different screen sizes

## 🔧 Customization

### Theme Configuration
Edit `src/styles/theme.ts` to modify colors, typography, and component styles.

### Content Management
- Update content in individual component files
- Replace images in the `src/assets/images/` directory
- Modify meta tags in page components for SEO

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push to main branch

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

## 📊 Performance Optimization

- **Code Splitting**: React.lazy() for route-based splitting
- **Image Optimization**: Lazy loading and WebP format support
- **Bundle Analysis**: Use `npm run analyze` to inspect bundle size
- **Caching**: Service worker implementation for offline support

## 🔍 SEO Features

- Comprehensive meta tags for all pages
- Open Graph and Twitter Card support
- Structured data markup
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact:
- Email: info@hemlockpointlodge.com
- Phone: +1 (555) 123-4567

## 🗺️ Roadmap

- [ ] Complete Accommodations page with room details
- [ ] Implement Activities page with interactive map
- [ ] Add photo gallery with lightbox
- [ ] Create contact form with validation
- [ ] Integrate booking system
- [ ] Add virtual tour functionality
- [ ] Implement analytics tracking
- [ ] Add multilingual support

---

Built with ❤️ for Hemlock Point Lodge
