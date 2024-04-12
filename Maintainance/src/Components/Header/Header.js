import React from "react";
import "./Header.css";
import Logo from "../../img/Icon.png";
import PDF from "../../img/PICS/pdft.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Rp from "../../img/pro.png";
export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [active, setActive] = useState(false);

  const data = [
    { name: "Kitchen Hood, Duct & Exhaust Fan Cleaning", link: "Duct" },
    { name: " ac duct cleaning and disinfection", link: "Disinfection" },
    { name: "Supply and Installation of Grease Traps", link: "Grease" },
    { name: "Water Tank cleaning", link: "Tank" },
    { name: "Civil and MEP works  ", link: "MEP" },
  ];

  return (
    <div>
      <div className="topcover">
        <div className="container top">
          <div className="smshow" align="center">
            <div>
              <ion-icon className="tbc" name="mail-outline"></ion-icon>
              {/* <label>Email : </label> */}
              <span>info@smartboxcleaningservices.com</span>
            </div>
            <div>
              <ion-icon className="tbc" name="call-outline"></ion-icon>
              {/* <label>Phone :</label> */}
              <span>+971 22 463 894 </span>
              <br />
              <span>+971 50 242 4996 </span>
            </div>

            <div>
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
              <a
                href="https://smartboxcleaningservices.com/Profile.pdf"
                data-aos="fade-down"
              >
                <img src={Rp} height="26" className="imgprofile" />
              </a>
              <hr />
            </div>
          </div>
          <div className="row hidtop">
            <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12 col-8">
              <div className="row">
                <div
                  className="col col-lg-6 col-md-8 col-sm-6 col-xs-6 col-6"
                  data-aos="fade-down"
                >
                  <ion-icon name="mail-outline"></ion-icon>
                  {/* <label>Email</label>
                  <br /> */}
                  <span>info@smartboxcleaningservices.com</span>
                </div>
                <div className="col" data-aos="fade-down">
                  <ion-icon name="call-outline"></ion-icon>
                  {/* <label>Phone</label> */}
                  {/* <br /> */}
                  <span>+971 22 463 894 </span>
                </div>
                <div className="col" data-aos="fade-down">
                  <ion-icon name="logo-whatsapp"></ion-icon>
                  {/* <label>Phone</label> */}
                  {/* <br /> */}
                  <span>+971 50 242 4996 </span>
                </div>
              </div>
            </div>
            <div className="col sol" align="center">
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
              <a
                href="https://smartboxcleaningservices.com/Profile.pdf"
                data-aos="fade-down"
              >
                <img src={Rp} height="26" className="imgprofile" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="stickytab"
        id="stickytab"
        style={
          isFixed
            ? {
                position: "fixed",
                right: 0,
                left: 0,
                top: 0,
              }
            : { position: "relative", right: 0, left: 0, top: 0 }
        }
      >
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark headimg">
            <Link to="/ ">
              <img src={Logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ background: "black; !important" }}
            >
              <label style={{ border: "1px solid grey", padding: 5 }}>
                <span
                  className="navbar-toggler-icon"
                  style={{ color: "black; !important" }}
                ></span>
              </label>
            </button>
            <div
              className="header collapse navbar-collapse"
              id="basicExampleNav"
            >
              <ul className="headertop navbar-nav mr-auto datainfo">
                <li className="nav-item active">
                  <Link to="/ ">Home</Link>
                </li>

                <li className="nav-item">
                  <a href="/#about">About Us</a>
                </li>
                <li className="nav-item" style={{}}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "50%",
                      alignItems: "center",
                      position: "relative",
                    }}
                    onClick={() => setActive(active ? false : true)}
                  >
                    Services
                    <ion-icon name="chevron-down-outline"></ion-icon>
                    <div
                      className="serviceplot"
                      style={
                        active ? { display: "block" } : { display: "none" }
                      }
                    >
                      {data.map((a, b) => (
                        <div style={{ paddingTop: 8 }} className="servp">
                          <Link to={`/${a.link}`}>{a.name}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li
                  className="nav-item"
                  style={{ paddingTop: "10px" }}
                  align="right"
                >
                  <Link to="/Quote">
                    <button className="btn btn-primary nkbtn">
                      Get a quote
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
