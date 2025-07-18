import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">Mysite</div>
      <ul className="nav-links">
        <li><a href="">Home</a></li>
        <li><a href="">about</a></li>
        <li><a href="">contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar