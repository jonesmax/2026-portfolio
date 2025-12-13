/**
 * @fileoverview Project modal component for displaying detailed project information
 * @author Maxwell Jones
 */

import { useState, useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      project.images && project.images.length > 0 
        ? (prev + 1) % project.images.length 
        : prev
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      project.images && project.images.length > 0 
        ? (prev - 1 + project.images.length) % project.images.length 
        : prev
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-header">
          <div className="modal-icon">{project.image}</div>
          <h2 className="modal-title">{project.title}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <p className="modal-description">{project.description}</p>
          </div>

          {project.images && project.images.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">Gallery</h3>
              <div className="image-gallery">
                <div className="gallery-main">
                  <button 
                    className="gallery-nav gallery-prev" 
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <img 
                    src={project.images[currentImageIndex]} 
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="gallery-main-image"
                  />
                  <button 
                    className="gallery-nav gallery-next" 
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </div>
                {project.images.length > 1 && (
                  <div className="gallery-thumbnails">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                        aria-label={`View image ${index + 1}`}
                      >
                        <img src={image} alt={`Thumbnail ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
                <div className="gallery-counter">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>
          )}

          <div className="modal-section">
            <h3 className="modal-section-title">Project Details</h3>
            <div className="project-details">
              {project.startDate && (
                <div className="detail-item">
                  <span className="detail-label">Start Date:</span>
                  <span className="detail-value">{project.startDate}</span>
                </div>
              )}
              {project.endDate && (
                <div className="detail-item">
                  <span className="detail-label">End Date:</span>
                  <span className="detail-value">{project.endDate}</span>
                </div>
              )}
              {project.status && (
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">{project.status}</span>
                </div>
              )}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Technologies</h3>
            <div className="modal-technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.link && project.link !== '#' && (
            <div className="modal-section">
              <a 
                href={project.link} 
                className="btn btn-primary modal-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Live Project →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

