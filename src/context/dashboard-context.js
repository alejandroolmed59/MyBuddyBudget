import {createContext} from 'react'

const DashboardContext = createContext({
    keyCounter: {},
    path:'',
    aumentarContador: ()=>{},
    redireccionar: ()=>{}
});
DashboardContext.displayName = "ContextoDashboard"
export default DashboardContext;