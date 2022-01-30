import styled from "styled-components";
import { motion } from "framer-motion";

export const Headerr = styled(motion.header)`
  padding: 2.3rem 0;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  transition: 0.4s background-color;
  color: ${({ theme, $darkmode }) => ($darkmode ? theme.colors.white : "")};
`;

export const Title = styled.h1`
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

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NightModePar = styled.p`
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

export const ImageBox = styled.div`
  .moon {
    width: 2rem;
    height: 1.4rem;
    margin-right: 1rem;
    position: relative;
    top: 3.5px;
    fill: ${({ theme }) => theme.colors.white};
  }
`;

export const DarkModeBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
