import React from "react";
import styled from "styled-components";

const Containerr = styled.div`
  max-width: 131rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;
`;

const Container = ({ children }) => {
  return <Containerr>{children}</Containerr>;
};

export default Container;
