import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {

    //setting variables
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const navigate = useNavigate()


    //submit handling function
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register',{name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary " style={{height: '92vh'}}>
        <div className="bg-dark p-3 rounded w-25 text-light">
            <h2>Register</h2>
            <form 
            onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Name</strong>
                    </label>
                    <input type="text" 
                    placeholder="Enter Name" 
                    autoComplete="off" 
                    name="email" 
                    className="form-control rounded-0"
                    onChange={(e) => setName(e.target.value)}
                     /> 
                    {/* here onChange event sets name when we submit */}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">
                        <strong>Eamil</strong>
                    </label>
                    <input type="email"
                    placeholder="Enter Email" 
                    autoComplete="off" 
                    name="email" 
                    className="form-control rounded-0" 
                    onChange={(e) => setEmail(e.target.value)}
                    />

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
                    Register
                </button>
                <p>Already have an Account</p>
                
            </form>
            <Link to="/"  className="btn btn-primary border w-100 rounded-0 text-decoration-none">
                    Login
             </Link>

        </div>
    </div>
  );
}

export default Signup;