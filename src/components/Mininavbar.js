import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Mininavbar.css'

export default function Mininavbar() {
  return (
    <div>
      <div className='row'>
        <div className='col-2 sylebut'>
            <NavLink to="/eventDashboard" className='color'>Dashboard</NavLink>
        </div>
        <div className='col-2 sylebut'>
            <NavLink to="/committee" className='color'>Committees</NavLink>
        </div>
        <div className='col-2 sylebut'>
            <NavLink to="/eventCanteen" className='color'>Canteen Booking</NavLink>
        </div>
        <div className='col-2 sylebut'>
            <NavLink to="/eventaudi" className='color'>Auditorium Booking</NavLink>
        </div>
        <div className='col-2 sylebut'>
            <NavLink to="/activitylog" className='color'>Activity Log</NavLink>
        </div>
        <div className='col-2 sylebut'>
            <NavLink to="/report" className='color'>Report</NavLink>
        </div>
      </div>
    </div>
  )
}
