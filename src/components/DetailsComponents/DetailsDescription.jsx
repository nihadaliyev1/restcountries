import React from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.div`
  display: flex;
  line-height: 3.2rem;
`;

const DescriptionList = styled.dl`
  @media only screen and (max-width: 450px) {
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
`;

const DetailsCol2Middle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2.3rem;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const DescriptionTermin = styled.dt`
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 1rem;
  @media only screen and (max-width: 1040px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.dd`
  font-size: 1.6rem;
`;

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
