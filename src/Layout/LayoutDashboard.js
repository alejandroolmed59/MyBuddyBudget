import React, { useContext } from 'react'
import {Route} from 'react-router-dom'
import { Redirect, useHistory, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import AuthContext from '../context/auth-context'
import Dashboard from '../components/Dashboard'
import Expenses from '../components/expenses/Expenses'
import PieChart from '../components/PieChart'

const LayoutDashboard = ({exact, path, ...props}) => {
    const AuthCTX = useContext(AuthContext)
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
                (<Dashboard path={routeProps.match.path} cb={redireccionar}>
                    <Switch>
                        <Route exact path={`${routeProps.match.path}/`}  />
                        <Route exact path={`${routeProps.match.path}/expenses`} component={Expenses}/>
                        <Route exact path={`${routeProps.match.path}/chart`} component={PieChart}/>
                    </Switch>
                </Dashboard>)
                return cp
            }}
        />   
    )
}

export default LayoutDashboard;
