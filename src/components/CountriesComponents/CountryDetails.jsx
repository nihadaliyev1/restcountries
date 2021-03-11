import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initializeCountries } from "../../actions";
import { useHistory } from "react-router-dom";
import Container from "../../helpers/Container";
import Button from "../Button";
import styled from "styled-components";
import UseSvg from "../../helpers/UseSvg";
import DetailsComponent from "../DetailsComponents/DetailsComponent";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  padding-top: 8rem;
  @media only screen and (max-width: 550px) {
    padding-top: 5rem;
  }
`;

const NavBar = styled.nav``;

const ButtonBox = styled(motion.div)`
  display: flex;
  align-items: center;

  &:hover .back {
    transform: translateX(-8px);
  }
  .back {
    width: 2rem;
    height: 2rem;
    position: relative;
    left: 3.6rem;
    z-index: 100;
    transition: 0.2s all;
    stroke: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.verydarkblue2};
  }
`;

const DetailsWrapper = styled.div`
  padding-top: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.white : theme.colors.verydarkblue2};
  @media only screen and (max-width: 870px) {
    flex-direction: column;
    padding-top: 6.4rem;
  }
  @media only screen and (max-width: 520px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    padding-top: 4.4rem;
  }
`;

const CountryDetails = ({ match, darkMode, initializeCountries }) => {
  useEffect(() => {
    initializeCountries();
  }, [initializeCountries]);

  const history = useHistory();

  const sectionVariants = {
    initial: { x: "100vw" },
    animate: { x: 0, transition: { type: "spring", duration: 1, bounce: 0.2 } },
    exit: {
      x: "100vw",
      transition: {
        duration: 0.5,
      },
    },
  };

  const buttonBoxVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.4,
      },
    },
  };

  return (
    <Section
      variants={sectionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container>
        <NavBar>
          <ButtonBox
            $darkmode={darkMode}
            onClick={() => history.push("/")}
            variants={buttonBoxVariants}
          >
            <UseSvg className="back" id="back" />
            <Button className={"gray long  "}> Back</Button>
          </ButtonBox>
        </NavBar>

        <DetailsWrapper $darkmode={darkMode}>
          <DetailsComponent match={match} />
        </DetailsWrapper>
      </Container>
    </Section>
  );
};

const mapStateToProps = (state) => {
  return {
    countries: state.countries.countries,

    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { initializeCountries })(
  CountryDetails
);
