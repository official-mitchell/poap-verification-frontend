import React, { Component } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import * as align from "Constants/alignments";
import {default as initOps} from 'Redux/init/operations';

import Error from "Routes/error";
import Main from "Routes/main";
import Mike from 'Routes/mikesEvent';

// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Main styles for this application

import "scss/style.scss";


class AppStart extends Component {
  static getDerivedStateFromProps(props, state) {
    if (props.needsInit) {
      setTimeout(() => {
        props.runInit();
      }, 1);
    }
    return {};
  }

  state = {};

  render() {
   
    return (
      <div
        className={cn(
          "main-view-container",
          align.topCenter,
          align.full,
          align.noMarginPad
        )}
      >
        <Switch>

          <Route path={'/mike'} component={Mike} />
          <Route path={`/`} component={Main} />

          <Route path={`/error`} component={Error} />
          <Redirect to="/error" />
        </Switch>
      </div>
    );
  }
}

 const s2p = (state) => {
   return {
    needsInit: !state.init.initComplete && !state.init.initStarted
   };
 };

 const d2p = (dispatch) => {
   return {
      runInit: () => {
          dispatch(initOps.start())
      }
   };
 };

 export default withRouter(connect(s2p, d2p)(AppStart));
