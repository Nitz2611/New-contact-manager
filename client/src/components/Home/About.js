import React from 'react'
import SideNav from './SideNav'

export default function About() {
  return (
    <div className='d-flex'>
      <SideNav/>
      <div className="container bg-light vh-100 vw-100">
      <h1>About Contact Manager</h1>
      <p>
        Welcome to the Contact Manager website! This is a simple application built
        using the MERN stack (MongoDB, Express.js, React, Node.js).
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam.
      </p>
      {/* Add more information about your application */}
    </div>
    </div>
  )
}
