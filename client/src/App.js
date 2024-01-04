import './normy.css';
import { BrowserRouter as Router, Routes, Route, NavLink,Link } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'


function App() {
  return (
    <div>
      <Router>

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

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
