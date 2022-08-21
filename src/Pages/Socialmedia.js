import React from "react";
import Mininavbar from "../components/Mininavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/Socialmedia.css";

import facebook from "../image/facebook-icon.png";
import instagram from "../image/instagram-icon.png";
import linkedin from "../image/linkedin-icon.png";
import twitter from "../image/twitter-icon.png";

export default function Socialmedia() {
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
        <div className="col-3 sidebar">
          <Sidebar />
        </div>

        <div className="col-9">
          <Mininavbar />

          <div className="row">
            <div className="col-12 profilelogo">
              <h1>Update on Socialmedia</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 inputphoto">
              <form>
                <input
                  type="file"
                  name="myfile"
                  className=" editbtn2"
                  onChange={myHandler}
                />

                <div className="form-row">
                  <div className="form-group col-md">
                    <label htmlFor="exampleFormControlTextarea1">
                      Caption...
                    </label>
                    <textarea
                      className="form-control"
                      id="caption"
                      rows="3"
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
                <div className="col-5 head"><img src={facebook} className="icon"/></div>
                {/* <div className="col-1 head">#</div> */}
              </div>
              <hr />
              <div className="row">
                <div className="col-2 head"><input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  /></div>
                <div className="col-5 head"><img src={instagram} className="icon"/></div>
                {/* <div className="col-1 head">#</div> */}
              </div>
              <hr /><div className="row">
                <div className="col-2 head"><input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  /></div>
                <div className="col-5 head"><img src={linkedin} className="icon"/></div>
                {/* <div className="col-1 head">#</div> */}
              </div>
              <hr /><div className="row">
                <div className="col-2 head"><input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  /></div>
                <div className="col-5 head"><img src={twitter} className="icon"/></div>
                {/* <div className="col-1 head">#</div> */}
              </div>
              <hr />
                </div>

                <button className="loginbtn my-3">Upload ON </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
