import { experiences } from '../data'

export function Experience() {
    return (
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
    )
}
