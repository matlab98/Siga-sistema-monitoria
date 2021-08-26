import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import Monitor from '../components/registrarMonitor';
import NavBar from '../components/navBar';

const AuthRouter = () => {
  let match = useRouteMatch();
  return (
    <Router>
    <div>
<NavBar />
      <Switch>
        <Route path={`${match.url}/ver`}>
          <Monitor />
        </Route>
        <Route path={`${match.url}/registrar`}>
          <Monitor />
        </Route>
        <Route path={`${match.url}/eliminar`}>
          <Monitor />
        </Route>
      </Switch>
    </div>
  </Router>
  );
};

export default AuthRouter;
