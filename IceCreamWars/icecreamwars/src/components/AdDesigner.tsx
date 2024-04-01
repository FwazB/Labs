import React, { useState } from "react";
import { Ad } from "./Ad";
import styles from "../css/counter.module.css";

export function AdDesigner() {
  const [flavor, setFlavor] = useState<string>("Chocolate");
  const [fontSize, setFontSize] = useState<number>(16);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };

  const decreaseFontSize = () => {
    if (fontSize > 1) {
      setFontSize(fontSize - 1);
    }
  };

  const selectFlavor = (newFlavor: string) => {
    if (flavor !== newFlavor) {
      setFlavor(newFlavor);
    }
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <div>
      <div className={styles.theAd}>
        <Ad flavor={flavor} fontSize={fontSize} darkTheme={darkTheme} />
      </div>
      <div>
        <button onClick={toggleTheme}>
          {darkTheme ? "Light Theme" : "Dark Theme"}
        </button>
      </div>
      <div>
        <button onClick={() => selectFlavor("Chocolate")}>Chocolate</button>
        <button onClick={() => selectFlavor("Vanilla")}>Vanilla</button>
        <button onClick={() => selectFlavor("Strawberry")}>Strawberry</button>
      </div>

      <div>
        <button onClick={decreaseFontSize}>Down</button>
        <span>Font Size: {fontSize}px</span>
        <button onClick={increaseFontSize}>Up</button>
      </div>
    </div>
  );
}
