import React from "react";
import "./styles/general.css";
import Logo from "../../../public/img/logo.png";
import { ChevronDown, ChevronUp } from "react-feather";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const [toggleProjects, setToggle] = useState(false);

  return (
    <div className="col-md-2 border p-0">
      {/* logo */}
      <div
        className="logo d-flex justify-content-between align-items-center p-2"
        style={{ cursor: "pointer", height: "60px" }}
      >
        <Link to="/" className="text-decoration-none" style={{}}>
          <span
            className="d-flex align-items-center ps-2"
            style={{ width: "70%" }}
          >
            <img
              className="mr-2"
              src={Logo}
              alt="logo-img"
              style={{ width: "35px", height: "35px" }}
            />
            <h6 className="fw-bold text-secondary mt-1">Relog</h6>
          </span>
        </Link>
        {toggleProjects ? (
          <ChevronUp size={"20px"} onClick={() => setToggle((prev) => !prev)} />
        ) : (
          <ChevronDown
            size={"20px"}
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
      </div>
      
      {/* nav items 1*/}
      <div className="p-1 ">

      </div>

      {/* nav items 2*/}
      <div className="p-1 ">

      </div>

      {/* logged-in user */}
      <div></div>
    </div>
  );
};

export default Sidenav;
