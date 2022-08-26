import React, { useEffect } from "react";
import Mininavbar from "../components/Mininavbar";
import Navbar from "../components/Navbar";
import { useProfile } from "../context/ProfileContext";
import Sidebar from "../components/Sidebar";

export default function Email() {
  const { profile, setProfile, isopen } = useProfile();

  useEffect(() => {
    var temp = profile;
    // temp.path = "/socialmedia";
    // console.log(temp)
    setProfile(temp);
  }, [profile, setProfile]);

  function func(e) {
    console.log("i am here");
    e.preventDefault();

    fetch("127.0.0.1:3100/emails/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        receiver: [{ email: "lovishagg1@gmail.com" }],
        subject: "test v1",
        message: "aayojak",
      }),
    })
      .then(() => {
        alert("mail sent success");
      })
      .catch(() => {
        alert("error in sending email");
      });
  }

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
              <h1>Email system</h1>
            </div>
          </div>

          <div className="row" style={{ margin: "30px" }}>
            <div className="col-8">
              <form>
                <label>Enter Email address</label>
                <br />
                <br />
                <input
                  type="email"
                  name="email"
                  //   className=" editbtn2"
                />
                <br />
                <br />

                <label>Enter subject</label>
                <br />
                <br />
                <input
                  type="text"
                  name="subject"
                  //   className=" editbtn2"
                />
                <br />
                <br />

                <div className="form-row">
                  <div className="form-group col-md">
                    <label>Enter detail</label>
                    <textarea
                      className="form-control"
                      id="caption"
                      rows="3"
                    ></textarea>
                  </div>
                </div>

                <button
                  className="loginbtn my-3"
                  onClick={(e) => {
                    func(e);
                  }}
                >
                  Upload ON{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
