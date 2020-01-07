import React, { Component } from "react";
//import BarChart from "../../charts/BarChart";
import MyChart from "../../charts/MyChart";
import "./view5.css";

export default class View5 extends Component {
  render() {
    return (
      <div id="view5">
        <div className="header">Age</div>
        <div style={{ overflowX: "scroll", overflowY: "hidden" }}>
          <MyChart />
        </div>
      </div>
    );
  }
}
