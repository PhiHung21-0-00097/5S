import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import arow_box from "../assets/svg/introduce/box-arrow-up-right.svg";

import cn from "../assets/images/service/cong-nghiep.png";
import no from "../assets/images/service/nha-o.png";
import kn from "../assets/images/service/kinh-nha.png";
import cutv from "../assets/images/service/cungung-tapvu.png";
import tvh from "../assets/images/service/tapvu-vanphong-h.png";
import tvvp from "../assets/images/service/tapvu-vanphong.png";
import t from "../assets/images/service/tham.png";
import sf from "../assets/images/service/so-fa.png";
import ll from "../assets/images/service/len-lua.png";

import { Link } from "react-router-dom";
import "./styles/Service_s.scss";
import Footer from "../views/Footer";
import Header from "../views/Header";

class Service_s extends React.Component {
  render() {
    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };
    return (
      <>
        <section className="service_s mt-5 mb-5">
          <div className="container">
            <div className="row row-body">
              <div className="col col-body">
                <div className="row-body-title p-10">
                  <h3>
                    <span>DỊCH VỤ LÀM SẠCH 5S</span>
                  </h3>
                </div>
                <div className="row-body">
                  <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="row row-card">
                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={cn} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                VỆ SINH CÔNG NGHIỆP SAU XÂY DỰNG
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={no} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                VỆ SINH NHÀ Ở ĐỊNH KỲ
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={kn} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                VỆ SINH KÍNH TÒA NHÀ
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={cutv} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                CUNG ỨNG TẠP VỤ VĂN PHÒNG
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={tvh} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                TẠP VỤ VĂN PHÒNG THEO GIỜ
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={tvvp} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                TẠP VỤ VĂN PHÒNG ĐỊNH KỲ
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="row row-card">
                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={t} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                GIẶT THẢM VĂN PHÒNG
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={sf} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                GIẶT GHẾ SOFA
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col col-xl-4 col-md-6 col-sm-12 mt-3">
                          <div className="card">
                            <img className="img" src={ll} alt=""></img>
                            <div className="service-card text-center p-2">
                              <h5 className="service-header text-center mt-3">
                                GIẶT THẢM COTTON, LEN, LỤA, ...
                              </h5>
                              <div className="hr-body-service"></div>

                              <span className="card-span">
                                Product packaging refers to the materials and
                                design used to protect, product Product
                                packaging refers to the materials and design
                                used to protect, product
                              </span>

                              <div className="row button-service_s align-items-center">
                                <Link to={"/dichvu-chitiet"} className="link">
                                  <img src={arow_box} alt=""></img>
                                  <span> TÌM HIỂU THÊM</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Service_s;
{
  /* <div className="row row-bottom-newss">
              <div className="col col-xl-4 col-md-5 col-sm-12 col-left">
                <div className="row row-title">
                  <h3>BÀI VIẾT NỔI BẬT</h3>
                </div>
                <div className="row">
                  <div className="row row-body-left">
                    <div className="row row-body-kid p-1">
                      <div className="col col-4">
                        <img
                          src="https://i.ytimg.com/vi/u2VGM_FmXrQ/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col">
                        <Link>
                          Top 11 nhà máy gia công mỹ phẩm tại Hà nội uy tín nhất
                          2023
                        </Link>
                      </div>
                    </div>
                    <div className="row row-body-kid p-1">
                      <div className="col col-4">
                        <img
                          src="https://i.ytimg.com/vi/u2VGM_FmXrQ/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col">
                        <Link>
                          Top 11 nhà máy gia công mỹ phẩm tại Hà nội uy tín nhất
                          2023
                        </Link>
                      </div>
                    </div>
                    <div className="row row-body-kid p-1">
                      <div className="col  col-4">
                        <img
                          src="https://i.ytimg.com/vi/u2VGM_FmXrQ/maxresdefault.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col">
                        <Link>
                          Top 11 nhà máy gia công mỹ phẩm tại Hà nội uy tín nhất
                          2023
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              */
}
