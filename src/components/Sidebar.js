import React from 'react'
import { NavLink } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import "../css/Sidebar.css"
import profile from "../logo/Aayojak-logos/aayojaklogo1.jpg";
export default function Sidebar() {
  const {isopen}= useProfile();
  // console.log(isopen);
  return (
    <div style={{display : isopen===false ? "none" : ""}}>
          <div className="row">
            <div className="col-12">
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile" />
                </div>
              </div>
              <h1 className="username">Aayojak</h1>
              <hr />
              <NavLink to="/users" className="link">
                Profile
              </NavLink>
              <NavLink to="/events" className="link">
                Events
              </NavLink>
              <NavLink to="/socialmedia" className="link">
                Socialmedia
              </NavLink>
              <NavLink to="/email" className="link">
                Email
              </NavLink>
            </div>
          </div>
        </div>
  )
}
