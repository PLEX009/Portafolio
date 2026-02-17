import React from 'react'
import '../styles/Header.modeule.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    {/* <div className="logo">
                        <img src="https://via.placeholder.com/40" alt="Logo" />
                    </div> */}
                    <div className="header-info">
                        <h1 className="name">Roy Sebastian Arenas Marin</h1>
                        <p className="subtitle">Software Developer</p>
                    </div>
                </div>

                <nav className="header-nav">
                    <a href="#inicio" className="nav-link">Inicio</a>
                    <a href="#proyectos" className="nav-link">Proyectos</a>
                    <a href="#sobre-mi" className="nav-link">Sobre mi</a>
                    <a href="#skills" className="nav-link">Skills</a>
                </nav>
            </div>
        </header>
    )
}

export default Header