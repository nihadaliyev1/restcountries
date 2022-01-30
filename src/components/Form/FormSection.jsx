import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { debounce } from "lodash";
import { ReactComponent as SearchIcon } from "../../static/images/search.svg";

import { Form, Input, InputWrapper } from "./FormStyles";
import Dropdown from "./Dropdown";

const FormSection = ({ setVisible }) => {
  const { countryFilter, setCountryFilter, darkMode, setCountrySearchQuery } =
    useContext(AppContext);

  const onInputChange = (e) => {
    setCountrySearchQuery(e.target.value);
  };
  useEffect(() => {
    setCountryFilter("");
    setCountrySearchQuery("");
  }, [setCountryFilter, setCountrySearchQuery]);

  return (
    <Form
      onSubmit={(e) => e.preventDefault()}
      selectedfilter={countryFilter}
      $darkmode={darkMode}
    >
      <InputWrapper $darkmode={darkMode}>
        <SearchIcon className="search" id="search" />
        <Input
          name="search"
          onChange={debounce(onInputChange, 500)}
          placeholder="Search for a country…"
          $darkmode={darkMode}
        />
      </InputWrapper>
      <Dropdown
        darkMode={darkMode}
        setVisible={setVisible}
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter}
      />
    </Form>
  );
};

export default FormSection;
