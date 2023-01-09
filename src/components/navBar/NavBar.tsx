import "../navBar/NavBarStyles.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div>
        <Link to="/byUser">User</Link>
      </div>
      <div>
        <Link to="/byDate">Date</Link>
      </div>
      <div>
        <Link to="/byProfession">Profession</Link>
      </div>
      <div>
        <Link to="/byLocation">Location</Link>
      </div>
    </div>
  );
}

export default NavBar;
