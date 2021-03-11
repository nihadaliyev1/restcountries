import React from "react";
import Header from "./Header";
import Svgs from "./Svgs";
import CountriesSection from "./CountriesComponents/CountriesSection";
import GlobalStyles from "../styles/GlobalStyles";
import { connect } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import CountryDetails from "./CountriesComponents/CountryDetails";
import { AnimatePresence } from "framer-motion";

const App = ({ darkMode }) => {
  const location = useLocation();
  return (
    <React.Fragment>
      <GlobalStyles $darkmode={darkMode} />
      <Svgs />

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

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(App);
