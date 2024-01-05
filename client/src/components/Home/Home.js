
import '../../normy.css'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [users, setUsers] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3001')
          .then(result => setUsers(result.data))
          .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
      axios.delete('http://localhost:3001/deleteUser/' + id)
          .then(res => {
              console.log(res)
              window.location.reload()
          })
          .catch(errr => console.log(errr))
  }
  return (
    <div className='d-flex'>
      
       <SideNav/>
       <div className='d-flex vh-100 vw-100 justify-content-center bg-primary  align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {

                                return <tr>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.age}
                                    </td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger'
                                            onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}
