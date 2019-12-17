import React, { Component } from "react";
import "./App.css";
import MyRadarChart from "./RadarChart";
import Header from "./Header";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CO2Emission: [],
      show: true
    };
  }
  async componentDidMount() {
    try {
      const CO2url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
      const CO2response = await fetch(CO2url);
      const CO2data = await CO2response.json();

      //use the following code block when you want to load data from API
      this.setState({
        CO2Emission: CO2data
      });
      //throw "Kayvan Test Exception Handling!";
    } catch (ex) {
      //ex.response
      //ex.request
      if (ex.response && ex.response.status == 404) {
        alert("The server does not repond. error code is 404(not found)");
      } else {
        console.log("logging the error");
        console.log(ex);
        alert("an unexpected error occured.");
      }

      //expected : 404 not found, 400 bad request
      //unexpected : show general message, log error
    }
  }
  delHeader = () => {
    this.setState({ show: false });
  };
  addHeader = () => {
    this.setState({ show: true });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Header></Header>;
    }
    return (
      <React.Fragment>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
        <button type="button" onClick={this.addHeader}>
          Add Header
        </button>

        <MyRadarChart
          CO2Year1={this.state.CO2Emission[240]}
          CO2Year2={this.state.CO2Emission[260]}
        ></MyRadarChart>
      </React.Fragment>
    );
  }
}
