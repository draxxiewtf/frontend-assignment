import React, { useState } from "react";
import "./page-selector.css";

const PageSelector = () => {
  const [selected, setSelected] = useState({
    allPages: false,
    pages: [false, false, false, false, false, false],
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
    <div className="selector-card">
      <div className="selector-content">
        <div className="header-item">
          <span className="item-text">All pages</span>
          <input
            type="checkbox"
            className="custom-checkbox"
            checked={selected.allPages}
            onChange={toggleAll}
          />
        </div>
        <hr className="top-divider" />
        <div className="pages-list">
          {["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6"].map((page, index) => (
            <div key={index} className="page-item">
              <span className="item-text">{page}</span>
              <input
                type="checkbox"
                className="custom-checkbox"
                checked={selected.pages[index]}
                onChange={() => togglePage(index)}
              />
            </div>
          ))}
        </div>
        <hr className="bottom-divider" />
        <button className="done-button">Done</button>
      </div>
    </div>
  );
};

export default PageSelector;
