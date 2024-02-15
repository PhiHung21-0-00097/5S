import React, { Component } from "react";
import sp3 from "../../assets/images/project/hut-bui.png";
import "./styles/DetailedProduct.scss";
import sp1 from "../../assets/images/project/cha-san.png";
export default class DetailedProduct extends React.Component {
  render() {
    return (
      <>
        <section className="detailedproduct mt-5 mb-5">
          <div className="container">
            <div className="row row-title">
              <div className="col col-body">
                <div className="row title-Detailedproduct p-10">
                  <h3>SẢN PHẨM CHI TIẾT</h3>
                </div>
                <div className="row row-body ">
                  <div className="row">
                    <div className="col col-xl-7 col-md-7 col-sm-12 col-left">
                      <div className="row">
                        <div className="col col-9">
                          <img
                            className="img-body img-thumbnail"
                            src={sp1}
                          ></img>
                        </div>
                        <div className="col-2">
                          <div className="row pt-1">
                            <img className="img-thumbnail" src={sp1}></img>
                          </div>
                          <div className="row pt-1">
                            <img className="img-thumbnail" src={sp1}></img>
                          </div>
                          <div className="row pt-1">
                            <img className="img-thumbnail" src={sp1}></img>
                          </div>
                          <div className="row pt-1">
                            <img className="img-thumbnail" src={sp1}></img>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col col col-right">
                      <div className="row product-top p-2">
                        <h2 className="title-head">
                          Sữa tẩy tế bào da chết Vedette Hương Hoa Anh Đào 50ml
                        </h2>
                        <div className="special-price">
                          <span className="price product-price">43.000₫</span>
                        </div>
                        <div classNameName="row row-list-info">
                          <p></p>
                          <p>
                            • Làm mềm và loại bỏ lớp tế bào da cũ
                            <br></br>• Giúp da tươi sáng, ẩm mịn sau mỗi lần
                            dùng
                            <br></br>• Dịu nhẹ và thư giãn
                            <br></br>• Bước đệm để dưỡng da tốt hơn
                          </p>
                        </div>
                        <div classNameName="row">
                          <div className="custom custom-btn-numbers form-control">
                            <button
                              onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN(qty) &amp; qty > 1 ) result.value--;return false;"
                              className="btn-minus btn-cts"
                              type="button"
                              fdprocessedid="7owbdo"
                            >
                              –
                            </button>
                            <input
                              type="text"
                              className="qty input-text"
                              id="qty"
                              name="quantity"
                              size="4"
                              value="1"
                              maxlength="3"
                              fdprocessedid="qk2qso"
                            ></input>

                            <button
                              //   onclick={var result = document.getElementById("qty");
                              //   var qty = result.value;
                              //   if (!isNaN(qty)) result.value++;
                              // return false;}
                              className="btn-plus btn-cts"
                              type="button"
                              fdprocessedid="bf5dri"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div class="row btn-mua pt-4">
                          <div className="col">
                            <button
                              type="submit"
                              data-role="addtocart"
                              className="btn btn-lg btn-gray btn-cart btn_buy add_to_cart"
                              fdprocessedid="md1dc7"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 576 512"
                              >
                                <path
                                  fill="white"
                                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                                />
                              </svg>
                              <span class="txt-main">Thêm vào giỏ hàng </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row text-center pt-5">
                    <div className="row row-title">
                      <h2>Mô tả</h2>
                    </div>
                    <div className="row row-if text-start">
                      <div className="col col-lg-6 col-md-12 col-sm-12 col-left">
                        <h2></h2>
                        <span>
                          <p>
                            Công thức dạng kem chứa hỗn hợp vỏ hạt tự nhiên từ
                            hạt hạt nhân, óc chó và hạt đào được mài mịn. Vỏ hạt
                            tự nhiên lăn tròn khi mát-xa da mặt, làm mềm và bong
                            lớp da chết. <br></br>Da sáng ẩm và mềm mịn ngay sau
                            khi dùng. Dùng thường xuyên để ngăn ngừa mụn ẩn, da
                            thô ráp, không đều màu. Không chứa: Paraben, Dầu
                            Khoáng, Silicone, Alcohol, Hạt Vi Nhựa
                          </p>
                        </span>
                      </div>
                      <div className="col col-bottom-right">
                        <h2></h2>
                        <span>
                          <p>
                            Công thức dạng kem chứa hỗn hợp vỏ hạt tự nhiên từ
                            hạt hạt nhân, óc chó và hạt đào được mài mịn. Vỏ hạt
                            tự nhiên lăn tròn khi mát-xa da mặt, làm mềm và bong
                            lớp da chết.<br></br> Da sáng ẩm và mềm mịn ngay sau
                            khi dùng. Dùng thường xuyên để ngăn ngừa mụn ẩn, da
                            thô ráp, không đều màu. Không chứa: Paraben, Dầu
                            Khoáng, Silicone, Alcohol, Hạt Vi Nhựa
                          </p>
                        </span>
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
