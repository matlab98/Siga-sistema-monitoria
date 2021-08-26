import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import Monitor from '../components/registrarMonitor';
import Monitoria from '../components/registrarMonitoria';
import NavBar from '../components/navBar';
import MyResponsiveHeatMap from "../components/chart";
import AppState from '../Context/AppContext';
const data=[
  {
    country: "AD",
    "hot dog": 80,
    "hot dogColor": "hsl(253, 70%, 50%)",
    burger: 22,
    burgerColor: "hsl(53, 70%, 50%)",
    sandwich: 35,
    sandwichColor: "hsl(53, 70%, 50%)",
    kebab: 92,
    kebabColor: "hsl(148, 70%, 50%)",
    fries: 97,
    friesColor: "hsl(282, 70%, 50%)",
    donut: 98,
    donutColor: "hsl(22, 70%, 50%)",
    junk: 40,
    junkColor: "hsl(111, 70%, 50%)",
    sushi: 37,
    sushiColor: "hsl(206, 70%, 50%)",
    ramen: 46,
    ramenColor: "hsl(259, 70%, 50%)",
    curry: 57,
    curryColor: "hsl(308, 70%, 50%)",
    udon: 47,
    udonColor: "hsl(84, 70%, 50%)"
  },
  {
    country: "AE",
    "hot dog": 91,
    "hot dogColor": "hsl(268, 70%, 50%)",
    burger: 43,
    burgerColor: "hsl(259, 70%, 50%)",
    sandwich: 54,
    sandwichColor: "hsl(92, 70%, 50%)",
    kebab: 81,
    kebabColor: "hsl(180, 70%, 50%)",
    fries: 98,
    friesColor: "hsl(239, 70%, 50%)",
    donut: 74,
    donutColor: "hsl(9, 70%, 50%)",
    junk: 94,
    junkColor: "hsl(6, 70%, 50%)",
    sushi: 94,
    sushiColor: "hsl(358, 70%, 50%)",
    ramen: 57,
    ramenColor: "hsl(102, 70%, 50%)",
    curry: 55,
    curryColor: "hsl(322, 70%, 50%)",
    udon: 88,
    udonColor: "hsl(261, 70%, 50%)"
  },
  {
    country: "AF",
    "hot dog": 15,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 43,
    burgerColor: "hsl(227, 70%, 50%)",
    sandwich: 85,
    sandwichColor: "hsl(299, 70%, 50%)",
    kebab: 4,
    kebabColor: "hsl(36, 70%, 50%)",
    fries: 35,
    friesColor: "hsl(41, 70%, 50%)",
    donut: 22,
    donutColor: "hsl(223, 70%, 50%)",
    junk: 5,
    junkColor: "hsl(67, 70%, 50%)",
    sushi: 48,
    sushiColor: "hsl(139, 70%, 50%)",
    ramen: 51,
    ramenColor: "hsl(301, 70%, 50%)",
    curry: 77,
    curryColor: "hsl(255, 70%, 50%)",
    udon: 92,
    udonColor: "hsl(219, 70%, 50%)"
  },
  {
    country: "AG",
    "hot dog": 54,
    "hot dogColor": "hsl(138, 70%, 50%)",
    burger: 49,
    burgerColor: "hsl(56, 70%, 50%)",
    sandwich: 91,
    sandwichColor: "hsl(347, 70%, 50%)",
    kebab: 40,
    kebabColor: "hsl(136, 70%, 50%)",
    fries: 4,
    friesColor: "hsl(208, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(273, 70%, 50%)",
    junk: 93,
    junkColor: "hsl(186, 70%, 50%)",
    sushi: 49,
    sushiColor: "hsl(101, 70%, 50%)",
    ramen: 63,
    ramenColor: "hsl(261, 70%, 50%)",
    curry: 71,
    curryColor: "hsl(100, 70%, 50%)",
    udon: 27,
    udonColor: "hsl(318, 70%, 50%)"
  },
  {
    country: "AI",
    "hot dog": 60,
    "hot dogColor": "hsl(48, 70%, 50%)",
    burger: 19,
    burgerColor: "hsl(322, 70%, 50%)",
    sandwich: 87,
    sandwichColor: "hsl(82, 70%, 50%)",
    kebab: 81,
    kebabColor: "hsl(219, 70%, 50%)",
    fries: 81,
    friesColor: "hsl(284, 70%, 50%)",
    donut: 11,
    donutColor: "hsl(78, 70%, 50%)",
    junk: 17,
    junkColor: "hsl(350, 70%, 50%)",
    sushi: 97,
    sushiColor: "hsl(11, 70%, 50%)",
    ramen: 38,
    ramenColor: "hsl(100, 70%, 50%)",
    curry: 16,
    curryColor: "hsl(164, 70%, 50%)",
    udon: 76,
    udonColor: "hsl(296, 70%, 50%)"
  },
  {
    country: "AL",
    "hot dog": 29,
    "hot dogColor": "hsl(258, 70%, 50%)",
    burger: 11,
    burgerColor: "hsl(286, 70%, 50%)",
    sandwich: 98,
    sandwichColor: "hsl(297, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(109, 70%, 50%)",
    fries: 96,
    friesColor: "hsl(61, 70%, 50%)",
    donut: 22,
    donutColor: "hsl(284, 70%, 50%)",
    junk: 87,
    junkColor: "hsl(275, 70%, 50%)",
    sushi: 42,
    sushiColor: "hsl(325, 70%, 50%)",
    ramen: 87,
    ramenColor: "hsl(322, 70%, 50%)",
    curry: 42,
    curryColor: "hsl(176, 70%, 50%)",
    udon: 68,
    udonColor: "hsl(342, 70%, 50%)"
  },
  {
    country: "AM",
    "hot dog": 11,
    "hot dogColor": "hsl(188, 70%, 50%)",
    burger: 48,
    burgerColor: "hsl(239, 70%, 50%)",
    sandwich: 84,
    sandwichColor: "hsl(323, 70%, 50%)",
    kebab: 1,
    kebabColor: "hsl(53, 70%, 50%)",
    fries: 77,
    friesColor: "hsl(138, 70%, 50%)",
    donut: 40,
    donutColor: "hsl(299, 70%, 50%)",
    junk: 37,
    junkColor: "hsl(38, 70%, 50%)",
    sushi: 17,
    sushiColor: "hsl(120, 70%, 50%)",
    ramen: 67,
    ramenColor: "hsl(237, 70%, 50%)",
    curry: 65,
    curryColor: "hsl(210, 70%, 50%)",
    udon: 59,
    udonColor: "hsl(174, 70%, 50%)"
  },
  {
    country: "AO",
    "hot dog": 95,
    "hot dogColor": "hsl(213, 70%, 50%)",
    burger: 39,
    burgerColor: "hsl(69, 70%, 50%)",
    sandwich: 23,
    sandwichColor: "hsl(142, 70%, 50%)",
    kebab: 88,
    kebabColor: "hsl(268, 70%, 50%)",
    fries: 62,
    friesColor: "hsl(138, 70%, 50%)",
    donut: 15,
    donutColor: "hsl(318, 70%, 50%)",
    junk: 33,
    junkColor: "hsl(135, 70%, 50%)",
    sushi: 10,
    sushiColor: "hsl(267, 70%, 50%)",
    ramen: 59,
    ramenColor: "hsl(338, 70%, 50%)",
    curry: 29,
    curryColor: "hsl(207, 70%, 50%)",
    udon: 44,
    udonColor: "hsl(49, 70%, 50%)"
  },
  {
    country: "AQ",
    "hot dog": 58,
    "hot dogColor": "hsl(106, 70%, 50%)",
    burger: 81,
    burgerColor: "hsl(303, 70%, 50%)",
    sandwich: 60,
    sandwichColor: "hsl(163, 70%, 50%)",
    kebab: 16,
    kebabColor: "hsl(255, 70%, 50%)",
    fries: 83,
    friesColor: "hsl(250, 70%, 50%)",
    donut: 10,
    donutColor: "hsl(146, 70%, 50%)",
    junk: 77,
    junkColor: "hsl(315, 70%, 50%)",
    sushi: 64,
    sushiColor: "hsl(236, 70%, 50%)",
    ramen: 67,
    ramenColor: "hsl(55, 70%, 50%)",
    curry: 75,
    curryColor: "hsl(303, 70%, 50%)",
    udon: 56,
    udonColor: "hsl(192, 70%, 50%)"
  }
];

const AuthRouter = () => {
  const resources = AppState("getMonitoria");
console.log(resources);
  let match = useRouteMatch();
  return (
    <Router>
      <div>
        <NavBar />
      <Switch>
        <Route path={`${match.url}/ver`}>
        <div className="App">
      <div className="test">
        <MyResponsiveHeatMap data={data} />
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
};

export default AuthRouter;
