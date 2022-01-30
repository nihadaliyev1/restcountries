import React, { useContext } from "react";
import Header from "./Header/Header";
import CountriesSection from "./Countries/CountriesSection";
import CountryDetails from "./Countries/CountryDetails/CountryDetails";
import GlobalStyles from "../styles/GlobalStyles";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppContext } from "../Context/AppContext";
const App = () => {
  const location = useLocation();
  const { darkMode } = useContext(AppContext);

  return (
    <React.Fragment>
      <GlobalStyles $darkmode={darkMode} />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={CountriesSection} />
          <Route path="/country/:id" component={CountryDetails} exact />
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default App;
