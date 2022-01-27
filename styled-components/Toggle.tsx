import styled from "styled-components";
import { basic, borderColor, shadowColor } from "../theme";

export const ToggleScreen = styled.div<{ theme: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: flex-start;
  box-shadow: ${shadowColor};
  position: fixed;
  cursor: pointer;
  overflow: hidden;
  top: 10%;
  border-radius: 20px;
  background-color: ${basic};
  left: 2%;
  .image {
    width: 50px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: translateY(${({ theme }) => (theme ? "-50%" : "0%")});
    .img1,
    .img2 {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 360px) {
    top: 5%;
  }
`;
