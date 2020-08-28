import React from "react";
// import logo from "./logo.svg";

import "./resources/css/App.css";
import jsonDataFile from "./resources/json/jsonData.json";

// import Main from "./pages/Main";
import InfoPage from "./pages/InfoPage";

import { Route, Switch, withRouter } from "react-router-dom";

export default withRouter(function App() {
  const jsonData = jsonDataFile;

  let routes = (
    <>
      {Object.entries(jsonData.pages).map((page,index) => {
        if (page[1].type == "info")
          return (
            <Route
              key={index}
              path={page[0]}
              exact
              render={(props) => (
                <InfoPage {...props} pageInfo={JSON.stringify(page[1])} websiteOwner={jsonData.websiteOwner} />
              )}
            />
          );
      })}
    </>
  );

  return <Switch>{routes}</Switch>;
});
