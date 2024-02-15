import React from "react";
import images1 from "../../src/assets/images/news/div.blog-img16mar.png";
import images2 from "../../src/assets/images/news/div.blog-img17mar.png";
import images3 from "../../src/assets/images/news/div.blog-img18mar.png";
import i16 from "../../src/assets/images/news/div.blog-card_wrappericon-16.png";
import i17 from "../../src/assets/images/news/div.blog-card_wrappericon-17.png";
import i18 from "../../src/assets/images/news/div.blog-card_wrappericon-18.png";
import { Link } from "react-router-dom";

class News extends React.Component {
  render() {
    return (
      <>
        <section className="news mt-5">
          <div className="container">
            <div className="row-container">
              <div className="row-top-news mt-5">
                <div className="col col-top-title text-center pt-5">
                  <span className="title-span">TIN TỨC MỚI NHẤT</span>
                  <span className="text-span">
                    Explore the wide selection of new, limited products
                    <a href="tintuc">
                      <Link to={"/tintuc"}>
                        <span className="check-all">Xem tất cả </span>
                        <span className="i-62">&#62;</span>
                      </Link>
                    </a>
                  </span>
                </div>
              </div>

              <div className="row row-body-news justify-content-between">
                <div className="col col-xl-4 col-md-6 col-sm-12">
                  <Link to={"/tintuc-chitiet"}>
                    <div className="card">
                      <img className="i-16" src={i16} alt=""></img>
                      <img
                        className=""
                        src="https://lamsach5s.vn/wp-content/uploads/thuy-sy-thi-truong-lao-dong-khung-hoang-vi-gioi-tre-thich-nhay-viec-20230402092227.jpg"
                        alt=""
                      ></img>

                      <div className="card-body">
                        <h2 className="card-title">
                          VẤN ĐỀ NHẢY VIỆC CỦA GIỚI TRẺ NGÀY NAY
                        </h2>
                        <p className="card-text">
                          Nghỉ việc là tình trạng không còn mấy xa lạ với các
                          nhà tuyển dụng, những hành động thay đổi liên tục công
                          việc đặc biệt hay xảy ra với thế hệ trẻ hay còn gọi là
                          gen Z. Khác với số đông yêu thích công việc ổn định,
                          nhiều bạn trẻ xem hình thức “nhảy việc” là cơ hội để
                          trải nghiệm, học hỏi nhiều hơn. Những môi trường mới
                          cho họ những kiến thức mới và việc liên tục thay đổi
                          sẽ bớt chán khi đã theo guồng làm việc cũ.
                        </p>
                        <a
                          href="tintuc"
                          className="card-read text-decoration-none "
                        >
                          READ MORE &rarr;
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col col-xl-4 col-md-6 col-sm-12">
                  <Link to={"/tintuc-chitiet"}>
                    <div className="card">
                      <img className="i-17" src={i17} alt=""></img>
                      <img
                        className=""
                        src="https://lamsach5s.vn/wp-content/uploads/pha-nuoc-chanh-muoi-va-nhung-dieu-can-biet-1-1024x576.jpg"
                        alt=""
                      ></img>
                      <div className="card-body">
                        <h2 className="card-title">
                          MẸO LÀM SÁNG BẠC TỪ NHỮNG NGUYÊN LIỆU DỄ KIẾM TẠI NHÀ
                        </h2>
                        <p className="card-text">
                          Các loại trang sức từ vòng cổ, lắc tay lắc chân tới
                          nhẫn…với chi tiết nhỏ hay cầu kỳ, gắn đá quý, ngọc
                          trai, san hô… bằng bạc có nhiều cách đánh sáng khác
                          nhau. Dù bạn mua sản phẩm ở đâu, giá thành cao đi
                          chăng nữa sau một thời gian sử dụng nhất định, tùy vào
                          cơ địa mỗi người mà bạc sẽ có dấu hiệu xỉn màu. Đừng
                          lo lắng, hôm nay Lamsach5s sẽ mách bạn những mẹo làm
                          sáng bạc tại nhà cực kỳ đơn giản từ các nguyên liệu ở
                          bếp
                        </p>
                        <a
                          href="tintuc"
                          className="card-read text-decoration-none "
                        >
                          READ MORE &rarr;
                        </a>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col col-xl-4 col-md-6 col-sm-12">
                  <Link to={"/tintuc-chitiet"}>
                    <div className="card">
                      <img className="i-18" src={i18} alt=""></img>
                      <img
                        className=""
                        src="https://lamsach5s.vn/wp-content/uploads/c11.jpg"
                        alt=""
                      ></img>
                      <div className="card-body">
                        <h2 className="card-title">
                          CÔNG DỤNG CỦA KẸP GIẤY VÀ GHIM KẸP GIẤY BẠN NÊN BIẾT
                        </h2>
                        <p className="card-text">
                          Kẹp giấy là một phát minh cực tiện ích trong công việc
                          văn phòng và học tập. Kẹp không chỉ giúp chúng ta cố
                          định tài liệu, giấy tờ một cách gọn gàng và ngăn nắp
                          mà còn rất nhiều điều hữu dụng khác không ngờ đến mà
                          ta có thể làm. Vậy các công dụng đó là gì? Hãy cùng
                          Lamsach5s tìm hiểu ngay những mẹo này nhé.
                        </p>
                        <a
                          href="tintuc"
                          className="card-read text-decoration-none "
                        >
                          READ MORE &rarr;
                        </a>
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

export default News;
