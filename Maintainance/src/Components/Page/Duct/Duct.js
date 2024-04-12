import React from "react";
import "./Duct.css";
import Imgone from "./Imgs/1.jpg";
import Imgone2 from "./Imgs/2.jpg";

export default function () {
  return (
    <div className="container servicepx">
      <div
        style={{
          //   height: "40vh",
          //   display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <br />
        <br />
        <br />
        <h4 align="center">
          Kitchen Hood, <br />
          Duct & Exhaust Fan Cleaning
        </h4>
        <br />
        <br />
        <p align="center">
          Beyond a hood cleaner, Smart Box is more. Being a reliable business
          partner for commercial kitchen exhaust system needs is the foundation
          of our entire company. In addition to professional commercial kitchen
          exhaust hood cleaning, we also provide fan maintenance and repair,
          filter exchange, and other services. We take great satisfaction in
          maintaining consistent, punctual, and thorough interactions with you;
          in addition, we invest in modern equipment to meet the specific
          requirements of your system; and we hire, train, and manage our staff
          with attention.
        </p>
        <hr />
        <div
          className="row"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div className="col">
            <img src={Imgone} style={{ width: "100%" }} />
          </div>
          <div
            className="col"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h3>Kitchen Exhaust Cleaning .</h3>
              <p>
                Your kitchen exhaust system puts a lot of effort into removing{" "}
                <br /> any airborne pollutants from cooking and other kitchen
                operations. <br /> To maintain healthy indoor air quality, the
                system is essential. You <br /> might not be aware,
                nevertheless, that the system requires to be cleaned out
                regularly.
                <br /> If it isn't, then may be risks to the safety of your
                entire house or place of business, <br /> not just your kitchen.
              </p>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div
            className="col"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h3>Fire Hazard .</h3>
              <p>
                By keeping your kitchen exhaust system clean, you can avoid a
                very serious
                <br /> fire threat. Grease and other materials are collected by
                exhaust systems, and <br /> when they accumulate, the extractor
                may malfunction. This reduces the rate of <br /> airflow in the
                kitchen, creating the ideal conditions for a fire to start.
                Cleaning out <br /> the system is the first step towards
                avoiding kitchen exhaust fires.
              </p>
            </div>
          </div>
          <div className="col">
            <img src={Imgone2} style={{ width: "100%" }} />
          </div>
        </div>
        <div
          className="row"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div className="col"></div>
          <div className="col">
            <h3>System Failure .</h3>
            <p>
              An unclean kitchen exhaust system can also cause it to fail early.
              Any system, including a kitchen exhaust, needs to have all of its
              components maintained in order for it to function. It needs
              maintenance to avoid providing a fire risk, releasing smells,
              failing, operating below optimal efficiency, or cycling unhealthy
              air. Its proper functioning will be guaranteed by having it
              professionally cleaned, eliminating any possibility of dangers or
              costly premature replacements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
