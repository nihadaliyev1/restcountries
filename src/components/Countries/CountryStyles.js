import styled from "styled-components";
import { motion } from "framer-motion";
export const Section = styled(motion.section)`
  padding-top: 5rem;
  padding-bottom: 3rem;
`;

export const CountriesList = styled.ul`
  list-style: none;
  padding-top: 4.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 410px) {
    justify-content: center;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const CountryInfoSpan = styled.span`
  font-weight: 600;
  margin-right: 3px;
`;

export const CountryMiscInfo = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Country = styled(motion.li)`
  width: 20.625%;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-bottom: 7.5rem;
  transition: 0.4s background-color, 0.4s color, 0.3s transform, 0.3s box-shadow;
  color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.white : theme.colors.verydarkblue2};
  cursor: pointer;

  @media only screen and (max-width: 1000px) {
    width: 30.625%;
  }
  @media only screen and (max-width: 680px) {
    width: 47.625%;
  }

  @media only screen and (max-width: 410px) {
    width: 77.4%;
  }
  @media only screen and (max-width: 320px) {
    width: 87.4%;
  }
`;

export const CountryImageBox = styled.div``;

export const CountryImage = styled.img.attrs({ alt: "flag" })`
  width: 100%;
  height: 16rem;
  border-radius: 5px;
  object-fit: cover;
`;

export const CountryName = styled.h3`
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.6rem;
  margin-bottom: 1.6rem;
`;

export const CountryInfoWrapper = styled.div`
  padding: 3rem 2.5rem 4rem 2.5rem;
`;
