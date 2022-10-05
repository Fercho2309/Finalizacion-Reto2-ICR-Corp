import React, { useMemo, useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Menu = () => {

   //-----------------------------OCULTAR Y MOSTRAR-------------------------------
  const [Adivinanza, setAdivinanza] = useState('');
  const [Cerrar, setCerrar] = useState('');

   //-----------------------------ADIVINANZA-------------------------------
   const [Aletorio, setAleatorio] = useState('');
   const [Victoria, setVictoria] = useState('');
   const [Count, setCount] = useState(1);
   const Numeroaleatorio = useMemo (() => Math.floor(Math.random()*10) , [])
   console.log(Numeroaleatorio)

   const Submit1 = (e) => { 
     e.preventDefault();
 
     if (Aletorio == Numeroaleatorio) {
       setVictoria(`Adivinastes en ${Count} Intentos`)
     } else if (Aletorio < Numeroaleatorio) {
       setVictoria('Estas por Debajo')
     } else if (Aletorio > Numeroaleatorio) {
       setVictoria('Te Pasastes')
     } 
 
     setCount(Count + 1)
   }

   const Reinicio = (e) => {
    e.preventDefault();
    location.reload()
   }
  
  //-----------------------------CERRAR SESION-------------------------------
  const [Respuesta, setRespuesta] = useState('');
  const salir = useNavigate();
  const [Cerrsesion, setCerrsesion] = useState({
    adios: ''
  });
  const {adios} = Cerrsesion

  const Submit2 = (e) => {
    e.preventDefault();

    if (adios === '2') {
      setRespuesta('Hasta Pronto')
      salir('/')

    } else {
      setRespuesta('Intentelo Nuevamente')
    }
  }

  //-----------------------------------------------------------------------------
  
  return (
    <>
 
    <h1 className='title'>Bienvenido al Sistema de Ubicacion para Zonas Públicas WIFI</h1>

    <fieldset>
        <legend>ELIJA UNA OPCION</legend>
        <div className='opciones'>
        <button onClick={() => setAdivinanza(!Adivinanza)}>1. Adivinanza </button>
        <button onClick={() => setCerrar(!Cerrar)}> 2. Cerrar Sesion</button>
        </div>
      

        <div id='adivina' className={Adivinanza ? "show-elemnt" : null}>
          {Adivinanza &&
            <fieldset className='adi'>
              <legend>Bienvenido a la Adivinanza</legend>

              <form onSubmit={Submit1}>
                <p>Adivina el Número que se Encuentra Escondido entre el 0 - 10</p>
                <label htmlFor="">¿Cual es el Número Secreto?</label>
                <input type="number" name='juego' onChange={(e) => {setAleatorio(e.target.value)}} required></input>

                <button className='veri'>Verificar</button>

                <button className='veri' onClick={Reinicio}>Volver a Jugar</button>

                <div className='respuestaadi'>{ Victoria }</div>
              </form>
            </fieldset> 
          }


        <div id='sesion' className={Cerrar ? "show-elemnt" : null}>
          {Cerrar &&
            <fieldset className='cerrar'>
              <legend>Cerrar Sesion</legend>

              <form onSubmit={Submit2} >
                <p>Por favor Digite el Número para Cerrar Sesion </p>

                <label htmlFor="">Digite el Número: </label>
                <input type="number" name='adios' value={Cerrsesion.adios} onChange={(e) => {setCerrsesion({...Cerrsesion, adios: e.target.value})}} required></input>

                <button className='veri'>Verificar</button>
                
                <div className='respuestacerrar'>{ Respuesta }</div>
              </form>

            </fieldset>
          }
        </div>

     </div>

    </fieldset>

   
    </>
  )
}

export default Menu