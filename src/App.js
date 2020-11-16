import React from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import Game from './pages/Game';
import Congratulations from './pages/Congratulations';
import Records from './pages/Records';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>

        <Route path="/welcome" component={Welcome} />

        <Route path="/profile" component={Profile} />

        <Route path="/game" component={Game} />

        <Route path="/congratulation" component={Congratulations} />

        <Route path="/records" component={Records} />

      </Switch>
    </div>
  );
}
