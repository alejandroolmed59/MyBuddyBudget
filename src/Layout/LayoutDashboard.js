import React, { useContext, useState } from 'react'
import {Route} from 'react-router-dom'
import { Redirect, useHistory, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AuthContext from '../context/auth-context'
import Dashboard from '../components/DashboardComponents/Dashboard'
import Expenses from '../components/expenses/Expenses'
import PieChart from '../components/Statistics/PieChart'
import DashboardProvider from '../context/DashboardProvider'
import WalletDetail from '../components/DashboardComponents/WalletDetail'
//import DashboardContext from '../context/dashboard-context'

const LayoutDashboard = ({exact, path, ...props}) => {
    const AuthCTX = useContext(AuthContext)
    const [objeto, setObjeto] = useState(null)
    const history = useHistory();

    const redireccionar = (ruta, ...args) =>{
        if(args.length!==0) setObjeto(args[0])
        history.push(ruta)
    }
    return (
        <Route
            exact={exact}
            path={path}
            render={(routeProps)=>{
                if(!AuthCTX.currentUser) return <Redirect exact to="/login"/>
                const cp =
                (
                <DashboardProvider >
                    <Dashboard path={routeProps.match.path} cb={redireccionar}>
                        <Switch>
                            <Route exact path={`${routeProps.match.path}/`} component={Expenses} />
                            <Route exact path={`${routeProps.match.path}/wallet`} render={()=>{
                                if(!objeto) return <Redirect path={`${routeProps.match.path}/`}/>
                                return(<WalletDetail wallet={objeto}/>)
                            }} /> 
                            <Route exact path={`${routeProps.match.path}/chart`} component={PieChart}/>
                        </Switch>
                    </Dashboard>
                </DashboardProvider>
                )
                return cp
            }}
        />   
    )
}

export default LayoutDashboard;
