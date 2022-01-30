import React from "react";
import {
  DetailsCol2Middle,
  DescriptionWrapper,
  Description,
  DescriptionTermin,
  DescriptionList,
} from "./CountryDetailsStyles";

const DetailsDescription = ({ selectedCountry }) => {
  return (
    <DetailsCol2Middle>
      <DescriptionList>
        <DescriptionWrapper>
          <DescriptionTermin>Native Name: </DescriptionTermin>
          <Description>{selectedCountry.nativeName}</Description>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTermin>Population: </DescriptionTermin>
          <Description>
            {selectedCountry.population.toLocaleString()}
          </Description>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTermin>Region: </DescriptionTermin>
          <Description>{selectedCountry.region}</Description>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTermin>Sub Region: </DescriptionTermin>
          <Description>{selectedCountry.subregion}</Description>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTermin>Capital: </DescriptionTermin>
          <Description>{selectedCountry.capital}</Description>
        </DescriptionWrapper>
      </DescriptionList>
      <DescriptionList>
        <DescriptionWrapper>
          <DescriptionTermin>Top Level Domain: </DescriptionTermin>
          <Description>{selectedCountry.topLevelDomain[0]}</Description>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTermin>Currencies: </DescriptionTermin>
          <Description>
            {selectedCountry.currencies
              .map((currency) => currency.name)
              .reduce((prev, curr) => [prev, ", ", curr])}
          </Description>
        </DescriptionWrapper>
        <DescriptionWrapper>
          <DescriptionTermin>Languages: </DescriptionTermin>
          <Description>
            {selectedCountry.languages
              .map((language) => language.name)
              .reduce((prev, curr) => [prev, ", ", curr])}
          </Description>
        </DescriptionWrapper>
      </DescriptionList>
    </DetailsCol2Middle>
  );
};

export default DetailsDescription;
