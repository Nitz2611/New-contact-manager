import React from 'react'
import SideNav from '../SideNav'

export default function Profile() {
  return (
    <div className='d-flex'>
      <SideNav />
      <div className='vh-100 vw-100 bg-secondary justify-content-center align-items-center d-flex'>
        <div className='bg-dark p-3 rounded w-25 text-light'>
          <form action="">
            <div>
              upload your profile picture
            </div>
            <div>
              <h2>update your profile details</h2>
              <div className="mb-3">
                <label htmlFor="name">
                  <strong>Name</strong>
                </label>
                <input type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                // onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
