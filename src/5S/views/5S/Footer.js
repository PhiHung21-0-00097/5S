import React, { Component } from "react";
import logo from "../../src/assets/images/logo-header.png";

import { Link } from "react-router-dom";

import "../styles/Footer.scss";
export default class Footer extends React.Component {
  render() {
    // const toTop = document.querySelector("#myBtn");
    // window.addEventListener("scroll", () => {
    //   if (window.pageYOffset > 100) {
    //     toTop.classList.add("active");
    //   } else {
    //     toTop.classList.remove("active");
    //   }
    // });
    // $(document).ready(function () {
    //   // NUMBER ROW'
    //   heightproduceservice = $(".product-service").height();
    //   console.log(heightproduceservice);
    //   $("html").css("--heightproduceservice", heightproduceservice + "px");
    //   // SCROLLTOP
    //   $(document).ready(function () {
    //     const scrollTop = $(".scroll-to-top");

    //     scrollTop.click(function () {
    //       $("html, body").animate(
    //         {
    //           scrollTop: 0,
    //         },
    //         800
    //       );
    //       return false;
    //     });

    //     $(window).scroll(function () {
    //       const scrollToTopButton = $(".scroll-to-top");
    //       const scrollPosition = $(window).scrollTop();

    //       if ($(window).width() >= 1023.5) {
    //         if (scrollPosition > 90) {
    //           scrollToTopButton.addClass("scroll-ani");
    //         } else {
    //           scrollToTopButton.removeClass("scroll-ani");
    //         }
    //       } else {
    //         if (scrollPosition > 200) {
    //           scrollToTopButton.addClass("scroll-ani");
    //         } else {
    //           scrollToTopButton.removeClass("scroll-ani");
    //         }
    //       }
    //     });
    //   });
    // });
    return (
      // <IntlProvider
      // locale={lagnuage}
      //  messages={messages[lagnuage]}
      //  defaultLocale="vi">
      //   {children}
      //   </IntlProvider>
      <footer className="footer">
        <div className="container">
          <div className="row row-container">
            <div className="row row-top-footer">
              <div className="col-top-left col-xl-6 col-md-12 col-sm-12">
                <div className="row row-title">
                  <h3>ĐĂNG KÝ NGAY ĐỂ NHẬN TIN TỪ LÀM SẠCH 5S</h3>
                </div>
                <div className="row row-text">
                  <span>Hãy Để Lại Số Điện Thoại Để Được Tư Vấn </span>
                </div>
              </div>
              <div className="col-top-right col-xl-6 col-md-12 col-sm-12">
                <form action="" className="">
                  <div className="row justify-content-end">
                    <div className="ip-text col-xl-5 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Nhập Họ Và Tên Của Bạn"
                      ></input>
                    </div>
                    <div className="ip-text col-xl-5 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Nhập Số điện thoại Của Bạn"
                      ></input>
                    </div>
                    <div className="btn-dangky col-xl-2 col-md-12 col-sm-12">
                      <button className=" footer-btn">
                        <a href="google.com">ĐĂNG KÝ</a>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row row-body">
              <div className="col-body-left col-xl-3 col-md-12 col-sm-12 pt-4 text-center">
                <a href="trangchu">
                  <Link>
                    <img className="body-img" src={logo} alt=""></img>
                  </Link>
                </a>
                <ul className="col text-center">
                  <li>
                    <a href="google.com">
                      Pellentesque non dolor vitae lacus fringilla consequat vel
                      quis enim. Cras venenatis mollis neque in fringilla. In
                      vitae
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-info col-xl-4 col-md-4 col-sm-12 pt-4">
                <h4>Thông Tin Liên Hệ</h4>
                <ul>
                  <li>
                    <a href="https://www.google.com/maps/place/V%E1%BB%87+Sinh+L%C3%A0m+S%E1%BA%A1ch+5s/@21.0345626,105.8123056,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab45e445a555:0xedb67d73b0d429bc!8m2!3d21.0345626!4d105.8148805!16s%2Fg%2F11h7d7dw4l?hl=vi-VN&entry=ttu">
                      Địa Chỉ Công Ty: Quận Lê Châu, Thành Phố Hải Phòng
                    </a>
                  </li>
                  <li>
                    <a href=""> Email: lamsach5s@gmail.com</a>
                  </li>
                  <li>
                    <a href="">Số Điện Thoại: 0911 874 318</a>
                  </li>
                  <li>
                    <a href="trangchu">Website: lamsach5s.com</a>
                  </li>
                </ul>
              </div>

              <div className="col-info  col-xl-2 col-md-4 col-sm-12 pt-4">
                <h4>Chính Sách</h4>
                <ul>
                  <li>
                    <a href="google.com"> Quy định đăng tin</a>
                  </li>
                  <li>
                    <a href="google.com"> Điều khoản thỏa thuận</a>
                  </li>
                  <li>
                    <a href="google.com"> Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="google.com"> Góp ý báo lỗi</a>
                  </li>
                </ul>
              </div>

              <div className="col-info col-xl-3 col-md-4 col-sm-12 pt-4">
                <h4>KẾT NỐI CHÚNG TÔI</h4>
                <div className="footer-link">
                  <a
                    href="https://twitter.com/?lang=vi"
                    className=" icons-footer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/congtyiweb"
                    className=" icons-footer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className=" icons-footer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className=" icons-footer"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row row-footer-end align-items-center justify-content-center">
              <div className="col col-12 text-center">
                <p className="title-end">
                  Copyright © 2023 LÀM SẠCH 5S. All rights reserved. Design by
                  i-web.vn
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="scroll-to-top fa-solid fa-caret-up"
          id="myBtn"
          onclick="topFunction()"
        ></button>
      </footer>
    );
  }
}
