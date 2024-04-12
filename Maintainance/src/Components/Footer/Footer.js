import React from "react";
import "./Footer.css";

import Whatsapp from "../../img/whatsapp.png";

export default function Footer() {
  return (
    <div>
      <div style={{ height: "20vh", background: "white" }}>

        
      </div>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase ">Pages</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li data-aos="fade-down">
                    <a href="/">Home</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="/">About Us</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="/">Services</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="/">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="">
                <h6
                  className="footer-heading text-uppercase "
                  data-aos="fade-down"
                >
                  CLEANING
                  <br /> SERVICES
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li data-aos="fade-down">
                    <a href="">Commercial Cleaning</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="">Home Cleaning</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="">Window Cleaning</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="">Waste Removal</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="">
                <h6
                  className="footer-heading text-uppercase "
                  data-aos="fade-down"
                >
                  GENERAL MAINTAINANCE
                </h6>
                <ul
                  className="list-unstyled footer-link mt-4"
                  data-aos="fade-down"
                >
                  <li data-aos="fade-down">
                    <a href="">A/C Repair</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="">Plumbering services</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="">Garden Maintainance</a>
                  </li>
                  <li data-aos="fade-down">
                    <a href="">Building Cleaning Services</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <h6 className="footer-heading text-uppercase ">Contact Us</h6>

                <p className="contact-info" data-aos="fade-down">
                  {" "}
                  <span>+971 22 463 894 | +971 502 424 996</span>
                </p>

                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14523.149101998735!2d54.3742112!3d24.4928264!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67072212f301%3A0x9933a766f3fd1a82!2sSMART%20BOX%20BROKERS%20SERVICES%20LLC!5e0!3m2!1sen!2sae!4v1682887713401!5m2!1sen!2sae"
                    height="250"
                    width="95%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-5 sol" data-aos="fade-down">
                  <a
                    href="https://www.facebook.com/SMART-BOX-Broker-Services-100484859689193"
                    data-aos="fade-down"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/smartbox-brokerservices/"
                    data-aos="fade-down"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>
                  <a
                    href="https://instagram.com/smartbox.brokerservices?igshid=YmMyMTA2M2Y="
                    data-aos="fade-down"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="footer-alt mb-0 f-14">
            2023 © Smartbox General Cleaning, All Rights Reserved
          </p>
        </div>
      </footer>

      <a
        className=" "
        href="https://api.whatsapp.com/send?phone=971502424996"
        method="get"
        target="_blank"
      >
        <img className="whatsapp" src={Whatsapp} height="70px" />
      </a>
    </div>
  );
}
