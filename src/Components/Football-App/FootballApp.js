import React from "react";
import "./Component/Football-app-Styles.css";
import Footer from "../Footer/Footer";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Leagues from "./Component/Leagues";
import Standings from "./Component/Standings";

function FootballApp() {
  return (
    <div>
      <Content />
      <Footer />
    </div>
  );
}

export default FootballApp;
