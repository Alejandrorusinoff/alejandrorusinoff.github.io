import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import '../styles/porfolio.css'
const imageneClima = require('../images/proyectos/apiClima/imagen1.png')
const imageneEcommerce = require('../images/proyectos/ecommerce/imagen1.png')
const imageneOmdb = require('../images/proyectos/omdb/imagen2.png')
const imageneMenteeMatch = require('../images/proyectos/menteematch/ment24.png')

export default () => {
  const [contador, setContador] = useState(0)

  const imagPresetation = [
    {
      "url":"proyectoWeatherChannel",
      "image1":imageneClima.default, 
      "description":"Aplicación web desarrollada con HTML, Css y Javascript. Weather Channel es una api que brinca información del clima de cualquier parte del mundo.",
      "github": "https://github.com/Alejandrorusinoff/proyectoWeatherChannel"
    }, 
    {
      "url": "proyectoEcommerce",
      "image1": imageneEcommerce.default, 
      "description": "Aplicación web Ecommerce desarrollada en ReactJS. BookGuru es un ecommerce de libros. Tecnologías implementadas: ReactJS, JWT, Css, Express, SQL, Sequelize y NodeJs.",
      "github": "https://github.com/Alejandrorusinoff/EcommerceBookGuru",

    }, 
    {
      "url": "proyectoOmdb",
      "image1": imageneOmdb.default, 
      "description": "Aplicación web de streaming desarrollada en ReactJS. Tecnologías implementadas: ReactJS, Passport, Css, Express, SQL, Sequielize, NodeJs.",
      "github": "https://github.com/Alejandrorusinoff/omdbCronosMovies",
    },
    {
      "url": "proyectoMenteeMatch",
      "image1": imageneMenteeMatch.default, 
      "description": "Aplicación movil desarrollada en React-native. Es una app desarrollada para Globant cuyo funcionamiento consiste en buscar un mentor para un aprendiz cumpliendo determinadas habilidades y conocimientos. Tecnologías implementadas: React-Native, JWT, Css, Express, MongoDB, Mongoose y NodeJS.",
      "github": "https://github.com/Alejandrorusinoff/MenteeMatchGlobant",

    }, 
  ]

  function next(){
    if(contador >= 0 && contador <= imagPresetation.length - 1) {
      setContador(contador + 1) 
      if (contador === 3) {
        setContador(0)
      }
    }
  }

  function previus(){
    if(contador >= 0 && contador <= imagPresetation.length - 1) {
      setContador(contador - 1) 
      if (contador === 0) {
        setContador(imagPresetation.length - 1)
      }
    }
  }

  function key(e) {
    if (e.key === "ArrowRight") {
      return next()
    }
    if (e.key === "ArrowLeft") {
      return previus()
    }
  }

  return(
      <div id="porfolio" className="recuadro" tabIndex={1}
      onKeyUp={(e) => key(e)}>
          <div><h3>PORTFOLIO</h3></div>
          <div className="container">
            <button className="previus1" onClick={() => previus()}>{"<"}</button>
            <div className="b">
              <Link to={imagPresetation[contador].url}>
                {contador === 3 ? 
                <div className="positionImg"><img className="centradoMenteeMacth" src={imagPresetation[3].image1} alt="" /></div>
                : 
                <div className="positionImg"><img className="centrado" src={imagPresetation[contador].image1} alt="" /></div>
                }
              </Link>
              <div className="a" >{imagPresetation[contador].description}</div>
              <a className="links" href={imagPresetation[contador].github} target="_blank">Ver GitHub {imagPresetation[contador].url}</a>
            </div>
            <button className="next1" onClick={() => next()}>{">"}</button>
          </div>
      </div>
  )
}


