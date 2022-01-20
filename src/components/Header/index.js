import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="header__link header__title"
            >
              Redux Tutorial
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link--active " : "header__link"
              }
              to="/photos/"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
