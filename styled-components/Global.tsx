import styled, { css, createGlobalStyle } from "styled-components";
import { screen, textColor } from "../theme";

const style = css`
  * {
    margin: 0px;
    padding: 0px;
    scroll-behavior: smooth;
    transition: all 0.2s linear;
    text-decoration: none;
    outline: none;

    font-family: "Poppins", sans-serif;
  }
  img {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    transition-delay: 9999s;
  }
  body {
    margin: 0px;
    padding: 0px;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    background-color: ${screen};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p,
  br,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  em,
  q,
  hr,
  code,
  pre,
  ul,
  li,
  ol,
  dl,
  dt,
  dd,
  mark,
  ins,
  del,
  sup,
  small,
  i,
  sub,
  b,
  label,
  legend,
  input {
    color: ${textColor};
  }
`;

export const GlobalSyles = createGlobalStyle`
  ${style}
`;
