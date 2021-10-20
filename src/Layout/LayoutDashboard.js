import React, { useContext } from 'react'
import {Route} from 'react-router-dom'
import { Redirect, useHistory, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AuthContext from '../context/auth-context'
import Dashboard from '../components/DashboardComponents/Dashboard'
import Expenses from '../components/expenses/Expenses'
import PieChart from '../components/Statistics/PieChart'
import DashboardProvider from '../context/DashboardProvider'
//import DashboardContext from '../context/dashboard-context'

const LayoutDashboard = ({exact, path, ...props}) => {
    const AuthCTX = useContext(AuthContext)
  //  const DashboardCTX = useContext(DashboardContext)
    const history = useHistory();

    const redireccionar = (ruta) =>{
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
                        {/*    <Route exact path={`${routeProps.match.path}/expenses`} component={Expenses}/> */}
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
