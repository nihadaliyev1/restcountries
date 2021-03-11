import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import styled from "styled-components";
import BorderComponent from "./BorderComponent";
import DetailsDescription from "./DetailsDescription";

const DetailsCol1 = styled(motion.div)`
  width: 43.75%;

  display: flex;
  align-items: center;
  @media only screen and (max-width: 870px) {
    width: 100%;
    margin-bottom: 4.4rem;
  }
`;

const DetailsCol2 = styled(motion.div)`
  width: 46.87%;
  transition: 0.4s color;
  @media only screen and (max-width: 870px) {
    width: 100%;
  }
`;

const FlagImg = styled.img.attrs({ alt: "flag" })`
  width: 100%;
  border-radius: 1rem;
  transition: 0.4s all;

  &:hover {
    transform: scale(1.05) translate(-5px, -5px);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

const DetailsCol2Top = styled.div``;

const DetailsTitle = styled.h2`
  font-weight: 800;
  font-size: 3.2rem;

  @media only screen and (max-width: 1040px) {
    font-size: 2.8rem;
  }
`;

const DetailsComponent = ({ countries, match, darkMode }) => {
  const selectedCountry = countries.find(
    (country) => country.alpha3Code === match.params.id
  );

  if (selectedCountry) {
    return (
      <React.Fragment>
        <DetailsCol1>
          <FlagImg src={selectedCountry.flag} alt="flag" />
        </DetailsCol1>
        <DetailsCol2 $darkmode={darkMode}>
          <DetailsCol2Top>
            <DetailsTitle>{selectedCountry.name}</DetailsTitle>
          </DetailsCol2Top>
          <DetailsDescription selectedCountry={selectedCountry} />
          <BorderComponent selectedCountry={selectedCountry} />
        </DetailsCol2>
      </React.Fragment>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
  };
};

export default connect(mapStateToProps)(DetailsComponent);
