import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, Award, Briefcase, Code, Database, Wrench, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { profileData, projects, skills, milestones, certifications } from '../data/mock';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{profileData.name}</h1>
            <p className="hero-tagline">{profileData.tagline}</p>
            <div className="hero-buttons">
              <Button className="btn-primary" asChild>
                <a href={`mailto:${profileData.email}`} target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button variant="outline" className="btn-secondary" asChild>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" className="btn-secondary" asChild>
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="summary-section">
        <div className="container">
          <p className="summary-text">{profileData.summary}</p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <Card key={project.id} className="project-card">
                <CardHeader>
                  <CardTitle className="project-title">{project.title}</CardTitle>
                  <CardDescription className="project-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight, index) => (
                      <li key={index}>
                        <CheckCircle className="w-4 h-4" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="btn-primary project-btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <Card className="skill-card">
              <CardHeader>
                <div className="skill-header">
                  <Code className="w-6 h-6 skill-icon" />
                  <CardTitle>AI/ML</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="skill-tags">
                  {skills["AI/ML"].map((skill, index) => (
                    <Badge key={index} className="skill-badge">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardHeader>
                <div className="skill-header">
                  <Database className="w-6 h-6 skill-icon" />
                  <CardTitle>Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="skill-tags">
                  {skills["Development"].map((skill, index) => (
                    <Badge key={index} className="skill-badge">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardHeader>
                <div className="skill-header">
                  <Wrench className="w-6 h-6 skill-icon" />
                  <CardTitle>Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="skill-tags">
                  {skills["Tools"].map((skill, index) => (
                    <Badge key={index} className="skill-badge">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">Professional Milestones & Awards</h2>
          <div className="timeline">
            {milestones.map((milestone) => (
              <div key={milestone.id} className="timeline-item">
                <div className="timeline-marker">
                  {milestone.type === 'award' ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>
                <div className="timeline-content">
                  <span className="timeline-date">{milestone.date}</span>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <Card key={cert.id} className="cert-card">
                <CardContent className="cert-content">
                  <div className="cert-header">
                    <CheckCircle className="w-6 h-6 cert-icon" />
                    <Badge variant="secondary" className="verified-badge">Verified</Badge>
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-name">{profileData.name}</h3>
              <p className="footer-tagline">AI & Full-Stack Engineer</p>
            </div>
            <div className="footer-right">
              <a href={`mailto:${profileData.email}`} className="footer-link">
                <Mail className="w-5 h-5" />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="footer-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 {profileData.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;