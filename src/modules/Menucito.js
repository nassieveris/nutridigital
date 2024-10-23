import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Dataform', path: '/dataform' },
  { name: 'Datacitas', path: '/datacitas' },
  { name: 'Datatipos', path: '/datatipos' },
];

const Menucito = () => {
  return (
    <section className="pasto intro modulo">
        <div className="contenedor">
    <nav className="menucito">
      <ul className='menucito-ul'>
        {routes.map((route, index) => (
          <li
            key={index}
            className={route.classItem || "menucito-item"}>
            <NavLink
              to={route.path}
              className={({ isActive }) => `${route.classLink || "menucito-link"} ${isActive ? "menucito-active" : ""}`}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    </div>
      </section>
  );
}

export default Menucito;
