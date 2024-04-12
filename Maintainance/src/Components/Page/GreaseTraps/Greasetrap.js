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
        <br />
        <h4 align="center">
          Supply and <br />
          Installation of Grease Traps
        </h4>
        <br />
        <br />
        <p align="center">
          Maintaining a grease trap or interceptor is crucial in order to stop
          fats, oils, and grease (FOG) from combining with water that is flushed
          down the drain. Grease traps and interceptors in food service
          establishments must be cleaned no less frequently than once every 90
          days. However, to keep your grease trap/interceptor from functioning
          poorly or incorrectly, more frequent cleaning intervals might be
          required. <br />
          <br /> According to municipal regulations, grease traps must be
          properly maintained and cleaned on a regular basis. An unscented
          backyard for a food processing facility necessitates a clean grease
          trap and drainage system. Since its founding, Grease Trap cleaning has
          been the main business activity of Smart Box, an approved company.{" "}
          <br />
          <br /> We provide two options for installing grease traps. Grease
          traps made of stainless steel and PVC Every restaurant, cafeteria,
          catering business, and other commercial cooking facility is required
          by the Local Authorities of the United Arab Emirates to install a
          grease trap on their property. We can provide you with the
          specifications and requirements needed to build a grease trap at your
          location based on your preferences.
        </p>
        <hr />
        <div
          className="row"
          style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
        >
          <div className="col">
            <img src={Imgtwo} style={{ width: "100%" }} />
          </div>
          <div className="col">
            <h3>Drain line jetting and high-pressure water jetting .</h3>
            <p>
              A pressurized water jet is used in high-pressure water jetting,
              sometimes referred to as drain line jetting, to clean and unclog
              and clear blocked pipes. This method is frequently applied to a
              number of tasks, such as maintaining sewer and drain lines.
              Additionally, by thoroughly cleaning the pipes, drain line jetting
              can help avoid obstructions in the future. To prevent harm to the
              plumbing system, this method needs to be carried out by qualified
              experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
