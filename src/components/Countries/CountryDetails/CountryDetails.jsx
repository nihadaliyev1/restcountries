import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Container from "../../helpers/Container";
import Button from "../../helpers/Button";
import DetailsComponent from "./DetailsComponent";
import { AppContext } from "../../../Context/AppContext";
import { ReactComponent as BackIcon } from "../../../static/images/back.svg";
import {
  Section,
  NavBar,
  ButtonBox,
  DetailsWrapper,
} from "./CountryDetailsStyles";

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

const CountryDetails = ({ match }) => {
  const history = useHistory();
  const { darkMode } = useContext(AppContext);

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
            <BackIcon className="back" />
            <Button className={"gray long  "} onClick={() => history.goBack()}>
              Back
            </Button>
          </ButtonBox>
        </NavBar>

        <DetailsWrapper $darkmode={darkMode}>
          <DetailsComponent match={match} />
        </DetailsWrapper>
      </Container>
    </Section>
  );
};

export default CountryDetails;
