// import React from 'react'
import { ChevronDown, Download, RefreshCw } from "react-feather";
import './styles/styles.css';
// import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="p-2 mt-4">
      {/* sessions nav */}
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="d-flex flex-column justify-content-center align-items-start p-0 m-0 me-2"
            // style={{ cursor: "pointer" }}
          >
            <h5 className="p-0 m-0">Sessions</h5>
            <p className="p-0 m-0 text-secondary" style={{ fontSize: "12px", color: "charcoal" }}>Use filters to search for specific user sessions</p>
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center pe-1">

          <button
            className="gen-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary me-2"
            style={{ height: "30px" }}
          >
            {/* <ChevronDown size={"15px"} /> */}
            <p className="p-0 m-0" style={{ fontSize: "12px" }}>
              Time Range:
            </p>
            <p
              className="p-0 m-0 ms-1"
              style={{ fontSize: "12px", color: "charcoal" }}
            >
              LastWeek
              <ChevronDown className="ms-1" size={"15px"} />
            </p>
          </button>

          <button
            className="gen-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary me-2"
            style={{ height: "30px" }}
          >
            {/* <ChevronDown size={"15px"} /> */}
            <p className="p-0 m-0" style={{ fontSize: "12px" }}>
              Timezone:
            </p>
            <p
              className="p-0 m-0 ms-1"
              style={{ fontSize: "12px", color: "charcoal" }}
            >
              GMT+1
              <ChevronDown className="ms-1" size={"15px"} />
            </p>
          </button>

          <button
            className="gen-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary"
            style={{ height: "30px" }}
          >
            {/* <ChevronDown size={"15px"} /> */}
            <p className="p-0 m-0" style={{ fontSize: "12px" }}>
              <Download className="me-1" size={"15px"} />
              Export
            </p>
          </button>

        </div>
      </div>

      {/* main session comonents */}
      <div className="gen-shadow mt-1 rounded display-flex flex-column justify-content-center" style={{height:"40vh",backgroundColor: "white", width: "100%" }}>
          <h6>No sessions found within the selected time range</h6>
          <div className="refresh gen-text m-0 p-0 fw-bold" style={{cursor:"pointer"}}> 
            <RefreshCw size={"16px"} className="me-2"/>
            REFRESH
          </div>
      </div>

    </div>
  );
}

export default Index