import { useContext } from "react";
import { useGetCountriesQuery } from "../apis/countryApi";
import { AppContext } from "../Context/AppContext";

/**
 * Returns all filtered countries from api response .
 */
const GetAllFilteredCountries = () => {
  const { countryFilter, countrySearchQuery } = useContext(AppContext);
  const { countries, ...props } = useGetCountriesQuery(undefined, {
    selectFromResult: ({ data, ...props }) => ({
      countries:
        countryFilter || countrySearchQuery
          ? data?.filter((country) => {
              const countryFilterRequirements =
                country.region === countryFilter;
              const searchFilterRequirements =
                country.name.toLowerCase() &&
                country.name
                  .toLowerCase()
                  .indexOf(countrySearchQuery.toLowerCase()) === 0;
              if (countryFilter && countrySearchQuery) {
                return countryFilterRequirements && searchFilterRequirements;
              }
              if (countryFilter) {
                return countryFilterRequirements;
              } else {
                return searchFilterRequirements;
              }
            })
          : data,
      ...props,
    }),
  });

  return {
    countries,
    ...props,
  };
};

export default GetAllFilteredCountries;
