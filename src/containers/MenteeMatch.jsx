import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/proyectos.css'

const imagenesMeteeMatch = ([
    require('../images/proyectos/menteematch/ment24.png'),
    require('../images/proyectos/menteematch/ment23.png'),
    require('../images/proyectos/menteematch/ment22.png'),
    require('../images/proyectos/menteematch/ment21.png'),
    require('../images/proyectos/menteematch/ment20.png'),
    require('../images/proyectos/menteematch/ment19.png'),
    require('../images/proyectos/menteematch/ment18.png'),
    require('../images/proyectos/menteematch/ment17.png'),
    require('../images/proyectos/menteematch/ment16.png'),
    require('../images/proyectos/menteematch/ment15.png'),
    require('../images/proyectos/menteematch/ment13.png'),
    require('../images/proyectos/menteematch/ment12.png'),
    require('../images/proyectos/menteematch/ment11.png'),
    require('../images/proyectos/menteematch/ment10.png'),
    require('../images/proyectos/menteematch/ment9.png'),
    require('../images/proyectos/menteematch/ment8.png'),
    require('../images/proyectos/menteematch/ment7.png'),
    require('../images/proyectos/menteematch/ment6.png'),
    require('../images/proyectos/menteematch/ment5.png'),
    require('../images/proyectos/menteematch/ment4.png'),
    require('../images/proyectos/menteematch/ment3.png'),
    require('../images/proyectos/menteematch/ment2.png'),
    require('../images/proyectos/menteematch/ment1.png'), 
    require('../images/proyectos/menteematch/ment14.png'),
])

export default () => {
    
    return (
        <div id="porfolio" className="recuadro">
        <div><Link className="back" to="/"><h3>PORTFOLIO</h3></Link></div>
        <div className="containerImagenes">
            {imagenesMeteeMatch.map((imageneMeteeMatch, indice) =>
                <Link to={`/proyectoMenteeMatch/${indice}`}> 
                    <div className="ImagenesMenteeMatch">
                        <img src={imageneMeteeMatch.default} alt="" />
                    </div>
                </Link>
            )}
        </div>
        <br />
        <div>
            <iframe width="400" height="215" src="https://www.youtube.com/embed/kjqSv80KrOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    )
}
