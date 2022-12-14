import React from 'react'
import Logo from "../../assets/Logo.svg"
import "./Navbar.css"
import searchNormal from "../../assets/searchNormal.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={Logo} className="logo" alt="" />

      <div className='container'>
        <ul className='nav'>
            <li> <a href="#" style={{color:'red'}}>Home</a> </li>
            <li className ="team"> <a href="#"> Teams </a><i class="fa fa-caret-down "></i></li>
            <li> <a href="#">FAQs </a> </li>
            <li> <a href="#">About HNG</a> </li>
        </ul>

        <div className="search-div">
        <form className='search-form'>
            <img src={searchNormal} alt="" />
            <input type="text" className='search-input' placeholder='Search about HNG, teams and mentors'/>
        </form>
        </div>
            
        
        </div>
    </div>
  )
}

export default Navbar
