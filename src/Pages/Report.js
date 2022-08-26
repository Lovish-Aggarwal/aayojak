import React from "react";
import "../css/Report.css";
import { useState,useEffect } from "react";

import aicte from "../logo/Aayojak-logos/aicte.jfif";
import logo from "../logo/Aayojak-logos/aayojaklogo1.jpg";
// import Minutes from "./Minutes";

export default function Report(prop) {
  const [serviceList, setServiceList] = useState([{ service: "" }]);
  const[edit,setEdit]=useState(true);
  console.log(edit)
  if (prop.saveval) {
    console.log(prop.saveval, serviceList);
  }
  const handleServiceChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = (e) => {
    e.preventDefault();
    setServiceList([...serviceList, { service: "" }]);
  };

  const changeEdit=(e)=>{
    console.log(edit)
    if(edit===true) setEdit(false)
    else setEdit(true)
  }

  return (
    <>
      <div className="row">
        <div className="jumbotron jumbotron-fluid col-12 widthjumbo" style={{padding : "20px",paddingLeft:"0.5px"}}>
          <div className="containerjumbo">
            <div className="row">
              <div className="col-1"><button onClick={(e)=>changeEdit(e)} className="icon1"><i className="fa fa-bars icon" aria-hidden="true"></i></button></div>
              <div className="col-6 reportlogo">
                <img src={aicte} alt="logo" className="logo1" />
              </div>
              
              <div className="col-5 reportlogo1">
                <img src={logo} alt="logo" className="logo2" />
              </div>
            </div>
          </div>
          <div className="containerjumbo  my-4">
            <h1 className="display-9">Final Report </h1>
          </div>
          <div className="containerjumbo">
            <h1 className="display-9">Event Name</h1>
          </div>
        </div>
      </div>
      <div className="row">
        {/* {console.log("style", val.val ? "" : "none")} */}
        <div
          className="col-4 column1 "
          style={{ display: edit ? "" : "none" }}
        >
          <form className="App" autoComplete="off">
            <div className="form-field">
              <label htmlFor="service" className="font">
                Add minutes of meeting
              </label>
              {serviceList.map((singleService, index) => (
                <div key={index} className="services">
                  <div className="first-division">
                    <textarea
                      name="service"
                      type="text"
                      id="service"
                      className="form-control my-4"
                      rows="2"
                      // className="inputcustom"
                      value={singleService.service}
                      onChange={(e) => handleServiceChange(e, index)}
                      required
                    />
                    <div className="row">
                    <div className="col-6">
                    {serviceList.length - 1 === index &&
                      serviceList.length < 100 && (
                        <button
                          type="submit"
                          onClick={(e) => handleServiceAdd(e)}
                          className="inputbtn ib"
                        >
                          Add Session
                        </button>
                      )}
                    </div>
                    
                        </div>
                  </div>
                  <div className="second-division">
                    {serviceList.length !== 1 && (
                      <button
                        type="button"
                        onClick={() => handleServiceRemove(index)}
                        className=" inputbtn"
                      >
                        <span>Remove</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
            <div className="col-6">
                    <button
                          type="submit"
                          onClick={(e) => handleServiceAdd(e)}
                          className="inputbtn ib"
                        >Save</button>
                        </div>
                        </div>
          </form>
        </div>
        <div className={edit ? "col-8 column1" : "col-12 column"}>
          <div className="container detail">
            <div className="col-lg-10">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-2">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-user " aria-hidden="true"></i>{" "}
                          co-ordinator name
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <p className="text-muted mb-0">John Smith</p>
                    </div>
                    <div className="col-sm-2">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                          Email
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-4">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-id-badge" aria-hidden="true"></i>{" "}
                          Faculty Id
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">1234asv</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-address-book" aria-hidden="true"></i>{" "}
                          Address
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        124 400/78 abc nearncksnv,haryana
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i
                            className="fa fa-address-card-o"
                            aria-hidden="true"
                          ></i>{" "}
                          Event Name
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">habibi</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-info" aria-hidden="true"></i> Event
                          detail
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        eabra ka dabra gili gili chu
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                          Event date
                        </h5>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">14/5/2023</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">
                        <h5 className="mx-2">
                          <i className="fa fa-mobile" aria-hidden="true"></i>  Phone
                        </h5>
                      </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">9876543210</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">
                          <h5 className="mx-2">
                            <i
                              className="fa fa-university"
                              aria-hidden="true"
                            ></i>
                              Organisation name
                          </h5>
                        </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">UIET</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">
                          <h5 className="mx-2">
                            <i className="fa fa-list" aria-hidden="true"></i>  Expected Number of participants
                          </h5>
                        </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">200</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">
                          <h5 className="mx-2">
                            <i className="fa fa-list" aria-hidden="true"></i>                            Duration
                          </h5>
                        </p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">41 days</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0 mx-3">
                        <h5 className="mx-2">Minutes of meeting </h5>
                      </p>
                    </div>
                    <div className="col-sm-9">
                      <div className="output">
                        {console.log(serviceList)}
                        {serviceList &&
                          serviceList.map((singleService, index) => (
                            <p key={index}>
                              {singleService.service && (
                                <p>{singleService.service}</p>
                              )}
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
