import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./styles/DetailedNews.scss";

class DetailedNews extends React.Component {
  render() {
    return (
      <>
        <section className="detailednews mt-5 mb-5">
          <div className="container">
            <div className="row row-title">
              <div className="col col-body">
                <div className="row title p-10">
                  <h3>TIN TỨC</h3>
                  <h5 className="">'' Nơi nói không với chất dơ ''</h5>
                </div>
                <div className="row row-body text-center">
                  <div className="row title">
                    <h4>có nên thuê dịch vụ vệ sinh văn phòng</h4>
                  </div>
                  <div className="row row-text text-start">
                    <div className="col">
                      <span>
                        Khi bạn bước chân vào một tòa nhà, một văn phòng. Các
                        giác quan của bạn sẽ tự động đánh giá văn phòng này có
                        “SẠCH” hay “KHÔNG SẠCH”. Nếu “SẠCH”, đó sẽ là sự hài
                        lòng và dễ chịu. Nếu “KHÔNG SẠCH” sự khó chịu sẽ bắt đầu
                        cho cả bạn, nhân viên và đối tác của bạn.<br></br>
                        Với Lamsach5s, mọi thứ thật đơn giản, văn phòng của
                        khách hàng phải “SẠCH”, không có ngoại lệ.
                      </span>
                      <div className="">
                        {" "}
                        <img
                          className="img-first"
                          src="https://lamsach5s.vn/wp-content/uploads/IMG_1028-1024x683.jpg"
                          alt=""
                        ></img>
                      </div>

                      <span>
                        Khách hàng của bạn kỳ vọng điều đó, nhân viên của bạn
                        khao khát điều đó và chúng tôi có đủ kinh nghiệm và
                        nguồn lực để điều đó xảy ra.<br></br>
                        Lần tới khi bạn bước chân vào văn phòng của mình, bạn
                        hãy tự hỏi: Văn phòng này có sạch chưa? Nếu chưa hãy gọi
                        chúng tôi Lamsach5s, chúng tôi sẽ làm điều đó cho bạn
                        theo cách đơn giản nhất.
                      </span>

                      <div className="img-after">
                        <img
                          src="https://lamsach5s.vn/wp-content/uploads/IMG_1048-1024x683.jpg"
                          alt=""
                        ></img>
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
  }
}
export default DetailedNews;
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
