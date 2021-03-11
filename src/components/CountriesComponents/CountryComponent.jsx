import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LoaderSkeleton from "../LoaderSkeleton";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const CountryInfoSpan = styled.span`
  font-weight: 600;
  margin-right: 3px;
`;

const CountryMiscInfo = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Country = styled(motion.li)`
  width: 20.625%;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 7.5rem;
  transition: 0.4s background-color, 0.4s color, 0.3s transform, 0.3s box-shadow;
  color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.white : theme.colors.verydarkblue2};
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 30.625%;
  }
  @media only screen and (max-width: 680px) {
    width: 47.625%;
  }

  @media only screen and (max-width: 410px) {
    width: 77.4%;
  }
  @media only screen and (max-width: 320px) {
    width: 87.4%;
  }
`;

const CountryImageBox = styled.div``;

const CountryImage = styled.img.attrs({ alt: "flag" })`
  width: 100%;
  height: 16rem;
  border-radius: 5px;
  object-fit: cover;
`;

const CountryName = styled.h3`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.6rem;
  margin-bottom: 1.6rem;
`;

const CountryInfoWrapper = styled.div`
  padding: 3rem 2.5rem 4rem 2.5rem;
`;

const CountryComponent = ({ darkMode, filteredCountries, loader, visible }) => {
  const history = useHistory();
  const countryVariants = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
    hover: {
      scale: 1.05,
      originX: 0,

      boxShadow: "0px 4px 1rem 0rem rgba(0, 0, 0 0.2)",
      transition: { type: "spring", duration: 0.01 },
    },
  };
  if (!loader) {
    return filteredCountries.slice(0, visible).map((country) => {
      return (
        <Country
          $darkmode={darkMode}
          onClick={() => history.push(`/country/${country.alpha3Code}`)}
          key={country.alpha3Code}
          variants={countryVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="hover"
        >
          <CountryImageBox>
            <CountryImage src={country.flag} />
          </CountryImageBox>
          <CountryInfoWrapper>
            <CountryName $darkmode={darkMode}>{country.name}</CountryName>
            <CountryMiscInfo $darkmode={darkMode}>
              <CountryInfoSpan>Population:</CountryInfoSpan>{" "}
              {country.population.toLocaleString()}
            </CountryMiscInfo>
            <CountryMiscInfo $darkmode={darkMode}>
              <CountryInfoSpan>Region:</CountryInfoSpan> {country.region}
            </CountryMiscInfo>
            <CountryMiscInfo $darkmode={darkMode}>
              <CountryInfoSpan $darkmode={darkMode}>Capital:</CountryInfoSpan>
              {country.capital}
            </CountryMiscInfo>
          </CountryInfoWrapper>
        </Country>
      );
    });
  }
  return Array(50).fill(<LoaderSkeleton />);
};

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    darkMode: state.darkMode,
    filteredCountries: state.countries.filteredCountries,
  };
};

export default connect(mapStateToProps)(CountryComponent);
