import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/admin.png";
import * as AiIcons from "react-icons/ai";
import * as BiMap from "react-icons/bi";
import * as GrLogin from "react-icons/gr";
import * as FiDatabase from "react-icons/fi";

function TopBar() {
  return (
    <div className="shadow-sm bg-light mb-2">
      <nav className="navbar navbar-light  container navbar-expand">
        <Link className="navbar-brand" to="/home">
          <img src={logo} width="55" alt="Admin Logo" />
          Admin
        </Link>
        <ul
          className="navbar-nav ml-auto"
          style={{ marginLeft: "auto", fontSize: "18px" }}
        >
          <li>
            <Link className="nav-link" to="/calendar">
              <AiIcons.AiFillCalendar style={{ fontSize: "20px" }} />
              Calendar
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/map">
              <BiMap.BiMap style={{ fontSize: "20px" }} />
              Map
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/user-data">
              <FiDatabase.FiDatabase style={{ fontSize: "20px" }} />
              User Data
            </Link>
          </li>
          <li style={{ marginLeft: "2px" }}>
            <Link className="nav-link" to="/login">
              <GrLogin.GrLogin
                style={{ background: "white", fontSize: "20px" }}
              />
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TopBar;
