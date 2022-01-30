import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../Context/AppContext";

const Butonn = styled.a`
  border: none;

  text-align: center;
  display: inline-block;
  vertical-align: top;
  font-family: ${({ theme }) => theme.fonts.nunito};
  cursor: pointer;
  transition: 0.4s all;
  color: ${({ theme, $darkmode }) =>
    $darkmode ? theme.colors.white : theme.colors.verydarkblue2};

  &:hover {
    transform: scale(1.05);
  }

  &.white {
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
    background-color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.darkblue : theme.colors.white};
    &:hover {
      background-color: ${({ theme, $darkmode }) =>
        $darkmode ? theme.colors.darkgray : theme.colors.verydarkblue};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  &.big {
    border-radius: 6px;
    padding: 1rem 2.7rem;
    font-size: 1.6rem;
  }

  &.long {
    padding: 1rem 4.7rem;
    font-size: 1.6rem;
  }

  &.border {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.4rem;
    padding: 5px 0;

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &.gray {
    background-color: ${({ theme }) => theme.colors.verylightgray};
    background-color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.darkblue : theme.colors.verylightgray};
    color: ${({ theme, $darkmode }) =>
      $darkmode ? theme.colors.white : theme.colors.verydarkblue2};
    border-radius: 6px;
  }
`;

const Button = ({ children, onClick, className }) => {
  const { darkMode } = useContext(AppContext);
  return (
    <Butonn onClick={onClick} className={className} $darkmode={darkMode}>
      {children}
    </Butonn>
  );
};

export default Button;
