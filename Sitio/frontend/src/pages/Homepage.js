import '../styles/Homepage.css'
const Homepage = (props) => {
    return (
        <main className="holder">
            <div>   
                <img className="homeimg" src="images/micropro.jpg" alt="Microprocesador"></img>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Somo una corporación que se encarga de producir microprocesadores a nivel insdustrial. Nustro propósito es crear tecnología que modifica el mundo y mejora la vida de todas las personas del planeta.</p>
                    <p>Estamos aplicando nuestro alcance, escala y recursos para lograr objetivos audaces. Y no lo estamos haciendo solos: Trabajamos con nuestros clientes y estimulamos a la industria para lograr un mayor impacto.</p>
                </div>

                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Exelente calidad de producto</span>
                        <span clasName="autor">Nate Gentile</span>
                    </div>
                </div> 
            </div>
        </main>
    )
} //arreglar imagen

export default Homepage;