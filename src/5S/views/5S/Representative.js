import images1 from "../../src/assets/images/news/div.blog-img16mar.png";
import images2 from "../../src/assets/images/news/div.blog-img17mar.png";
import images3 from "../../src/assets/images/news/div.blog-img18mar.png";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
const Representative = () => {
  return (
    <>
      <section className="representative">
        <div className="container">
          <div className="row row-slide-container text-center align-items-center justify-content-center">
            <div className="row-top-news text-center mt-5 mb-5">
              <div className="col col-top-title text-center">
                <span className="title-span">DỰ ÁN TIÊU BIỂU</span>
                <span className="text-span">
                  Explore the wide selection of new, limited products
                  <Link to={"/duan"}>
                    <span className="check-all">Xem tất cả </span>
                    <span className="i-62">&#62;</span>
                  </Link>
                </span>
              </div>
            </div>
            <div className="row row-body mb-5">
              <div className="col">
                <Swiper
                  slidesPerView={3}
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
                        <img className="img-swiper" src={images1} alt=""></img>
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to={"/duan-chitiet"}>
                      <img className="img-swiper" src={images2} alt=""></img>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to={"/duan-chitiet"}>
                      <img className="img-swiper" src={images3} alt=""></img>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to={"/duan-chitiet"}>
                      <img className="img-swiper" src={images1} alt=""></img>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to={"/duan-chitiet"}>
                      <img className="img-swiper" src={images2} alt=""></img>
                    </Link>
                  </SwiperSlide>
                  <SwiperSlide>
                    <Link to={"/duan-chitiet"}>
                      <img className="img-swiper" src={images3} alt=""></img>
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Representative;
