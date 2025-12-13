# Portfolio Website

A modern, responsive portfolio website built with React and Vite.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal build times and performance

## Tech Stack

- React 19
- React Router DOM
- Vite
- CSS3 with CSS Variables

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment using GitHub Actions.

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "Source: GitHub Actions"

2. **Configure Base Path** (if needed):
   - If deploying to `username.github.io/repo-name`, the base path is automatically configured
   - If deploying to `username.github.io` (your main GitHub Pages site), update `vite.config.js`:
     ```js
     base: '/',
     ```

3. **Push to main branch**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Check the Actions tab to monitor the deployment

4. **Access your site**:
   - Your site will be available at `https://username.github.io/repo-name/` (or `https://username.github.io/` if using the main site)

The deployment workflow is located at `.github/workflows/deploy.yml` and will run automatically on every push to the `main` branch.

## Project Structure

```
src/
├── components/     # Reusable components (Navigation, Footer)
├── context/        # React context providers
├── pages/          # Page components (Home, Projects, Contact)
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Customization

Update the following files with your information:

- `src/pages/Home.jsx` - Personal information and skills
- `src/pages/Projects.jsx` - Your projects
- `src/pages/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

## License

MIT
