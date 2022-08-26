import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import "../css/Eventmain.css";

export default function Eventmain() {
  // let data = [];
  // console.log("component reloaded");
  const { profile, setProfile, isopen } = useProfile();
  const [test, setTest] = useState([]);
  const [navidone,setnavidone]= useState(false);
    const navi=(id)=>{
      // console.log("swww")
      // console.log(id)

      setProfile({...profile,eventid:id})
      setnavidone(true)
      // console.log(profile)
    }
  async function getAllEvents(id) {
    let res;

    try {
      res = await fetch(
        `http://localhost:3100/events/getAllConfirmedEvents/62f206fb51f34884e7a6f35b`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
      // console.log(res)
    } catch (err) {
      // console.log(err);
    }

    return res.json();
  }

  useEffect(() => {
    getAllEvents("62f206fb51f34884e7a6f35b").then((res) => {
      // console.log(res.obj);
      setTest(res.obj);
    });
  
  }, [])
  
  
 
  useEffect(() => {
    var temp = profile;
    temp.path = "/events";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);
  if(navidone===true)
    {
    // console.log("navigate to event dashboard")
    return <Navigate to="/eventDashboard"></Navigate>
    }
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      <div className="row ">
        <div className={isopen ? "col-3 sidebar" : ""}>
          <Sidebar />
        </div>

        <div className={isopen ? "col-9" : "col-12"}>
          <div className="row">
            <div className="col-10 profilelogo">
              <h1>Events</h1>
            </div>
            <div className="col-2 faviconplus">
              <NavLink to="/createEvent">
                <i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
              </NavLink>
            </div>
          </div>
          {/* {console.log("test dddd",profile.userType)} */}
          <div className="row" style={{display : profile.userType!=="Aicte" ? "":"none"}}>
            <div className="jumbotron jumbotron-fluid col-12">
              <div className="containerjumbo">
                <h1 className="display-9">Approved</h1>
              </div>
            </div>
          </div>
          
          <div className="row">
              {test.map(function (elem,index) {
                // console.log("i am here");
                return (
                  <div className="container col-3" key={index}>
              <div className="card" style={{ width: "auto" }}>
                <div className="card-body">
                  <h5 className="card-title">{elem.title}</h5>
                  <p className="card-text">
                    {/* {elem.eventdetail}
                    {console.log(elem._id)} */}
                  </p>
                  <i className="btn btn-primary" onClick={() => navi(elem._id)}>
                    View Detail
                  </i>
                </div>
              </div>
            </div>
                );
              })}
              
              </div>
              

          <div className="row" style={{display : profile.userType!=="Aicte" ? "":"none"}}>
            <div
              className="jumbotron jumbotron-fluid col-12"
              style={{ marginTop: "30px" }}
            >
              <div className="containerjumbo">
                <h1 className="display-9">Pending</h1>
              </div>
            </div>
          </div>

          <div className="row" style={{display : profile.userType!=="Aicte" ? "":"none"}}>
            <div className="container col-12">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="/" className="btn btn-primary">
                    View Detail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
