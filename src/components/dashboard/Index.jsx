// import { useContext } from "react";
import { ChevronDown, Plus } from "react-feather";
import { NavLink } from "react-router-dom";
// import { ClientContext } from "../../context/ClientContext";
import AllSessions from "./AllSessions";
import AllIssues from "./AllIssues";



const Index = () => {
  // const { isLoggedIn } = useContext(ClientContext);

  return (
    <div className="p-2 mt-4">
      {/* dashboard nav */}
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "100%" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <span
            className="d-flex justify-content-center align-items-center p-0 m-0 me-2"
            style={{ cursor: "pointer" }}
          >
            <h5 className="">Relog Overview</h5>
            <ChevronDown size={"15px"} className="ms-1" />
          </span>
          <NavLink
            to="/new-project"
            className="nav-link p-1 px-2 text-decoration-none d-flex align-items-center justify-content-start rounded"
            style={({ isActive }) => {
              return isActive
                ? { color: "#00afef", backgroundColor: "#e4ebee" }
                : { color: "gray" };
            }}
          >
            <Plus size={"18px"} className="fw-bold " />
            <p className="p-0 m-0 ms-2 fs-6">New Project</p>
          </NavLink>
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
              Custom
              <ChevronDown size={"15px"} />
            </p>
          </button>
          <button
            className="gen-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary"
            style={{ height: "30px" }}
          >
            {/* <ChevronDown size={"15px"} /> */}
            <p className="p-0 m-0" style={{ fontSize: "12px" }}>
              <Plus size={"15px"} />
              Add Chart
            </p>
          </button>
        </div>
      </div>

      <AllSessions/>

      <AllIssues/>
    </div>
  );
};

export default Index;
