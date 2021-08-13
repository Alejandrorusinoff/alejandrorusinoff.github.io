import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/proyectos.css'

const imagenesClima = ([
    require('../images/proyectos/apiClima/imagen1.png'),
    require('../images/proyectos/apiClima/imagen2.png'),
    require('../images/proyectos/apiClima/imagen3.png'),
])

export default ({indiceImg}) => {
  const indice = parseInt(indiceImg)
  const [contador, setContador] = useState(indice)
  const history = useHistory()
  
  function next(){
    if(contador >= 0 && contador <= 2) {
      setContador(contador + 1) 
      if (contador === 2) {
        setContador(0)
      }
    }
  }

  function previus(){
    if(contador >= 0 && contador <= 2) {
      setContador(contador - 1) 
      if (contador === 0) {
        setContador(2)
      }
    }
  }

  function cancel() {
    history.push("/proyectoWeatherChannel")
  }

  function key(e) {
    if (e.key === "ArrowRight") {
      return next()
    }
    if (e.key === "ArrowLeft") {
      return previus()
    }
    if (e.key === "Escape") {
      return cancel()
    }
  }

  return(
    <div id="porfolio" className="containerImagenSingle" tabIndex={1}
    onKeyUp={(e) => key(e)}>  
      <button className="previus" onClick={() => previus()}>{"<"}</button>
      <button className="cancel" onClick={() => cancel()}>{"X"}</button>
        <div className="containerImagenSingle1">
          <img className="singleImagenes" src={imagenesClima[contador].default} alt="" />
        </div>
      <button className="next" onClick={() => next()}>{">"}</button>
    </div>
  )
}