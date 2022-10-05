import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import '../assets/Login.css'

const Login = () => {

  const [form, setform] = useState({
    nom: '',
    pass:'',
    capt: '',
  })
  const {nom, pass, capt } = form;

  
  const Submit = (e) => {
    e.preventDefault();
    
    if(nom === '1115' && pass === '5111' && capt === '6'){
      setMensaje('Sesion iniciada')
      redireccion('/Menu')
    }else{
      setMensaje('Intentelo Nuevamente')
    }
  }

  const [Mensaje, setMensaje] = useState('')

  const redireccion = useNavigate();


  return (
    <>
    

    <h1 className='title'>Bienvenido al Sistema de Ubicacion para Zonas Públicas WIFI</h1>
    
    <fieldset>

      <legend>INGRESO</legend>

      <form onSubmit={ Submit }>

        <label>Nombre de Usuario: </label>
        <input type="number" name='nom' value={form.nom} onChange={(e) => {setform({...form, nom: e.target.value})}} required></input>

        <label>Contraseña: </label>
        <input type="password" name='pass' value={form.pass} onChange={(e) => {setform({...form, pass: e.target.value})}} required></input>
        
        <label>Sume el Primer y Ultimo Dato del Nombre de Usuario: </label>
        <input type="number" name='capt' value={form.capt} onChange={(e) => {setform({...form, capt: e.target.value})}} required></input>
        
        <button>LOGIN</button>

        <div className="respuestalogin">{ Mensaje }</div>
      
      </form>
      
    </fieldset>

  

  </>
  )
}

export default Login