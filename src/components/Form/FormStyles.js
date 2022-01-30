import styled from "styled-components";
import { motion } from "framer-motion";

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  padding: 1.8rem 7.4rem;
  font-size: 1.4rem;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: 600;
  transition: 0.4s background-color;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  color: ${({ theme, $darkmode }) => ($darkmode ? theme.colors.white : "")};
  @media only screen and (max-width: 680px) {
    font-size: 1.3rem;
    padding: 1.8rem 3.4rem 1.8rem 7.4rem;
  }
  &::placeholder {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.darkgray};
    font-family: ${({ theme }) => theme.fonts.nunito};
    @media only screen and (max-width: 680px) {
      font-size: 1.3rem;
    }
  }
`;

export const DropDownMenuBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 1.8rem 2.4rem;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  width: 15.625%;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  transition: 0.4s background-color;
  color: ${({ theme, $darkmode }) => ($darkmode ? theme.colors.white : "")};

  @media only screen and (max-width: 1100px) {
    padding: 1.8rem 2rem;
  }
  @media only screen and (max-width: 1000px) {
    width: 20.625%;
  }
  @media only screen and (max-width: 770px) {
    width: 30.625%;
  }
  @media only screen and (max-width: 550px) {
    width: 53.3%;
  }
  @media only screen and (max-width: 320px) {
    width: 65.3%;
  }
`;

export const DropDownContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrow {
    width: 20px;
    height: 20px;
    transition: 0.5s all;
  }
  .up {
    transform: rotate(180deg);
  }
`;

export const FilterPar = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 600;
  @media only screen and (max-width: 110rem) {
    font-size: 1.3rem;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .trash {
    width: 3rem;
    height: 3rem;
    position: absolute;
    left: -30%;
    top: 1.5rem;

    transition: 0.5s all;
    cursor: pointer;
    stroke: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.black};
    @media only screen and (max-width: 770px) {
      left: -20%;
    }
    @media only screen and (max-width: 550px) {
      left: 140%;
    }
    @media only screen and (max-width: 420px) {
      left: 150%;
    }
    @media only screen and (max-width: 380px) {
      left: 160%;
    }
  }
`;

export const InputWrapper = styled(motion.div)`
  width: 37.5%;
  position: relative;
  @media only screen and (max-width: 770px) {
    width: 47.5%;
  }
  @media only screen and (max-width: 550px) {
    width: 92%;
    margin-bottom: 4rem;
  }
  .search {
    width: 1.75rem;
    height: 1.75rem;
    stroke: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.darkgray};
    position: absolute;
    left: 3.2rem;
    top: 1.9rem;
    transition: 0.4s stroke;
  }
`;

export const Menu = styled(motion.ul)`
  background-color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.darkblue : theme.colors.white};
  list-style: none;
  position: absolute;
  height: 0;
  left: 0;
  top: 6rem;
  width: 0;
  border-radius: 5px;
  padding: 1.6em 0;
  transition: 0.5s all;
  z-index: 1000;
  transform: translateY(-3rem);
  opacity: 0;
`;

export const MenuItem = styled(motion.li)`
  font-size: 1.4rem;
  line-height: 2rem;
  margin-bottom: 8px;
  cursor: pointer;
  padding: 0 2.4rem;
  transition: 0.2s all;

  &:hover {
    transform: translateX(6px) !important;
    font-weight: 700;
  }
`;

export const TrashWrapper = styled(motion.div)``;
