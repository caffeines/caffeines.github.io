import { moocs } from '../data'

export function Certifications() {
  return (
    <section className="cents-section">
      <div className="cert-container">
        <div className="cert-card-large">
          <div className="cert-content">
            <h2>Certifications</h2>
            <ul className="cert-list">
              {moocs.map((cert, index) => (
                <li key={index} className="cert-item">
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {cert.title} ({cert.issuer})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
