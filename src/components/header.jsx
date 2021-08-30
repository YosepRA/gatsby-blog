import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import * as mainStyles from '../scss/main.module.scss';

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg" className={mainStyles.header}>
    <Container>
      <Navbar.Brand>
        <Link to="/" className={mainStyles.headerBrand}>
          The Journey
        </Link>
      </Navbar.Brand>

      {/* <Navbar.Toggle aria-controls="main-nav" />

      <Navbar.Collapse id="main-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav>
      </Navbar.Collapse> */}
    </Container>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
