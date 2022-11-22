import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navBar p-8">
        <img src="./images/planet.ong" alt="website logo" />
        <p className="logo">SpaceX</p>
        <ul className="menuNav">
          <li>
            <NavLink to="/">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions">Missions</NavLink>
          </li>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
