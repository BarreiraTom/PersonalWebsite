import React from "react";
// import logo from "./logo.svg";

import "./resources/css/App.css";
import InfoPage from "./pages/InfoPage";

import { Route, Switch, withRouter } from "react-router-dom";

export default withRouter(function App() {

  let routes = (
    <>
      <Route
        path={"/"}
        exact
        render={(props) => (
          <InfoPage {...props} />
        )}
      />
    </>
  );

  return <Switch>{routes}</Switch>;
});
