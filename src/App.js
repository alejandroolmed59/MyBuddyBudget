import React from "react";
import AuthProvider from './context/AuthProvider'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Register from './components/Form'

export const App = () => {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/register" component={Register} />
      </Switch>
    </AuthProvider>
  );
};

export default App;