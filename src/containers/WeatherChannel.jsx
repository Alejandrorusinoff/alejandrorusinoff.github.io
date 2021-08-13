import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/proyectos.css'

const imagenesClima = ([
    require('../images/proyectos/apiClima/imagen1.png'),
    require('../images/proyectos/apiClima/imagen2.png'),
    require('../images/proyectos/apiClima/imagen3.png'),
])

export default () => {
    
    return (
        <div id="porfolio" className="recuadro">
            <div><Link className="back" to="/"><h3>PORTFOLIO</h3></Link></div>
            <div className="containerImagenes">
                {imagenesClima.map((imageneClima, indice) =>
                <Link to={`/proyectoWeatherChannel/${indice}`}> 
                    <div className="styles">
                        <img src={imageneClima.default} alt="" />
                    </div>
                </Link>
                )}
            </div>
        </div>
    )
}
