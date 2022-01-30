import React, { useState, useContext } from "react";
import FormSection from "../Form/FormSection";
import Container from "../helpers/Container";
import CountryComponent from "./CountryComponent";
import Button from "../helpers/Button";
import getAllFilteredCountries from "../../hooks/getAllFilteredCountries";
import { AppContext } from "../../Context/AppContext";
import { Section, CountriesList, ButtonBox } from "./CountryStyles";
import { sectionVariants } from "./CountryAnimations";

const CountriesSection = () => {
  const [visible, setVisible] = useState(8);
  const { darkMode } = useContext(AppContext);
  const { countries, isLoading } = getAllFilteredCountries();

  const onButtonClick = () => {
    setVisible((prevState) => {
      return prevState + 8;
    });
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
            <CountryComponent darkMode={darkMode} visible={visible} />
          </CountriesList>

          {!isLoading && countries?.length >= visible && (
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

export default CountriesSection;
