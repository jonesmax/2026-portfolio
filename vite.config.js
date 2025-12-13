/**
 * @fileoverview Vite configuration
 * @author Maxwell Jones
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
