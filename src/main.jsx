/**
 * @fileoverview Application entry point
 * @author Maxwell Jones
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('app');
if (rootElement) {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
