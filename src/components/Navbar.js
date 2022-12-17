import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  const links = [
    {
      id: 1,
      text: 'Home Page',
      path: '/',
    },
  ];
  const listOfLinks = links.map((link) => (
    <li key={link.id} className="like">
      <NavLink className="like" to={link.path}>{link.text}</NavLink>
    </li>
  ));
  return (
    <header>
      <nav>
        <div>
          <a className="premiere-lynk" href="/">Countries</a>
          <div>
            <ul>
              {listOfLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
