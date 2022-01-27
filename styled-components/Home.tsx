import Image from "next/image";
import styled, { css } from "styled-components";
import {
  basic,
  subTextColor1,
  textColor,
  btnColor,
  dropzone,
  shadowColor,
  borderColor,
} from "../theme";

const buttonCss = css`
  width: 120px;
  height: 40px;
  background: #2f80ed;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  background-color: ${btnColor};

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 11px;
  text-align: center;
  letter-spacing: -0.035em;
  color: white;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 44px 30px;

  width: 400px;
  height: 400px;
  background-color: ${basic};
  box-shadow: ${shadowColor};
  border-radius: 10px;
  @media only screen and (max-width: 360px) {
    width: 90%;
  }
`;

export const InnerContainer = styled.div`
  width: 340px;
  height: 400px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 360px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 44px;
  img {
    padding-bottom: 20px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  margin-bottom: 20px;
  color: ${textColor};
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;

  color: ${textColor};
  text-align: center;
  letter-spacing: 0.04em;
  line-height: 15px;
`;
interface BodyInterface {
  dragMoment: boolean;
}
export const Body = styled.div<BodyInterface>`
  width: 100%;
  background: ${dropzone};
  border: ${(props: any) => props.dragMomemt && "1px dashed #97bef4"};
  border-radius: 20px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .file-drop {
    width: 100%;
    height: 100%;
    .file-drop-target {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
export const DropZone = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
`;
export const ImageContainer = styled.div`
  width: fit-content;
  height: max-content;
  position: relative;
  margin-bottom: 40px 0px;
  img {
    margin-bottom: 20px;
  }
  p {
    margin-top: 20px;
  }
`;

export const DropLine = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: rgba(0, 0, 0, 0.3);
  text-align: center;
  color: ${subTextColor1};
`;

export const Footer = styled.div`
  width: 100%;
  height: max-content;
`;

export const SelectFile = styled.button`
  width: 120px;
  height: 40px;
  background: #2f80ed;
  border-radius: 10px;
  margin-top: 20px;
  border: none;
  background-color: ${btnColor};
  color: #ffffff;
  cursor: pointer;
  input {
    width: 0px;
    opacity: 0;
    height: 0px;
    z-index: -1;
  }
`;

export const Button = styled.button`
  ${buttonCss}
`;
export const InputBar = styled.div`
  width: 100%;
  height: 46px;
  min-height: 46px;
  margin-top: 20px;
  border: 1px solid ${borderColor};
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  .input {
    width: 100%;
    height: 100%;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    background: none;
  }
  button {
    height: 38px;
    margin: 0px 4px 0px 0px;
    padding: 0;
  }
`;

export const ShowImage = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
`;
