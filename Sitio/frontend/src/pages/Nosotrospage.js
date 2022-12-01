import '../styles/Nosotrospage.css';

const Nosotrospage = (props) => {
    return (
        <main className='holder'>
            <div className="historia">
                <h2>Sobre nustra empresa</h2>
                <p>Somos un compañia que diseña, fabrica y vende circuitos integrados para la industria de la computación y las comunicaciones a nivel mundial. Nuestros principales productos a nivel de componentes incluyen microprocesadores, chipsets, placas madre y conectividad con y sin cables.</p>
                <p>Nuestros productos se venden principalmente a los fabricantes del equipo y del diseño original, a los usuarios de computadores y productos de comunicación en red y a otras empresas manufactureras de equipamiento industrial y de comunicaciones.</p>
            </div>
            <div className="Staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/gerente1.jpg" alt="Julian Rodriguez"></img>
                        <h5>Julian Rodriguez</h5>
                        <h6>Gerente General</h6>
                        <p>Es capaz de conducir la organización de una empresa, liderando al equipo de trabajo y coordinando las actividades de otras jefaturas con el fin de cumplir con los objetivos estratégicos establecidos en el plan de trabajo.</p>
                    </div>

                    <div className="persona">
                        <img src="images/Marketing.jpg" alt="Julian Rodriguez"></img>
                        <h5>Lucia Fernandez</h5>
                        <h6>Gerente de marketing</h6>
                        <p>Empeña la labor de establecer y mejorar la imagen de una empresa y sus productos, respetando su visión y valores, para elevar las ventas.</p>
                    </div>
                    <div className="persona">
                        <img src="images/inge.jpg" alt="Julian Rodriguez"></img>
                        <h5>Mateo Silisqui</h5>
                        <h6>Ingeniero mecatrónico</h6>
                        <p>Experto que combina habilidades de la mecánica, electrónica y la automatización para generar sistemas inteligentes como robots, sistemas de control automatizados por computadoras, diseño mecánico y simulaciones.</p>
                    </div>
                    <div className="persona">
                        <img src="images/diseño1.jpg" alt="Julian Rodriguez"></img>
                        <h5>Francisco Santin</h5>
                        <h6>Diseñador</h6>
                        <p>Se encargará en dibujar las máscaras para que los circuitos planeados luego puedan implementarse físicamente.</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Nosotrospage; 