import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import configureStore from "./store/configureStore";

//  redux store configuration
const store = configureStore();

//  hydrate a container whose HTML contents were rendered from server
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
