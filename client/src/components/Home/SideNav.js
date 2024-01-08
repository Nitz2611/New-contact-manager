import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, NavLink } from 'react-router-dom';

export default function sideNavbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style={{width: "280px"}}>
    <NavLink exact to='/home' className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <i class="bi bi-person-rolodex forSize"></i>
      <span className="fs-4">Contact Manager</span>
    </NavLink>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink to='/home' className="nav-link active" aria-current="page">
        <i class="bi bi-house-door icon-space"></i>
          Contacts
        </NavLink>
      </li>
      <li>
        <NavLink to='/create' className="nav-link text-white">
        <i class="bi bi-pencil-square icon-space "></i>
          Add New Contact
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className="nav-link text-white">
        <i class="bi bi-book-half icon-space "></i>
          About
        </NavLink>
      </li>
      
      
     
    </ul>
    <hr/>
    <div className="dropdown">
      <div className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://avatars.githubusercontent.com/u/75838617?s=96&v=4" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Nitish Sharma</strong>
      </div>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
        
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link to='/' className="dropdown-item" >Sign out</Link></li>
      </ul>
    </div>
  </div>
  )
}
