import React from "react";

import { Routes, Route } from "react-router-dom";
import Footer from "./VANANH/views/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.json";

import Home from "./VANANH/views/Home";
import MenuBar from "./VANANH/views/MenuBar";
import Test from "./VANANH/views/Test";

import DetailedService from "./VANANH/routes/route/DetailedService";
import DetailedProduct from "./VANANH/routes/route/DetailedProduct";
import DetailedNews from "./VANANH/routes/route/DetailedNews";
import Service_s from "./VANANH/routes/Service_s";
import News_s from "./VANANH/routes/News_s";
import ServiceBuy from "./VANANH/routes/ServiceBuy";
import Product_s from "./VANANH/routes/Product_s";
import Introduce_s from "./VANANH/routes/Introduce_s";
import Contact_s from "./VANANH/routes/Contact_s";
import Adminhome from "./VANANH/views/admin/App";
import Adminlogin from "./VANANH/views/admin/Login";
import Createcontact from "./VANANH/views/admin/Createcontact";
import Updatecontact from "./VANANH/views/admin/Updatecontact";
const App = () => {
  return (
    <>
      <div className="form-ls-5s">
        <Test />
        <MenuBar />

        <Routes>
          {/* Admin */}
          <Route path="/admin/home" element={<Adminhome />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Adminlogin />} />
          <Route path="/create" element={<Createcontact />} />
          <Route path="/update/:id" element={<Updatecontact />} />
          {/* User */}
          <Route path="/test" element={<Test />} />
          <Route path="/thue" element={<ServiceBuy />} />
          <Route path="/dichvu" element={<Service_s />} />
          <Route path="/dichvu-chitiet" element={<DetailedService />} />
          <Route path="/tintuc" element={<News_s />} />
          <Route path="/tintuc-chitiet" element={<DetailedNews />} />
          <Route path="/lienhe" element={<Contact_s />} />
          <Route path="/sanpham" element={<Product_s />} />
          <Route path="/gioithieu" element={<Introduce_s />} />
          <Route path="/kythuatvananh.vn" element={<Home />} />
          <Route path="/sanpham-chitiet" Component={DetailedProduct} />
        </Routes>
        <Footer />
      </div>
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
