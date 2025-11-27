# 🚀 Modern Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge&logo=vercel)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)

**A modern, responsive, and feature-rich portfolio website built with React, Vite, and TailwindCSS**

[Live Demo](https://moorthy-dev.netlify.app/) • [Report Bug](https://moorthy-dev.netlify.app/) • [Request Feature](https://moorthy-dev.netlify.app/)

</div>

---

## ✨ Features

### 🎨 **Modern UI/UX**
- Sleek and responsive design optimized for all devices
- Dark/Light mode toggle with system preference detection
- Smooth animations and transitions
- Custom font selector for personalized experience
- Interactive navigation with scroll progress indicator

### 🔥 **Core Functionality**
- **Dynamic Profile Section** - Animated image blocks with engaging visuals
- **Skills Showcase** - Primary and secondary skills with visual representation
- **Project Portfolio** - Comprehensive project display with filtering
- **Contact Form** - Easy-to-use contact interface
- **Social Links** - Quick access to social media profiles
- **Authentication** - Secure login system for dashboard access

### ⚡ **Performance & SEO**
- Built with Vite for lightning-fast development and builds
- Optimized images with WebP format
- SEO-ready with sitemap.xml and robots.txt
- Google Search Console and Bing Webmaster Tools integration
- Progressive Web App (PWA) capabilities

### 🛠️ **State Management**
- Redux Toolkit for efficient state management
- Separate slices for authentication, settings, and theme
- Persistent state across sessions

---

## 🏗️ Project Architecture

```
moorthygithub-protfolio1.0/
│
├── 📁 public/              # Static assets & SEO files
│   ├── _redirects          # Netlify redirects
│   ├── BingSiteAuth.xml    # Bing verification
│   ├── googleeb*.html      # Google verification
│   ├── robots.txt          # Search engine crawling rules
│   └── sitemap.xml         # Site structure for SEO
│
├── 📁 src/
│   ├── 📁 assets/          # Images and media
│   │   └── skills/         # Skill icons (WebP optimized)
│   │
│   ├── 📁 component/       # Reusable components
│   │   ├── Button/         # Custom button components
│   │   ├── common/         # Shared utilities
│   │   ├── HomeSocialLinks/# Social media links
│   │   └── hook/           # Custom React hooks
│   │
│   ├── 📁 page/            # Main page components
│   │   ├── About/          # About section
│   │   ├── AsideContacts/  # Side contact panel
│   │   ├── auth/           # Authentication pages
│   │   ├── Contact/        # Contact form
│   │   ├── Dashboard/      # Admin dashboard
│   │   ├── IntroCard/      # Introduction card
│   │   ├── Layout/         # Layout wrapper
│   │   ├── Navbar/         # Navigation components
│   │   ├── Profile/        # Profile page
│   │   ├── ProfileSection/ # Animated profile section
│   │   ├── Project/        # Projects showcase
│   │   ├── SideBar/        # Sidebar navigation
│   │   └── Skill/          # Skills display
│   │
│   ├── 📁 Redux/           # State management
│   │   ├── store.js        # Redux store configuration
│   │   └── Slice/          # Redux slices
│   │
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
│
└── 📄 Configuration files
    ├── vite.config.js      # Vite configuration
    ├── tailwind.config.cjs # TailwindCSS setup
    ├── postcss.config.cjs  # PostCSS configuration
    ├── eslint.config.js    # ESLint rules
    └── package.json        # Dependencies & scripts
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **pnpm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/moorthygithub/protfolio1.0.git

# Navigate to project directory
cd moorthygithub-protfolio1.0

# Install dependencies
pnpm install
# or
yarn install
```

### Development

```bash
# Start development server
pnpm  dev
# or
yarn dev

# Access the app at http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
pnpm  build
# or
yarn build

# Preview production build locally
pnpm preview
# or
yarn preview
```

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br><strong>React 18</strong>
</td>
<td align="center" width="150">
<img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" />
<br><strong>Vite</strong>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="48" height="48" alt="TailwindCSS" />
<br><strong>TailwindCSS</strong>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="48" height="48" alt="Redux" />
<br><strong>Redux Toolkit</strong>
</td>
</tr>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br><strong>JavaScript ES6+</strong>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br><strong>HTML5</strong>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br><strong>CSS3</strong>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="48" height="48" alt="ESLint" />
<br><strong>ESLint</strong>
</td>
</tr>
</table>

---

## 📦 Key Dependencies

```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-router-dom": "^6.x",
  "@reduxjs/toolkit": "^2.x",
  "react-redux": "^9.x",
  "tailwindcss": "^3.x",
  "vite": "^5.x"
}
```

---

## 🎨 Features Deep Dive

### 🌓 Theme System
- Persistent dark/light mode preference
- Smooth theme transitions
- System preference detection
- Customizable color schemes

### 🔧 Custom Hooks
- `useScrollSection` - Intelligent section detection during scroll
- `useScrollProgress` - Visual scroll progress indicator
- Reusable and optimized for performance

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Bottom navigation for mobile devices
- Touch-optimized interactions

### 🎯 SEO Optimization
- Meta tags for social sharing
- Structured data markup
- XML sitemap for search engines
- Verified with Google and Bing Webmaster Tools
- Optimized robots.txt

---

## 🔐 Authentication

The portfolio includes a secure authentication system:
- Login/Logout functionality
- Protected dashboard routes
- Redux-based auth state management
- Persistent sessions

---

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Image Optimization**: WebP format with lazy loading
- **Bundle Size**: Optimized with code splitting

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

---

## 🚢 Deployment

### Netlify
```bash
# Build command
pnpm  build

# Publish directory
dist

# Redirects are configured in public/_redirects
```

### Vercel
```bash
# Automatic deployment on push to main branch
# Or manual deployment:
vercel --prod
```

### Other Platforms
The build output in the `dist` folder can be deployed to any static hosting service.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Moorthy**

- GitHub: [@moorthygithub](https://github.com/moorthygithub)
- Portfolio: [your-portfolio.com](moorthy-dev.netlify.app)
- LinkedIn: [Your LinkedIn](www.linkedin.com/in/moorthy-c)

---

## 🙏 Acknowledgments

- Fonts from [Google Fonts](https://fonts.google.com/)
- Inspiration from various portfolio designs
- React and Vite communities

---

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/moorthygithub/protfolio1.0)
![GitHub issues](https://img.shields.io/github/issues/moorthygithub/protfolio1.0)
![GitHub stars](https://img.shields.io/github/stars/moorthygithub/protfolio1.0)
![GitHub forks](https://img.shields.io/github/forks/moorthygithub/protfolio1.0)

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me via email
- Connect on LinkedIn

---

<div align="center">

**⭐ Star this repository if you find it helpful! ⭐**

Made with ❤️ by [Moorthy](https://github.com/moorthygithub)

</div>
