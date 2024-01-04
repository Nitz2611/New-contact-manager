import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
export default function sideNavbar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark vh-100" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
        <i className="bi bi-house-door-fill"></i>
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
        <i className="bi bi-speedometer2"></i>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
        <i className="bi bi-speedometer2"></i>
          Dashboard
        </a>
      </li>
     
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://avatars.githubusercontent.com/u/75838617?s=96&v=4" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Nitish Sharma</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1" >
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
  )
}
