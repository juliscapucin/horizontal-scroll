import "./style.scss";

import React from "react";

function Navbar() {
  return (
    <nav>
      <div className='logo'>Everybody loves a good story</div>
      <ul>
        <li>Cases</li>
        <li>Services</li>
        <li>Culture</li>
        <li>Team</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
