import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import darkModeReducer from "./darkModeReducer";
import loaderReducer from "./loaderReducer";

const reducers = combineReducers({
  countries: countriesReducer,
  darkMode: darkModeReducer,
  loader: loaderReducer,
});

export default reducers;
