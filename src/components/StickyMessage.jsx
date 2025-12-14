/**
 * @fileoverview Sticky message popup for desktop
 * @author Maxwell Jones
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './StickyMessage.css';

const StickyMessage = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  return (
    <div className="sticky-message">
      {isMinimized ? (
        <button 
          className="minimized-button" 
          onClick={handleExpand}
          aria-label="Expand message"
        >
          💬
        </button>
      ) : (
        <div className="quote-bubble">
          <button className="close-button" onClick={handleMinimize} aria-label="Minimize message">
            ×
          </button>
          <div className="quote-mark">"</div>
          <p className="quote-text">
            I'm eager to find a new team and would love to book a quick meeting to explain my story
          </p>
          <Link to="/contact" className="quote-link">
            Let's Connect →
          </Link>
          <div className="quote-tail"></div>
        </div>
      )}
    </div>
  );
};

export default StickyMessage;
