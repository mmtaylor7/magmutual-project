import "./App.css";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap";
import "react-bootstrap";
import NavBar from "./components/navBar/NavBar";
import User from "./components/user/User";
import Date from "./components/date/Date";
import Profession from "./components/profession/Profession";
import Location from "./components/location/Location";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  const [users, setUsers] = useState([]);
  const returnUserTsx = () => {
    if (users.length > 0) {
      return users.map((user: any) => {
        return <UserProfile user={user} />;
      });
    } else {
      return <div className="noResults">No results. Please try again. </div>;
    }
  };

  return (
    <div className="App">
      <div>
        <NavBar />
      </div>

      <div className="routes">
        <Routes>
          <Route path="/byUser" element={<User setUsers={setUsers} />} />
          <Route path="/byDate" element={<Date />} />
          <Route
            path="/byProfession"
            element={<Profession setUsers={setUsers} />}
          />
          <Route
            path="/byLocation"
            element={<Location setUsers={setUsers} />}
          />
        </Routes>
      </div>
      <div className="cardCenter">{returnUserTsx()}</div>
    </div>
  );
}

export default App;
