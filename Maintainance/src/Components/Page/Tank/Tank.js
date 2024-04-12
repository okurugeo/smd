import React from "react";
// import "./Duct.css";

import Imgone from "./Imgs/1.jpg";
import Imgtwo from "./Imgs/2.jpg";

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
        <div
          className="row"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div
            className="col"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h3>Water Tank cleaning .</h3>
              <p>
                We provide a 100% satisfaction guarantee because we are so
                confident in the standard of our water tank cleaning service. We
                guarantee that you won't be entirely dissatisfied with the
                outcome. We value your confidence and peace of mind, and we
                guarantee the caliber of our work. Selecting Smart Box is an
                investment in safe and clean water as well as a service provider
                that puts your pleasure first.
              </p>
            </div>
          </div>
          <div className="col">
            <img src={Imgone} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
