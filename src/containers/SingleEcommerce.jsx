import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/proyectos.css'

const imagenesEcommerce = ([
    require('../images/proyectos/ecommerce/imagen1.png'),
    require('../images/proyectos/ecommerce/imagen2.png'),
    require('../images/proyectos/ecommerce/imagen3.png'),
    require('../images/proyectos/ecommerce/imagen4.png'),
    require('../images/proyectos/ecommerce/imagen5.png'),
    require('../images/proyectos/ecommerce/imagen6.png'),
    require('../images/proyectos/ecommerce/imagen7.png'),
    require('../images/proyectos/ecommerce/imagen8.png'),
    require('../images/proyectos/ecommerce/imagen9.png'),
    require('../images/proyectos/ecommerce/imagen10.png'),
    require('../images/proyectos/ecommerce/imagen11.png'),
    require('../images/proyectos/ecommerce/imagen12.png'),
    require('../images/proyectos/ecommerce/imagen13.png'),
])

export default ({indiceImg}) => {
  const indice = parseInt(indiceImg)
  const [contador, setContador] = useState(indice)
  const history = useHistory()
  
  function next(){
    if(contador >= 0 && contador <= 11) {
      setContador(contador + 1) 
      if (contador === 11) {
        setContador(0)
      }
    }
  }

  function previus(){
    if(contador >= 0 && contador <= 11) {
      setContador(contador - 1) 
      if (contador === 0) {
        setContador(11)
      }
    }
  }

  function cancel() {
    history.push("/proyectoEcommerce")
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
    onKeyUp={(e) => key(e)} onFocus={(e)=> key(e)}>  
      <button className="previus" onClick={() => previus()}>{"<"}</button>
      <button className="cancel" onClick={() => cancel()}>{"X"}</button>
        <div className="containerImagenSingle1">
          <img className="singleImagenes" src={imagenesEcommerce[contador].default} alt="" />
        </div>
      <button className="next" onClick={() => next()}>{">"}</button>
    </div>
  )
}
