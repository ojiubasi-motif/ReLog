import { AlignRight, ChevronDown, RefreshCw, Search } from "react-feather";
import { NavLink } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="d-flex justify-content-between align-items-center px-2 pt-2">
      <div
        className="nav-search d-flex justify-content-between align-items-center px-2 rounded"
        style={{ width: "50%", height: "30px" }}
      >
        <Search
          size={"16px"}
          className="search-icon"
          style={{ color: "gray" }}
        />
        <input
          placeholder="Add filters or use saved segment to refine your dashboard"
          className="search-input"
          style={{}}
        />
        <button
          className="search-btn nav-search d-flex justify-content-between align-items-center p-2 rounded"
          style={{}}
        >
          <RefreshCw size={"12px"} />
        </button>
      </div>

      <div
        className="d-flex justify-content-between align-items-center px-2 me-2"
        style={{ width: "45%" }}
      >
        <button
          className="segment-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary"
          style={{ height: "30px" }}
        >
          <AlignRight size={"15px"} />
          <p className="p-0 m-0" style={{ fontSize: "12px" }}>
            Saved Segment
          </p>
          <ChevronDown size={"15px"} />
        </button>

        <p
          className="popular-seg p-0 m-0 "
          style={{ fontSize: "12px", color: "grey" }}
        >
          POPULAR SEGMENTS:
        </p>

        <NavLink to="/" className="topnav-link">
          Signed up
        </NavLink>

        <NavLink to="/" className="topnav-link">
          Mobile
        </NavLink>

        <NavLink to="/" className="topnav-link">
          New User
        </NavLink>
        <div></div>
      </div>
    </div>
  );
};

export default Topnav;
