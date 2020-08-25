import React, { Component } from "react";

export class Recruiter extends Component {
  render() {
    return (
      <section className="wow fadeIn parallax margintop" id="university">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center wow fadeInLeft">
              <div className="padding-eight-lr text-center text-lg-left sm-no-padding">
                <h5 className="alt-font font-weight-700 text-primary text-center text-uppercase width-80 lg-width-100">
                  Recruiter Activities
                </h5>
                <p className="width-95 lg-width-100 slider-text-bottom text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  laborum, iusto ab voluptatibus similique reiciendis alias nam
                  nulla exercitationem animi cumque, quos beatae minima
                  repellat, facilis voluptates doloribus earum totam.
                </p>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 wow fadeInRight last-paragraph-no-margin"
              data-wow-delay="0.2s"
            >
              <img
                className="w-100"
                src={require("../../images/image2.jpg")}
                alt="training details"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Recruiter;
