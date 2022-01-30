import React from "react";
import BorderComponent from "./BorderComponent";
import DetailsDescription from "./DetailsDescription";
import { useGetCountriesQuery } from "../../../apis/countryApi";
import DetailsFlagLoaderSkeleton from "../LoaderSkeletons/DetailsFlagLoaderSkeleton";
import CountryDetailsLoaderSkeleton from "../LoaderSkeletons/CountryDetailsLoaderSkeleton";
import {
  DetailsTitle,
  DetailsCol2,
  DetailsCol2Top,
  DetailsCol1,
  FlagImg,
} from "./CountryDetailsStyles";

const DetailsComponent = ({ match, darkMode }) => {
  const { country } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      country: data?.find((country) => country.alpha3Code === match.params.id),
    }),
  });

  if (country) {
    return (
      <React.Fragment>
        <DetailsCol1>
          <FlagImg src={country.flag} alt="flag" />
        </DetailsCol1>
        <DetailsCol2 $darkmode={darkMode}>
          <DetailsCol2Top>
            <DetailsTitle>{country.name}</DetailsTitle>
          </DetailsCol2Top>
          <DetailsDescription selectedCountry={country} />
          <BorderComponent selectedCountry={country} />
        </DetailsCol2>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <DetailsCol1>
        <DetailsFlagLoaderSkeleton />
      </DetailsCol1>
      <DetailsCol2>
        <CountryDetailsLoaderSkeleton />
      </DetailsCol2>
    </React.Fragment>
  );
};

export default DetailsComponent;
