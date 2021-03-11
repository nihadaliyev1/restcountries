import React from "react";
import styled from "styled-components";
import Container from "../helpers/Container";
import UseSvg from "../helpers/UseSvg";
import { connect } from "react-redux";
import { setDarkMode } from "../actions";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const Headerr = styled(motion.header)`
  padding: 2.3rem 0;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  transition: 0.4s background-color;
  color: ${({ theme, $darkmode }) => ($darkmode ? theme.colors.white : "")};
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 3.3rem;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 340px) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.6rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NightModePar = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.2rem;
  @media only screen and (max-width: 550px) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

const ImageBox = styled.div`
  .moon {
    width: 2rem;
    height: 1.4rem;
    margin-right: 1rem;
    position: relative;
    top: 3.5px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

const DarkModeBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Header = ({ setDarkMode, darkMode }) => {
  const onDarkClick = () => {
    setDarkMode();
  };

  const history = useHistory();

  const headerVariants = {
    initial: {
      y: -30,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, type: "spring" },
    },
  };

  return (
    <Headerr
      $darkmode={darkMode}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <Container>
        <ContentWrapper>
          <Title onClick={() => history.push("/")}>Where in the world?</Title>
          <DarkModeBox onClick={onDarkClick}>
            <ImageBox>
              <UseSvg className="moon" id="moon" />
            </ImageBox>
            <NightModePar>Dark Mode</NightModePar>
          </DarkModeBox>
        </ContentWrapper>
      </Container>
    </Headerr>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { setDarkMode })(Header);
