import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { ThemeProvider } from "styled-components";
import thunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./styles/Theme";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
