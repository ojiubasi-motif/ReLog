/* eslint-disable no-unused-vars */
import { ChevronDown, HelpCircle, RefreshCw, Search } from "react-feather";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import "./styles/styles.css";
import { IssuesNav } from "../layout/constants";

const Index = () => {
  return (
    <div className="p-2 mt-4">
      {/* ===nav=== */}
      <div className="display-flex flex-column pe-2">
        {/* ========1st====== */}
        <div className="display-flex w-100">
          <h5 className="p-0 m-0">Issues</h5>
          <div
            className="display-flex justify-content-end"
            style={{ width: "70%" }}
          >
            <span className="display-flex" style={{ cursor: "pointer" }}>
              <p className="gen-paragraph" style={{ fontSize: "12px" }}>
                show histogram
              </p>
              <ChevronDown className="ms-1" size={"10px"} />
            </span>
            {/* <ToolTip tipTitle={"first tip description"} componentTitle={"Tip-1"} position="down"/> */}
            <OverlayTrigger
              // key={"issh-details"}
              placement={"left"}
              overlay={
                <Tooltip>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, voluptatum!
                </Tooltip>
              }
            >
              <NavLink to="issue-details" className="gen-link-noDecor">
                <span className="display-flex ms-3">
                  <HelpCircle className="me-1" size={"18px"} />
                  <p className="gen-paragraph" style={{ fontSize: "12px" }}>
                    What is an issue?
                  </p>
                </span>
              </NavLink>
            </OverlayTrigger>
          </div>
        </div>
        {/* =========2nd======== */}
        <div className="mt-3 w-100 display-flex justify-content-between">
          {/* ======btns===== */}
          <div className="display-flex ">
            {IssuesNav?.map((item, index) => (
              <OverlayTrigger
                key={index}
                placement={"bottom"}
                overlay={<Tooltip>{item.tooltip}</Tooltip>}
              >
                <span className="display-flex">
                  <p className="gen-paragraph mx-2">{item.title}</p>
                  <button
                    className="segment-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary"
                    style={{ height: "30px" }}
                  >
                    {/* <AlignRight size={"15px"} /> */}
                    {item?.btnExtraIcon}
                    <p className="p-0 m-0" style={{ fontSize: "12px" }}>
                      {item.btn}
                    </p>
                    <ChevronDown size={"15px"} />
                  </button>
                </span>
              </OverlayTrigger>
            ))}
          </div>

          {/* ======search bar======= */}
          <div
            className="nav-search d-flex justify-content-between align-items-center px-2 rounded"
            style={{
              border: "1px solid gray",
              width: "30%",
              height: "30px",
              backgroundColor: "white",
            }}
          >
            <span
              className="p-0 m-0 d-flex justify-content-between align-items-center"
              style={{ backgroundColor: "inherit", cursor: "pointer" }}
            >
              <Search
                size={"14px"}
                className="search-icon"
                style={{ color: "gray" }}
              />
            </span>
            <input
              placeholder="Add filters or use saved segment to refine your dashboard"
              className="search-input m-0 p-0"
              style={{ backgroundColor: "inherit" }}
            />
          </div>
        </div>
      </div>

      {/* =========data========== */}
      <div className="rounded p-2 mt-3" style={{ backgroundColor: "white" }}>
        <ul className="border-bottom display-flex justify-content-start p-2 pb-0">
          {[
            { text: "Untriaged(50)", link: "" },
            { text: "high impact(50)", link: "high-impact" },
            { text: "low impact(50)", link: "low-impact" },
            { text: "ignored(50)", link: "ignored" },
          ].map((item, index) => (
            <li className="p-0 m-0 me-2" key={index}>
              <NavLink
                to={item?.link}
                end={item?.link == ""}
                className="ish-nav p-2 px-0 me-2 text-decoration-none d-flex align-items-center justify-content-start"
                style={({ isActive }) => {
                  return isActive
                    ? { borderBottom: "1px solid #00afef", color: "#00afef" }
                    : {color:"gray"};
                }}
              >
                <p className="gen-paragraph">
                  {item?.text}
                  <ChevronDown className="ms-2" size={"14px"} />
                </p>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ======router outlet======== */}
        <Outlet />
      </div>
    </div>
  );
};

export default Index;
