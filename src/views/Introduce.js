import arow_box from "../../src/assets/svg/introduce/box-arrow-up-right.svg";

import con_xanh from "../../src/assets/images/introduce/i-1.png";
import con_vang from "../../src/assets/images/introduce/i-2.png";
import { Link } from "react-router-dom";
const Information = () => {
  return (
    <>
      <section className="introduce mt-5">
        <div className="container">
          <div className="row row-introduce mt-5">
            <div className="col col-introduce-left col-xl-6 col-md-12 col-sm-12">
              <div className="row align-items-center justify-content-center">
                <div className="col-in-left">
                  <p>_ About hoa thiên minh _</p>
                  <span className="title-all">
                    DỊCH VỤ DỌN VỆ SINH<span> LÀM SẠCH 5S</span>
                  </span>
                  <span className="introduce-comments">
                    LÀM SẠCH 5S, thuộc công ty TNHH Hoa Thiên Minh là một trong
                    những công ty dịch vụ vệ sinh công nghiệp và giúp việc gia
                    đình hàng đầu ở khu vực miền Bắc. LÀM SẠCH 5S cung cấp các
                    dịch vụ toàn diện về vệ sinh tổng hợp cho các Cơ quan, doanh
                    nghiệp cũng như các hộ gia đình.{" "}
                  </span>
                  <span className="introduce-comments-1  mt-5">
                    Cung cấp dịch vụ làm sạch, mang đến cho khách hàng một môi
                    trường không gian sạch sẽ, đảm bảo sức khoẻ: không còn bụi
                    và vết bẩn, không còn mùi hôi, không còn vi khuẩn gây bệnh
                  </span>
                </div>
              </div>
              <div className="row row-button-introduce mt-3">
                <div className="col-auto">
                  <div className="button-introduce">
                    <Link to={"/dichvu"}>
                      <img src={arow_box} alt="" className=""></img>
                      <span>TÌM HIỂU THÊM</span>
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="button-introduce-contact ">
                    <Link to={"/lienhe"}>LIÊN HỆ NGAY</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col introduce-left col-xl-6 col-md-12 col-sm-12 ">
              <div className="con-do">
                <h1 className="k">5k+</h1>
                <p className="kh">Khách hàng</p>
              </div>
              <div>
                <img className="con-xanh" src={con_xanh} alt="" />
              </div>
              <div>
                <img className="con-vang" src={con_vang} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Information;
