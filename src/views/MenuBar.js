import React from "react";
import logo from "../../src/assets/images/logo-header.png";
import i_search_input from "../../src/assets/svg/header/input-search.svg";
import btn_mobile from "../../src/assets/js/mobile-navbar";
import { Link } from "react-router-dom";
import "../styles/MenuBar.scss";
// import "../styles/js.scss";
function MenuBar() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="wrapper">
            <img src={logo}></img>
          </div>
          <div className="hamburber"></div>{" "}
        </div>
      </div>
    </>
  );
}

export default MenuBar;
