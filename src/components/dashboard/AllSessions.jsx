import { MoreVertical, PlayCircle } from 'react-feather'
import { NavLink } from 'react-router-dom'
import dImg from "../../../public/img/user.png";

//====== dummy data=======
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

const AllSessions = () => {
  return (
    <div
        className="dash-table rounded mt-1 p-3 pb-0"
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
                        <h6 className="gen-text p-0 m-0 fw-light">
                          {item.name}
                        </h6>
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
                        <h6 className="gen-text m-0 p-0 fw-light">
                          {item.activity}
                        </h6>
                      </NavLink>
                      <p className="p-0 m-0">{item.event}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="p-0 m-0">{item.locaion}</p>
                  <h6 className="m-0 p-0 fw-light">{item.device}</h6>
                </td>
              </tr>
            ))}
            <tr >
              <td colSpan={3} className="text-center">
                <NavLink to="/more" className="p-0 m-0 gen-link text-center">
                  View More
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default AllSessions