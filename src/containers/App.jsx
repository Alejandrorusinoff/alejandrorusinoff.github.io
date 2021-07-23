import React from 'react';
import {Route} from 'react-router-dom'
import Navbar from './Navbar'
import Porfolio from './Porfolio'
import About from './About'
import Knowledge from './Knowledge';
import Contact from './Contact';
import '../index.css'
import '../styles/navbar.css'

export default () => {

    return(
        <div className="colorFondo">
        <div id="container">
            <Navbar/>
            <Porfolio/>
            <About/>
            <Knowledge/>
            <Contact/>
            <br />
        </div>
        </div>
    )
}