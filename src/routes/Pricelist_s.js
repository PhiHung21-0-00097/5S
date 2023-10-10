import React, { Component } from "react";
import Header from "../views/Header";
import Footer from "../views/Footer";
import "./styles/Pricelist_s.scss";
import sp1 from "../assets/images/project/cha-san.png";
import sp2 from "../assets/images/project/hoa-chat.png";
import sp3 from "../assets/images/project/hut-bui.png";
import sp4 from "../assets/images/project/phun-rua.png";
import sp5 from "../assets/images/project/vat-tu.png";
import { Link } from "react-router-dom";
import cn from "../assets/images/service/cong-nghiep.png";
import no from "../assets/images/service/nha-o.png";
import kn from "../assets/images/service/kinh-nha.png";
import cutv from "../assets/images/service/cungung-tapvu.png";
import tvh from "../assets/images/service/tapvu-vanphong-h.png";
import tvvp from "../assets/images/service/tapvu-vanphong.png";
import t from "../assets/images/service/tham.png";
import sf from "../assets/images/service/so-fa.png";
import ll from "../assets/images/service/len-lua.png";
export default class Pricelist_s extends React.Component {
  render() {
    return (
      <>
        <div className="pricelist_s pt-5 pb-5">
          <div className="container">
            <div className="row row-body">
              <div className="col col-body">
                <div className="row row-body-title p-10">
                  <h3>Bảng giá</h3>
                </div>
                <div className="row row-body">
                  <div className="row row-big text-center ">
                    <div className="col-title ">
                      <h2>SẢN PHẨM</h2>
                    </div>
                  </div>
                  <div className="row row-small ">
                    <div className="col col-xl-2 col-md-4 col-sm-12 col-sp">
                      <div className="card-sp">
                        <Link to={"/sanpham-chitiet"} className="link-img">
                          <div className="div-img">
                            <img
                              src={sp1}
                              alt=""
                              className="img-card img-thumbnail"
                            ></img>
                          </div>
                        </Link>
                        <div className="info ">
                          <div className="title">
                            <strong>MÁY CHÀ SÀN CN</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-2 col-md-4 col-sm-12 col-sp">
                      <div className="card-sp">
                        <Link to={"/sanpham-chitiet"} className="link-img">
                          <div className="div-img">
                            <img
                              src={sp2}
                              alt=""
                              className="img-card img-thumbnail"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong>HÓA CHẤT TẨY RỬA</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-2 col-md-4 col-sm-12 col-sp">
                      <div className="card-sp">
                        <Link to={"/sanpham-chitiet"} className="link-img">
                          <div className="div-img">
                            <img
                              src={sp3}
                              alt=""
                              className="img-card img-thumbnail"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong>
                              MÁY HÚT BỤI HÚT NƯỚCcccccccccccccccccc ccc
                            </strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-2 col-md-4 col-sm-12 col-sp">
                      <div className="card-sp">
                        <Link to={"/sanpham-chitiet"} className="link-img">
                          <div className="div-img">
                            <img
                              src={sp4}
                              alt=""
                              className="img-card img-thumbnail"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong>MÁY PHUN RỬA ÁP LỰC</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-2 col-md-4 col-sm-12 col-sp">
                      <div className="card-sp">
                        <Link to={"/sanpham-chitiet"} className="link-img">
                          <div className="div-img">
                            <img
                              src={sp5}
                              alt=""
                              className="img-card img-thumbnail"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong>CÔNG CỤ VẬT TƯ KHÁC</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row row-big-big text-center pt-5">
                    <div className="col-title ">
                      <h2>DỊCH VỤ</h2>
                    </div>
                  </div>
                  <div className="row row-small text-center">
                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3 ">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={cn}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> VỆ SINH CÔNG NGHIỆP SAU XÂY DỰNG</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={no}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> VỆ SINH NHÀ Ở ĐỊNH KỲ</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={kn}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong>VỆ SINH KÍNH TÒA NHÀ</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={cutv}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> CUNG ỨNG TẠP VỤ VĂN PHÒNG</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={tvh}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> TẠP VỤ VĂN PHÒNG THEO GIỜ</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={tvvp}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong>TẠP VỤ VĂN PHÒNG ĐỊNH KỲ</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={t}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> GIẶT THẢM VĂN PHÒNG</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={sf}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> GIẶT GHẾ SOFA</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-xl-3 col-md-4 col-sm-12 col-sp p-3">
                      <div className="card-sp">
                        <Link to={"/dichvu-chitiet"}>
                          <div className="div-img">
                            <img
                              src={ll}
                              alt=""
                              className="img-card img-fluid"
                            ></img>
                          </div>
                        </Link>
                        <div className="info">
                          <div className="title">
                            <strong> GIẶT THẢM COTTON, LEN, LỤA, ...</strong>
                          </div>

                          <div className="price">
                            <span>Giá: 2.799.000.000 đ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
