import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div className="about">
        <div className="container" align="center">
          <div className="heading" align="center">
            <h1 data-aos="fade-down">
              ABOUT <span>US</span>
            </h1>
          </div>
          <div className="row aboutmain">
            <div
              className="col"
              style={{
                backgroundColor: " rgba(255,255,255,0.7)",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <p data-aos="fade-down">
                Smart Box General Maintenance & Cleaning Services LLC is a
                growing commercial cleaning and general maintenance provider
                located in Abu Dhabi, United Arab Emirates. <br />
                <br /> We provide a range of cleaning services for homes;
                commercial and industrial clients and we also work along with
                real agents in order to arrange end of lease clean ups for
                residential properties. <br />
                <br /> Smart Box General Maintenance & Cleaning Services LLC
                brings a fresh and professional approach to general maintenance
                and cleaning services; our goal is to exceed the expectations of
                every client by offering outstanding customer service,
                exceptional quality, and add greater value for the service.
              </p>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
