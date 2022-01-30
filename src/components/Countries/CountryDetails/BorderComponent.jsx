import React from "react";
import { useHistory } from "react-router";
import Button from "../../helpers/Button";
import { useGetCountriesQuery } from "../../../apis/countryApi";
import {
  BorderItem,
  BorderPar,
  DetailsCol2Bottom,
  BorderList,
  DescriptionDetail,
} from "./CountryDetailsStyles";

const borderVariants = {
  initial: {
    scale: 0,
    y: -20,
  },
  animate: {
    scale: 1,
    y: 0,
    transition: {
      delay: 0.7,
      type: "spring",
    },
  },
};

const BorderComponent = ({ selectedCountry }) => {
  const history = useHistory();
  const { data } = useGetCountriesQuery();
  const borderRender = () => {
    if (data) {
      return data.map((country) => {
        return selectedCountry?.borders?.map((border) => {
          if (border === country.alpha3Code) {
            return (
              <React.Fragment key={country.alpha3Code}>
                <BorderItem
                  onClick={() => history.push(`/country/${country.alpha3Code}`)}
                  variants={borderVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Button className="white border">{country.name}</Button>
                </BorderItem>
              </React.Fragment>
            );
          }
          return null;
        });
      });
    }
  };

  return (
    <DetailsCol2Bottom>
      <BorderPar>Border Countries: </BorderPar>
      <BorderList>
        {selectedCountry?.borders?.length ? (
          borderRender()
        ) : (
          <DescriptionDetail>
            There is no border for {selectedCountry.name}
          </DescriptionDetail>
        )}
      </BorderList>
    </DetailsCol2Bottom>
  );
};

export default BorderComponent;
