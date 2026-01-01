/**
 * @fileoverview Interactive wave background with cursor interaction
 * @author Maxwell Jones
 */

import { useEffect, useRef, useState } from 'react';
import './CodeBackground.css';

const CodeBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas ? canvas.parentElement : null;
    
    // Browser compatibility checks
    if (!canvas || !container) return;
    if (typeof canvas.getContext !== 'function') return; // Canvas not supported
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // 2D context not available
    
    let animationFrameId;
    const particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let isRunning = true;

    // Enhanced mobile/tablet detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0) ||
                     (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
    
    // Check for reduced motion preference (accessibility)
    const prefersReducedMotion = window.matchMedia && 
                                  window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Fallback for performance.now() (IE9+)
    const getTime = (function() {
      if (typeof performance !== 'undefined' && performance.now) {
        return performance.now.bind(performance);
      }
      return Date.now;
    })();
    
    // Fallback for requestAnimationFrame
    const requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             function(callback) {
               return window.setTimeout(callback, 1000 / 60);
             };
    })();
    
    // Fallback for cancelAnimationFrame
    const cancelAnimFrame = (function() {
      return window.cancelAnimationFrame ||
             window.webkitCancelAnimationFrame ||
             window.mozCancelAnimationFrame ||
             window.oCancelAnimationFrame ||
             window.msCancelAnimationFrame ||
             clearTimeout;
    })();

    const resizeCanvas = () => {
      if (!canvas || !ctx) return;
      const width = canvas.offsetWidth || 0;
      const height = canvas.offsetHeight || 0;
      
      // Only resize if dimensions are valid
      if (width > 0 && height > 0) {
        // Set canvas size (browser handles devicePixelRatio automatically in most cases)
        canvas.width = width;
        canvas.height = height;
      }
    };

    resizeCanvas();
    
    // Throttled resize handler for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };
    
    if (window.addEventListener) {
      window.addEventListener('resize', handleResize, { passive: true });
    }

    const handleMouseMove = (e) => {
      if (isMobile || !canvas) return;
      try {
        const rect = canvas.getBoundingClientRect();
        if (!rect) return;
        // Calculate mouse position relative to canvas
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
        setMousePos({ x: mouseX, y: mouseY });
      } catch (err) {
        // Silently fail if there's an error (e.g., canvas removed from DOM)
        console.warn('CodeBackground: Error handling mouse move', err);
      }
    };

    if (!isMobile && !prefersReducedMotion) {
      // Attach to window so it works even when content blocks the canvas
      // Use capture phase to ensure we get events before they're stopped
      const options = { capture: true, passive: true };
      if (window.addEventListener) {
        window.addEventListener('mousemove', handleMouseMove, options);
        document.addEventListener('mousemove', handleMouseMove, options);
      }
      if (container && container.addEventListener) {
        container.addEventListener('mousemove', handleMouseMove, options);
      }
      if (canvas.addEventListener) {
        canvas.addEventListener('mousemove', handleMouseMove, options);
      }
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 1;
        this.baseSize = this.size;
      }

      update() {
        if (!isMobile && !prefersReducedMotion) {
          const dx = mouseX - this.x;
          const dy = mouseY - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Avoid division by zero
          if (distance > 0 && distance < 200) {
            const force = Math.min(100 / (distance + 1), 2);
            this.vx -= (dx / distance) * force * 0.013;
            this.vy -= (dy / distance) * force * 0.013;
          }
        }

        this.vx *= 0.99;
        this.vy *= 0.99;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.save();
        ctx.fillStyle = primaryColor;
        ctx.globalAlpha = 1.0; // Increased from 0.8 for better visibility
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Reduced particle count for better performance
    for (let i = 0; i < 300; i++) {
      particles.push(new Particle());
    }
    
    // Cache primary color to avoid repeated DOM queries (with fallback)
    let primaryColor = '#818cf8'; // Default fallback
    try {
      if (window.getComputedStyle && document.documentElement) {
        const computed = getComputedStyle(document.documentElement);
        const color = computed.getPropertyValue('--primary-color');
        if (color) {
          primaryColor = color.trim() || primaryColor;
        }
      }
    } catch (err) {
      // Fallback to default if getComputedStyle fails
      console.warn('CodeBackground: Could not get primary color, using default');
    }

    const animate = (currentTime) => {
      if (!isRunning || !ctx || !canvas) return;
      
      try {
        // Clear canvas with error handling
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } catch (err) {
        console.warn('CodeBackground: Error clearing canvas', err);
        isRunning = false;
        return;
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Optimized connection drawing with distance squared check
      const connectionDistance = 150; // Increased from 120 for more visible connections
      const connectionDistanceSq = connectionDistance * connectionDistance;
      
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const distanceSq = dx * dx + dy * dy;

          if (distanceSq < connectionDistanceSq) {
            const distance = Math.sqrt(distanceSq);
            ctx.save();
            ctx.strokeStyle = primaryColor;
            ctx.globalAlpha = (150 - distance) / 150 * 0.7;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimFrame(animate);
    };
    
    // Initialize animation function
    const initializeAnimation = () => {
      if (!ctx || !canvas) return;
      animate(getTime());
    };
    
    // Start animation
    initializeAnimation();

    return () => {
      isRunning = false;
      
      // Clean up resize listener
      if (window.removeEventListener) {
        window.removeEventListener('resize', handleResize);
      }
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      // Clean up mouse listeners
      if (!isMobile && !prefersReducedMotion) {
        const options = { capture: true };
        if (window.removeEventListener) {
          window.removeEventListener('mousemove', handleMouseMove, options);
          document.removeEventListener('mousemove', handleMouseMove, options);
        }
        if (container && container.removeEventListener) {
          container.removeEventListener('mousemove', handleMouseMove, options);
        }
        if (canvas && canvas.removeEventListener) {
          canvas.removeEventListener('mousemove', handleMouseMove, options);
        }
      }
      
      // Cancel animation frame
      if (animationFrameId) {
        cancelAnimFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="code-background">
      <canvas ref={canvasRef} className="code-canvas"></canvas>
      <div className="code-overlay"></div>
    </div>
  );
};

export default CodeBackground;
