import React, { Component } from "react";

import "./styles/DetailedProject.scss";

export default class DetailedProject extends React.Component {
  render() {
    return (
      <>
        <section className="detailednews mt-5 mb-5">
          <div className="container">
            <div className="row row-title">
              <div className="col col-body">
                <div className="row title p-10">
                  <h3>CHI TIẾT DỰ ÁN</h3>
                  <h5 className="">'' luôn đồng hành cùng bạn ''</h5>
                </div>
                <div className="row row-body text-center">
                  <div className="row title">
                    <h4>
                      Thuê người giúp việc nhà tại Gò Vấp - Tp. Hồ Chí Minh.
                    </h4>
                  </div>
                  <div className="row row-text text-start">
                    <div className="col">
                      <span>
                        Việc ưu tiên phục vụ khách hàng vẫn luôn là tôn chỉ hàng
                        đầu của mọi doanh nghiệp, đặc biệt với những ngành như
                        khách sạn, giải trí, dịch vụ, nhà hàng,... khách hàng có
                        thể tới vào bất kì thời điểm nào trong ngày, trong tuần.
                        Người lao động, bất kể ngày lễ, sẽ phải thao tác cho kịp
                        tiến độ, giải quyết những lỗi sai trong quá trình làm
                        việc… và chắc chắn áp lực trong công việc là điều khó
                        tránh khỏi. Do vậy, nhân viên LĐPT cần có tâm lý vững
                        vàng, bình tĩnh xử lý những tình huống bất ngờ hay ngoài
                        giờ làm việc.<br></br>
                        Với Lamsach5s, mọi thứ thật đơn giản, văn phòng của
                        khách hàng phải “SẠCH”, không có ngoại lệ.
                      </span>
                      <div className="">
                        <img
                          className=""
                          src="https://image-us.eva.vn/upload/2-2023/images/2023-05-13/gia-dinh-thue-giup-viec-voi-muc-luong-470-trieuthang-phai-quy-goi-phuc-vu-chu-nhu-nguoi-hau-thoi-xua-5-1683992714-172-width626height417.jpg"
                          alt=""
                        ></img>
                      </div>

                      <span>
                        Đây là yếu tố tiên quyết khi tuyển dụng LĐPT. Các công
                        việc lao động phổ thông đều không quá khó nhưng đòi hỏi
                        người làm phải cần cù, siêng năng. Về lâu dài, người làm
                        cần thành thạo công việc, có thể hoàn thành nhiệm vụ
                        nhanh chóng, chính xác, tạo ra nhiều giá trị hơn cho
                        doanh nghiệp và nâng cao thu nhập theo năng suất, sự gắn
                        bó cống hiến cho thành công chung của tổ chức.<br></br>
                        Lần tới khi bạn bước chân vào văn phòng của mình, bạn
                        hãy tự hỏi: Văn phòng này có sạch chưa? Nếu chưa hãy gọi
                        chúng tôi Lamsach5s, chúng tôi sẽ làm điều đó cho bạn
                        theo cách đơn giản nhất.
                      </span>

                      <div className="">
                        <img
                          src="https://dichvugiupviechoanmy.com/upload/elfinder/9-tieu-chi-khi-thue-dich-vu-giup-viec-nha-HOAN-MY.jpg"
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
