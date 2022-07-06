import "./Footer.scss";

export const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="info">
                <span className="infoText">SNKRS STORE. Todos los derechos reservados </span>
                <span className="infoAutor">Desarrollado por <a className="linkAutor" href='https://github.com/rodriman92' target='_blank' rel="noreferrer" >Rodrigo Mancilla</a></span>
            </div>
        </div>
    )
}