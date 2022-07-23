import { NavLink } from "react-router-dom";
import "./Football-app-Styles.css";

function Content() {
  return (
    <div className="content-container">
      <div className="tabs">
        <div className="tab-leagues">
          <NavLink exact to="/Leagues">
            Leagues
          </NavLink>
        </div>
        <div className="tab-standings">
          <NavLink to="/Standings">Standings</NavLink>
        </div>
      </div>
    </div>
  );
}
export default Content;
