import React,{useState} from "react";
import Mininavbar from "../components/Mininavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import "../css/Eventcanteen.css";

export default function Eventcanteen() {
  //search

  let [event,setEvent] = useState();

  let [canteens,setCanteen] = useState();

  const {profile,setProfile} = useProfile();
 
  console.log("this is profile id")
  console.log(profile.eventid);

  React.useEffect(() => {
    
   
   
    
  let search = document.getElementById("search");
search.addEventListener("input", searchinrow);
function searchinrow() {
  let input = search.value;
  let canteenalldata = document.getElementsByClassName("canteenalldata");
  // console.log(canteenalldata);
  Array.from(canteenalldata).forEach((e) => {
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
    let canteenalldata = document.getElementsByClassName("canteenalldata");
    Array.from(canteenalldata).forEach((e) => {
      e.style.display="";
    })
  }
}



return () => {
  search.removeEventListener("input", searchinrow);
};
  },[]);


  
  console.log(profile.eventid)
  return (
  //   (fetch(`http://localhost:3100/canteen/getAllCanteen`,
  //   {
  //    method:"GET",
  //    headers:{
  //      Accept : "application/json"
  //    }
  //   }
  //  ).then((result)=>{
  //    result.json().then((ev)=>{
  //      setCanteen(ev)
       
  //      console.log("these are canteen")
  //      console.log(ev)
  //    })
       
  //  })
  //  .catch((err)=>{
  //    console.log(err)
  //  }))&&
  //   ( fetch(`http://localhost:3100/events/getConfirmedEventById/${profile.eventid}`,{
  //     method:'GET',
  //     headers:{
  //        Accept: "application/json"  
  //     },
  //   }).then((result)=>{
  //      result.json().then((out)=>{
  //       console.log(out)
  //         setEvent(out)
  //      })
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  //   )&&
    <div>
      <div className="row">
        <div className="col-12 head">
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
              <h1>Canteen details</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-2 head">canteen name</div>
              <div className="col-2 head">Location</div>
              <div className="col-2 head">Email</div>
              <div className="col-2 head">Phone no.</div>
              <div className="col-2 head">Quotes</div>
              <div className="col-2 head">#</div>
            </div>
            <hr />
           {
           
           event && canteens&&canteens.map((elem,index)=>{
              console.log(elem.location)
              console.log(event.location)
            if(elem.location.toUpperCase()===event.location.toUpperCase()){
              console.log("hereee");
            return (<div className="row" key={index}>
              <div className="col-2 head1">bsc canteen</div>
              <div className="col-2 head1">opp kuk </div>
              <div className="col-2 head1">abc @abc.com</div>
              <div className="col-2 head1">7894561230</div>
              <div className="col-2 head1">365420</div>
              <div className="col-2 head1">
                {" "}
                <button className="editbtn1 my-3">send email</button>
              </div>
            </div>)
            }
            })
          }
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
                Add Canteen
              </button>
            </div>
          </div>

          <div className="container" id="table" style={{ display: "none" }}>
            <div className="row">
              <div className="col-12 profilelogo">
                <h1>Canteen List's</h1>
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
              <div className="col-2 head">canteen name</div>
              <div className="col-2 head">Location</div>
              <div className="col-2 head">Email</div>
              <div className="col-2 head">Phone no.</div>
              <div className="col-2 head">Quotes</div>
              {/* <div className="col-1 head">#</div> */}
            </div>
            <hr />
           
            {
              canteens && canteens.map(function(elem,index){
             return (<div className="row canteenalldata" key={index}>
              <div className="col-2">
                <input
                  type="checkbox"
                  aria-label="Checkbox"
                  className="check"
                />
              </div>
              <div className="col-2 head1">{elem.name}</div>
              <div className="col-2 head1 location">delhi</div>
              <div className="col-2 head1">abc @abc.com</div>
              <div className="col-2 head1">7894561230</div>
              <div className="col-2 head1">365420</div>
              {/* <div className="col-1 head1">
                <button className="editbtn1 my-3">send email</button>
              </div> */}
            
            </div>
            )
              })
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
