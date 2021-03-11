import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "../Button";
import { motion } from "framer-motion";

const BorderItem = styled(motion.li)`
  width: 21%;
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const Description = styled.dd`
  font-size: 1.6rem;
`;

const DetailsCol2Bottom = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6rem;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3.2rem;
  }
`;

const BorderPar = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 1.6rem;
  @media only screen and (max-width: 520px) {
    margin-right: 0;
    margin-bottom: 1.6rem;
  }
`;
const BorderList = styled.ul`
  list-style: none;
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
`;

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

const BorderComponent = ({ countries, selectedCountry }) => {
  const history = useHistory();
  const borderRender = () => {
    if (countries) {
      return countries.map((country) => {
        return selectedCountry.borders.map((border) => {
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
        {selectedCountry.borders.length !== 0 ? (
          borderRender()
        ) : (
          <Description>
            There is no border for {selectedCountry.name}
          </Description>
        )}
      </BorderList>
    </DetailsCol2Bottom>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,
  };
};

export default connect(mapStateToProps)(BorderComponent);
