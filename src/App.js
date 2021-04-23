import React from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Bar from "./components/Bar"
import Home from "./components/Home"
import About from "./components/About"
import Rules from "./components/Rules"
import Contact from "./components/Contact"
import Highlights from "./components/Highlights"


const App = withRouter(({ location }) => (
  <div>
    {location.pathname !== "/" && <Bar active = {location}/>}
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/rules" ><Rules /></Route>
      <Route path="/contact" ><Contact /></Route>
      <Route path="/highlights" ><Highlights/></Route>
      <Route path="*" ></Route><NotFound />
    </Switch>
  </div>
)
)

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

export default App