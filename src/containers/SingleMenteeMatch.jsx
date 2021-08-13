import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/proyectos.css'

const imagenesEcommerce = ([
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
    history.push("/proyectoMenteeMatch")
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
          <img className="singleImageneMenteeMatch" src={imagenesEcommerce[contador].default} alt="" />
        </div>
      <button className="next" onClick={() => next()}>{">"}</button>
    </div>
  )
}