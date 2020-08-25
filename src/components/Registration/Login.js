import React, { Component } from "react";
import { Header } from "../Header";
import "../../styles/_login.scss";
import { withRouter } from "react-router";
export class Login extends Component {
  render() {
    return (
      <section className="bodystyle">
        {<Header />}
        <div className="container register">
          <div className="row justify-content-center">
            <div className="col-md-6 login-right ">
              <form>
                <h3 className="text-center">Sign In</h3>

                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                  <a href="#sample"> Forgot password</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Login);
