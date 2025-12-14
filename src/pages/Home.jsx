/**
 * @fileoverview Home page component
 * @author Maxwell Jones
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CodeBackground from '../components/CodeBackground.jsx';
import './Home.css';

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const lastParagraphFull = "While still developing, I regularly deliver technical and sales demonstrations, effectively describing the entire project from backend to frontend for various audiences. My experience enables me to translate complex requirements between business stakeholders and developers, utilizing my AGILE training to facilitate communication and collaboration throughout the process.";

  useEffect(() => {
    // Initial coin flip animation sequence
    const animationSequence = () => {
      // Start with logo, then flip to profile pic
      setTimeout(() => setIsFlipped(true), 400);
      // Flip back to logo
      setTimeout(() => setIsFlipped(false), 800);
      // Mark animation as complete
      setTimeout(() => setIsAnimating(false), 1000);
    };

    animationSequence();
  }, []);

  useEffect(() => {
    let typingInterval = null;
    
    // Intersection Observer to trigger typing animation when about section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset and start typing animation
            setTypedText('');
            setIsTyping(true);
            let currentIndex = 0;
            
            // Clear any existing interval
            if (typingInterval) {
              clearInterval(typingInterval);
            }
            
            typingInterval = setInterval(() => {
              if (currentIndex < lastParagraphFull.length) {
                setTypedText(lastParagraphFull.substring(0, currentIndex + 1));
                currentIndex++;
              } else {
                clearInterval(typingInterval);
                setIsTyping(false);
              }
            }, 30); // Typing speed: 30ms per character
          } else {
            // Reset when section leaves view
            if (typingInterval) {
              clearInterval(typingInterval);
            }
            setTypedText('');
            setIsTyping(false);
          }
        });
      },
      { threshold: 0 } // Trigger as soon as section starts to enter viewport
    );

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (typingInterval) {
        clearInterval(typingInterval);
      }
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, [lastParagraphFull]);
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Tools & Libraries',
      skills: ['Vite', 'Webpack', 'Git', 'npm', 'Jest', 'React Router']
    },
    {
      title: 'Design',
      skills: ['Responsive Design', 'UI/UX', 'Figma', 'Accessibility']
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <CodeBackground />
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Maxwell Jones</span>
          </h1>
          <h2 className="hero-subtitle">Frontend Developer</h2>
          <p className="hero-description">
            I create beautiful, responsive, and user-friendly web experiences
            using modern technologies like React and Decisions Low Code.
          </p>
          <p className="hero-description">
            Full stack trained, with a frontend-first eye for design. With 5 years of experience, I've developed start to finish full stack projects for brands, studying accessibility as a priority and ensuring every product is inclusive and polished.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div 
            className={`hero-avatar ${isFlipped ? 'flipped' : ''} ${isAnimating ? 'animating' : ''}`}
            onClick={() => {
              if (!isAnimating) {
                setIsFlipped(!isFlipped);
              }
            }}
            style={{ cursor: isAnimating ? 'default' : 'pointer' }}
          >
            <div className="avatar-face avatar-front">
              <img src="/logo.png" alt="Maxwell Jones" className="avatar-logo" />
            </div>
            <div className="avatar-face avatar-back">
              <img src="/images/profilepic.jpg" alt="Maxwell Jones" className="avatar-profile" />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                With 5 years of full stack development experience, I've built comprehensive solutions from the ground up. One of my most significant achievements was independently integrating React into <a
                  href="https://decisions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                  aria-label="Visit Decisions low code platform website"
                  style={{
                    color: '#42a5f5',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={e => (e.currentTarget.style.color = '#1199fa')}
                  onMouseOut={e => (e.currentTarget.style.color = '#1173d4')}
                >Decisions low code platform</a>, where I architected the integration of a modern React JavaScript frontend directly into the legacy backend rule engine.
              </p>
              <p>
                As a full stack developer with a frontend-first mindset, I offer a unique blend of technical expertise and design sensibility. I excel at bridging the gap between robust architecture and seamless user experience—ensuring every solution is not only well-built but also intuitive and visually engaging.
              </p>
              <p>
                <span className="typing-text">
                  {typedText}
                  {isTyping && <span className="typing-cursor">|</span>}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <CodeBackground />
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-category-title">Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">HTML5/CSS</span>
                <span className="skill-tag">Accessibility</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C# / .NET</span>
                <span className="skill-tag">PHP / Laravel</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">CI/CD (GitHub Actions, Azure DevOps)</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Photoshop</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-category-title">Other / Integration</h3>
              <div className="skill-tags">
                <span className="skill-tag">Decisions low code platform</span>
                <span className="skill-tag">Technical & Sales Demos</span>
                <span className="skill-tag">Requirements Documentation</span>
                <span className="skill-tag">UI/UX & Design Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
