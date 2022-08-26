import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../css/Profile.css";
import "../components/Sidebar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
export default function Profile() {
  const { profile, setProfile, isopen } = useProfile();

  useEffect(() => {
    var temp = profile;
    temp.path = "/users";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);
  // console.log("profile page",profile)
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
            <div className="col-12 profilelogo">
              <h1>Profile</h1>
            </div>
          </div>
          {/* data and button */}
          <div className="row">
            <div className="col-12 column1">
              <div className="container detail">
                <div className="col-lg-10">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Full Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">John Smith</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Email</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">example@example.com</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Phone</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">(097) 234-5678</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Mobile</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">(098) 765-4321</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            Bay Area, San Francisco, CA
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 column1">
              <button className="editbtn my-3">Edit profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
