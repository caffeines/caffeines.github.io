import { experiences } from '../data'

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-container">
        <div className="section-header">
          <h2>Experience</h2>
        </div>
        <div className="timeline-container">
          {experiences.map((exp) => (
            <article key={`${exp.companyName}-${exp.startDate}`} className="timeline-card">
              <h3>{exp.companyName}</h3>
              <span className="timeline-tag">
                {exp.startDate} – {exp.endDate}
              </span>
              <ol className={exp.roles.length > 1 ? 'experience-roles has-promotions' : 'experience-roles'}>
                {exp.roles.map((role) => (
                  <li key={`${role.position}-${role.startDate}`} className="experience-role">
                    <div className="role-heading">
                      <h4 className="timeline-role">{role.position}</h4>
                      {role.promoted && <span className="promotion-badge">Promoted</span>}
                    </div>
                    {exp.roles.length > 1 && (
                      <span className="timeline-tag">{role.startDate} – {role.endDate}</span>
                    )}
                    {role.descriptions.map((desc) => <p key={desc}>{desc}</p>)}
                    <div className="tech-stack">
                      {role.techStack.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
