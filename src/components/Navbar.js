import React from 'react';
import { NavLink } from 'react-router-dom';
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
      <nav>
        <div>
          <a className="premiere-lynk" href="/">Countries</a>
          <div>
            <ul>
              {listLinks}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
