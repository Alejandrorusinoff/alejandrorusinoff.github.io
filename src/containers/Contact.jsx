import React from 'react'
import {Link} from 'react-router-dom'
import cv from '../CV_Alejandro_Rusinoff_ FullStack.pdf'
import face from '../images/icons8-facebook-50.png'
import linkedin from '../images/linkedin-logo_icon-icons.com_72681.ico'
import github from '../images/logo_github_square_icon_160738.ico'
import '../styles/contact.css'


export default () => {
 
    return(
        <div className="recuadro">
            <div id="contacto"><h3>CONTACTEME</h3></div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="row aaa"><h5>EMAIL</h5></div>
                    <a className="links" href="mailto:alejandrorusinoff@gmail.com">alejandrorusinoff@gmail.com</a>
                    <div>
                        <Link className="links" to={cv} target="_blank">Descargar CV</Link>
                    </div>
                </div>
                
                <div className="col-sm-6 aaa">
                    <div className='row aaa'><h5>EN LAS REDES</h5>
                        <div className="col-sm-12 cajaFavicon">
                            <div className="caja">
                                <a href="https://www.facebook.com/alejandro.rusinoff/" target="_blank">
                                    <img className="face" src={face} alt="" />
                                </a>
                            </div>
                            <div className="caja">
                                <a href="https://www.linkedin.com/in/alejandro-rusinoff-64114032/" target="_blank">
                                    <img className="linkedin" src={linkedin}/>
                                </a>
                            </div>
                            <div className="caja">
                                <a href="https://github.com/Alejandrorusinoff" target="_blank">
                                    <img className="github" src={github}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}