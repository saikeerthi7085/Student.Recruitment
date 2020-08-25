import React, { Component } from "react";
import "../styles/header.scss";
export class Contact extends Component {
  render() {
    return (
      <section className="footer">
        <div className="container boxshadow">
          <div className="row justify-content-center">
            <div className="card boxwidth cardmargin boxshadow">
              <div className="card-body">
                <h5 className="text-uppercase card-title text-primary text-center">
                  CONTACT US
                </h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text text-center">Contact Details</p>
              </div>
            </div>
            <div className="card boxwidth cardmargin boxshadow">
              <div className="card-body">
                <h5 className="card-title text-primary text-center text-uppercase">
                  Connect With Us
                </h5>
                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                <p className="card-text text-center">Contact Details</p>
                <div className="row justify-content-center">
                  <a href="https://www.facebook.com/" className=" m-1">
                    <img
                      src={require("../images/facebook.jpg")}
                      alt="facebook-logo"
                      width="35px"
                      height="27px"
                    />
                  </a>
                  <a href="https://www.instagram.com/" className=" m-1">
                    <img
                      src={require("../images/instagram.png")}
                      alt="instagram logo"
                      width="30px"
                      height="21px"
                    />
                  </a>
                  <a href="https://www.linkedin.com/" className=" m-1">
                    <img
                      src={require("../images/linkedin.png")}
                      alt="linkedin-logo"
                      width="40px"
                      height="25px"
                    />
                  </a>
                  <a href="https://twitter.com/" className="m-1">
                    <img
                      src={require("../images/twitter.jpg")}
                      alt="twitter-logo"
                      width="30px"
                      height="25px"
                    />
                  </a>
                </div>
              </div>
            </div>
            <h5 className="col-12 col-6 text-center textcolor footerpadding">
              CopyRight 2020 &copy; Recruitment Team
            </h5>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
