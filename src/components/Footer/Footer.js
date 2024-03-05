import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        
          Anmol & Animesh
        
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        
          <i className="fab fa-instagram-square fa-2x"></i>
        
        
          <i className="fab fa-linkedin fa-2x"></i>
        
        
          <i className="fas fa-link fa-2x"></i>
        
      </div>
    </div>
  );
};

export default Footer;
