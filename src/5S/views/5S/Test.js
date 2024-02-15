import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Axios } from "axios";

const Test = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/info_kh")
      .then((response) => response.json())
      .then((d) => {
        setData(d);
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3001/info_kh")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <form action="">
        <div className="col">
          <img className="img-fluid" src="img/becamexlogo.jpg" alt=""></img>
        </div>
      </form>
      <div className=" mt-4 ">
        <div className="container">
          <div className="row">
            <div className="col text-center ">
              <h2 className="">THAM DỰ HỘI TRẠI 2023</h2>
              <strong>
                <hr></hr>
              </strong>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-8"></div>
            <div className="col">
              <table className="table table-bordered" id="my-tablee">
                <tr className="text-white  ">
                  <td>NV</td>
                  <td>NV tham gia</td>
                  <td>NV từ chối</td>
                </tr>

                <tr className=""></tr>
              </table>
            </div>
          </div>

          <div className="row mt-3">
            <form action="" method="post">
              <div className="row">
                <div className="col-8"></div>
                <div className="col">
                  <form action="#" method="post">
                    <input
                      type="text"
                      placeholder="Tìm kiếm theo tên NV"
                      className="form-control "
                      name="tukhoa"
                    ></input>
                    <input
                      type="submit"
                      name="timkiem"
                      id="post-query-submit"
                      className="btn "
                      value="Lọc"
                      fdprocessedid="gu3yk7d"
                    ></input>
                  </form>
                </div>
                <div className="col">
                  <form action="php/export.php" method="post">
                    <button
                      type="submit"
                      name="export"
                      className="btn btn-success"
                    >
                      <i className="bi bi-download"> Export</i>{" "}
                    </button>
                  </form>
                </div>
              </div>
            </form>
          </div>

          <div className="row mt-3">
            <table className="table table-bordered" id="my-table">
              <tr className="text-white">
                <td>ID</td>
                <td>Tên NV</td>
                <td>Lời nhắn</td>
                <td>Bình chọn</td>
                <td className="tacvu">Tác vụ</td>
              </tr>

              <tr>
                <td id="td"></td>
                <td id="td"> </td>
                <td id="td"></td>
                <td id="td"></td>
                <td id="td">
                  <a href="php/xoa.php?id=<?php echo $row['id'];?>">
                    <img
                      id="img"
                      src="img/Letter-X-Transparent-Image.png"
                      className="img-fluid"
                      alt=""
                    ></img>
                  </a>
                </td>
              </tr>

              <tr>
                <td id="td"> </td>
                <td id="td"></td>
                <td id="td"> </td>
                <td id="td"></td>
                <td id="td">
                  <a href="php/xoa.php?id=<?php echo $row['id'];?>">
                    <img
                      id="img"
                      src="img/Letter-X-Transparent-Image.png"
                      className="img-fluid"
                      alt=""
                    ></img>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <footer className="mt-4">
          <div className="row">
            <div className="col ms"></div>
          </div>
        </footer>
      </div>
      {/* ================================================================= */}
      <div classNameName="form-ls-5s">
        <div classNameName="container">
          <div classNameName="row">
            <Link to={"/"} classNameName="btn btn-success col-1">
              Add +
            </Link>
            <table>
              <thead>
                <th>id</th>
                <th>fullName</th>
                <th>content</th>
                <th>gender</th>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.fullName}</td>
                    <td>{d.content}</td>
                    <td>{d.gender}</td>
                    <td>
                      <Link to={"/"} classNameName="btn btn-primary">
                        Update
                      </Link>
                      <button classNameName="btn btn-danger ms-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <Routes>
          <Route path="" element={<Home />} />
          <Route path="/dichvu" element={<Service_s />} />
          <Route path="/dichvu-chitiet" element={<DetailedService />} />
          <Route path="/sanpham" element={<Product_s />} />
          <Route path="/sanpham-chitiet" element={<DetailedProduct />} />
          <Route path="/tintuc" element={<News_s />} />
          <Route path="/tintuc-chitiet" element={<DetailedNews />} />
          <Route path="/lienhe" element={<Contact_s />} />{" "}
          <Route path="/tuyendung" element={<Recruitment />} />
          <Route path="/duan" element={<Project_s />} />
          <Route path="/duan-chitiet" element={<DetailedProject />} />
          <Route path="/banggia" element={<Pricelist_s />} />
          <Route path="/gioithieu" element={<Introduce_s />} />
        </Routes> */}
      </div>
      -7
      <div classNameName="routes"></div>
    </>
  );
};
export default Test;
