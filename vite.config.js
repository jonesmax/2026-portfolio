/**
 * @fileoverview Vite configuration
 * @author Maxwell Jones
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path for GitHub Pages deployment
// Repository: jonesmax/2026-portfolio
// Site URL: https://jonesmax.github.io/2026-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/2026-portfolio/',
});
