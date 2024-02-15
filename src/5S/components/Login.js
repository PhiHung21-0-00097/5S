import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "0943244904",
      password: "giadinhlaso1",
      isShowEye: false,
    };
  }
  // ============================================ LƯU THAY ĐỔI VỀ USERNAME========================
  handleOnChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(event.target.value);
  };
  // ============================================ LƯU THAY ĐỔI VỀ PASSWORD========================

  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(event.target.value);
  };
  // ============================================ LƯU THAY ĐỔI VỀ USERNAME VÀ PASSWRORD========================

  handleLogin = () => {
    console.log(
      "Username: ",
      this.state.username,
      "Password: ",
      this.state.password
    );
    console.log("All state: ", this.state);

    alert("Chó Hào. mày bấm dô là mày ngu rồi còn đỉ ơi");
  };
  // ============================================ THAY ĐỔ MẮT KHI SỰ KIỆN CLICK========================

  handleShowEye = () => {
    this.setState({
      isShowEye: !this.state.isShowEye,
    });
  };
  render() {
    return (
      <>
        <div className="login">
          <div className="container">
            <div className="row ">
              <div className="row ">
                <div className="col">
                  <label>Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name"
                    onChange={(event) => this.handleOnChangeUsername(event)}
                  ></input>

                  <label>password:</label>
                  <div className="custom-input-password">
                    <input
                      type={this.state.isShowEye ? "text" : "password"}
                      className="form-control"
                      placeholder="pass"
                      onChange={(event) => this.handleOnChangePassword(event)}
                    ></input>
                    <span
                      onClick={() => {
                        this.handleShowEye();
                      }}
                    >
                      <i
                        className={
                          this.state.isShowEye
                            ? "fas fa-eye"
                            : "fas fa-eye-slash"
                        }
                      ></i>
                    </span>
                  </div>

                  <div className="row">
                    <button
                      className="btn btn-primary btn-login"
                      onClick={() => {
                        this.handleLogin();
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
