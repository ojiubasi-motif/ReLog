import { BarChart2, Info } from "react-feather";
import { IssuesData } from "../../layout/constants";
import BtnDropdown from "./BtnDropdown";
import { NavLink } from "react-router-dom";
import Histogram from "../../assets/Histogram";


const Untriaged = () => {
  return (
    <div className="p-3 pt-0">
      <table className="table table-borderless">
        <thead>
          <tr className="border-bottom">
            <th scope="col">
              <p className="gen-paragraph">
                Show <b>recommended issues</b> only
              </p>
            </th>
            <th scope="col">
              <p className="gen-paragraph">Histogram</p>
            </th>
            <th scope="col">
              <span className="display-flex justify-content-center">
                <p className="gen-paragraph">Sevrity</p>
                <Info size={"16px"} />
                <BarChart2 size={"16px"} />
              </span>
            </th>
            <th scope="col">
              <span className="display-flex justify-content-center">
                <p className="gen-paragraph">Sessions</p>
                <BarChart2 size={"16px"} />
              </span>
            </th>
            <th scope="col">
              <span className="display-flex justify-content-center">
                <p className="gen-paragraph">Last Seen</p>
                <BarChart2 size={"16px"} />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {IssuesData.map((item, index) => (
            <tr key={index} className="border-bottom ">
              {/* ===recommended issue column */}
              <td>
                <div className="display-flex justify-content-start">
                  <div className="dropdown">
                    <button
                      className="gen-btn d-flex justify-content-between align-items-center px-2 rounded text-secondary dropdown-toggle"
                      id={index}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ height: "30px" }}
                      onClick={(e) => e?.preventDefault()}
                    >
                      <span
                        className=" me-1"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#00afef",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="p-0 m-0" style={{ fontSize: "12px" }}>
                        Untriaged
                      </p>
                      {/* <ChevronDown size={"15px"} /> */}
                    </button>
                    <BtnDropdown targetId={index} />
                  </div>

                  <div className="ms-3">
                    <NavLink to="" className="topnav-link">
                    <span className="display-flex">
                      <b className="fw-bold">{item?.error}</b>
                      <span
                        className=" mx-1"
                        style={{
                          width: "4px",
                          height: "4px",
                          backgroundColor: "#00afef",
                          borderRadius: "50%",
                        }}
                      />
                      <p className="gen-paragraph d-inline-block text-truncate" style={{maxWidth:"150px"}}>{item?.errorDetails}</p>
                    </span>
                    </NavLink>
                    
                    <p className="gen-paragraph">{item?.action}</p>
                  </div>
                </div>
              </td>

              {/* ===histogram======= */}
              <td>
                <div style={{width:"100px", height:"50px"}}>
                  <Histogram/>
                </div>
              </td>

              {/* ===severity==== */}
              <td></td>

              {/* ===session==== */}
              <td></td>

              {/* ===last seen==== */}
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Untriaged;
