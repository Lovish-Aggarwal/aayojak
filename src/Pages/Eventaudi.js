import React from 'react'
import Mininavbar from "../components/Mininavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../css/Eventaudi.css";
import { useProfile } from "../context/ProfileContext";

export default function Eventaudi() {
  
  const { isopen } = useProfile();
   //search
   React.useEffect(() => {
    let search = document.getElementById("search");
  search.addEventListener("input", searchinrow);
  function searchinrow() {
    let input = search.value;
    let audialldata = document.getElementsByClassName("audialldata");
    // console.log(canteenalldata);
    Array.from(audialldata).forEach((e) => {
      let td1 = e.getElementsByClassName("location");
      Array.from(td1).forEach((el) => {
        let tdd1 = el.innerText;
        if (tdd1.includes(input)) {
        } else {
          e.style.display = "none";
        }
  
      });    
    })
  
    if(input===""){
      let audialldata = document.getElementsByClassName("audialldata");
      Array.from(audialldata).forEach((e) => {
        e.style.display="";
      })
    }
  }
  
  
  
  
  return () => {
    search.removeEventListener("input", searchinrow);
  };
    },[]);
  
  
  
  
  
    return (
      <div>
        <div className="row">
          <div className="col-12 head">
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
                <h1>Auditorium details</h1>
              </div>
            </div>
  
            <div className="container">
              <div className="row">
                <div className="col-2 head">Auditorium name</div>
                <div className="col-2 head">Location</div>
                <div className="col-2 head">Email</div>
                <div className="col-2 head">Phone no.</div>
                <div className="col-2 head">Quotes</div>
                <div className="col-2 head">#</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-2 head1">Geeta sadan</div>
                <div className="col-2 head1">kurukshetra </div>
                <div className="col-2 head1">abc @abc.com</div>
                <div className="col-2 head1">7894561230</div>
                <div className="col-2 head1">365420</div>
                <div className="col-2 head1">
                  {" "}
                  <button className="editbtn1 my-3">send email</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12 addbutton">
                <button
                  className="editbtn my-3"
                  onClick={() => {
                    if (
                      document.getElementById("table").style.display === "none"
                    ) {
                      document.getElementById("table").style.display = "";
                    } else {
                      document.getElementById("table").style.display = "none";
                    }
                  }}
                >
                  Add Auditorium
                </button>
              </div>
            </div>
  
            <div className="container" id="table" style={{ display: "none" }}>
              <div className="row">
                <div className="col-12 profilelogo">
                  <h1>Auditorium List's</h1>
                  <form className="form-inline my-2 my-lg-0 searchbtn">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      id="search" 
                    />
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-2 head">*</div>
                <div className="col-2 head">Auditorium name</div>
                <div className="col-2 head">Location</div>
                <div className="col-2 head">Email</div>
                <div className="col-2 head">Phone no.</div>
                <div className="col-2 head">Quotes</div>
                {/* <div className="col-1 head">#</div> */}
              </div>
              <hr />
              <div className="row audialldata">
                <div className="col-2">
                  <input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  />
                </div>
                <div className="col-2 head1">geeta sadan</div>
                <div className="col-2 head1 location">kurukshetra </div>
                <div className="col-2 head1">abc @abc.com</div>
                <div className="col-2 head1">7894561230</div>
                <div className="col-2 head1">365420</div>
                {/* <div className="col-1 head1">
                  <button className="editbtn1 my-3">send email</button>
                </div> */}
              </div>
              <hr />
              <div className="row audialldata">
                <div className="col-2">
                  <input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  />
                </div>
                <div className="col-2 head1">DU</div>
                <div className="col-2 head1 location">delhi</div>
                <div className="col-2 head1">abc @abc.com</div>
                <div className="col-2 head1">7894561230</div>
                <div className="col-2 head1">365420</div>
                {/* <div className="col-1 head1">
                  <button className="editbtn1 my-3">send email</button>
                </div> */}
              </div>
              <hr/>
              <div className="row audialldata">
                <div className="col-2">
                  <input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  />
                </div>
                <div className="col-2 head1">IPU audi</div>
                <div className="col-2 head1 location">delhi</div>
                <div className="col-2 head1">abc @abc.com</div>
                <div className="col-2 head1">7894561230</div>
                <div className="col-2 head1">365420</div>
                {/* <div className="col-1 head1">
                  <button className="editbtn1 my-3">send email</button>
                </div> */}
              </div>
              <hr/>
              <div className="row audialldata">
                <div className="col-2">
                  <input
                    type="checkbox"
                    aria-label="Checkbox"
                    className="check"
                  />
                </div>
                <div className="col-2 head1">Tagore sadan </div>
                <div className="col-2 head1 location">kurukshetra</div>
                <div className="col-2 head1">abc @abc.com</div>
                <div className="col-2 head1">7894561230</div>
                <div className="col-2 head1">365420</div>
                {/* <div className="col-1 head1">
                  <button className="editbtn1 my-3">send email</button>
                </div> */}
              </div>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    );
}
