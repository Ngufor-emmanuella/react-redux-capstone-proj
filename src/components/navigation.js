import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import '../App.css';

function Navigation() {
  const link = [
    {
      id: 1,
      text: 'Home Page',
      path: '/',
    },
  ];

  const linkList = link.map((lin) => (
    <li key={lin.id} className="nav-nav">
      <NavLink className="nav-nav" to={lin.path}>{lin.text}</NavLink>
    </li>
  ));

  return (
    <header>
      <Nav className="navs navbar-expand-lg">
        <Container className="container-fluid">
          <a className="first-link" href="/">Countries</a>
          <div className="flex-row-reverse" id="navNav">
            <ul className="nav-styles">
              {linkList}
            </ul>
          </div>
        </Container>
      </Nav>
    </header>
  );
}

export default Navigation;
