import React from "react";
import eclip_body from "../../src/assets/images/category/eclip-category.png";
import sp1 from "../../src/assets/images/category/category-img1.png";
import sp2 from "../../src/assets/images/category/category-img-2.png";
import sp3 from "../../src/assets/images/category/category-img-3.png";
import sp4 from "../../src/assets/images/category/category-img-4.png";
import sp5 from "../../src/assets/images/category/category-img-5.png";

import { Link } from "react-router-dom";
const Categoty = () => {
  return (
    <>
      <section className="category pt-5 pb-5">
        <div className="container">
          <div className="row row-container pt-4">
            <div className="col col-contaner">
              <div className="row row-title-category text-center align-items-center justify-content-center">
                <div className="col-xl-7 col-md-9 col-sm-auto col-title-category text-center align-items-center justify-content-center">
                  <span className="title-all text-center align-items-center justify-content-center">
                    <span className="ls">DOANH MỤC SẢN PHẨM</span>
                    <div className="line-hr"></div>
                  </span>
                  <span className="category-span">
                    Cung cấp dịch vụ làm sạch, mang đến cho khách hàng một môi
                    trường không gian sạch sẽ, đảm bảo sức khoẻ: không còn bụi
                    và vết bẩn, không còn mùi hôi, không còn vi khuẩn gây bệnh
                  </span>
                </div>
              </div>
              <div className="row row-body-category mt-5 text-center align-items-center justify-content-center">
                <div className="col text-center align-items-center justify-content-center">
                  <div className="row text-center align-items-center justify-content-center">
                    <div className="col-xl col-md-4 col-sm-12 mt-3">
                      <div className="card-body-category">
                        <img className="eclip" alt="" src={eclip_body}></img>
                        <img
                          className="sp-in"
                          alt=""
                          src={sp1}
                          width="180"
                        ></img>
                        <div className="button-introduce">
                          <Link className="link" to={"/sanpham-chitiet"}>
                            MÁY HÚT BỤI, HÚT NƯỚC, MÁY HÚT BỤI, HÚT NƯỚC, MÁY
                            HÚT BỤI, HÚT NƯỚCHÚT NƯỚCMÁY HÚT BỤI, HÚT NƯỚC
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl col-md-4 col-sm-12 mt-3">
                      <div className="card-body-category">
                        <img className="eclip" alt="" src={eclip_body}></img>
                        <img
                          className="sp-in"
                          alt=""
                          src={sp3}
                          width="180"
                        ></img>
                        <div className="button-introduce">
                          <Link className="link" to={"/sanpham-chitiet"}>
                            MÁY HÚT BỤI, HÚT NƯỚC
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl col-md-4 col-sm-12 mt-3">
                      <div className="card-body-category">
                        <img className="eclip" alt="" src={eclip_body}></img>
                        <img
                          className="sp-in"
                          alt=""
                          src={sp3}
                          width="180"
                        ></img>
                        <div className="button-introduce">
                          <Link className="link" to={"/sanpham-chitiet"}>
                            MÁY HÚT BỤI, HÚT NƯỚC
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl col-md-4 col-sm-12 mt-3">
                      <div className="card-body-category">
                        <img className="eclip" alt="" src={eclip_body}></img>
                        <img
                          className="sp-in"
                          alt=""
                          src={sp3}
                          width="180"
                        ></img>
                        <div className="button-introduce">
                          <Link className="link" to={"/sanpham-chitiet"}>
                            MÁY HÚT BỤI, HÚT NƯỚC
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl col-md-4 col-sm-12 mt-3">
                      <div className="card-body-category">
                        <img className="eclip" alt="" src={eclip_body}></img>
                        <img
                          className="sp-in"
                          alt=""
                          src={sp1}
                          width="180"
                        ></img>
                        <div className="button-introduce">
                          <Link className="link" to={"/sanpham-chitiet"}>
                            MÁY HÚT BỤI, HÚT NƯỚC
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categoty;
