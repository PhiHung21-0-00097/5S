import React from "react";

import logoCeo from "../../src/assets/images/partner/partner-CEOdenho.png";
import sao from "../../src/assets/images/partner/Stars.png";
import rightbody1 from "../../src/assets/images/partner/truongvinhky.png";
import rightbody2 from "../../src/assets/images/partner/denhovn.png";
import rightbody3 from "../../src/assets/images/partner/nguyengiasaigon.png";
import rightbody4 from "../../src/assets/images/partner/belevn.png";
import rightbody5 from "../../src/assets/images/partner/iweb.png";
import rightbody6 from "../../src/assets/images/partner/3tsport.png";
import rightbody7 from "../../src/assets/images/partner/cuongdung.png";
import rightbody8 from "../../src/assets/images/partner/tb.png";
const Partner = () => {
  return (
    <>
      <section className="partner mt-5">
        <div className="container">
          <div className="row row-container">
            <div className="col col-container">
              <div className="row row-top-partner text-center">
                <div className="col col-xl-12 col-md-12 col-sm-12 col-title ">
                  <h3 className="title-top">ĐỐI TÁC KHÁCH HÀNG</h3>
                  <p className="partner-span">
                    Cung cấp dịch vụ làm sạch, mang đến cho khách hàng một môi
                    trường không gian sạch sẽ, đảm bảo sức khoẻ: không còn bụi
                    và vết bẩn, không còn mùi hôi, không còn vi khuẩn gây bệnh
                  </p>
                </div>
              </div>

              <div className="row row-body-partner mt-5 text-center align-items-center justify-content-center">
                <div className="col col-body-left col-xl-4 col-md-6 col-sm-12 text-center align-items-center justiy-content-center">
                  <div class="row text-center align-items-center justiy-content-center">
                    <div className="card-partner text-center align-items-center justiy-content-center">
                      <div className="card_img">
                        <img className="ceo" src={logoCeo} alt=""></img>
                      </div>
                      <h4>ANH THANH</h4>
                      <p className="ceo">( CEO Denho.vn )</p>
                      <img
                        src={sao}
                        alt=""
                        className="img-body-partner img-fluid text-center"
                      ></img>
                      <span className="title-span">
                        Đây là lần thứ 5 tôi sử dụng dịch vụ của Làm Sạch 5S cho
                        các phòng Karaoke tôi quản lý. Tôi chọn Làm Sạch 5S vì
                        các máy móc, thiết bị cũng như nhân lực ở đây đáp ứng
                        hoàn hảo với yêu cầu của tôi đưa ra.
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" col col-header-right col-xl-8 col-md-12 col-sm-12 ">
                  <div className="row row-partner-right">
                    <div className="row row-on">
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://truongvinhky.edu.vn/">
                          <img src={rightbody1} alt=""></img>
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://www.facebook.com/Animo.nexu/?locale=vi_VN">
                          <img src={rightbody2} alt=""></img>
                        </a>
                      </div>{" "}
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjK_a-1xdaBAxXfsFYBHasmAJMQFnoECA4QAQ&url=https%3A%2F%2Fnguyengiasaigon.vn%2F&usg=AOvVaw1704doz-k1iEhbltFu0xrT&opi=89978449">
                          <img src={rightbody3} alt=""></img>
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://bele.vn/">
                          <img src={rightbody4} alt=""></img>
                        </a>
                      </div>
                    </div>

                    <div className="row row-bottom">
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiw79LExdaBAxVIsFYBHfITBjMQFnoECBQQAQ&url=https%3A%2F%2Fi-web.vn%2F&usg=AOvVaw3X-2Tp3gB4pLDEq2_Y5UHT&opi=89978449">
                          <img src={rightbody5} alt=""></img>
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://3tsport.vn/">
                          <img src={rightbody6} alt=""></img>
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiDhZLqxdaBAxVUBYgKHbFBAWsQFnoECBEQAQ&url=https%3A%2F%2Fcuongdung.com.vn%2F&usg=AOvVaw2-CPG_pS-bg0it4IVuXqRV&opi=89978449">
                          <img src={rightbody7} alt=""></img>
                        </a>
                      </div>
                      <div className="col-md-3 col-sm-3 col-img ">
                        <a href="">
                          <img src={rightbody8} alt=""></img>
                        </a>
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

export default Partner;
