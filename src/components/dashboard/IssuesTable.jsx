import { MoreVertical } from 'react-feather'
import { NavLink } from 'react-router-dom';

const dummy = [
    {
      error:{
        type:"JS Error",
        detail:"error-500: internal server error"
      },
      url:"https://reworkacademy.co/",
      chart:"",
      date:"23-09-22",
      platform:"Browser"
    },
    {
        error:{
          type:"Network Error",
          detail:"error-400: couldn't reach url"
        },
        url:"https://reworkacademy.co/",
        chart:"",
        date:"23-09-22",
        platform:"Android App"
      },
      {
        error:{
            type:"Network Error",
            detail:"error-400: couldn't reach url"
        },
        url:"https://reworkacademy.co/",
        chart:"",
        date:"23-09-22",
        platform:"Iphone App"
      },
      {
        error:{
            type:"JS Error",
            detail:"error-500: internal server error"
        },
        url:"https://reworkacademy.co/",
        chart:"",
        date:"23-09-22",
        platform:"Browser"
      },
      {
        error:{
            type:"Network Error",
            detail:"error-400: couldn't reach url"
        },
        url:"https://reworkacademy.co/",
        chart:"",
        date:"23-09-22",
        platform:"Android App"
      },
    ];

const IssuesTable = () => {
  return (
    <div>
        <span className="display-flex w-100 border-bottom p-3">
          <p className="p-0 m-0 fs-6">All Sessions</p>
          <MoreVertical
            size={"16px"}
            className=""
            style={{ cursor: "pointer" }}
          />
        </span>

        <table className="table table-borderless p-3">
          {/* <thead>
            <tr className="border-bottom">
              <th scope="col">Name</th>
              <th scope="col">Activity and Date</th>
              <th scope="col">Location and Platform</th>
            </tr>
          </thead> */}
          <tbody className=''>
            {dummy.map((item, index) => (
              <tr key={index} className="border-bottom">
                <td>
                  <div className="d-flex justify-content-start align-items-center">
                    
                    <div className="ms-2">
                      <NavLink className="gen-link" to="/">
                        <h6 className="gen-text p-0 m-0 fw-bold">
                          {item.error.type}:
                        </h6>
                      </NavLink>

                      <p className="p-0 m-0">{item.error.detail}</p>
                    </div>
                  </div>
                </td>
                <td>
                  {/* <div className="d-flex justify-content-start align-items-center">
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
                  </div> */}
                </td>
                <td>
                  <p className="p-0 m-0">{item.date}</p>
                  <h6 className="m-0 p-0 fw-light">{item.platform}</h6>
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

export default IssuesTable