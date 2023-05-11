import React, { useState } from "react";
import "./SideBar.css";

function SideBar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleButtonClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`sidebar ${showSidebar ? "open" : ""}`}>
        
      <button className="showButton" onClick={handleToggleSidebar}>
        <div className='hamburger'>
          <span/>
          <span/>
          <span/>
        </div>
      </button>
        
      <div className="sideContainer">
        <button className="sideButton" onClick={() => handleButtonClick("home")}>
          Home
        </button>
        <button className="sideButton" onClick={() => handleButtonClick("about-me")}>
          Profile
        </button>
      </div>
    </div>
  );
}

export default SideBar;