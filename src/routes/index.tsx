import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { about, experiences, skills, projects, moocs, contacts, type Project } from '../data'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <nav>
        <a href="#" className="logo">SADAT SAYEM</a>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact" className="nav-cta">Contact Me</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span>Mastering</span>
                <span><span className="highlight-text">Backend Engineering</span> <span className="underline-sketch">& Scale.</span></span>
              </h1>
              <p>
                Hi! I'm <strong className="highlight-text">{about.name}</strong>. {about.jobDescription} <strong><a href={about.company.link}>{about.company.name}</a></strong>.
                <br />
                {about.description}
                <br />
                {about.opening && <span className="text-sm font-semibold text-green-600 mt-2 block">{about.opening}</span>}
              </p>
              <div className="cta-group">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#experience" className="btn btn-secondary">My Journey</a>
              </div>
            </div>

            <div className="profile-frame-container">
              <div className="profile-frame">
                <img
                  src="/profile.jpeg"
                  alt={about.name} className="profile-image" />
                <svg className="arrow-doodle" viewBox="0 0 100 60" fill="none">
                  <path d="M10 30 Q 50 10, 90 20" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" fill="none"
                    opacity="0.6" />
                  <path d="M80 15 L 90 20 L 85 28" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" fill="none"
                    opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="companies">
        <div className="companies-container">
          <div className="companies-title">Building solutions for companies like ✨</div>
          <div className="company-grid">
            <div className="company-logo">bKash</div>
            <div className="company-logo">Durbin Labs</div>
            <div className="company-logo">TigerIT</div>
            <div className="company-logo">CommChat</div>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-container">
          <div className="section-header">
            <h2>Professional Journey</h2>
            <p>Creating impact through code, one commit at a time.</p>
          </div>

          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                <span className="timeline-tag">{exp.startDate} - {exp.endDate}</span>
                <h3>{exp.companyName}</h3>
                <div className="timeline-role">{exp.position}</div>
                {exp.descriptions.map((desc, i) => (
                  <p key={i} className="mb-2 last:mb-0">{desc}</p>
                ))}
                <div className="tech-stack">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="companies-container">
          <div className="section-header">
            <h2>Technical Arsenal</h2>
            <p>Tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-badge">
                <span className="skill-icon">
                  {/* using a default icon if image is not suitable for small icon, or use image if needed */}
                  {/* For simplicity using emoji based on skill name or generic, 
                      since the data has images which might be large URLs. 
                      Let's stick to the previous emoji approach or try to map if possible, 
                      but for now I'll use a generic icon or the image if valid url. 
                      The provided data has image URLs. I will use an img tag. */}
                  <img src={skill.image} alt={skill.name} className="w-6 h-6 object-contain" onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    // Fallback could be a text or emoji, but for now just hiding broked images 
                  }} />
                </span>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-exp">{skill.exps}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A selection of projects that showcase my engineering capabilities.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-icon">
                  {/* Placeholder icon or derive from project type */}
                  {project.title === 'eDoktor' ? '🏥' :
                    project.title === 'CommChat' ? '💬' :
                      project.title === 'SwiftEx' ? '📦' :
                        project.title === 'RetinaLMS' ? '🎓' : '💻'}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && <span className="tech-pill">+{project.techStack.length - 4}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cents-section">
        <div className="cert-container">
          <div className="cert-card-large">
            <div className="cert-content">
              <span className="cert-badge">Certified Pro</span>
              <h2>Knowledge & Certifications</h2>
              <p>Continuous learning is key to staying ahead in tech. Here are some of my certifications:</p>

              <ul className="cert-list">
                {moocs.map((cert, index) => (
                  <li key={index} className="cert-item">
                    <a href={cert.certLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {cert.title} ({cert.issuer})
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>SADAT SAYEM</h3>
            <p>Let's build something amazing together!</p>
          </div>

          <div className="footer-socials">
            <a href={contacts.linkedin} className="footer-social-link">LinkedIn</a>
            <a href={contacts.github} className="footer-social-link">GitHub</a>
            <a href={contacts.email} className="footer-social-link">Email</a>
            <a href={contacts.blog} className="footer-social-link">Blog</a>
            <a href={contacts.youtube} className="footer-social-link">YouTube</a>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {about.name}. Coded with ❤️ and Coffee.</p>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">{selectedProject.title}</h3>
                {selectedProject.associatedWith && (
                  <div className="text-sm text-gray-500 font-handwriting mt-1 flex items-center gap-2">
                    <span>at {selectedProject.associatedWith.companyName}</span>
                    {/* optionally show logo if available */}
                  </div>
                )}
              </div>
              <button className="modal-close" onClick={() => setSelectedProject(null)}>✖</button>
            </div>
            <div className="modal-body">
              <p>{selectedProject.longDescription}</p>

              <h4 className="modal-section-title">Key Contributions</h4>
              <ul className="modal-list">
                {selectedProject.workDescriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>

              <h4 className="modal-section-title">Tech Stack</h4>
              <div className="tech-stack mb-6">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>

              <div className="modal-footer">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
