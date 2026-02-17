import React from 'react'
import '../styles/Title.modeule.css'

const Title = () => {
    return (
        <section className="hero-section" id="inicio">
            <div className="hero-container">
                <div className="hero-content">
                    <h2 className="hero-title">Software Developer</h2>
                    <h1 className="hero-name">Roy Arenas</h1>
                    <p className="hero-subtitle">Full Stack React & TypeScript</p>

                    <div className="social-buttons">
                        <a href="https://www.linkedin.com/in/roy-sebastian-arenas-marin-a060612a1/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                            LinkedIn →
                        </a>
                        <a href="https://github.com/PLEX009?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-btn github">
                            GitHub →
                        </a>
                    </div>
                    <button className="download-cv">
                        📄 Descargar CV
                    </button>

                    <div className="tech-icons">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Title