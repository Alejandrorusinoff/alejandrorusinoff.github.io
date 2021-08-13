import React from 'react';
import {Link} from 'react-router-dom'
import foto from '../images/162413641_10218539133486112_3409411919687977653_n.jpg'
import '../styles/navbar.css'


export default () => {
    return (
        <div className="separacion1">
            <div className="row float">
                    <div className="navbar1">
                        <a href="/" className="back" style={{height: 27}}>
                            <h5>INGENIERO, ALEJANDRO RUSINOFF</h5>
                        </a>
                    </div>

                <div className="navbar2">
                    <div className="navbar2A">
                        <div><a href="#porfolio" className="styleButton">Portfolio</a></div>
                        <div><a href="#acercaDeMi" className="styleButton">Acerca de mi</a></div>
                    </div>
                    <div className="navbar2B">
                        <div><a href="#conocimientos" className="styleButton">Conocimientos</a></div>
                        <div><a href="#contacto" className="styleButton">Contacto</a></div>
                    </div>
                </div>

            </div>
            <div id="separacion" className="recuadro">
                <img className="selfie" src={foto} alt="" />
            </div> 
        </div>
    )
}
