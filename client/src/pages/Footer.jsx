import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <footer>
        <p>&copy;2024 You can do it charity Website. All rights reserved.</p>
        <p>Created by Ben Etinosa Osadiaye</p>
      </footer>
    </footer>
  );
}

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "0.5em",
  zIndex: 1000,
};

export default Footer;
