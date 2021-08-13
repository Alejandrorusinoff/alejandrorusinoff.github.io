import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/proyectos.css'

const imagenesEcommerce = ([
    require('../images/proyectos/ecommerce/imagen1.png'),
    require('../images/proyectos/ecommerce/imagen2.png'),
    require('../images/proyectos/ecommerce/imagen3.png'),
    require('../images/proyectos/ecommerce/imagen4.png'),
    require('../images/proyectos/ecommerce/imagen5.png'),
    require('../images/proyectos/ecommerce/imagen6.png'),
    require('../images/proyectos/ecommerce/imagen7.png'),
    require('../images/proyectos/ecommerce/imagen8.png'),
    require('../images/proyectos/ecommerce/imagen9.png'),
    require('../images/proyectos/ecommerce/imagen10.png'),
    require('../images/proyectos/ecommerce/imagen11.png'),
    require('../images/proyectos/ecommerce/imagen12.png'),
    require('../images/proyectos/ecommerce/imagen13.png'),
])

export default () => {
    
    return (
        <div id="porfolio" className="recuadro">
        <div><Link className="back" to="/"><h3>PORTFOLIO</h3></Link></div>
        <div className="containerImagenes">
            {imagenesEcommerce.map((imageneEcommerce, indice) =>
                <Link to={`/proyectoEcommerce/${indice}`}> 
                    <div className="styles">
                        <img src={imageneEcommerce.default} alt="" />
                    </div>
                </Link>
            )}
        </div>
    </div>
    )
}
