import React from "react";
import ReactDOM from "react-dom/client";
import SplashCursor from "./SplashCursor"; // import the component
import "./style.css"; // the same CSS file if needed


// Create a root and render the component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SplashCursor />
  </React.StrictMode>
);