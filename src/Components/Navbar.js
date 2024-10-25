import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'
import './NavbarStyle.css';


const Navbar = () => {
  //for authantofication 
  const {isAuth} = useSelector(state=> state.user)
  const dispatch = useDispatch()
  return (
    <>

    <div className="container text-center">
  {isAuth ? (
    <div className="link-container">
      <Link to="/home">Home</Link>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  ) : (
     <div className="link-container">
          <div id="logo"> 
            <img src='https://www.adobe.com/express/learn/blog/media_196e5176585a00903655922c802ee1e507bb0a6e8.png?width=750&format=png&optimize=medium' />
         </div> 
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/register">Education</Link>
          <a href="mailto:grayenyahyaouiarab2@gmail.com">Contact</a>

      </div>
  )}
</div>


</>
  );
};

export default Navbar
