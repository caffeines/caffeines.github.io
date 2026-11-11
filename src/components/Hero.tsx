import { about, contacts } from '../data'

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div>
          <h1>{about.name}</h1>
          <p>Hi, I'm {about.jobDescription} <a href={about.company.link}>{about.company.name}</a>.</p>
          <p>{about.description}</p>
          {about.opening && <p>{about.opening}</p>}
          <div className="intro-links">
            <a href={contacts.github}>GitHub</a>
            <a href={contacts.linkedin}>LinkedIn</a>
            <a href={contacts.email}>Email</a>
          </div>
        </div>
        <img className="profile-image" src="/profile.jpeg" alt={about.name} width="280" height="350" fetchPriority="high" />
      </div>
    </section>
  )
}
