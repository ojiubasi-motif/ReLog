import IssuesTable from "./IssuesTable";

const AllIssues = () => {
  return (
    <div className="display-flex" style={{ height: "70vh" }}>
      <div
        className="gen-shadow rounded"
        style={{ height: "100%", width: "65%",backgroundColor:"white"}}
      >
        <IssuesTable/>
      </div>
      <div
        className="display-flex flex-column"
        style={{ height: "100%", width: "34%",backgroundColor:"white" }}
      >
        <div
          className="gen-shadow rounded"
          style={{ height: "49%", width: "100%" }}
        >
          second
        </div>
        <div
          className="gen-shadow rounded"
          style={{ height: "49%", width: "100%" }}
        >
          third
        </div>
      </div>
    </div>
  );
};

export default AllIssues;
