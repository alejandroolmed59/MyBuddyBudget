import React from 'react';
//import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
//import SignIn from './config/provider'
import Dashboard from './dashboard'
import 'antd/dist/antd.css';
//import * as firebaseui from 'firebaseui'
//import 'firebaseui/dist/firebaseui.css'
require('dotenv').config()
/*
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
      if(res){
        setNombre(res.displayName)
      }else{
        setNombre('Error')
      }
    }}>Aprete dog</button>
  </>;
}
const Persona = (props) =>{
  return <h1>Hola {props.nombre} tamos corriendo en {process.env.NODE_ENV}</h1>
}
const Reloj = (props) =>{
  return <h1>{props.timer} 😎</h1>
}
*/

ReactDOM.render(
  <Dashboard />,
  document.getElementById('root')
);
