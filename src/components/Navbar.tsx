import { contacts } from '../data'

export function Navbar() {
    return (
        <nav>
            <a href="#" className="logo">SADAT SAYEM</a>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact" className="nav-cta">Contact Me</a></li>
            </ul>
        </nav>
    )
}
