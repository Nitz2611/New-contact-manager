
import '../../normy.css'
import SideNav from './SideNav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/home')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteContact/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(errr => console.log(errr))
    }
    return (
        <div className='d-flex'>

            <SideNav />
            <div className='d-flex vh-100 vw-100 justify-content-center bg-primary  align-items-center'>

                <div className='bg-white rounded p-3 custSize1'>
                    <form className="form-inline my-2 my-lg-0  d-flex ">
                        <input className="form-control mr-sm-2 searchBox1" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 ms-2" type="submit">Search</button>
                    </form>
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
                                users.map((contact) => {

                                    return <tr>
                                        <td>
                                            {contact.name}
                                        </td>
                                        <td>
                                            {contact.email}
                                        </td>
                                        <td>
                                            {contact.age}
                                        </td>
                                        <td>
                                            <Link to={`/updateContact/${contact._id}`} className='btn btn-success me-2'>Update</Link>
                                            <button className='btn btn-danger'
                                                onClick={(e) => handleDelete(contact._id)}>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <nav aria-label="Page navigation example" className='pagination-child'>
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
                    
            </div>
        </div>
    )
}
