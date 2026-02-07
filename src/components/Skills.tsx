import { skills } from '../data'

export function Skills() {
    return (
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
    )
}
