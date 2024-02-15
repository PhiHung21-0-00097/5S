/* eslint-disable no-undef */
import React from "react";
import logo from "../../src/assets/images/logo-header.png";
import i_search_input from "../../src/assets/svg/header/input-search.svg";
import btn_mobile from "../../src/assets/js/mobile-navbar";
import { Link } from "react-router-dom";
// import "../styles/js.scss";
import "../styles/Header.scss";
// import "../styles/MenuBar.scss";
// import "./MenuBar";
export default class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header pt-5">
          <div className="container">
            <div className="row row-top-header">
              <div className="col col-xl-3 col-md-12 col-sm-12 ">
                <Link to={"/"}>
                  <img src={logo} alt="" className="header-logo-left"></img>
                </Link>
              </div>

              <div className="col col-xl-6 col-md-12 col-sm-12 mt-2 text-center">
                <div className="search-container">
                  <div className="searchBox">
                    <input
                      className="searchInput"
                      type="text"
                      placeholder="Nhập tên sản phẩm cần tìm"
                    ></input>
                    <button className="searchButton" href="">
                      <img src={i_search_input} alt="" className=""></img>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col col-hotline col-xl-3 col-md-6 col-sm-12">
                <Link to={"/lienhe"}>
                  <div className="row form-hotline  align-items-center justify-content-center mt-3">
                    <div className="col-2 icons-hotline-header align-items-center justify-contesent-center">
                      <span className="transformskew">
                        <i
                          className="i-phone fa fa-phone"
                          aria-hidden="true"
                        ></i>
                      </span>
                    </div>
                    <div className="col col-tuvan">
                      <span className="hotlinetuvan-header">
                        HOTLINE TƯ VẤN 24/7
                      </span>
                      <span className="sdt-header">0911 874 318</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col col-mobile">
                <nav className="mobile">
                  <label className="btn-mobile" for="menu-bar">
                    <input
                      className="check"
                      type="checkbox"
                      id="menu-bar"
                    ></input>
                    <i className="fas fa-bars" id="menu-icon"></i>
                    <i className="fas fa-times" id="cl-icon"></i>
                  </label>
                </nav>
              </div>
            </div>
          </div>
          <div className="row-bar-menu">
            <div className="container">
              <div className="row">
                <div className="row menu-bar align-items-center">
                  <nav className=" col col-xl-12 col-md-12 col-sm-12">
                    <ul className="menu nav-menu">
                      <li>
                        <Link to={"/"} className="a-first">
                          TRANG CHỦ
                        </Link>
                      </li>
                      <li>
                        <Link className="a-first" to={"/gioithieu"}>
                          VỀ CHÚNG TÔI
                        </Link>
                      </li>
                      <li className="li-first">
                        <Link to={"/dichvu"} className="a-first">
                          DỊCH VỤ
                          <i className="fa fa-chevron-down m-1"></i>
                        </Link>

                        <ul className="menu-item">
                          <li className="li-first-kid">
                            <Link to={"/dichvu-chitiet"}>
                              VỆ SINH CÔNG NGHIỆP SAU XÂY DỰNG
                              {/* <i className="fa fa-chevron-right m-1"></i> */}
                            </Link>

                            {/* <ul className="menu-item-kid">
                              <li>
                                <Link to={"/dichvu-chitiet"}>Dịch vụ</Link>
                              </li>
                              <li>
                                <Link to={"/dichvu-chitiet"}>Dịch vụ</Link>
                              </li>
                              <li>
                                <Link to={"/dichvu-chitiet"}>Dịch vụ</Link>
                              </li>
                            </ul> */}
                          </li>
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              VỆ SINH NHÀ Ở ĐỊNH KỲ
                            </Link>
                          </li>
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              VỆ SINH KÍNH TÒA NHÀ
                            </Link>
                          </li>
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              CUNG ỨNG TẠP VỤ VĂN PHÒNG
                            </Link>
                          </li>{" "}
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              {" "}
                              TẠP VỤ VĂN PHÒNG THEO GIỜ
                            </Link>
                          </li>{" "}
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              TẠP VỤ VĂN PHÒNG ĐỊNH KỲ
                            </Link>
                          </li>{" "}
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              GIẶT THẢM VĂN PHÒNG
                            </Link>
                          </li>{" "}
                          <li>
                            <Link to={"/dichvu-chitiet"}>GIẶT GHẾ SOFA</Link>
                          </li>
                          <li>
                            <Link to={"/dichvu-chitiet"}>
                              GIẶT THẢM COTTON, LEN, LỤA, ...
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="li-first">
                        <Link className="a-first" to={"/sanpham"}>
                          SẢN PHẨM
                          <i className="fa fa-chevron-down m-1"></i>
                        </Link>
                        <ul className="menu-item">
                          <li>
                            <Link to={"/sanpham-chitiet"}>MÁY CHÀ SÀN CN</Link>
                          </li>
                          <li>
                            <Link to={"/sanpham-chitiet"}>
                              HÓA CHẤT TẨY RỬA
                            </Link>
                          </li>
                          <li>
                            <Link to={"/sanpham-chitiet"}>
                              MÁY HÚT BỤI HÚT NƯỚC
                            </Link>
                          </li>
                          <li>
                            <Link to={"/sanpham-chitiet"}>
                              MÁY PHUN RỬA ÁP LỰC
                            </Link>
                          </li>
                          <li>
                            <Link to={"/sanpham-chitiet"}>
                              CÔNG CỤ VẬT TƯ KHÁC
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link className="a-first" to={"/banggia"}>
                          BẢNG GIÁ
                        </Link>
                      </li>
                      <li>
                        <Link className="a-first" to={"/duan"}>
                          DỰ ÁN THỰC HIỆN
                        </Link>
                      </li>
                      <li>
                        <Link className="a-first" to={"/tintuc"}>
                          TIN TỨC
                        </Link>
                      </li>
                      <li>
                        <Link className="a-first" to={"/tuyendung"}>
                          TUYỂN DỤNG
                        </Link>
                      </li>
                      <li>
                        <Link to={"/lienhe"}>LIÊN HỆ</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div class="menu-phone-button">
          <a href="#" id="menu-phone">
            <hr></hr>
            <hr></hr>
            <hr></hr>
          </a>
        </div>
      </>
    );
  }
}
