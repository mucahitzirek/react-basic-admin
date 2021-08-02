import "../App.css";
import React from "react";
import * as BsListTask from "react-icons/bs";
import * as bi from "react-icons/bi";
import * as im from "react-icons/im";
import { IoIosSnow } from "react-icons/io";
import ChartLine from "../components/ChartLine";
import ChartRadar from "../components/ChartRadar";
import ChartBar from "../components/ChartBar";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-header bg-primary text-white">
              <div className="row aligin-items-center">
                <div className="col">
                  <BsListTask.BsListTask style={{ fontSize: "100px" }} />
                </div>
                <div className="col">
                  <h3 className="display-3">09</h3>
                  <h6>Tasks</h6>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h5>
                <a
                  href="#"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  View Details
                </a>
                <bi.BiRightArrowAlt
                  style={{ fontSize: "50px", color: "primary" }}
                />
              </h5>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-header bg-secondary text-white">
              <div className="row aligin-items-center">
                <div className="col">
                  <IoIosSnow style={{ fontSize: "100px" }} />
                </div>
                <div className="col">
                  <h3 className="display-3">09</h3>
                  <h6>Tasks</h6>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h5>
                <a
                  href="#"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  View Details
                </a>
                <bi.BiRightArrowAlt
                  style={{ fontSize: "50px", color: "primary" }}
                />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-header bg-success text-white">
              <div className="row aligin-items-center">
                <div className="col">
                  <im.ImTree style={{ fontSize: "100px" }} />
                </div>
                <div className="col">
                  <h3 className="display-3">09</h3>
                  <h6>Tasks</h6>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h5>
                <a
                  href="#"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  View Details
                </a>
                <bi.BiRightArrowAlt
                  style={{ fontSize: "50px", color: "primary" }}
                />
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-header bg-danger text-white">
              <div className="row aligin-items-center">
                <div className="col">
                  <BsListTask.BsListTask style={{ fontSize: "100px" }} />
                </div>
                <div className="col">
                  <h3 className="display-3">09</h3>
                  <h6>Tasks</h6>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <h5>
                <a
                  href="#"
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  View Details
                </a>
                <bi.BiRightArrowAlt
                  style={{ fontSize: "50px", color: "primary" }}
                />
              </h5>
            </div>
          </div>
        </div>
        <div>
          <ChartBar />
        </div>
        <div className="col-md-6">
          <ChartLine />
        </div>
        <div className="col-md-6">
          <ChartRadar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
