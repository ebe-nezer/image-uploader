import * as React from "react";
import { getThemeContext } from "../context/ThemeContext";
import { ToggleScreen, ToggleSwitch } from "../styled-components/Toggle";

const ToggleDarkMode = () => {
  const [show, setShow] = React.useState<boolean>(!false);
  const { theme, changeTheme } = getThemeContext();
  const Switch = () => {
    return (
      <ToggleSwitch>
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
          checked={theme}
          //   onClick={() => {
          //     changeTheme();
          //     setShow(false);
          //   }}
          onChange={() => {
            changeTheme();
            setShow(false);
          }}
        />
        <label
          onClick={() => setShow(false)}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
          style={{
            border: theme ? "2px solid #ffffff" : "2px solid #111216",
            background: !theme ? "#FFFFFF" : "#111216",
          }}
        >
          <span
            className={`react-switch-button`}
            style={{
              border: theme ? "1px solid #ffffff" : "1px solid #111216",
            }}
          >
            <img src={`${theme ? "moon" : "sun"}.svg`} />
          </span>
        </label>
      </ToggleSwitch>
    );
  };
  return (
    <ToggleScreen value={show}>
      <Switch />
      <div className="icon" onClick={() => setShow(!show)}>
        <img src="arrow.svg" />
      </div>
    </ToggleScreen>
  );
};

export default ToggleDarkMode;
