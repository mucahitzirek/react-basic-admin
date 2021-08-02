import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "./calendar.css";

const CalendarPage = () => {
  const [dateS, setDateS] = useState(new Date());

  let date = new Date().toString();

  const onChange = (dateS) => {
    setDateS(dateS);

    console.log(dateS.toString());
  };

  return (
    <div>
      <div>
        <Calendar onChange={onChange} value={dateS}></Calendar>
      </div>
      <div>
        Click Date: <b>{dateS.toString()}</b>
      </div>
      <div>{moment(date).calendar()}</div>
      <div>{moment(date).format("dddd")}</div>
      <div>{moment(date).format("MMMM Do YYYY, h:mm:ss a")}</div>
      <div>{moment(date).format("LT")}</div>
      <div>{moment(date).format("LTS")}</div>
      <div>{moment(date).format("LLL")}</div>
      <div>{moment(date).format("lll")}</div>
      <div>{moment(date).format("LLLL")}</div>
      <div>{moment(date).format("llll")}</div>
    </div>
  );
};

export default CalendarPage;
