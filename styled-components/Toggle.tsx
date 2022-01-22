import styled from "styled-components";
import { borderColor } from "../theme";

export const ToggleSwitch = styled.div`
  height: 100px;
  .react-switch-checkbox {
    height: 0px;
    width: 0px;
    visibility: hidden;
  }

  .react-switch-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: grey;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.2s;
  }

  .react-switch-label .react-switch-button {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  }
  .react-switch-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .react-switch-label:active .react-switch-button {
    width: 60px;
  }
`;

export const ToggleScreen = styled.div<{ value: boolean }>`
  width: 150px;
  height: 100px;
  border: 2px solid ${borderColor};
  background-color: white;
  position: fixed;
  top: 30%;
  left: ${({ value }) => (value ? "-120px" : "0px")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 10px 10px 0px;
  .icon {
    height: 100%;
    cursor: pointer;
    margin-right: 8px;
    display: flex;
    align-items: center;
    img {
      margin: auto;
      transform: ${({ value }) => (value ? "rotate(-180deg)" : "rotate(0deg)")};
    }
  }
`;
