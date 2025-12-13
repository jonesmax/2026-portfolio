/**
 * @fileoverview Home page component
 * @author Maxwell Jones
 */

import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
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
          <div className="hero-avatar">
            <img src="/logo.png" alt="Maxwell Jones" className="avatar-logo" />
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
                While still developing, I regularly deliver technical and sales demonstrations, effectively describing the entire project from backend to frontend for various audiences. My experience enables me to translate complex requirements between business stakeholders and developers, utilizing my AGILE training to facilitate communication and collaboration throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
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
