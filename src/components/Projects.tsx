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
                                    <span className="text-4xl">
                                        {project.title === 'Intentify' ? '🔍' :
                                            project.title === 'Notion Todo CLI' ? '📝' :
                                                project.title === 'Card Platform' ? '💳' :
                                                    project.title === 'eDoktor' ? '🏥' :
                                                        project.title === 'CommChat' ? '💬' :
                                                            project.title === 'SwiftEx' ? '📦' :
                                                                project.title === 'RetinaLMS' ? '🎓' : '💻'}
                                    </span>
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

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    )
}
