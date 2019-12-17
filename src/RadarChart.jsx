import React, { Component } from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";

import mychartcss from "./mychart.module.css";

class MyRadarChart extends Component {
  state = {};
  render() {
    const year1 = this.props.CO2Year1;
    const year2 = this.props.CO2Year2;

    if (year1 === undefined) return <p>Data is not available!</p>;

    const data = [
      {
        subject: "Gas Fuel",
        Year1: year1["Gas Fuel"],
        Year2: year2["Gas Fuel"]
      },
      {
        subject: "Solid Fuel",
        Year1: year1["Solid Fuel"],
        Year2: year2["Solid Fuel"]
      },
      {
        subject: "Liquid Fuel",
        Year1: year1["Liquid Fuel"],
        Year2: year2["Liquid Fuel"]
      }
    ];

    return (
      <div className={mychartcss.chartbg}>
        <RadarChart
          cx={300}
          cy={300}
          outerRadius={250}
          width={800}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar
            name={year1.Year}
            dataKey="Year1"
            stroke="blue"
            fill="blue"
            fillOpacity={0.6}
          />
          <Radar
            name={year2.Year}
            dataKey="Year2"
            stroke="orange"
            fill="orange"
            fillOpacity={0.6}
          />
        </RadarChart>
      </div>
    );
  }
}

export default MyRadarChart;
