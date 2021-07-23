import React from 'react';
import {Link} from 'react-router-dom'
import { RViewer, RViewerTrigger } from 'react-viewerjs'
import foto from '../images/162413641_10218539133486112_3409411919687977653_n.jpg'
import '../styles/navbar.css'


export default () => {
    return (
        <div /* className="separacion" */>
            <div className="row">
                <div className="col-sm-5 navbar1"><h5 className="navbar1">INGENIERO, ALEJANDRO RUSINOFF</h5></div>
                <div className="col-sm-7 navbar2">
                    <div><a href="#porfolio" className="styleButton">Porfolio</a></div>
                    <div><a href="#acercaDeMi" className="styleButton">Acerca de mi</a></div>
                    <div><a href="#conocimientos" className="styleButton">Conocimientos</a></div>
                    <div><a href="#contacto" className="styleButton">Contacto</a></div>
                </div>
            </div>
            <RViewer imageUrls={foto}>
                <div className="recuadro">
                    <RViewerTrigger>
                        <img className="selfie" src={foto} alt="" />
                    </RViewerTrigger>
                </div> 
            </RViewer>
        </div>
    )
}
