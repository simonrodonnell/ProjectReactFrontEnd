import React from 'react';

const NavBar = (props) => {
  return (
    <header>

      <ul>
        <li className="navLink">
          <a href="/dinosaurs">Dinosaurs</a>
        </li>
        <li className="navLink">
          <a href="/paddocks">Paddocks</a>
        </li>
        <li className="navLink">
          <a href="/dinosaurs/new">Create Dinosaur</a>
        </li>

      </ul>
    </header>
  )
}
export default NavBar
