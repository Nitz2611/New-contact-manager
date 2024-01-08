import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



function Login(){

    
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001',{email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){

                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }

    return(
        <>
        <Navbar/>
        <div className="d-flex justify-content-center align-items-center bg-secondary" style={{height: '92vh'}}>
        <div className="bg-dark p-3 rounded w-25 text-light">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="email"
                    placeholder="Enter Email" 
                    autoComplete="off" 
                    name="email" 
                    className="form-control rounded-0" 
                    onChange={(e) => setEmail(e.target.value)}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Password</strong>
                    </label>
                    <input type="password"
                    placeholder="Enter Password" 
                    autoComplete="off" 
                    name="password" 
                    className="form-control rounded-0" 
                    onChange={(e) => setPassword(e.target.value)}/>

                </div>

                <button type="submit" className="btn btn-success w-100 rounded-0">
                    Login
                </button>
                
            </form>
            
            <p>Don't have an Account</p>
            <Link to="/register"  className="btn btn-primary border w-100 rounded-0 text-decoration-none">
                    Sign up
             </Link>
        </div>
        
    </div>
    </>
    )

}

export default Login;
