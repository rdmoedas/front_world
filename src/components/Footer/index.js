import './footer.css'

function Footer() {
    return (
        <footer>
            <div>
                <h2>World DH</h2>
            </div>
            <div className="about">
                <h4>Sobre</h4>
                <p>Projeto realizado utilizando React no front end que é alimentado por API de um servidor Node.</p>
            </div>
            <div className="socialMedia">
                <a href="https://github.com/rdmoedas/api_world" target="_blank" rel="noreferrer">Git Frontend</a>
                <a href="https://github.com/rdmoedas/front_world" target="_blank" rel="noreferrer">Git Backend</a>
                <a href="https://rodev.com.br" target="_blank" rel="noreferrer">www.Rodev.com.br</a>
            </div>
        </footer>
    )
}

export default Footer;
