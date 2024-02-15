import React, { Component } from "react";
import Footer from "../views/Footer";
import Header from "../views/Header";
import "./styles/Recruitment_s.scss";
import { Link } from "react-router-dom";
export default class Recruitment extends React.Component {
  render() {
    return (
      <>
        <sectione className="recruitment_s">
          <div className="container">
            <div className="row row-top pt-5 pb-5">
              <div className="col col-top">
                <div className="row row-top-title p-10">
                  <h3>tuyển dụng</h3>
                </div>
                <div className="row row-body">
                  <div className="row row-top">
                    <div className="row row-title">
                      <div className="row">
                        <div className="col col-vitri">
                          <span>
                            <h4>cấp quản lý</h4>
                          </span>
                          <div className="row row-vitri">
                            <div className="col col-xl-6 col-md-6 col-sm-12">
                              <Link to={"/tuyendung-chitiet"}>
                                <h5>Phó Giám đốc kho</h5>
                              </Link>
                              <p></p>
                              <p>
                                Khu vực: Tp.HCM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số
                                lượng: 1
                              </p>
                              <p>
                                Thời gian tiếp nhận hồ sơ: Đến ngày 02/11/2023
                              </p>
                            </div>

                            <div className="col  col-xl-6 col-md-6 col-sm-12">
                              <Link to={"/tuyendung-chitiet"}>
                                <h5>Giám đốc quản lí đôi ngũ</h5>
                              </Link>
                              <p></p>
                              <p>
                                Khu vực: Tp.HCM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số
                                lượng: 1
                              </p>
                              <p>
                                Thời gian tiếp nhận hồ sơ: Đến ngày 02/11/2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row pt-5">
                        <div className="col col-vitri ">
                          <span>
                            <h4>cấp nhân viên</h4>
                          </span>
                          <div className="row row-vitri">
                            <div className="col  col-xl-6 col-md-6 col-sm-12">
                              <Link to={"/tuyendung-chitiet"}>
                                <h5>Nhân viên lao công</h5>
                              </Link>
                              <p></p>
                              <p>
                                Khu vực: Tp.HCM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số
                                lượng: 10
                              </p>
                              <p>
                                Thời gian tiếp nhận hồ sơ: Đến ngày 02/11/2023
                              </p>
                            </div>

                            <div className="col  col-xl-6 col-md-6 col-sm-12">
                              <Link to={"/tuyendung-chitiet"}>
                                <h5>Nhân viên nhà kính</h5>
                              </Link>
                              <p></p>
                              <p>
                                Khu vực: Tp.HCM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số
                                lượng: 20
                              </p>
                              <p>
                                Thời gian tiếp nhận hồ sơ: Đến ngày 02/11/2023
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row row-bottom pt-5">
                        <div className="col col-vitri">
                          <span>
                            <h4>HỒ SƠ DỰ TUYỂN GỬI VỀ:</h4>
                          </span>
                          <div className="row row-vitri">
                            <div className="col  col-xl-12 col-md-12 col-sm-12">
                              <p className="text">
                                Công ty TNHH làm sạch 5S – Cảm ơn Anh/Chị đã
                                quan tâm đến cơ hội nghề nghiệp tại công ty
                                chúng tôi. Ứng viên có nhu cầu ứng tuyển vui
                                lòng tải CV Mẫu “PD – Bang thong tin ung vien“,
                                tạo tiêu đề CV theo hướng dẫn: “Họ và Tên – Vị
                                trí ứng tuyển“, và gửi thông tin ứng tuyển về
                                địa chỉ email: lamsach5s@gmail.com
                              </p>
                              <p className="time">
                                Thời gian tiếp nhận hồ sơ: Đến ngày 02/11/2023
                              </p>
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
        </sectione>
      </>
    );
  }
}
