import React, { Component } from "react";
import Loadable from "react-loadable";
import Loader from "Components/Loading";
import { Route, Switch, Redirect } from "react-router-dom";

function Loading({ error }) {
  if (error) {
    return "Something went wrong: " + (error.message ? error.message : error);
  } else {
    return <Loader loading={true} />;
  }
}

const Main = Loadable({
  loader: () => import("Views/mikesEvent"),
  loading: Loading,
});

class App extends Component {
  render() {
    
    return (
      <div className="container-fluid mr-0 ml-0 pr-0 pl-0">
        <Switch>
          <Route path={`/mike/:eventID/:tokenID`} component={Main} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}

export default App;
