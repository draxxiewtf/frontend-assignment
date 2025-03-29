import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [selected, setSelected] = useState(Array(8).fill(false));

  const toggleCheck = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  return (
    <div className="home-container">
      {selected.map((isChecked, index) => (
        <div key={index} className={`list-item ${index % 2 === 0 ? "gray-bg" : ""}`}>
          <span className="text">All pages</span>
          <div
            className={`checkbox ${isChecked ? "checked" : ""}`}
            onClick={() => toggleCheck(index)}
          >
            {isChecked && <span className="checkmark">✔</span>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
