import React, { useState } from "react";
import "./desktop.css";

const Desktop = () => {
  const [selected, setSelected] = useState(Array(7).fill(false));

  const toggleCheck = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <div className="desktop-container">
      {selected.map((isChecked, index) => (
        <div
          key={index}
          className={`icon ${isChecked ? "checked" : ""}`}
          onClick={() => toggleCheck(index)}
        >
          {isChecked && <span className="checkmark">✓</span>}
        </div>
      ))}
    </div>
  );
};

export default Desktop;
