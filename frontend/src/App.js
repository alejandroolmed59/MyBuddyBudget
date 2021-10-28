import React from "react";
import AuthProvider from './context/AuthProvider'
import {Switch, Route} from 'react-router-dom'
import Register from './components/forms/RegisterForm'
import Login from './components/forms/LoginForm'
import LayoutDashboard from "./Layout/LayoutDashboard";

export const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={LayoutDashboard} />
      </Switch>
    </AuthProvider>
  );
};

export default App;