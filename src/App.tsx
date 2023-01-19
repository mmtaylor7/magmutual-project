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

let submitClicked = false;

function App() {
  const [users, setUsers] = useState([]);

  const returnUserTsx = () => {
    if (users.length > 0 && submitClicked) {
      return users.map((user: any) => {
        return <UserProfile user={user} />;
      });
    } else if (submitClicked) {
      return <div className="noResults">No results. Please try again. </div>;
    } else {
      return <div></div>;
    }
  };

  const setSubmitClicked = (newValue: boolean) => {
    submitClicked = newValue;
  };

  return (
    <div className="App">
      <div>
        <NavBar setSubmitClicked={setSubmitClicked} setUsers={setUsers} />
      </div>

      <div className="routes">
        <Routes>
          <Route
            path="/byUser"
            element={
              <User setUsers={setUsers} setSubmitClicked={setSubmitClicked} />
            }
          />
          <Route
            path="/byDate"
            element={
              <Date setUsers={setUsers} setSubmitClicked={setSubmitClicked} />
            }
          />
          <Route
            path="/byProfession"
            element={
              <Profession
                setUsers={setUsers}
                setSubmitClicked={setSubmitClicked}
              />
            }
          />
          <Route
            path="/byLocation"
            element={
              <Location
                setUsers={setUsers}
                setSubmitClicked={setSubmitClicked}
              />
            }
          />
        </Routes>
      </div>
      <div className="cardCenter">{returnUserTsx()}</div>
    </div>
  );
}

export default App;
