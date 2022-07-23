import React, { useState, useEffect } from "react";
import "./Football-app-Styles.css";
import axios from "axios";
import Content from "./Content";

const Leagues = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-football-standings.azharimm.site/leagues")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="div-leagues-content">
        <Content />
      </div>
      <div className="leagues-container">
        {data?.map((league) => (
          <div key={league.id} className="league-div">
            <img src={league.logos.light} alt="#" />
            <h4>{league.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leagues;
