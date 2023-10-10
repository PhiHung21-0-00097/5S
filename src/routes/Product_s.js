import React, { Component } from "react";
import "./styles/Product_s.scss";
import Footer from "../views/Footer";
import Header from "../views/Header";
import { Link } from "react-router-dom";
import sp1 from "../assets/images/project/cha-san.png";
import sp2 from "../assets/images/project/hoa-chat.png";
import sp3 from "../assets/images/project/hut-bui.png";
import sp4 from "../assets/images/project/phun-rua.png";
import sp5 from "../assets/images/project/vat-tu.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default class Product_s extends Component {
  render() {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };
    return (
      <>
        <div className="product_s ">
          <div className="container">
            <div className="row row-top pt-5 pb-5">
              <div className="col col-top">
                <div className="row row-top-title p-10">
                  <h3>sản phẩm mới nhất</h3>
                </div>
                <div className="row row-body mt-4">
                  {" "}
                  <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="row row-body-product_s">
                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img
                                className="img-fluid div-img"
                                src={sp1}
                                alt=""
                              ></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp2} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <div></div>
                              <img className="img-fluid" src={sp3} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp4} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp5} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp1} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp2} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                        <div className="col col-xl-3 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp3} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row row-body-product_s">
                        <div className="col col-xl-4 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp4} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col col-xl-4 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp5} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                        <div className="col col-xl-4 col-md-6 col-sm-12 pt-5">
                          <Link to={"/sanpham-chitiet"}>
                            <div className="card-product_s pt-2">
                              <img className="img-fluid" src={sp5} alt=""></img>

                              <div className="card-body-product_s ">
                                <div>
                                  <h6 className="card-title-product_s">
                                    VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                                  </h6>
                                </div>
                                <div>
                                  <p className="card-text-product_s">
                                    Giá: 1.550.000 <sup>₫ </sup>
                                  </p>
                                </div>
                                <div className="btn-card-product_s pt-2">
                                  <Link
                                    className="btn-chitiet"
                                    to={"/sanpham-chitiet"}
                                  >
                                    chi tiết
                                  </Link>
                                  <Link
                                    className="btn-giohang"
                                    to={"/themgiohang"}
                                  >
                                    Thêm giỏ hàng
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
