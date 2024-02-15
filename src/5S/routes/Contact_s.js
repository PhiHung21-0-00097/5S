import React, { Component } from "react";
import Footer from "../views/Footer";
import Header from "../views/Header";
import Slider from "../views/Slider";
import "./styles/Contact_s.scss";
import arow_box from "../assets/svg/introduce/box-arrow-up-right.svg";
export default class Contact_s extends Component {
  render() {
    return (
      <>
        <sectione className="contact_s">
          <div className="product_s ">
            <div className="container">
              <div className="row row-top pt-5 pb-5">
                <div className="col col-top">
                  <div className="row row-top-title p-10">
                    <h3>liên hệ</h3>
                  </div>
                  <div className="row row-body mt-4">
                    <div className="col col-xl-5 col-md-6 col-sm-12 col-left">
                      <div className="row p-4">
                        <div className="">
                          <h3>CÔNG TY TNHH HOA THIÊN MINH</h3>
                        </div>
                        <div className="row pt-1">
                          <div className="col col-3 img-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="40"
                              fill="currentColor"
                              className="bi bi-building"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                            </svg>
                          </div>
                          <div className="col">
                            <strong>địa chỉ</strong>
                            <p>Quận Lê Châu, Thành Phố Hải Phòng</p>
                          </div>
                        </div>
                        <div className="row pt-1">
                          <div className="col col-3 img-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="40"
                              fill="currentColor"
                              class="bi bi-telephone"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                          </div>
                          <div className="col">
                            <strong>hotline</strong>
                            <p>0911 874 318</p>
                          </div>
                        </div>
                        <div className="row pt-1">
                          <div className="col col-3 img-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="40"
                              fill="currentColor"
                              class="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                          </div>
                          <div className="col">
                            <strong>email</strong>
                            <p>lamsach5s@gmail.com</p>
                          </div>
                        </div>
                        <div className="row pt-1">
                          <div className="col col-3 img-left">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="40"
                              fill="currentColor"
                              class="bi bi-globe-americas"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z" />
                            </svg>
                          </div>
                          <div className="col">
                            <strong>website</strong>
                            <p>lamsach5s.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col-right">
                      <div className="row p-4">
                        <div className="row row-title">
                          <h2>Thông tin liên hệ</h2>
                        </div>
                        <div className="row">
                          <div className="col col-xl-6 col-md-12 col-sm-12 pt-2">
                            <input
                              type="text"
                              placeholder="Họ và tên"
                              className="form-control"
                            ></input>
                          </div>

                          <div className="col col-xl-6 col-md-12 col-sm-12 pt-2">
                            <input
                              type="text"
                              placeholder="Điện thoại"
                              className="form-control"
                            ></input>
                          </div>

                          <div className="col col-xl-6 col-md-12 col-sm-12 pt-2">
                            <input
                              type="text"
                              placeholder="Email"
                              className="form-control"
                            ></input>
                          </div>
                          <div className="col col-xl-6 col-md12  pt-2">
                            <input
                              type="text"
                              placeholder="Tiêu đề"
                              className="form-control"
                            ></input>
                          </div>
                          <div className="col col-lg-12 col-md-12 pt-2">
                            <textarea
                              className="form-control"
                              name="ctl00$mainContent$ctl01$ctl32e5dfcbd3de4bc597172154825c2a38$txt32e5dfcbd3de4bc597172154825c2a38"
                              rows="2"
                              cols="20"
                              id="ctl00_mainContent_ctl01_ctl32e5dfcbd3de4bc597172154825c2a38_txt32e5dfcbd3de4bc597172154825c2a38"
                              placeholder="Nội dung"
                            ></textarea>
                          </div>

                          <div className="btn-submit pt-2">
                            <button className="contact-btn">gửi đăng ký</button>
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
