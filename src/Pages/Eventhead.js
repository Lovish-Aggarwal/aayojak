import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import Mininavbar from "../components/Mininavbar";
export default function Eventhead() {
  const [serviceList, setServiceList] = useState([
    { s1: "", s2: "", s3: "", s4: "", s5: "" },
  ]);
  const [edit, setEdit] = useState(true);
  console.log(edit);
  //   if (prop.saveval) {
  //     console.log(prop.saveval, serviceList);
  //   }
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

  const changeEdit = (e) => {
    console.log(edit);
    if (edit === true) setEdit(false);
    else setEdit(true);
  };

  const { profile, setProfile, isopen } = useProfile();

  useEffect(() => {
    var temp = profile;
    // temp.path = "/users";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);
  console.log("profile page", profile);
  return (
    <div>
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
          {/* profle logo */}
          <div className="row">
            <div className="col-12">
              <Mininavbar />
            </div>
          </div>
          <div className="row">
            <div className="col-12 profilelogo">
              <h1>Event committee Details</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 column1 ">
              <form className="App" autoComplete="off">
                <div className="form-field">
                  <label htmlFor="service" className="font">
                    Add committee details
                  </label>
                  {serviceList.map((singleService, index) => (
                    <div key={index} className="services">
                      <div className="first-division">
                        <input
                          name="s1"
                          type="text"
                          id="s1"
                          className="form-control my-4"
                          placeholder="Enter committee name"
                          // className="inputcustom"
                          value={singleService.s1}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                        <textarea
                          name="s2"
                          type="text"
                          id="s2"
                          className="form-control my-4"
                          rows="2"
                          // className="inputcustom"
                          placeholder="Enter committee role"
                          value={singleService.s2}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                        <input
                          name="s3"
                          type="text"
                          id="s3"
                          className="form-control my-4"
                          placeholder="Enter head name"
                          // className="inputcustom"
                          value={singleService.s3}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                        <input
                          name="s4"
                          type="tel"
                          id="s4"
                          className="form-control my-4"
                          placeholder="Enter Phone no."
                          // className="inputcustom"
                          value={singleService.s4}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                        <input
                          name="s5"
                          type="email"
                          id="s5"
                          className="form-control my-4"
                          placeholder="Enter email address  "
                          // className="inputcustom"
                          value={singleService.s5}
                          onChange={(e) => handleServiceChange(e, index)}
                          required
                        />
                        <div className="row">
                          <div className="col-12">
                            {serviceList.length - 1 === index &&
                              serviceList.length < 100 && (
                                <button
                                  type="submit"
                                  onClick={(e) => handleServiceAdd(e)}
                                  className="inputbtn ib"
                                >
                                  Add another committee
                                </button>
                              )}
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
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <p className="mb-0 mx-3">
                <h5
                  className="mx-2 profilelogo"
                  style={{ textAlign: "center", margin: "20px" }}
                >
                  committee head details{" "}
                </h5>
              </p>
            </div>

            <div className="row" style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
              <div className="col-4">
                <div className="output">
                  {console.log(serviceList)}
                  {serviceList &&
                    serviceList.map((singleService, index) => (
                      <>
                        <p key={index} style={{ margin: "20px" }}>
                          <div className="card" style={{ width: "100%",display:"flex",justifyContent:"center",alignItems:"center" }}>
                            <div className="card-body">
                              <p className="card-title">
                                {singleService.s1 && (
                                  <h2>{singleService.s1}</h2>
                                )}
                              </p>
                              <p className="card-subtitle mb-2 text-muted">
                                {singleService.s3 && (
                                  <h5>{singleService.s3}</h5>
                                )}
                              </p>
                              <p className="card-subtitle mb-2 text-muted">
                                {singleService.s4 && (
                                  <h5>{singleService.s4}</h5>
                                )}
                              </p>
                              <p className="card-subtitle mb-2 text-muted">
                                {singleService.s5 && (
                                  <h5>{singleService.s5}</h5>
                                )}
                              </p>
                              <p className="card-subtitle mb-2 text-muted">
                                {singleService.s2 && (
                                  <h5>{singleService.s2}</h5>
                                )}
                              </p>
                            </div>
                          </div>

                          <hr />
                        </p>
                      </>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
