import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';
import '../App.css';

const Navigation = () => {
  const linked = [
    {
      id: 1,
      text: 'Home Page',
      path: '/',
    },
  ];
  const listLinks = linked.map((links) => (
    <li key={links.id} className="like">
      <NavLink className="like" to={links.path}>{links.text}</NavLink>
    </li>
  ));
  return (
    <header>
      <Nav className="navbar navbar-expand-lg">
        <Container className="container-fluid">
          <a className="premiere-lynk" href="/">Countries</a>
          <div className="flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav nav-styling">
              {listLinks}
            </ul>
          </div>
        </Container>
      </Nav>
    </header>
  );
};

export default Navigation;
