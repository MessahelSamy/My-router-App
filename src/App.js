import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./App.css";
import "./Components/Footer/Footer.css";
import "./Components/Todolist-App/ToDoList.css";
import "./Components/Portfolio/Portfolio.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About";
import Home from "./Components/Home/Home";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contacts/Contact";
import ListTask from "./Components/Todolist-App/ListTask";
import FootballApp from "./Components/Football-App/FootballApp";
import Standings from "./Components/Football-App/Component/Standings";
import Leagues from "./Components/Football-App/Component/Leagues";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <header className="navbar">
        <Link to="/home">
          <div className="uiverse">
            <button data-text="Awesome" className="button">
              <span className="actual-text">&nbsp;MessahelSamy&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;MessahelSamy&nbsp;
              </span>
            </button>
          </div>
        </Link>
        <Nav />
      </header>
      <div className="router">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Service" element={<Service />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="/ListTask" element={<ListTask />} />

          <Route path="/FootballApp" element={<FootballApp />} />
          <Route path="/Leagues" element={<Leagues />} />
          <Route path="/Standings" element={<Standings />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
