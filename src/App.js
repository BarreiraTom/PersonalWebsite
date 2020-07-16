import React from "react";
import logo from "./logo.svg";

import "./resources/css/App.css";
import jsonData from "./resources/json/jsonData.json";

import Main from './pages/Main';

import { Route, Switch, withRouter } from "react-router-dom";

export default withRouter(function App() {
  let routes = (
    <>
      <Route path="/" exact render={(props) => <Main {...props} />} />
    </>
  );

  return <Switch>{routes}</Switch>;
});
