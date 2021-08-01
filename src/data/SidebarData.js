import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiMap from "react-icons/bi";
import * as GrLogin from "react-icons/gr";
import * as FiDatabase from "react-icons/fi";

export const SidebarData = [
  {
    title: "Home",
    icon: <AiIcons.AiFillHome style={{ fontSize: "20px" }} />,
    path: "/home",
  },

  {
    title: "Map",
    icon: <BiMap.BiMap style={{ fontSize: "20px" }} />,
    path: "/map",
  },
  {
    title: "Calendar",
    icon: <AiIcons.AiFillCalendar style={{ fontSize: "20px" }} />,
    path: "/calendar",
  },
  {
    title: "Data",
    icon: <FiDatabase.FiDatabase style={{ fontSize: "20px" }} />,
    path: "/userdata",
  },
  {
    title: "Login",
    icon: <GrLogin.GrLogin style={{ background: "white", fontSize: "20px" }} />,
    path: "/login",
  },
  {
    title: "No Match",
    icon: (
      <GrLogin.GrClose
        style={{ fontSize: "20px", color: "white", backgroundColor: "white" }}
      />
    ),
    path: "/no-match-link",
  },
];
