import React, { Component } from "react";
import Header from "../views/Header";
import Footer from "../views/Footer";
import "./styles/Project_s.scss";
import images1 from "../../src/assets/images/news/div.blog-img16mar.png";
import images2 from "../../src/assets/images/news/div.blog-img17mar.png";
import images3 from "../../src/assets/images/news/div.blog-img18mar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
export default class Project_s extends React.Component {
  render() {
    return (
      <>
        <div className="project_s pt-5 pb-5">
          <div className="container">
            <div className="row row-body">
              <div className="col col-body">
                <div className="row-body-title p-10">
                  <h3>TỔNG QUAN DỰ ÁN</h3>
                </div>
                <div className="row-body">
                  <div className="col">
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[FreeMode, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="col img-info-representative">
                          <Link to={"/duan-chitiet"}>
                            <img
                              className="img-swiper"
                              src={images1}
                              alt=""
                            ></img>
                            <div className="if">
                              <span>
                                Thuê người giúp việc nhà tại Gò Vấp, Tp. Hồ Chí
                                Minh
                              </span>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="col img-info-representative">
                          <Link to={"/duan-chitiet"}>
                            <img
                              className="img-swiper"
                              src={images2}
                              alt=""
                            ></img>
                            <div className="if">
                              <span>
                                Thuê người giúp việc nhà tại Gò Vấp, Tp. Hồ Chí
                                Minh
                              </span>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="col img-info-representative">
                          <Link to={"/duan-chitiet"}>
                            <img
                              className="img-swiper"
                              src={images3}
                              alt=""
                            ></img>
                            <div className="if">
                              <span>
                                Thuê người giúp việc nhà tại Gò Vấp, Tp. Hồ Chí
                                Minh
                              </span>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="col img-info-representative">
                          <Link to={"/duan-chitiet"}>
                            <img
                              className="img-swiper"
                              src={images1}
                              alt=""
                            ></img>
                            <div className="if">
                              <span>
                                Thuê người giúp việc nhà tại Gò Vấp, Tp. Hồ Chí
                                Minh
                              </span>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="col img-info-representative">
                          <Link to={"/duan-chitiet"}>
                            <img
                              className="img-swiper"
                              src={images2}
                              alt=""
                            ></img>
                            <div className="if">
                              <span>
                                Thuê người giúp việc nhà tại Gò Vấp, Tp. Hồ Chí
                                Minh
                              </span>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <div className="col img-info-representative">
                          <Link to={"/duan-chitiet"}>
                            <img
                              className="img-swiper"
                              src={images3}
                              alt=""
                            ></img>
                            <div className="if">
                              <span>
                                Thuê người giúp việc nhà tại Gò Vấp, Tp. Hồ Chí
                                Minh
                              </span>
                            </div>
                          </Link>
                        </div>
                      </SwiperSlide>
                    </Swiper>
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
