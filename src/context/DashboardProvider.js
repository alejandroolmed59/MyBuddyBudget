import React, {useState} from 'react'
import { useHistory } from 'react-router';
import DashboardContext from './dashboard-context'


const DashboardProvider = (props) => {
    const [keyCounter, setKeyCounter] = useState(-1);
    const history = useHistory();
    
    const aumentarContador = () => {
        console.log(keyCounter)
        setKeyCounter(valAnt=>valAnt++)
        return keyCounter;
      };
    const redireccionar = (ruta)=>{
        history.push(ruta);
    }
    const dashContextObj = {
        keyCounter,
        aumentarContador,
        redireccionar
      };
    return (
        <DashboardContext.Provider value={dashContextObj}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider
