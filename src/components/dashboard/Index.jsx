import { useContext } from "react";
import { ChevronDown, MoreVertical, PlayCircle, Plus } from "react-feather";
import { NavLink } from "react-router-dom";
import { ClientContext } from "../../context/ClientContext";
import dImg from "../../../public/img/user.png";

const dummy = [
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
  {
    img: dImg,
    name: "Jane doe",
    email: "jane@gmail.com",
    activity: "15-05-'23 00:12:34",
    event: "13 events",
    locaion: "Abuja",
    device: "Mac Os",
  },
];

const Index = () => {
  const { isLoggedIn } = useContext(ClientContext);
  console.log("is a user available?", isLoggedIn);
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

      <div
        className="dash-table rounded mt-1 p-3"
        style={{ minHeight: "70vh", backgroundColor: "white", width: "100%" }}
      >
        <span className="d-flex justify-content-between align-items-center w-100">
          <p className="p-0 m-0 fs-6">All Sessions</p>
          <MoreVertical
            size={"16px"}
            className=""
            style={{ cursor: "pointer" }}
          />
        </span>

        <table className="table table-borderless">
          <thead>
            <tr className="border-bottom">
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Activity and Date</th>
              <th scope="col">Location and Platform</th>
            </tr>
          </thead>
          <tbody>
            {dummy.map((item, index) => (
              <tr key={index} className="border-bottom ">
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <img
                      src={item.img}
                      alt="user-img"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="ms-2">
                      <NavLink className="gen-link" to="/">
                        <h6 className="gen-text p-0 m-0">{item.name}</h6>
                      </NavLink>

                      <p className="p-0 m-0">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    <PlayCircle
                      size={"24px"}
                      className="gen-text"
                      style={{ cursor: "pointer" }}
                    />
                    <div className="ms-2">
                      <NavLink className="gen-link" to="/">
                        <h6 className="gen-text m-0 p-0">{item.activity}</h6>
                      </NavLink>
                      <p className="p-0 m-0">{item.event}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="p-0 m-0">{item.locaion}</p>
                  <h6 className="m-0 p-0">{item.device}</h6>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
