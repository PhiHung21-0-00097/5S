import React, { Component } from "react";

import Slider from "./Slider";
import Partner from "./Partner";
import Introduce from "./Introduce";
import Service from "./Service";
import Categoty from "./Categoty";
import Representative from "./Representative";
import Producet from "./Product";
import News from "./News";
import MenuBar from "./MenuBar";
import Header from "./Header";
import Footer from "./Footer";
class Home extends React.Component {
  render() {
    return (
      <>
        <Slider />
        <Introduce />
        <Service />
        <Categoty />
        <Producet />
        <Representative />
        <Partner />
        <News />
      </>
    );
  }
}
export default Home;
