import React from "react";
class MyConponent extends React.Component {
  render() {
    return (
      <div class="row ">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            src="https://cdn.motor1.com/images/mgl/Lp2AW/s1/2021-kia-k5-first-drive.jpg"
            className="img-thumbnail "
            alt="Kia K5"
          ></img>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <img
            src="https://static.motor.es/fotos-noticias/2022/08/mg7-2023-202289156-1660815542_1.jpg"
            className="img-thumbnail "
            alt="Kia K5"
          ></img>
        </div>
      </div>
    );
  }
}
export default MyConponent;
