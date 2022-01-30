import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import theme from "./styles/Theme";
import { countryApi } from "./apis/countryApi";
import AppContextProvider from "./Context/AppContext";

const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
