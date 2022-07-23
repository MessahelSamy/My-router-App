import React from "react";
import { Link } from "react-router-dom";
import { TbBallFootball, TbChecklist } from "react-icons/tb";
import "./Portfolio.css";

export function Portfolio() {
  return (
    <div className="general">
      <div>
        <div className="todolist-div">
          <Link to="/ListTask">
            <p className="carte-1">
              Todo
              <TbChecklist className="icon-todolist" />
              List
            </p>
          </Link>
        </div>
      </div>

      <div className="card">
        <div className="card1">
          <div className="card2">
            <Link to="/FootballApp">
              <p className="carte-2">
                Football
                <TbBallFootball /> App
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="card-transition">
        <div className="card-transition-two_side">
          <Link to="/#">
            <p className="carte-3">TodoList</p>
          </Link>
        </div>
      </div>
      <div>
        <Link to="/#">
          <p>TodoList</p>
        </Link>
      </div>
    </div>
  );
}
/*<div className="s-t">
        <div className="shadow-transition">
          <Link to="/#">
            <p className="carte-4">TodoList</p>
          </Link>
        </div>
      </div>
    </div>*/
export default Portfolio;
