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
            using modern technologies and best practices.
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
            <div className="avatar-placeholder">MJ</div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer with a strong focus on creating
                exceptional user experiences. With expertise in modern JavaScript
                frameworks and a keen eye for design, I bring ideas to life through
                clean, efficient code.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a career dedicated to
                building accessible, performant, and visually appealing web
                applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with the
                developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
