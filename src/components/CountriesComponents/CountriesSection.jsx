import React, { useEffect, useState } from "react";
import FormSection from "../FormSection";
import Container from "../../helpers/Container";
import styled from "styled-components";
import { connect } from "react-redux";
import { initializeCountries, addLoader, removeLoader } from "../../actions";
import CountryComponent from "./CountryComponent";
import Button from "../Button";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  padding-top: 5rem;
`;

const CountriesList = styled.ul`
  list-style: none;
  padding-top: 4.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 410px) {
    justify-content: center;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CountriesSection = ({
  initializeCountries,
  filteredCountries,
  darkMode,

  addLoader,
  removeLoader,
}) => {
  useEffect(() => {
    addLoader();
    initializeCountries().then(removeLoader);
  }, [addLoader, initializeCountries, removeLoader]);

  const [visible, setVisible] = useState(8);

  const onButtonClick = () => {
    setVisible((prevState) => {
      return prevState + 8;
    });
  };

  const sectionVariants = {
    initial: {
      x: "-100vw",
    },
    animate: {
      x: 0,
      transition: { type: "spring", duration: 1, bounce: 0.2 },
    },
    exit: {
      x: "-100vw",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <React.Fragment>
      <Section
        $darkmode={darkMode}
        exit="exit"
        initial="initial"
        variants={sectionVariants}
        animate="animate"
      >
        <Container>
          <FormSection setVisible={setVisible} />

          <CountriesList>
            <CountryComponent visible={visible} />
          </CountriesList>

          {filteredCountries.length >= visible && (
            <ButtonBox>
              <Button onClick={onButtonClick} className={"white big"}>
                Load More
              </Button>
            </ButtonBox>
          )}
        </Container>
      </Section>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    filteredCountries: state.countries.filteredCountries,
    darkMode: state.darkMode,
    loader: state.loader,
  };
};

export default connect(mapStateToProps, {
  initializeCountries,
  addLoader,
  removeLoader,
})(CountriesSection);
