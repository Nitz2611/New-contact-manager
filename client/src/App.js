import './normy.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import NewContact from './components/Home/NewContact';
import UpdateContact from './components/Home/UpdateContact';
import About from './components/Home/About';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<NewContact />} />
          <Route path="/updateContact/:id" element={<UpdateContact />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
