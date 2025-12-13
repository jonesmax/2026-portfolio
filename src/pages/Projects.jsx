/**
 * @fileoverview Projects page component
 * @author Maxwell Jones
 */

import { useState } from 'react';
import ProjectModal from '../components/ProjectModal.jsx';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Soil',
      description: 'A full stack React application with PHP Laravel backend and PostgreSQL database, designed for local golf courses to measure and monitor soil health. The platform performs complex calculations for chemical balance analysis and integrates with local weather APIs to provide comprehensive environmental data for optimal course maintenance.',
      technologies: ['React', 'PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'REST APIs', 'Weather API'],
      image: '🌱',
      link: '#',
      startDate: 'January 2024',
      endDate: 'Ongoing',
      status: 'Active',
      images: []
    },
    {
      id: 2,
      title: 'School Tracker',
      description: 'A dynamic dashboard application built with React, PHP Laravel, and PostgreSQL for managing academic life. Features custom schedule creation, assignment tracking with upcoming deadlines, and comprehensive grade monitoring. The UI-focused design provides an intuitive interface for students to stay organized and on top of their coursework.',
      technologies: ['React', 'PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'REST APIs'],
      image: '📚',
      link: '#',
      startDate: 'September 2023',
      endDate: 'December 2023',
      status: 'Completed',
      images: ['/images/desktopProject.png', '/images/mobileProject.png']
    },
    {
      id: 3,
      title: 'TTC Tracker',
      description: 'A mobile-oriented transit tracking application using Toronto\'s public TTC API. Built with React, PHP Laravel, and PostgreSQL, this app tracks real-time arrival information for local transit options. Features push notifications to alert users of upcoming arrivals and focuses on learning public API integration while providing a seamless mobile experience.',
      technologies: ['React', 'PHP', 'Laravel', 'PostgreSQL', 'JavaScript', 'REST APIs', 'TTC API', 'Push Notifications'],
      image: '🚌',
      link: '#',
      startDate: 'June 2023',
      endDate: 'August 2023',
      status: 'Completed',
      images: []
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
                <button 
                  className="project-link"
                  onClick={() => handleProjectClick(project)}
                >
                  View Project 
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Projects;
