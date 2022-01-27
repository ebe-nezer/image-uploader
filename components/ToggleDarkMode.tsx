import * as React from "react";
import { getThemeContext } from "../context/ThemeContext";
import { ToggleScreen } from "../styled-components/Toggle";
import Sun from "../public/sun.svg";
import * as Moon from "../public/moon.svg";
import Image from "next/image";

const ToggleDarkMode = () => {
  const { theme, changeTheme } = getThemeContext();
  // alert(theme);
  return (
    <ToggleScreen onClick={() => changeTheme()}>
      <div
        className="image"
        style={{ transform: `translateY(${theme ? "-50%" : "0%"})` }}
      >
        <div className="img1" style={{ opacity: theme ? 0 : 1 }}>
          <Image src={Moon} alt="toggle Switch" width={35} height={35} />
        </div>
        <div className="img2" style={{ opacity: theme ? 1 : 0 }}>
          <Image src={Sun} alt="toggle Switch" width={35} height={35} />
        </div>
      </div>
    </ToggleScreen>
  );
};

export default ToggleDarkMode;
