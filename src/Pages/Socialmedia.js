import React, { useEffect, useState } from "react";
import Mininavbar from "../components/Mininavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import "../css/Socialmedia.css";

import facebook from "../image/facebook-icon.png";
import instagram from "../image/instagram-icon.png";
import linkedin from "../image/linkedin-icon.png";
import twitter from "../image/twitter-icon.png";

export default function Socialmedia() {


  const { profile, setProfile, isopen } = useProfile();
  const [values, setValues] = useState({
    "text": ""
  })


  const handleChange = (event, name) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  useEffect(() => {
    var temp = profile;
    temp.path = "/socialmedia";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);

  const submit = async (e) => {
    e.preventDefault();
    console.log(values)
    const data = await fetch('http://localhost:3100/twitter/postTweet', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(values)
    })
      .then((res) => {
        alert("Tweet Send Succesfully !!")
        return res.json();
      })
      .catch((error) => {
        console.log(error);
      })
  }
  const myHandler = (events) => {
    console.log(events.target.files[0]);
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <Navbar />
        </div>
      </div>

      <div className="row" style={{ height: "100vh" }}>
        <div className={isopen ? "col-3 sidebar" : ""}>
          <Sidebar />
        </div>

        <div className={isopen ? "col-9" : "col-12"}>
          <Mininavbar />

          <div className="row">
            <div className="col-12 profilelogo">
              <h1>Update on Socialmedia</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 inputphoto">
              <form>
                {/* <input
                  type="file"
                  name="myfile"
                  className=" editbtn2"
                  onChange={myHandler}
                /> */}

                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="exampleFormControlTextarea1" style={{width:"30em",fontSize:"2em"}}>
                      Caption...
                    </label>
                    <textarea
                      className="form-control"
                      onChange={(e) => handleChange(e, "text")}
                      id="caption"
                      value={`Hello everyone!
                      #SIH2022 #code404`}
                      rows="5"
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 my-5" >
                  <div className="row">
                    <div className="col-2 head"><input
                      type="checkbox"
                      aria-label="Checkbox"
                      className="check"
                    /></div>
                    <div className="col-5 head1"><img src={twitter} alt="" className="icon head1" /></div>
                    {/* <div className="col-1 head">#</div> */}
                  </div>
                  <hr />
                </div>

                <button className="loginbtn my-3" onClick={(e) => submit(e)}>Upload ON </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
