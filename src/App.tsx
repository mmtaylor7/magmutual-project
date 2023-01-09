import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap";
import "react-bootstrap";
// import Header from "./components/header/Header";
// import NavBar from "./components/navBar/NavBar";
// import Home from "./components/home";
// import User from "./components/user/User"

function App() {
  return (
    <div className="App">
      {/* <Header />
      <NavBar /> */}

      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/byUser" element={<User />} />
          <Route path="/byDate" element={<Date />} />
          <Route path="/byProfession" element={<Profession />} />
          <Route path="/byLocation" element={<Location />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
