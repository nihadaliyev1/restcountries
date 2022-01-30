import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled(motion.section)`
  padding-top: 8rem;
  @media only screen and (max-width: 550px) {
    padding-top: 5rem;
  }
`;

export const NavBar = styled.nav``;

export const ButtonBox = styled(motion.div)`
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

export const DetailsWrapper = styled.div`
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

export const BorderItem = styled(motion.li)`
  width: 21%;
  margin-bottom: 1rem;
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const DescriptionDetail = styled.dd`
  font-size: 1.6rem;
`;

export const DetailsCol2Bottom = styled.div`
  display: flex;
  align-items: center;
  padding-top: 6rem;
  @media only screen and (max-width: 520px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 3.2rem;
  }
`;

export const BorderPar = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 1.6rem;
  @media only screen and (max-width: 520px) {
    margin-right: 0;
    margin-bottom: 1.6rem;
  }
`;
export const BorderList = styled.ul`
  list-style: none;
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
`;

export const DetailsCol1 = styled(motion.div)`
  width: 43.75%;

  display: flex;
  align-items: center;
  @media only screen and (max-width: 870px) {
    width: 100%;
    margin-bottom: 4.4rem;
    justify-content: center;
  }
`;

export const DetailsCol2 = styled(motion.div)`
  width: 46.87%;
  transition: 0.4s color;
  @media only screen and (max-width: 870px) {
    width: 100%;
  }
`;

export const FlagImg = styled.img.attrs({ alt: "flag" })`
  width: 100%;
  border-radius: 1rem;
  transition: 0.4s all;

  &:hover {
    transform: scale(1.05) translate(-5px, -5px);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const DetailsCol2Top = styled.div``;

export const DetailsTitle = styled.h2`
  font-weight: 800;
  font-size: 3.2rem;

  @media only screen and (max-width: 1040px) {
    font-size: 2.8rem;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  line-height: 3.2rem;
`;

export const DescriptionList = styled.dl`
  @media only screen and (max-width: 450px) {
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
`;

export const DetailsCol2Middle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2.3rem;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const DescriptionTermin = styled.dt`
  font-weight: 600;
  font-size: 1.6rem;
  margin-right: 1rem;
  @media only screen and (max-width: 1040px) {
    font-size: 1.4rem;
  }
`;

export const Description = styled.dd`
  font-size: 1.6rem;
`;
