import React, { useContext } from "react";
import Container from "../helpers/Container";
import { ReactComponent as MoonIcon } from "../../static/images/moon.svg";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import {
  Headerr,
  Title,
  ImageBox,
  NightModePar,
  DarkModeBox,
  ContentWrapper,
} from "./HeaderStyles";
import { headerVariants } from "./HeaderAnimations";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);
  const history = useHistory();
  const onDarkClick = () => {
    localStorage.setItem("darkMode", darkMode ? "light" : "dark");
    setDarkMode(!darkMode);
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
          <Title
            onClick={() =>
              history.location.pathname !== "/" ? history.push("/") : undefined
            }
          >
            Where in the world?
          </Title>
          <DarkModeBox onClick={onDarkClick}>
            <ImageBox>
              <MoonIcon className="moon" />
            </ImageBox>
            <NightModePar>Dark Mode</NightModePar>
          </DarkModeBox>
        </ContentWrapper>
      </Container>
    </Headerr>
  );
};

export default Header;
