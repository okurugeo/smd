import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div className="servi" id="services">
      <div className="container">
        <div className="heading" align="center">
          <h1 data-aos="fade-down">
            OUR <span>SERVICE</span>
          </h1>

          <p data-aos="fade-down">
            As the leading provider of general maintenace and cleaning services,
            Smart Box is committed <br /> to exceeding your expectations through
            efficiency, knowledge, passion, and experience.
          </p>
          <hr />
        </div>
        <div className="srdrop">
          <div className="row">
            <div className="col">
              <h3 align="center" data-aos="fade-down">
                CLEANING SERVICES
              </h3>
              <label align="center" data-aos="fade-down">
                When you work with SmartBox Cleaning you can cross a major choir
                off your list, cleaning your home.
              </label>

              <div className="row datax">
                <div className="col">
                  <label data-aos="fade-down">Commercial Cleaning</label>
                  <label data-aos="fade-down">Home & office cleaning</label>
                  <label data-aos="fade-down">Window cleaning</label>
                  <label data-aos="fade-down">Building cleaning</label>
                  <label data-aos="fade-down">End of lease cleaning </label>
                  <label data-aos="fade-down">Nanny services </label>
                  <label data-aos="fade-down">Deep cleaning </label>
                </div>
                <div className="col">
                  {" "}
                  <label data-aos="fade-down">Carpet Steam cleaning </label>
                  <label data-aos="fade-down">Sofa cleaning </label>
                  <label data-aos="fade-down">High Pressure cleaning</label>
                  <label data-aos="fade-down">Post construction cleaning</label>
                  <label data-aos="fade-down">
                    Maintenance of surrounding{" "}
                  </label>
                  <label data-aos="fade-down">Waste removal</label>
                </div>
              </div>
              <div className="" align="center">
                <Link to="/Quote">
                  <button className="btn" data-aos="fade-down">
                    GET A FREE ESTIMATE
                  </button>
                </Link>
              </div>
            </div>
            <div className="col">
              <h3 align="center" data-aos="fade-down">
                GENERAL MAINTAINANCE
              </h3>
              <label align="center">
                We use a wide variety of cleaning methods, chemicals, and
                equipment to facilitate and expedite the cleaning process.
              </label>
              <div className="row datax">
                <div className="col" data-aos="fade-down">
                  <label>Plumbering services</label>
                  <label>Electrical maintenance services </label>
                  <label>Mason work</label>
                  <label>Tank and reservior cleaning</label>
                </div>

                <div className="col" data-aos="fade-down">
                  <label>AC repair and maintenance</label>
                  <label>AC duct cleaning</label>
                  <label>Garden maintenace services</label>
                  <label>Painting services </label>
                  <label>Building cleaning services </label>
                </div>
              </div>
              <div className="" align="center" data-aos="fade-down">
                <Link to="/Quote">
                  <button className="btn" data-aos="fade-down">
                    GET A FREE ESTIMATE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
