import React from "react";
import Imgone from "./Imgs/0.jpg";
import Imgtwo from "./Imgs/1.jpg";
import Imgxx from "./Imgs/cv.jpg";
import Imgone3 from "./Imgs/2.jpg";

export default function MEP() {
  return (
    <div>
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
                <h3>Civil Work .</h3>
                <p>
                  civil works Numerous civil works activities can be skillfully
                  and swiftly completed by our huge and outstanding workforce.
                  These can be given to clients on a project-by-project basis or
                  as part of an ongoing facility management
                  initiative.Furthermore, because of our breadth of experience
                  across a wide range of property types, clients may choose us
                  for any civil work project they have, knowing that we have the
                  capacity and scope to manage it all.
                </p>
              </div>
            </div>
            <div className="col">
              <img src={Imgxx} style={{ width: "100%" }} />
            </div>
          </div>
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
                <h3>Mechanical Work .</h3>
                <p>
                  A building's mechanical design components, particularly its
                  heating and cooling systems, contribute to a more comfortable
                  interior environment. We are able to occupy houses in both hot
                  and cold climates because to these systems.
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
                <h3>Electrical Work .</h3>
                <p>
                  A building's electrical system powers our gadgets, keeps the
                  lights on, and maintains the functionality of other systems.
                  Plans and designs for architectural lighting are an essential
                  part of the electrical engineering process.
                </p>
              </div>
            </div>
            <div className="col">
              <img src={Imgtwo} style={{ width: "100%" }} />
            </div>
          </div>
          <div
            className="row"
            style={{ paddingTop: "10vh", paddingBottom: "10vh" }}
          >
            <div className="col">
              <img src={Imgone3} style={{ width: "100%" }} />
            </div>
            <div
              className="col"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div>
                <h3>Plumbing Work .</h3>
                <p>
                  Without pipes, where would we be? It is water that keeps us
                  alive. Fresh water is supplied by plumbing systems for
                  drinking, cleaning, and other uses. Additionally, they remove
                  sanitary and stormwater in a safe manner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
