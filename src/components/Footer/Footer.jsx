import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="container footerContainer">
      <Row>
        <Col className="col-12 col-sm-4">
          <a
            href="https://github.com/mehmeterdemvural"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
              alt="Github"
            />
            Github
          </a>
        </Col>
        <Col className="col-12 col-sm-4">
          <a
            href="https://www.linkedin.com/in/mehmeterdemvural/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
              alt="LinkedIn"
            />
            LinkedIn
          </a>
        </Col>

        <Col className="col-12 col-sm-4">
          <a
            href="https://mehmeterdemvural.software/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/domain.png"
              alt="Portfolio"
            />
            Portfolio
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
