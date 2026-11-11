import { skills } from '../data'

export function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container">
        <div className="section-header">
          <h2>Skills</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-badge">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-exp">{skill.exps}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
