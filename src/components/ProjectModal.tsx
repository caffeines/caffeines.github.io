import { useEffect, useRef } from 'react'
import type { Project } from '../data'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const element = dialog.current
    const opener = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    element?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element?.close()
      document.body.style.overflow = previousOverflow
      opener?.focus()
    }
  }, [])
  return (
    <dialog
      ref={dialog}
      className="modal-content"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const bounds = event.currentTarget.getBoundingClientRect()
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            onClose()
        }
      }}
    >
      <div className="modal-header">
        <div>
          <h3 className="modal-title" id="project-title">
            {project.title}
          </h3>
          {project.associatedWith && (
            <p className="modal-company">
              at {project.associatedWith.companyName}
            </p>
          )}
        </div>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>
      </div>
      <div className="modal-body">
        <p>{project.longDescription}</p>
        <h4 className="modal-section-title">Key contributions</h4>
        <ul className="modal-list">
          {project.workDescriptions.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
        <h4 className="modal-section-title">Tech stack</h4>
        <div className="tech-stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
        <div className="modal-footer">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View project ↗
          </a>
        </div>
      </div>
    </dialog>
  )
}
