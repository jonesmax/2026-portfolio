/**
 * @fileoverview Vite configuration
 * @author Maxwell Jones
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path for custom domain deployment
// Custom domain: maxwelljones.ca
// Repository: jonesmax/2026-portfolio
export default defineConfig({
  plugins: [react()],
  base: '/',
});
