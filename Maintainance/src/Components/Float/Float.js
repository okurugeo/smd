import React from 'react'
import { Link } from 'react-router-dom';

export default function Float() {
  return (
    <div>
      {" "}
      <div className="m">
        <div className="flm">
          <div className="container">
            <div className="row">
              <div className="col col-6 dx" data-aos="fade-down">
                <div>
                  Schedule Meeting
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
              <div className="col">
                <div className="Float">
                  <div className="row">
                    <div className="col col-6" data-aos="fade-down">
                      <ion-icon name="call-outline"></ion-icon> Call Now
                      <br /> +971 22 463 894
                    </div>
                    <div className="col vv">
                      <Link to="/Quote">
                        GET A QUOTE{" "}
                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
