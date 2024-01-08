import React, { useState } from 'react'
import SideNav from './SideNav'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewContact() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/create", { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }
  return (
    

    <div className='d-flex'>
        <SideNav/>
        <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Contact</h2>
                    <div className="mb2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder='Enter Age' className='form-control'
                            onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Create</button>
                </form>
            </div>
        </div>
    </div>
  )
}
