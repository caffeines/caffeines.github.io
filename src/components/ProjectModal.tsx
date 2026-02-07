import { Project } from '../data'

interface ProjectModalProps {
    project: Project
    onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <div>
                        <h3 className="modal-title">{project.title}</h3>
                        {project.associatedWith && (
                            <div className="text-sm text-gray-500 font-handwriting mt-1 flex items-center gap-2">
                                <span>at {project.associatedWith.companyName}</span>
                                {/* optionally show logo if available */}
                            </div>
                        )}
                    </div>
                    <button className="modal-close" onClick={onClose}>✖</button>
                </div>
                <div className="modal-body">
                    <p>{project.longDescription}</p>

                    <h4 className="modal-section-title">Key Contributions</h4>
                    <ul className="modal-list">
                        {project.workDescriptions.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>

                    <h4 className="modal-section-title">Tech Stack</h4>
                    <div className="tech-stack mb-6">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="tech-pill">{tech}</span>
                        ))}
                    </div>

                    <div className="modal-footer">
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
