import axios from "axios";
export const initializeCountries = () => {
  return async (dispatch) => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    dispatch({ type: "INITIALIZE_COUNTRIES", payload: response.data });
  };
};

export const filterCountriesByRegion = (region) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    dispatch({ type: "FILTER_COUNTRIES_BY_REGION", payload: response.data });
  };
};

export const searchCountries = (name) => {
  return {
    type: "SEARCH_COUNTRIES",
    payload: name,
  };
};

export const fetchCountry = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/callingcode/${id}`
    );
    dispatch({ type: "FETCH_COUNTRY", payload: response.data });
  };
};

export const setDarkMode = () => {
  return {
    type: "SET_DARK_MODE",
  };
};

export const addLoader = () => {
  return {
    type: "ADD_LOADER",
  };
};

export const removeLoader = () => {
  return {
    type: "REMOVE_LOADER",
  };
};
