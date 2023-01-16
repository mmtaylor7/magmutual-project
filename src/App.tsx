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
import { PictureAsPdfOutlined } from "@mui/icons-material";

function App() {
  const [users, setUsers] = useState([]);
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
          <Route path="/byLocation" element={<Location />} />
        </Routes>
      </div>
      <div className="cardCenter">
        {users.map((user: any) => {
          return <UserProfile user={user} />;
        })}
      </div>
    </div>
  );
}

export default App;
