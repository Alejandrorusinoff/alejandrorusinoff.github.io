import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar'
import Porfolio from './Porfolio'
import About from './About'
import Knowledge from './Knowledge';
import Contact from './Contact';
import Omdb from './Omdb';
import Ecommerce from './Ecommerce';
import WeatherChannel from './WeatherChannel';
import SingleOmdb from './SingleOmdb';
import SingleEcommerce from './SingleEcommerce';
import SingleWeatherChannel from './SingleWeatherChannel';
import MenteeMatch from './MenteeMatch';
import SingleMenteeMatch from './SingleMenteeMatch';
import '../index.css'
import '../styles/navbar.css'

export default () => {
    return(
        <div className="colorFondo">
            <div id="container">
                <Navbar/>
                <Switch>
                    <Route path="/proyectoMenteeMatch/:indice" render={({match}) => <SingleMenteeMatch indiceImg={match.params.indice}/>}/>   
                    <Route path="/proyectoWeatherChannel/:indice" render={({match}) => <SingleWeatherChannel indiceImg={match.params.indice}/>}/>
                    <Route path="/proyectoEcommerce/:indice" render={({match}) => <SingleEcommerce indiceImg={match.params.indice}/>}/>
                    <Route path="/proyectoOmdb/:indice" render={({match}) => <SingleOmdb indiceImg={match.params.indice}/>}/>
                    <Route path="/proyectoMenteeMatch" render={()=> <MenteeMatch/>}/>
                    <Route path="/proyectoWeatherChannel" render={()=> <WeatherChannel/>}/>
                    <Route path="/proyectoEcommerce" render={()=> <Ecommerce/>}/>
                    <Route path="/proyectoOmdb" render={()=> <Omdb/>}/>
                    <Route path="/" render={() => <Porfolio/>}/>
                </Switch>
                <About/>
                <Knowledge/>
                <Contact/>
                <br />
            </div>
        </div>
    )
}