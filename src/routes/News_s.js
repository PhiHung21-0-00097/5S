import React from "react";
import { Link } from "react-router-dom";
import "./styles/News_s.scss";
import Footer from "../views/Footer";
import Header from "../views/Header";

class News_s extends React.Component {
  render() {
    return (
      <>
        <section className="news_s mt-5 mb-5">
          <div className="container">
            {/* <div className="row row-bottom-newss">
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

              */}

            <div className="row row-body">
              <div className="col col-body">
                <div className="row-body-title p-10">
                  <h3>TIN TỨC MỚI NHẤT</h3>
                </div>
                <div className="row-body">
                  <Link to={"/tintuc-chitiet"}>
                    <div className="row p-1 row-card">
                      <div className="col col-5 col-left-card">
                        <img
                          src="https://lamsach5s.vn/wp-content/uploads/k2.webp"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col col-right-card align-items-center justify-content-center">
                        <div className="row p-3  align-items-center justify-content-center">
                          <span>5/10/2023</span>
                          <h3 className="text">
                            CÁC CÔNG DỤNG LÀM SẠCH ĐỒ DÙNG VĂN PHÒNG CỦA KEM
                            ĐÁNH RĂNG
                          </h3>
                          <p>
                            Kem đánh răng là một món đồ sinh hoạt thiết yếu
                            không thể thiếu trong đời sống. Nhưng không chỉ giúp
                            bảo vệ cho hàm răng luôn trắng đẹp, kem đánh răng
                            cũng có những hữu ích khác không thể ngờ đến ví dụ
                            như làm sạch các đồ dùng, thiết bị…Sau đây là một số
                            công dụng làm sạch đồ dùng văn phòng của kem đánh
                            răng mà các bạn có thể tham khảo để giữ cho đồ dùng
                            luôn sạch sẽ, sáng bóng.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/tintuc-chitiet"}>
                    <div className="row p-1 row-card">
                      <div className="col col-5 col-left-card">
                        <img
                          src="https://lamsach5s.vn/wp-content/uploads/thuy-sy-thi-truong-lao-dong-khung-hoang-vi-gioi-tre-thich-nhay-viec-20230402092227.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col col-right-card align-items-center justify-content-center">
                        <div className="row p-3  align-items-center justify-content-center">
                          <span>5/10/2023</span>
                          <h3 className="text">
                            VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                          </h3>
                          <p>
                            Nghỉ việc là tình trạng không còn mấy xa lạ với các
                            nhà tuyển dụng, những hành động thay đổi liên tục
                            công việc đặc biệt hay xảy ra với thế hệ trẻ hay còn
                            gọi là gen Z. Khác với số đông yêu thích công việc
                            ổn định, nhiều bạn trẻ xem hình thức “nhảy việc” là
                            cơ hội để trải nghiệm, học hỏi nhiều hơn. Những môi
                            trường mới cho họ những kiến thức mới và việc liên
                            tục thay đổi sẽ bớt chán khi đã theo guồng làm việc
                            cũ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/tintuc-chitiet"}>
                    <div className="row p-1 row-card">
                      <div className="col col-5 col-left-card">
                        <img
                          src="https://lamsach5s.vn/wp-content/uploads/c11.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col col-right-card align-items-center justify-content-center">
                        <div className="row p-3  align-items-center justify-content-center">
                          <span>5/10/2023</span>
                          <h3 className="text">
                            CÔNG DỤNG CỦA KẸP GIẤY VÀ GHIM KẸP GIẤY BẠN NÊN BIẾT
                          </h3>
                          <p>
                            Kẹp giấy là một phát minh cực tiện ích trong công
                            việc văn phòng và học tập. Kẹp không chỉ giúp chúng
                            ta cố định tài liệu, giấy tờ một cách gọn gàng và
                            ngăn nắp mà còn rất nhiều điều hữu dụng khác không
                            ngờ đến mà ta có thể làm. Vậy các công dụng đó là
                            gì? Hãy cùng Lamsach5s tìm hiểu ngay những mẹo này
                            nhé.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to={"/tintuc-chitiet"}>
                    <div className="row p-1 row-card">
                      <div className="col col-5 col-left-card">
                        <img
                          src="https://lamsach5s.vn/wp-content/uploads/pha-nuoc-chanh-muoi-va-nhung-dieu-can-biet-1-1024x576.jpg"
                          alt=""
                          className="img-fluid"
                        ></img>
                      </div>
                      <div className="col col-right-card align-items-center justify-content-center">
                        <div className="row p-3  align-items-center justify-content-center">
                          <span>5/10/2023</span>
                          <h3 className="text">
                            MẸO LÀM SÁNG BẠC TỪ NHỮNG NGUYÊN LIỆU DỄ KIẾM TẠI
                            NHÀ
                          </h3>
                          <p>
                            Các loại trang sức từ vòng cổ, lắc tay lắc chân tới
                            nhẫn…với chi tiết nhỏ hay cầu kỳ, gắn đá quý, ngọc
                            trai, san hô… bằng bạc có nhiều cách đánh sáng khác
                            nhau. Dù bạn mua sản phẩm ở đâu, giá thành cao đi
                            chăng nữa sau một thời gian sử dụng nhất định, tùy
                            vào cơ địa mỗi người mà bạc sẽ có dấu hiệu xỉn màu.
                            Đừng lo lắng, hôm nay Lamsach5s sẽ mách bạn những
                            mẹo làm sáng bạc tại nhà cực kỳ đơn giản từ các
                            nguyên liệu ở bếp
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default News_s;
