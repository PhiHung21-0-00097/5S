import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import global from "../styles/global.scss";
import DetailedNews from "../routes/route/DetailedNews";
import News_s from "../routes/News_s";
import DetailedProduct from "../routes/route/DetailedProduct";
import Product_s from "./../routes/Product_s";
import Service_s from "./../routes/Service_s";
import Contact_s from "./../routes/Contact_s";
import Recruitment from "./../routes/Recruitment";
import DetailedService from "./../routes/route/DetailedService";
import Project_s from "./../routes/Project_s";
import Pricelist_s from "./../routes/Pricelist_s";
import Introduce_s from "./../routes/Introduce_s";
import DetailedProject from "./../routes/route/DetailedProject";
import Header from "../views/Header";
import Test from "./Test";
import Footer from "../views/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";

import Login from "./../components/Login";
import MenuBar from "./MenuBar";

const App = () => {
  return (
    <>
      <div className="form-ls-5s">
        <Header />

        <Routes>
          <Route path="/menu-navbar" element={<MenuBar />} />
          <Route path="/login-admin" element={<Login />} />
          <Route path="/info_kh" element={<Test />} />
          <Route path="" element={<Home />} />
          <Route path="/dichvu" element={<Service_s />} />
          <Route path="/dichvu-chitiet" element={<DetailedService />} />
          <Route path="/sanpham" element={<Product_s />} />
          <Route path="/sanpham-chitiet" element={<DetailedProduct />} />
          <Route path="/tintuc" element={<News_s />} />
          <Route path="/tintuc-chitiet" element={<DetailedNews />} />
          <Route path="/lienhe" element={<Contact_s />} />{" "}
          <Route path="/tuyendung" element={<Recruitment />} />
          <Route path="/duan" element={<Project_s />} />
          <Route path="/duan-chitiet" element={<DetailedProject />} />
          <Route path="/banggia" element={<Pricelist_s />} />
          <Route path="/gioithieu" element={<Introduce_s />} />
        </Routes>
      </div>
      <div className="routes"></div>
      <Footer />
    </>
  );
};
export default App;
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
