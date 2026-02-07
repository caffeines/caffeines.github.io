import { about, contacts } from '../data'

export function Footer() {
    return (
        <footer id="contact">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>SADAT SAYEM</h3>
                    <p>Let's build something amazing together!</p>
                </div>

                <div className="footer-socials">
                    <a href={contacts.linkedin} className="footer-social-link">LinkedIn</a>
                    <a href={contacts.github} className="footer-social-link">GitHub</a>
                    <a href={contacts.email} className="footer-social-link">Email</a>
                    <a href={contacts.blog} className="footer-social-link">Blog</a>
                    <a href={contacts.youtube} className="footer-social-link">YouTube</a>
                </div>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} {about.name}. Coded with ❤️ and Coffee.</p>
            </div>
        </footer>
    )
}
