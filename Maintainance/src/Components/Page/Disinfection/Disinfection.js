import React from "react";
// import "./Duct.css";
import Imgone from "./Imgs/1.jpg";
import Imgtwo from "./Imgs/2.jpg";
import Imgthree from "./Imgs/3.jpg";

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
          Service for AC, <br />
          Duct cleaning and disinfection
        </h4>

        <br />
        <br />
        <p align="center">
          To maintain a safer and healthier atmosphere, Smat Box offers the best
          AC duct cleaning in Abu Dhabi and the UAE. This is achieved by deep
          cleaning the air ducts and AC units to remove all hazardous dust,
          mold, pollutants, and other debris. Smat Box is an expert cleaning
          company with its headquarters in Abu Dhabi. Smat Box provides a
          variety of AC duct cleaning services in Abu Dhabi, Dubai, and
          throughout the United Arab Emirates, including duct cleaning, vent
          cleaning, AC cleaning, AC coil cleaning & sanitation, HVACs and duct
          cleaning, and ductwork & ventilation cleaning services.
        </p>
        <hr />
        <div
          className="row"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div className="col">
            <img src={Imgone} style={{ width: "100%", borderRadius: 10 }} />
          </div>
          <div
            className="col"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div>
              <h3>
                Cleaning of the ducts <br />
                for better indoor air quality .
              </h3>
              <br />
              <br />
              <p>
                With professional duct cleaning services from Smart Box, you can
                lower the need for expensive repairs and improve the quality of
                your indoor air. To make sure that our customers get a better
                level of fresh air, we use a unique tool. We utilize this
                technology to carefully and completely clean dryer ducts that
                are full of lint as well as heating and cooling vents. If you
                are unsure of when your ducts were thoroughly cleaned, we also
                advise utilizing our duct maintenance and cleaning services.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <img
              src={Imgtwo}
              style={{ width: "100%", height: "80%", borderRadius: 10 }}
            />
          </div>
          <div className="col">
            <img
              src={Imgthree}
              style={{ width: "100%", height: "80%", borderRadius: 10 }}
            />
          </div>
        </div>

        <br />
        <br />
        <br />

        <div align="center" style={{ marginBottom: "20vh" }}>
          <h4>WHY IMPROVEABLE DUCTS ARE CLEAN</h4>
          <p>
            The Environmental Protection Agency (EPA) claims that interior air
            pollution can sometimes exceed
            <br /> that of outside air pollution! Additionally helpful if you
            suffer from allergies or other <br /> respiratory conditions are
            cleaner air ducts.
            <br />
            <br />
            Your dryer will operate more effectively if the ducts are carefully
            cleaned by certified specialists. <br /> More significantly, clean
            dryer ducts lessen the possibility of dryer fires brought on by lint
            lodged deep within the system. Additionally,
            <br /> cleaner ducting can help with: A comfortable indoor living
            space Reduced problems with offensive or persistent smells increased
            efficiency of airflow
          </p>
        </div>
      </div>
    </div>
  );
}
