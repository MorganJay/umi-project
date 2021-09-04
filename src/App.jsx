import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Users from "./components/Users";
import UserPage from "./components/User";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Umi React Assignment</header>
        {
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/user" component={UserPage} />
            <Redirect to="/" />
          </Switch>
        }
      </div>
    </Router>
  );
}

export default App;
