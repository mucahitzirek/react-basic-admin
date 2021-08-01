import React from "react";
import "../App.css";
import { SidebarData } from "../data/SidebarData";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((val, key) => {
          return (
            <li
              id={window.location.pathname === val.path ? "active" : ""}
              className="rows"
              key={key}
              
            >
              <Link
                key={key}
                to={val.path}
                style={{
                  color: "#fff",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
