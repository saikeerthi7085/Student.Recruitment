import React, { Component } from "react";
import "../styles/header.scss";

export class Homebanner extends Component {
  render() {
    return (
      <section className="section-custom wow fadeIn grad Section-box-radius grad">
        <div className="container  ">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-6 text-center md-margin-50px-bottom wow fadeInLeft">
              <div className="padding-eight-lr text-center text-lg-left sm-no-padding">
                <h1 className="alt-font textcolor font-weight-700 text-uppercase width-80 lg-width-100">
                  Recruiting Platform
                </h1>
                <h4 className="textcolor">
                  Hire the best talent from university campus
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-6 wow fadeInRight last-paragraph-no-margin">
              <img
                className="w-100"
                src={require("../images/image1.png")}
                alt="training details"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Homebanner;
