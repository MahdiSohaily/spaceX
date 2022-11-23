import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="navBar d-flex wrapper">
          <div className="navBrand d-flex">
            <img
              width={60}
              height={60}
              className="logo"
              src="/images/planet.png"
              alt="website logo"
            />
            <h1 className="logo">SpaceX</h1>
          </div>
          <ul className="menuNav d-flex">
            <li className="nav-link">
              <NavLink className="text-secondary-400" to="/">
                Rockets
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="text-secondary-400" to="/missions">
                Missions
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink className="text-secondary-400" to="/profile">
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
