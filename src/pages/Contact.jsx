/**
 * @fileoverview Contact page component with form and contact information
 * @author Maxwell Jones
 */

import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" style={{ width: 32, height: 32, objectFit: 'contain', verticalAlign: 'middle' }} />,
      title: 'Email',
      value: 'maxwelljones2012@gmail.com',
      link: 'mailto:maxwelljones2012@gmail.com'
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style={{ width: 32, height: 32, objectFit: 'contain', verticalAlign: 'middle', filter: 'invert(1) grayscale(1) contrast(100)' }} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/maxwelljones2020',
      link: 'https://www.linkedin.com/in/maxwelljones2020/'
    },
    {
      icon: <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" style={{ width: 32, height: 32, objectFit: 'contain', verticalAlign: 'middle', filter: 'invert(1) grayscale(1) contrast(100)' }} />,
      title: 'GitHub',
      value: 'github.com/jonesmax',
      link: 'https://github.com/jonesmax'
    }
  ];

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>I'd love to hear from you. Send me a message!</p>
      </div>
      <div className="contact-container">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message here..."
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary submit-btn"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-success">Thank you! I'll get back to you soon.</p>
            )}
          </form>
        </div>
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p className="contact-intro">
            Feel free to reach out through any of these channels. I'm always open to
            discussing new projects, creative ideas, or opportunities to be part of
            your vision.
          </p>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="contact-method"
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-details">
                  <h3>{method.title}</h3>
                  <p>{method.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
