import React, { Component } from "react";

import mychartcss from "./mychart.module.css";
import mylogo from "./images/mylogo2.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favorColor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favorColor: "yellow" });
    }, 4000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "the update color is " + this.state.favorColor;
  }
  componentWillUnmount() {
    alert("the header component is about to be  unmounted.");
  }

  render() {
    return (
      <div className={mychartcss.chartHeader}>
        <img src={mylogo} className={mychartcss.mylogo}></img>
        <h1>My favorite color is {this.state.favorColor}</h1>
        <div id="mydiv"></div>
      </div>
    );
  }
}

export default Header;
