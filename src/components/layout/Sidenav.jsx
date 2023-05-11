import "./styles/general.css";
import Logo from "../../../public/img/logo.png";
import User from "../../../public/img/user.png"
import { ChevronDown, ChevronRight, ChevronUp, Plus } from "react-feather";
import {
  SideNavItem1,
  SideNavItem2,
  SideNavItem3,
  SideNavItem4,
} from "./constants";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidenav = () => {
  const [toggleProjects, setToggle] = useState(false);

  return (
    <div className="col-md-2 p-0 fixed-top">
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
{
    toggleProjects?
    <div className="ps-3" style={{ height: "40vh", overflowY: "auto" }}>
      <NavLink
                to="/new-project"
                className="nav-link p-2 text-decoration-none d-flex align-items-center justify-content-start rounded mt-2"
                style={({ isActive }) => {
                  return isActive
                    ? { color: "#00afef", backgroundColor: "#e4ebee" }
                    : { color: "gray" };
                }}
              >
                <Plus size={"18px"} className="fw-bold"/>
                <p className="p-0 m-0 ms-2 fs-6 fw-bold">New Project</p>
              </NavLink>

              <NavLink
                to="/projects/rework"
                className="nav-link p-2 text-decoration-none d-flex align-items-center justify-content-start rounded mt-2"
                style={({ isActive }) => {
                  return isActive
                    ? { color: "#00afef", backgroundColor: "#e4ebee" }
                    : { color: "gray" };
                }}
              >
               
                <p className="p-0 m-0 ms-2 fs-6 fw-lighter">Rework</p>
              </NavLink>
      </div>:
      <div className="" style={{ height: "40vh", overflowY: "auto" }}>
      <ul className="px-3">
        {SideNavItem1?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className="nav-link p-2 text-decoration-none d-flex align-items-center justify-content-start rounded mt-2"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#00afef", backgroundColor: "#e4ebee" }
                  : { color: "gray" };
              }}
            >
              {item.icon}
              <p className="p-0 m-0 ms-2 fs-6 fw-lighter">{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* analytics nav */}
      <ul className="px-3 pt-2">
        <h4 className="fs-6 fw-bolder">Analytics</h4>
        {SideNavItem2?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className="nav-link p-2 text-decoration-none d-flex align-items-center justify-content-start rounded mt-2"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#00afef", backgroundColor: "#e4ebee" }
                  : { color: "gray" };
              }}
            >
              {item.icon}
              <p className="p-0 m-0 ms-2 fs-6 fw-lighter">{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      {/* config nav */}
      <ul className="px-3 pt-2">
        <h4 className="fs-6 fw-bold">Configuration</h4>
        {SideNavItem3?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className="nav-link p-2 text-decoration-none d-flex align-items-center justify-content-start rounded mt-2"
              style={({ isActive }) => {
                return isActive
                  ? { color: "#00afef", backgroundColor: "#e4ebee" }
                  : { color: "gray" };
              }}
            >
              {item.icon}
              <p className="p-0 m-0 ms-2 fs-6 fw-lighter">{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
}
      {/* nav items 2*/}
      <div className="mt-1">
        <div className="m-3">
          <p
            className="p-0 m-0 px-2 border border-dark rounded"
            style={{ fontSize: "12px" }}
          >
            This is an interactive demo with simulated data. No additional data
            can be added to this project.
          </p>
        </div>

        <ul className="px-3 ">
          {/* <h4 className="fs-6 fw-bold">Configuration</h4> */}
          {SideNavItem4?.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="nav-link p-2 text-decoration-none d-flex align-items-center justify-content-start rounded mt-2"
                style={({ isActive }) => {
                  return isActive
                    ? { color: "#00afef", backgroundColor: "#e4ebee" }
                    : { color: "gray" };
                }}
              >
                {item.icon}
                <p className="p-0 m-0 ms-2 fs-6 fw-lighter">{item.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* user */}
        <div className="user-profile p-3  d-flex align-items-center justify-content-between" style={{cursor: "pointer", height: "60px"}}>
            <img src={User} alt="user-avatar" className="rounded" style={{width:"35px", height:"35px", objectFit:"contain"}}/>
            <div className="">
                <h6 className="p-0 m-0">email@gmail.com</h6>
                <p className="p-0 m-0" style={{fontSize:"14px"}}>My Organisation</p>
            </div>
            <ChevronRight size={"14px"}/>
        </div>
      </div>


    </div>
  );
};

export default Sidenav;
