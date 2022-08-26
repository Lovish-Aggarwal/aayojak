import React, { forwardRef, useRef, useState,useEffect } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
// import Report from "./Report";
import "../css/Print.css";
import { useProfile } from "../context/ProfileContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Activity from "./Activity";

export default function Activitylog() {
  // const [edit, setEdit] = useState(true);
  // const [save,setSave] = useState(0);
  // console.log("edit at Print", edit);
  
  console.log("componenent rerendered")
  

  // const changeEdit = (e) => {
  //   e.preventDefault();
  //   if (edit === true) setEdit(false);
  //   else setEdit(true);
  // };

  // const changeSave=(e)=>{
  //   e.preventDefault();
  //   let ch=save;
  //   setSave(ch+1);
  // }

  const ComponentToPrint = forwardRef((props, ref) => {
    return (
      <div ref={ref}>
        <Activity />
      </div>
    );
  });
  const ref = useRef();

  const { isopen } = useProfile();

  return (
    <>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row" style={{ height: "100vh" }}>
        {/* sidebar */}

        <div className={isopen ? "col-3 sidebar" : ""}>
          <Sidebar />
        </div>
        <div className={isopen ? "col-9" : "col-12"}>
          <div className="row">
            
            <div className="col-12">
              <div className="center">
                <ReactToPrint content={() => ref.current}>
                  <PrintContextConsumer>
                    {({ handlePrint }) => (
                      <button onClick={handlePrint} className="printbtn">
                        Print this out!
                      </button>
                    )}
                  </PrintContextConsumer>
                </ReactToPrint>
              </div>
            </div>
          </div>

          <ComponentToPrint ref={ref} />
        </div>
      </div>
    </>
  );
}
