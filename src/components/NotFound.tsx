import { Link } from '@tanstack/react-router'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function NotFound({ children }: { children?: any }) {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-container">
          <div className="section-header" style={{ textAlign: 'center', width: '100%', padding: '0 1rem' }}>
            <div className="profile-frame" style={{
              margin: '0 auto 2rem',
              padding: 'clamp(2rem, 5vw, 4rem)',
              width: '100%',
              maxWidth: '800px',
              height: 'auto',
              transform: 'rotate(-1deg)',
              boxSizing: 'border-box'
            }}>
              <h1 style={{ fontSize: '6rem', color: 'var(--marker-red)', marginBottom: '1rem' }}>404</h1>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Page Not Found</h2>
              <div className="text-xl text-gray-600 font-handwriting mb-8" style={{ fontFamily: 'Architects Daughter, cursive' }}>
                {children || <p>Oops! Looks like you've wandered off the map. This page is just a blank sheet of paper.</p>}
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button
                  onClick={() => window.history.back()}
                  className="btn btn-secondary"
                >
                  Go Back
                </button>
                <Link
                  to="/"
                  className="btn btn-primary"
                >
                  Take Me Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
