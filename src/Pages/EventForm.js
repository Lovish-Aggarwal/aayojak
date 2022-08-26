import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import "../css/Eventform.css";
export default function EventForm() {
  const { profile, setProfile, isopen } = useProfile();

  useEffect(() => {
    var temp = profile;
    temp.path = "/createEvent";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);

  const [navi,setnavi]=useState(false);
  const [values, setValues] = useState({
    userid: profile.user._id,
    title: "None",
    eventname: "",
    eventdetail: "",
    eventdate: "",
    organisation: "AICTE",
    location: "",
    noofparticipants: "",
    duration: 1,
    auditoriumid: "62f3fd84d1d24b368b06cbf6",
    canteenid: "62f3fd84d1d24b368b06cbf6",
    typeOfEvent: "",
    eventexpenditure: "",
    instituteid:"c407",
    tada: "",
    other: "",
    total: "500",
  });

  const handleChange = (event, name) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const submit = async(e) => {
    e.preventDefault();
    // console.log(JSON.stringify(values))
    const data = await fetch('http://localhost:3100/events/byAicte',{
      method:"POST",
      headers:{
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(values)
    })
    .then((res)=>{
         return res.json();
    })
    .catch((error)=>{
        //  console.log(error);
    })
    setnavi(true);
    // console.log(data);

  };

  // console.log("Create event page", profile);

  if(navi===true)
    return <Navigate to="/events"></Navigate>
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>

        <div className="col-9">
          <div className="row">
            <div className="jumbotron jumbotron-fluid col-12">
              <div className="containerjumbo">
                <h1 className="display-9">
                  <i className="fa fa-calendar " aria-hidden="true"></i> Event
                  registration form
                </h1>
              </div>
            </div>
          </div>

          <div className="row">
            <div className=" col-12">
              <div className="container">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label>Event name</label>
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, "eventname")}
                        className="form-control"
                        placeholder="Event name"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label htmlFor="birthday">Type of Event</label>
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, "typeOfEvent")}
                        className="form-control"
                        id="typeofevent"
                        name="typeofevent"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label htmlFor="exampleFormControlTextarea1">
                        Event detail
                      </label>
                      <textarea
                        className="form-control"
                        onChange={(e) => handleChange(e, "eventdetail")}
                        id="Eventdetail"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md">
                      <label htmlFor="birthday">Event date</label>
                      <input
                        type="date"
                        onChange={(e) => handleChange(e, "eventdate")}
                        className="form-control"
                        id="date"
                        name="date"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md">
                      <label htmlFor="birthday">Location</label>
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, "location")}
                        className="form-control"
                        id="location"
                        name="location"
                        placeholder="Location of Event i.e City"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label>Number of participants</label>
                      <input
                        type="number"
                        onChange={(e) => handleChange(e, "noofparticipants")}
                        className="form-control"
                        placeholder="no. of participants"
                      />
                    </div>
                    <div className="form-group col">
                      <label>Duration</label>
                      <input
                        type="number"
                        onChange={(e) => handleChange(e, "duration")}
                        className="form-control"
                        placeholder="no of days"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className=" col-12">
              <div className="container">
                <form>
                  <div className="form-row">
                    <div className=" form-group  col">
                      <label>Anticipated Expenditure</label>
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, "eventexpenditure")}
                        className="form-control align my-3"
                        placeholder="Pre-event expenditure"
                      />
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, "tada")}
                        className="form-control align my-3"
                        placeholder="TA and DA"
                      />
                      <input
                        type="text"
                        onChange={(e) => handleChange(e, "other")}
                        className="form-control align my-3"
                        placeholder="Other"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <button
                type="submit"
                className=" submitbtn btn btn-primary padd"
                onClick={(e) => submit(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
