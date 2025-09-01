# Riyadh Fashion Week 2025

A modern, responsive website for Riyadh Fashion Week featuring an elegant dark theme with golden accents.

## Features

- **Hero Section**: Full-screen hero with elegant typography and golden background shapes
- **Latest News**: Section showcasing the latest updates with image gallery
- **Calendar**: Featured calendar section with RFW branding
- **Designers**: RFW designers showcase with runway imagery
- **Newsletter**: Email signup for updates
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Navigation**: Fixed header with smooth scrolling and mobile menu

## Design Elements

- **Color Scheme**: Black, white, and golden-brown accents
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body text
- **Layout**: Clean, modern sections with proper spacing and visual hierarchy
- **Backgrounds**: Subtle golden gradients and blurred shapes for depth

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd RFW
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Footer.js          # Footer with social links
├── pages/
│   ├── Home.js            # Homepage component
│   ├── About.js           # About page
│   ├── Casting.js         # Casting page
│   ├── Sponsorship.js     # Sponsorship page
│   ├── Press.js           # Press page
│   └── Contact.js         # Contact page
├── App.js                 # Main app with routing
├── index.js               # Entry point with font imports
└── index.css              # Global styles and homepage CSS
```

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **Google Fonts** - Playfair Display and Inter typography

## Customization

### Colors
Update the CSS custom properties in `src/index.css`:
```css
:root {
  --rfw-black: #000000;
  --rfw-white: #ffffff;
  --rfw-gold: #D4AF37;
  --rfw-gold-light: #E5C158;
  --rfw-gold-dark: #B8941F;
}
```

### Typography
Fonts are imported in `src/index.js`. Update the Google Fonts URL to change fonts.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to Riyadh Fashion Week.
