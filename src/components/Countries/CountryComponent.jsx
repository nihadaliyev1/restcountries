import React from "react";
import CountryLoaderSkeleton from "../Countries/LoaderSkeletons/CountryLoaderSkeleton";
import { useHistory } from "react-router-dom";
import getAllFilteredCountries from "../../hooks/getAllFilteredCountries";
import {
  Country,
  CountryImageBox,
  CountryImage,
  CountryInfoWrapper,
  CountryName,
  CountryMiscInfo,
  CountryInfoSpan,
} from "./CountryStyles.js";
import { countryVariants } from "./CountryAnimations";

const CountryComponent = ({ visible, darkMode }) => {
  const history = useHistory();
  const { countries } = getAllFilteredCountries();

  if (countries) {
    return countries.slice(0, visible).map((country) => {
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
              {country.population ? country.population.toLocaleString() : "N/A"}
            </CountryMiscInfo>
            <CountryMiscInfo $darkmode={darkMode}>
              <CountryInfoSpan>Region:</CountryInfoSpan> {country.region}
            </CountryMiscInfo>
            <CountryMiscInfo $darkmode={darkMode}>
              <CountryInfoSpan $darkmode={darkMode}>Capital:</CountryInfoSpan>
              {country.capital ? country.capital : "N/A"}
            </CountryMiscInfo>
          </CountryInfoWrapper>
        </Country>
      );
    });
  }
  return Array(8).fill(<CountryLoaderSkeleton />);
};

export default CountryComponent;
