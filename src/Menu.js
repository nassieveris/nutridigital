import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { name: 'Home',                       path: '/' },
  { name: 'Nosotros',                   path: '/nosotros' },
  { name: 'Nuestros Expertos',          path: '/expertos' },
  { name: 'Contacto',                   path: '/contacto' },
  { name: 'Login',                      path: '/login' },
  { name: '¡Agenda con Nosotros!',      path: '/consulta', classItem: 'menu-button', classLink: 'cta verde' },
];

const Menu = () => {

  return (
    <nav className="menu">
      <ul className='menu-ul'>
        {routes.map((route, index) => (
          <li
            key={index}
            className={route.classItem || "menu-item"}>
            <NavLink
              onClick={() => {
                document.body.classList.remove('open-burger');
              }}
              to={route.path}
              className={({ isActive }) => `${route.classLink || "menu-link"} ${isActive ? "menu-active" : ""}`}>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
