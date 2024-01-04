import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark bg-gradient">
          <div className="container-fluid ">
            <Link to='/' className="navbar-brand text-primary">Contact Manager</Link>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item " >
                  <NavLink exact to='/' className="nav-link" style={{color: 'white'}}>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/register' className="nav-link" style={{color: 'white'}} >Signup</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}
