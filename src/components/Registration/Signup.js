import React, { Component } from "react";
import "../../styles/_register.scss";
import Header from "../Header";
import { withRouter } from "react-router";
export class Signup extends Component {
  render() {
    return (
      <section className="bodystyle">
        {<Header />}
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
              {/* <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" /> */}
              <h2>Welcome</h2>
              <p>If You are already having an Account , please Login Below</p>
              <input type="submit" value="Login" className="btnLogin" />
              <br />
            </div>
            <div className="col-md-9 register-right">
              <ul
                className="nav nav-tabs nav-justified"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="student-tab"
                    data-toggle="tab"
                    href="Signup#student"
                    role="tab"
                    aria-controls="Student"
                    aria-selected="true"
                  >
                    Student
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="hirer-tab"
                    data-toggle="tab"
                    href="#hirer"
                    role="tab"
                    aria-controls="Hirer"
                    aria-selected="false"
                  >
                    Hirer
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="Staff-tab"
                    data-toggle="tab"
                    href="#staff"
                    role="tab"
                    aria-controls="Staff"
                    aria-selected="false"
                  >
                    Staff
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="student"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h3 className="register-heading">Register as a Student</h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Student Mail ID *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="Your Phone *"
                        />
                      </div>

                      <input
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="hirer"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3 className="register-heading">
                    Register as a Company Respresentative
                  </h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Company Email ID *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="Your Phone *"
                        />
                      </div>

                      <input
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show"
                  id="staff"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h3 className="register-heading">
                    Register as a University Staff
                  </h3>
                  <div className="row register-form">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name *"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="University  Mail ID *"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name *"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password *"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          minLength="10"
                          maxLength="10"
                          name="txtEmpPhone"
                          className="form-control"
                          placeholder="Your Phone *"
                        />
                      </div>

                      <input
                        type="submit"
                        className="btnRegister"
                        value="Register"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Signup);
