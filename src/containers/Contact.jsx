import React from 'react'
import {Link} from 'react-router-dom'
import cv from '../CV_Alejandro_Rusinoff_ FullStack.pdf'
import '../styles/contact.css'
import face from '../images/icons8-facebook-50.png'
import linkedin from '../images/linkedin-logo_icon-icons.com_72681.ico'
import github from '../images/logo_github_square_icon_160738.ico'


export default () => {
 
    return(
        <div className="recuadro">
            <div id="contacto"><h3>CONTACTEME</h3></div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="row aaa"><h5>EMAIL</h5></div>
                    <p>alejandrorusinoff@gmail.com</p>
                    <div>
                        <Link to={cv} target="_blank">Descargar CV</Link>
                    </div>
                </div>
                
                <div className="col-sm-6 aaa">
                    <div className='row aaa'><h5>EN LAS REDES</h5>
                        <div className="col-sm-12">
                            <a href="https://www.facebook.com/alejandro.rusinoff/" target="_blank">
                                <img className="face" width="47px" height="46px" src={face} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/alejandro-rusinoff-64114032/" target="_blank">
                                <img className="linkedin" width="39px" height="39px" src={linkedin}/>
                            </a>
                            <a href="https://github.com/Alejandrorusinoff" target="_blank">
                                <img height="45px" src={github}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}