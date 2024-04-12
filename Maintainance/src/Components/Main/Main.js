import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import cl from "../../img/PICS/clean.jpg";
import waste from "../../img/PICS/waste.jpg";
import pump from "../../img/PICS/plumbing.jpg";
import paint from "../../img/PICS/painting.jpg";
import ac from "../../img/PICS/ac.jpg";
import bl from "../../img/PICS/build.jpg";
export default function Main() {
  const items = [
    {
      mgs: "YOUR CLEAN HOME IS",
      mgs2: "OUR BUSINESS",
      title:
        "We offer a better deal in cleaning your home at a lower price leaving your home sparkling and clean.",
      image: cl,
    },
    {
      mgs: "BUILDING CLEANING",
      title:
        "With our certified professionals, we can make any building shine.",
      image: bl,
    },
    {
      mgs: "PAINTING",
      mgs2: "Just A Call Away",
      title:
        "We use only the best products, and we shall go the extra mile to give your premise a professional touch of colour.",
      image: paint,
    },
    {
      mgs: "PLUMBING",
      mgs2: "We Can Fix",
      title:
        "Our experts are committed to you the best option to make your house functional and water-safe.",
      image: pump,
    },
    {
      mgs: "ELECTRICAL WORKS",
      mgs2: "",
      title:
        "We are experts in both indoor and outdoor installations for all types of electrical work.",
      image:
        "https://airc.com.au/wp-content/uploads/2021/06/8-%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D0%BA%D0%BE%D0%BD%D0%B4%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%B5%D1%80%D0%B0-%D1%84%D0%BE%D1%82%D0%BE.jpg",
    },
    {
      mgs: "AC REPAIR AND DUCT CLEANING",
      title:
        "Our duct cleaning service is designed to take care of your health and keep your ducts clean regularly.",
      image: ac,
    },
  ];
  const Slide = ({ item }) => {
    return (
      <div className="slider1" style={{}}>
        <img src={item.image} alt={item.title} className="sliderimg" />
        <div className="topdiv">
          <div className="container">
            <br />
            <br />
            <br />
            <div className="desc">
              <h1 className="font-weight-bold  " data-aos="fade-down">
                {item.mgs}
              </h1>
              <h1 className="font-weight-bold " data-aos="fade-down">
                {item.mgs2}
              </h1>
              <p>{item.title}</p>
              <p data-aos="fade-down"></p>
              <div data-aos="fade-down">
                <a href="#services" style={{ color: "white" }}>
                  <label className="btn nkbtn">Our Services</label>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const SliderComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // enable autoplay
      autoplaySpeed: 4000,
    };

    return (
      <Slider {...settings}>
        {items.map((item) => (
          <Slide key={item.id} item={item} />
        ))}
      </Slider>
    );
  };
  return (
    <div>
      <SliderComponent />
    </div>
  );
}
