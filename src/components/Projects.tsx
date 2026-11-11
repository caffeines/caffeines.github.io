import { useState } from 'react'
import { projects, type Project } from '../data'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  return (
    <>
      <section className="section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <h2>Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <button
                key={project.title}
                className="project-card"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title} project details`}
              >
                <div className="project-copy">
                  <div className="project-title">
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="project-details">View details →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
