import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SignIn from './config/provider'
//import * as firebaseui from 'firebaseui'
//import 'firebaseui/dist/firebaseui.css'
require('dotenv').config()

const Saludo = () =>{
  const [nombre, setNombre] = useState("Anon");
  const [timer, setTimer] = useState(0);
  
  useEffect(()=>{
    setInterval(()=>{
      setTimer(estado=>(estado+1))
    }, 1000)
    
  },[])

  return <>
    <Persona nombre={nombre} />
    <Reloj timer={timer}/>
    <button onClick={async()=>{
      const res = await SignIn();
      setNombre(res.displayName)
    }}>Aprete dog</button>
  </>;
}
const Persona = (props) =>{
  return <h1>Hola {props.nombre} tamos corriendo en {process.env.NODE_ENV}</h1>
}
const Reloj = (props) =>{
  return <h1>{props.timer} 😎</h1>
}


ReactDOM.render(
  <Saludo />,
  document.getElementById('root')
);
