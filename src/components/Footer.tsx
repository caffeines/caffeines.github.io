import { about, contacts } from '../data'

export function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-intro">
            <h2>Let's connect.</h2>
            <p>Have a project in mind, a question, or just want to say hello? I'd love to hear from you.</p>
            <a className="contact-email" href={contacts.email}>sadat.talks@gmail.com</a>
          </div>
          <div>
            <h3 className="footer-social-heading">Find me online</h3>
            <div className="footer-socials">
              {[
                ['LinkedIn', contacts.linkedin],
                ['GitHub', contacts.github],
                ['Blog', contacts.blog],
                ['YouTube', contacts.youtube],
              ].map(([label, url]) => (
                <a key={label} href={url}>
                  {label}<span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {about.name}</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
