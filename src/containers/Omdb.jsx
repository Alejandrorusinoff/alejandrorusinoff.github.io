import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/proyectos.css'

const imagenesOmdb = ([
    require('../images/proyectos/omdb/imagen1.png'),
    require('../images/proyectos/omdb/imagen2.png'),
    require('../images/proyectos/omdb/imagen3.png'),
    require('../images/proyectos/omdb/imagen4.png'),
    require('../images/proyectos/omdb/imagen5.png'),
    require('../images/proyectos/omdb/imagen6.png'),
    require('../images/proyectos/omdb/imagen7.png'),
    require('../images/proyectos/omdb/imagen8.png'),
    require('../images/proyectos/omdb/imagen9.png'),
    require('../images/proyectos/omdb/imagen10.png'),
    require('../images/proyectos/omdb/imagen11.png'),
    require('../images/proyectos/omdb/imagen12.png'),
])

export default () => {
    return (
        <div id="porfolio"  className="recuadro">
            <div><Link className="back" to="/"><h3>PORTFOLIO</h3></Link></div>
            <div className="containerImagenes">
                {imagenesOmdb.map((imageneOmdb, indice) =>
                    <Link to={`/proyectoOmdb/${indice}`}> 
                        <div className="styles">
                            <img src={imageneOmdb.default} alt="" />
                        </div>
                    </Link>
                )}
            </div>
        </div>
        
    )
}