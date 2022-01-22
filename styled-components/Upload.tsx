import styled from "styled-components";
import { screen, basic, btnColor } from "../theme";

export const UploadContainer = styled.div`
  width: 400px;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${basic};
  border-radius: 10px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
`;
export const UploadingScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${screen};
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
`;
export const UploadWrapper = styled.div`
  width: 90%;
  height: max-content;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: flex-start;
  justify-content: center;
  .title {
    margin-top: 20px;
  }
  button {
    margin: 20px 0px;
  }
  @keyframes "spinner" {
    0% {
      width: 0;
    }
    50% {
      width: 100%;
      margin-left: 50%;
    }
    100% {
      width: 0;
      margin-left: 100%;
    }
  }

  .progress-horizontal {
    display: block;
    width: 100%;
    height: 4px;
    margin: 20px auto;
    overflow: hidden;

    background-color: rgba(0, 0, 0, 0.34);
  }
  .bar-horizontal {
    width: 50%;
    height: 100%;
    margin-left: 0;
    background-color: ${btnColor};
    animation-name: spinner;
    animation-duration: 750ms;
    animation-timing-function: ease-in-out;
    animation-play-state: running;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
  }
`;
