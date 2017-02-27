import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from "./app/main/container";
import Default from "./app/main/components/default";
import NotFound from "./common/components/NotFound";
import configureStore from "app/store/configureStore";
import "stylesheets/style.scss";

const store = configureStore();

// var env = process.env.NODE_ENV || "dev";
//
// // HOT RELOADING - comment if not wanted
// // if (env === "dev") {
// //   var head = document.getElementsByTagName("head")[0];
// //   var script = document.createElement("script");
// //
// //   script.src = "http://localhost:9000/webpack-dev-server.js";
// //   script.type = "text/javascript";
// //   head.appendChild(script);
// // }

render(
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={App}>
        <IndexRoute component={Default}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </Provider>,
  document.getElementById("container")
);
