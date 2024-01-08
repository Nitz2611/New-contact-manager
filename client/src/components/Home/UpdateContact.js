import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateContact() {

    const { id } = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getContact/' + id)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/updateContact/' + id, { name, email, age })
            .then(result => {
                console.log(result)
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={update}>
                    <h2>Update User</h2>
                    <div className="mb2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb2">
                        <label htmlFor="">Age</label>
                        <input type="number" placeholder='Enter Age' className='form-control'
                            value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success mt-2">Update</button>
                </form>
            </div>
        </div>
    )
}
