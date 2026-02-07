import { about } from '../data'

export function Hero() {
    return (
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
    )
}
