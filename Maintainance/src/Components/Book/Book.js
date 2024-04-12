import React from "react";
import "./Book.css";
import { Link } from "react-router-dom";

export default function Book() {
  return (
    <div>
      <div className="container">
        <div className="bsection" align="center" data-aos="fade-down">
          <div className="row">
            <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12  ">
              <p>Save Time. Save Money. Save Yourself Too! </p>
            </div>
            <div className="col col-lg-6 col-md-8 col-sm-12 col-xs-12  ">
              <Link to="/Quote">
                <button>book your free estimate</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
