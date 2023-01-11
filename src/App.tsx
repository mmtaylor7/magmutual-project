import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap";
import "react-bootstrap";
import Header from "./components/header/Header";
import NavBar from "./components/navBar/NavBar";
import User from "./components/user/User";
import Date from "./components/date/Date";
import Profession from "./components/profession/Profession";
import Location from "./components/location/Location";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <NavBar />
      </div>

      <div className="routes">
        <Routes>
          <Route path="/byUser" element={<User />} />
          <Route path="/byDate" element={<Date />} />
          <Route path="/byProfession" element={<Profession />} />
          <Route path="/byLocation" element={<Location />} />
        </Routes>
      </div>
      <div className="cardCenter">
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
