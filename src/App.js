import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Weather App by Dhruv Gupta{" "}<br></br>
        <a target="_blank" href="https://github.com/DDugs">
            Github
        </a>{" "}
        <a target="_blank" href="https://www.linkedin.com/in/dhruv-vishesh-gupta-a98a84271/">
            | LinkedIn
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
