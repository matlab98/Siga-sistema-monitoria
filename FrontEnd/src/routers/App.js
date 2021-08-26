
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { PublicRouter } from './publicRouter';
import MonitorRouter from "./MonitorRouter";
import MonitoriaRouter from "./MonitoriaRouter";
import Home from '../containers/home';
function App() {
  return (
    <>
    <Router>
    <Switch>
    <Route path='/home' component={Home} />
      <PublicRouter path='/monitor' component={MonitorRouter} />
      <PublicRouter path='/monitoria' component={MonitoriaRouter} />
      <Redirect to="/home" />
    </Switch>
  </Router>
  </>
  );
}

export default App;
