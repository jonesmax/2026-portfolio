/**
 * @fileoverview Projects page component
 * @author Maxwell Jones
 */

import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '📋',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
      technologies: ['React', 'Chart.js', 'OpenWeather API'],
      image: '🌤️',
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting.',
      technologies: ['React', 'D3.js', 'Express'],
      image: '📊',
      link: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with smooth animations.',
      technologies: ['React', 'CSS3', 'Framer Motion'],
      image: '💼',
      link: '#'
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'Discover and save recipes with advanced filtering, meal planning, and shopping list features.',
      technologies: ['React', 'Redux', 'Spoonacular API'],
      image: '🍳',
      link: '#'
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>My Projects</h1>
        <p>Here are some of my recent works and projects</p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="project-icon">{project.image}</div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
