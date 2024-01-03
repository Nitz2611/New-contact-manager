import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
// import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
