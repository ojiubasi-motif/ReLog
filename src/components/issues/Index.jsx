import { ChevronDown, HelpCircle } from "react-feather";
import "./styles/styles.css";

const Index = () => {
  return (
    <div className="p-2 mt-4">

      <div className="display-flex flex-column pe-2">
        <div className="display-flex w-100">
          <h5 className="p-0 m-0">Issues</h5>
          <div className="display-flex justify-content-end" style={{ width: "70%" }}>
            <span className="display-flex" style={{cursor:"pointer"}}>
              <p className="gen-paragraph" style={{fontSize:"12px"}}>
                show histogram
              </p>
              <ChevronDown className="ms-1" size={"10px"} />
            </span>

            <span className="display-flex ms-4" style={{cursor:"pointer"}}>
                <HelpCircle className="me-1" size={"18px"}/>
              <p className="gen-paragraph" style={{fontSize:"12px"}}>
                What is an issue?
              </p>
              
            </span>
          </div>
        </div>

        <div></div>
      </div>


    </div>
  );
};

export default Index;
