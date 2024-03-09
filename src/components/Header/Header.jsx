import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Row } from "reactstrap";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <nav className="container headerContainer">
      <Row>
        <h1>BMI CALCULATOR</h1>
      </Row>
      <Row>
        <Link className={`col ${pathname === "/" && "active"} `} to={"/"}>
          Calculator
        </Link>

        <Link
          className={`col ${pathname === "/result" && "active"} `}
          to="/result"
        >
          Results
        </Link>

        <Link className={`col ${pathname === "/info" && "active"} `} to="/info">
          Info
        </Link>
        <Link
          className={`col ${pathname === "/records" && "active"} `}
          to="/records"
        >
          Redords
        </Link>
      </Row>
    </nav>
  );
};

export default Header;
