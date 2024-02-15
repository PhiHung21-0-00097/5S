import React from "react";
import images1 from "../../src/assets/images/news/div.blog-img16mar.png";
import pre from "../../src/assets/images/product/previous.png";
import arow_box from "../../src/assets/svg/introduce/box-arrow-up-right.svg";
import next from "../../src/assets/images/product/next.png";
import "../styles/Product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Producet = () => {
  return (
    <>
      <section className="product pt-5">
        <div className="container">
          <div className="row row-container">
            <div className="col col-container ">
              <div className="row row-top-product">
                <div className="col col-xl-12 col-md-12 col-sm-12">
                  <div className="row form-product-header">
                    <div className="title-form-product ">
                      <div className="title-header">SẢN PHẨM NỔI BẬT</div>
                    </div>
                    <div className="title-right-form-product p-relative f1"></div>
                  </div>
                </div>
              </div>
              <div className="row product-form owl-themes owl-loaded owl-drag">
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
                    <div className="product-items">
                      <div className="card-product">
                        <Link to={"/lienhe"} className=" img-product-items">
                          <img src={images1} alt="" className="i-pf"></img>
                        </Link>
                      </div>
                      <div className="service-content text-center mt-3">
                        <h1 className="service-header text-center">
                          Máy phun xịt rửa Bosch AQT 45-14
                        </h1>

                        <div className="row button-product d-flex align-items-center mt-4">
                          <div className="col col-12">
                            <Link to={"/lienhe"} className="link">
                              <img
                                src={arow_box}
                                alt=""
                                className="img-btn"
                              ></img>
                              <span> LIÊN HỆ NGAY</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="product-items">
                      <div className="card-product">
                        <Link to={"/lienhe"} className=" img-product-items">
                          <img src={images1} alt="" className="i-pf"></img>
                        </Link>
                      </div>
                      <div className="service-content text-center mt-3">
                        <h1 className="service-header text-center">
                          Máy phun xịt rửa Bosch AQT 45-14
                        </h1>

                        <div className="row button-product d-flex align-items-center mt-4">
                          <div className="col col-12">
                            <Link to={"/lienhe"} className="link">
                              <img
                                src={arow_box}
                                alt=""
                                className="img-btn"
                              ></img>
                              <span> LIÊN HỆ NGAY</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="product-items">
                      <div className="card-product">
                        <Link to={"/lienhe"} className=" img-product-items">
                          <img src={images1} alt="" className="i-pf"></img>
                        </Link>
                      </div>
                      <div className="service-content text-center mt-3">
                        <h1 className="service-header text-center">
                          Máy phun xịt rửa Bosch AQT 45-14
                        </h1>

                        <div className="row button-product d-flex align-items-center mt-4">
                          <div className="col col-12">
                            <Link to={"/lienhe"} className="link">
                              <img
                                src={arow_box}
                                alt=""
                                className="img-btn"
                              ></img>
                              <span> LIÊN HỆ NGAY</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="product-items">
                      <div className="card-product">
                        <Link to={"/lienhe"} className=" img-product-items">
                          <img src={images1} alt="" className="i-pf"></img>
                        </Link>
                      </div>
                      <div className="service-content text-center mt-3">
                        <h1 className="service-header text-center">
                          Máy phun xịt rửa Bosch AQT 45-14
                        </h1>

                        <div className="row button-product d-flex align-items-center mt-4">
                          <div className="col col-12">
                            <Link to={"/lienhe"} className="link">
                              <img
                                src={arow_box}
                                alt=""
                                className="img-btn"
                              ></img>
                              <span> LIÊN HỆ NGAY</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="product-items">
                      <div className="card-product">
                        <Link to={"/lienhe"} className=" img-product-items">
                          <img src={images1} alt="" className="i-pf"></img>
                        </Link>
                      </div>
                      <div className="service-content text-center mt-3">
                        <h1 className="service-header text-center">
                          Máy phun xịt rửa Bosch AQT 45-14
                        </h1>

                        <div className="row button-product d-flex align-items-center mt-4">
                          <div className="col col-12">
                            <Link to={"/lienhe"} className="link">
                              <img
                                src={arow_box}
                                alt=""
                                className="img-btn"
                              ></img>
                              <span> LIÊN HỆ NGAY</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="owl-nav disabled">
                  <button type="button" className="swiper-button-prev"></button>
                  <button type="button" className="swiper-button-next"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producet;
