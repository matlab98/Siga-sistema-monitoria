import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import Monitor from "../components/registrarMonitor";
import Monitoria from "../components/registrarMonitoria";
import NavBar from "../components/navBar";
import MyResponsiveHeatMap from "../components/chart";
import { AppContext } from "../Context/AppContext";
const dato = [
  {
    monitor: "castellano arriueta",
    Jueves: "45",
    JuevesColor: "hsl(227, 70%, 50%)",
  },
];

const AuthRouter = () => {
  const { resources } = useContext(AppContext);
  const [optionMonitoria, setoptionMonitoria] = useState("getMonitoria");
  const [id, setId] = useState(0);
  const [combo, setCombo] = useState(0);

  const dmt = (Data) => Data.map((a) => a);

  let match = useRouteMatch();
  if (resources === undefined || resources["data"] === null) {
    return <>Cargando...</>;
  } else {
    const pickMonitoria = resources["data"][optionMonitoria];

    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path={`${match.url}/ver`}>
              <div className="App">
                <div className="test">
                  <MyResponsiveHeatMap data={dato} monitoria={pickMonitoria} />
                </div>
              </div>
            </Route>
            <Route path={`${match.url}/registrar`}>
              <Monitoria />
            </Route>
            <Route path={`${match.url}/eliminar`}>
              <Monitor />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default AuthRouter;
