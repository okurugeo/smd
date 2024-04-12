import React from "react";
import Logo from "./img/Icon.png";
// Style object for the loading screen
const loadingStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#fff",
  // backgroundColor: "rgba(0, 0, 0, 0.8)",
  padding: "1rem",
  borderRadius: "0.5rem",
};

// Pre-page loading screen component
const LoadingScreen = () => {
  return (
    <div style={loadingStyle}>
      <div className="animate-flicker">
        <img src={Logo} height="90px" />
      </div>
      {/* Add a loading indicator, such as a spinner */}
      <div className="spinner" />
    </div>
  );
};

export default LoadingScreen;
