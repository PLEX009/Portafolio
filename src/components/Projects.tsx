import { useState } from 'react'
import '../styles/Projects.modeule.css'
import alistamientoImg from '../assets/Alistamiento.png'
import asistenciaImg from '../assets/Asistencia.png'
import formularioImg from '../assets/Formulario.png'

interface Project {
    id: number
    title: string
    description: string
    fullDescription: string
    image: string
    category: string[]
    technologies: string[]
    frontendLink?: string
    backendLink?: string
}

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('Todos')

    const projects: Project[] = [
        {
            id: 1,
            title: 'Alistamiento',
            description: 'Alistamiento es una aplicación de gestión y organización de información para los instructores del Sena.',
            fullDescription: 'Permite la gestion de las fichas de manera eficiente, exportando documentos para automatizar procesos de los instrucotres.',
            image: alistamientoImg,
            category: ['Full Stack'],
            technologies: ['React', 'Vite', 'TypeScript', 'Python', 'Express', 'Node.js', 'MySQL'],
            frontendLink: '#',
            backendLink: '#'
        },
        {
            id: 2,
            title: 'Sistema De Asistencia',
            description: 'Sistema de asistencia es una aplicación desarrollada para automatizar el proceso de registro de asistencia de los estudiantes del Sena.',
            fullDescription: 'Permite el registro de asistencia de los estudiantes del Sena, con funcionalidades como el registro de asistencia, la gestión de asistencia, la generación de informes y la gestión de usuarios.',
            image: asistenciaImg,
            category: ['Full Stack'],
            technologies: ['React', 'Vite', 'TypeScript', 'Express', 'Node.js', 'MySQL'],
            frontendLink: '#',
            backendLink: '#'
        },
        {
            id: 3,
            title: 'Registro Por Medio De Formulario',
            description: 'Formulario es una aplicacion web que permite el registro de personas para accioncolombia.',
            fullDescription: 'Permite el registro de personas para accioncolombia, con funcionalidades como el registro de personas.',
            image: formularioImg,
            category: ['Full Stack'],
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
            frontendLink: '#',
            backendLink: '#'
        }

        // Add more projects here
    ]

    const filters = ['Todos', 'Full Stack', 'Frontend', 'Backend']

    const filteredProjects = activeFilter === 'Todos'
        ? projects
        : projects.filter(project => project.category.includes(activeFilter))

    return (
        <section className="projects-section" id="proyectos">
            <div className="projects-container">
                <p className="section-label">PORTAFOLIO</p>
                <h2 className="section-title">Mis proyectos destacados</h2>

                <div className="filter-buttons">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <p className="project-label">FULLSTACK</p>
                                <h3 className="project-title">{project.title}</h3>
                            </div>

                            <div className="project-body">
                                <div className="project-info">
                                    <p className="project-description">{project.description}</p>
                                    <p className="project-full-description">{project.fullDescription}</p>

                                    <div className="project-actions">
                                        {project.frontendLink && (
                                            <a href={project.frontendLink} className="action-btn" target="_blank" rel="noopener noreferrer">
                                                Frontend
                                            </a>
                                        )}
                                        {project.backendLink && (
                                            <a href={project.backendLink} className="action-btn" target="_blank" rel="noopener noreferrer">
                                                Backend
                                            </a>
                                        )}
                                    </div>

                                    <div className="project-technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="project-preview">
                                    <div className="preview-image-wrapper">
                                        <img src={project.image} alt={project.title} className="project-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
