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
        <div className='col-3 sylebut'>
            <NavLink to="/eventCanteen" className='color'>Canteen detail</NavLink>
        </div>
        <div className='col-3 sylebut'>
            <a href="/" className='color'>Auditorium</a>
        </div>
        <div className='col-2 sylebut'>
            <a href="/" className='color'>Social media</a>
        </div>
        <div className='col-2 sylebut'>
            <a href="/" className='color'>Email</a>
        </div>
      </div>
    </div>
  )
}
