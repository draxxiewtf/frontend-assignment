import React from "react";
import PageSelector from "./PageSelector";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="frame-mobile">
        <div className="frame-content">
          <PageSelector />
        </div>
      </div>
    </div>
  );
}

export default App;
