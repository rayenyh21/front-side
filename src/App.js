
import './App.css';
import {Route,Routes} from "react-router-dom" 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Education from './pages/Education';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/education" element={<Education/>} />

      </Routes>
      </header>
      
    </div>
  );
}

export default App;
