import '../styles/AboutMe.modeule.css'

const AboutMe = () => {
    return (
        <section className="about-section" id="sobre-mi">
            <div className="about-container">
                <p className="section-label">SOBRE MI</p>
                <h2 className="about-name">Roy Sebastian Arenas</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">
                            Desarrollador de software especializado en aplicaciones web Full Stack con React, Node.js y MySQL.
                        </p>
                        <p className="about-paragraph">
                            Cuento con el título de Técnico En Desarrollo De Sistemas De Informacion del Instituto Rafael Nuñez.
                            Estoy en proceso de certificación para Tegnologo En Analisis y Desarrollo De Software en el SENA.
                            Actualmente estoy en tercer semestre de Ingeniera en Sistemas en la Universidad Nacional Abierta y a Distancia (UNAD).
                        </p>
                        <p className="about-paragraph">
                            Tengo 20 años y resido en Palmira Valle del Cauca.
                        </p>
                        <p className="about-paragraph">

                        </p>
                    </div>

                    <div className="education-card">
                        <h3 className="education-title">Técnico En Desarrollo De Sistemas De Informacion</h3>
                        <p className="education-institution">
                            Instituto Rafael Nuñez.
                        </p>
                        <p className="education-date"> Graduado el 26 de julio de 2024</p>
                    </div>
                    <div className="education-card">
                        <h3 className="education-title">Tegnologo En Desarrollo De Software</h3>
                        <p className="education-institution">
                            Servicio Nacional De Aprendizaje SENA.
                        </p>
                        <p className="education-date"> En proceos de Certificacion</p>
                    </div>
                    <div className="education-card">
                        <h3 className="education-title">Ingeniera en Sistemas</h3>
                        <p className="education-institution">
                            Universidad Nacional Abierta y a Distancia (UNAD).
                        </p>
                        <p className="education-date"> Tercer Semestre</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe