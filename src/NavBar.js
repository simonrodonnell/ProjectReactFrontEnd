import React from 'react';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <a href="/parks">Park Admin</a>
        </li>
        <li className="navLink">
          <a href="/dinosaurs">Dinosaur Admin</a>
        </li>
        <li className="navLink">
          <a href="/paddocks">Paddock Admin</a>
        </li>
        <li className="navLink">
          <a href="/dinosaurs/new">Create Dinosaur</a>
        </li>
        <li className="navLink">
          <a href="/paddocks/new">Create Paddock</a>
        </li>

      </ul>
    </header>
  )
}
export default NavBar
