import React from "react";
import { createGlobalStyle } from "styled-components";

const CustomStyles = createGlobalStyle`
  body {
    transition: background-color .25s ease-out;
  }
`;

const GlobalStyles: React.FC = () => (
  <>
    <CustomStyles />
  </>
);

export default GlobalStyles;
