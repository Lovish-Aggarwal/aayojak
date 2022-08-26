import React,{useState} from "react";
import Mininavbar from "../components/Mininavbar";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useProfile } from "../context/ProfileContext";
import "../css/Eventcanteen.css";

export default function Eventcanteen() {
  
  const { isopen } = useProfile();
  //search
  let btndpl=false
  let [isbook,setbook] = useState(false);
  let [event,setEvent] = useState([]);
  let [canteens,setCanteen] = useState([]);
  const {profile,setProfile} = useProfile();

  // console.log("this is profile id")
  // console.log(profile.eventid);
  

  const bookAudi =(canteen)=>{


  // console.log("hey i am book audi function")
     let id = canteen._id;
    //  console.log(canteen)
    // console.log(event)

    fetch(`http://localhost:3100/canteen/bookCanteen/${profile.eventid}/${id}`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "Accept" : "application/json"
      },
      body:JSON.stringify({name:event.title,date:event.eventdate})
    })
    .then((res)=>{
        alert("booked successfully") 
    })
     .catch((err)=>{
        alert("already booked")
     }) 
  }


  
  function fetchCanteen(){
    fetch(`http://localhost:3100/canteen/getAllCanteen`,
    {
     method:"GET",
     headers:{
       Accept : "application/json"
     }
    }
   ).then((result)=>{
     result.json().then((ev)=>{
       setCanteen(ev)
       
      //  console.log("these are canteen")
      //  console.log(ev)
     })
       
   })
   .catch((err)=>{
    //  console.log(err)
   })
  }
  
  function fetchEvents(){
    fetch(`http://localhost:3100/events/getConfirmedEventById/${profile.eventid}`,{
      method:'GET',
      headers:{
         Accept: "application/json"  
      },
    }).then((result)=>{
       result.json().then((out)=>{
        // console.log(out)
          setEvent(out)
       })
    })
    .catch((err)=>{
      // console.log(err)
    })
  }
  

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


  // console.log(profile.eventid)
 if(canteens.length===0)
  fetchCanteen()
 if(event.length===0) 
  fetchEvents()
  
  return (
      
     (
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
              <h1>Canteen details</h1>
            </div>
          </div>

          <div className="container">
            <div className="row my-3">
              <div className="col-2 head">canteen name</div>
              <div className="col-2 head">Location</div>
              <div className="col-2 head">Email</div>
              <div className="col-2 head">Phone no.</div>
              <div className="col-4 head">Booking</div>
            </div>
            <hr />
           {
           
           event && canteens&&canteens.map((elem,index)=>{
              
              // console.log(event.eventdate)
            if(elem.location!==undefined &&event.location!==undefined&& elem.location.toUpperCase()===event.location.toUpperCase()){
              // console.log("hereee");
            return (<div className="row my-3" key={index}>
              <div className="col-2 head1">{elem.name}</div>
              <div className="col-2 head1">{elem.location}</div>
              <div className="col-2 head1">{elem.email}</div>
              <div className="col-2 head1">{elem.phonenumber}</div>
              <div className="col-4 head1">
                {" "}
                { 
                  btndpl=(event.eventdate!==undefined &&elem.whetherbooked.findIndex(x=>x.date===event.eventdate.split('T')[0])===-1)
                }
                {
                  btndpl&&<button className="editbtn1 my-3 mx-3" onClick={()=>{bookAudi(elem)}}>Book Canteen</button>
                }
                {
                  !btndpl&&<button className="editbtn1 my-3" disabled>Unavailable</button>
                }
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
           
              <div className="col-2 head">canteen name</div>
              <div className="col-3 head">Location</div>
              <div className="col-3 head">Email</div>
              <div className="col-2 head">Phone no.</div>
              <div className="col-2 head">Booking</div>
              {/* <div className="col-1 head">#</div> */}
            </div>
            <hr />
           
            {
              canteens && canteens.map(function(elem,index){
             return (<div className="row canteenalldata my-4" key={index}>
              
              <div className="col-2 head1">{elem.name}</div>
              <div className="col-3 head1 location">{elem.location}</div>
              <div className="col-3 head1">{elem.email}</div>
              <div className="col-2 head1">{elem.phonenumber}</div>
              
              <div className="col-1 head1">
                {
                (event.eventdate!==undefined && elem.whetherbooked.findIndex(x=>x.date===event.eventdate.split('T')[0])===-1)&& 
                <button className="editbtn1 my-3"  onClick={()=>{bookAudi(elem)}}>Book Canteen</button>
                }
                </div>
            
            </div>
            )
              })
            }
            
            
          </div>
        </div>
      </div>
    </div>
  ));
}
