import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/header.scss";

export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar1 navbar-default bootsnav navbar-fixed-top header-light-transparent background-transparent nav-box-width navbar-expand-lg">
            <div className="container nav-header-container">
              <Router>
                <Link className="py-2 textcolor" to="/">
                  Logo
                </Link>
                <ul className="nav justify-content-end">
                  <li className="nav-item ">
                    <Link className="nav-link textcolor" to="/">
                      What We Do
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link textcolor" to="/">
                      Employer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link textcolor" to="/">
                      University
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link textcolor" to="/">
                      Student
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link textcolor"
                      to="/Login"
                      onClick={() => this.props.history.push("Login")}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link textcolor"
                      to="/Signup"
                      onClick={() => this.props.history.push("Signup")}
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </Router>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default withRouter(Header);
