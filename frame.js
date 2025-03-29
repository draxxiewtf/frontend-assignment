import React, { useState } from "react";
import "./frame.css";

const Frame = () => {
  const [selected, setSelected] = useState({
    allPages: false,
    pages: [false, false, false, false],
  });

  const toggleAll = () => {
    const newState = !selected.allPages;
    setSelected({
      allPages: newState,
      pages: selected.pages.map(() => newState),
    });
  };

  const togglePage = (index) => {
    const newPages = [...selected.pages];
    newPages[index] = !newPages[index];
    setSelected({
      allPages: newPages.every((p) => p),
      pages: newPages,
    });
  };

  return (
    <div className="frame-container">
      <div className="frame-box">
        <div className="list-item">
          <span className="text">All pages</span>
          <input
            type="checkbox"
            checked={selected.allPages}
            onChange={toggleAll}
          />
        </div>
        <hr />
        {["Page 1", "Page 2", "Page 3", "Page 4"].map((page, index) => (
          <div key={index} className="list-item">
            <span className="text">{page}</span>
            <input
              type="checkbox"
              checked={selected.pages[index]}
              onChange={() => togglePage(index)}
            />
          </div>
        ))}
        <hr />
        <button className="done-button">Done</button>
      </div>
    </div>
  );
};

export default Frame;
