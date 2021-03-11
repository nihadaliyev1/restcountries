const initialState = {
  countries: [],
  selectedCountry: [],
  filteredCountries: [],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };

    case "FILTER_COUNTRIES_BY_REGION":
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };
    case "SEARCH_COUNTRIES":
      return {
        ...state,
        filteredCountries: state.countries.filter(
          (country) =>
            country.name.toLowerCase() &&
            country.name.toLowerCase().indexOf(action.payload.toLowerCase()) ===
              0
        ),
      };
    case "FETCH_COUNTRY":
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
