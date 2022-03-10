import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {

  return (
    <div>
      <div className="navbar_wrapper">
        <div className="logo_wrapper">
          <Link to='/Home'>
            <img src="/img/norsalogo.png" className="img-fluid" alt="logo" style={{ width: "150px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
