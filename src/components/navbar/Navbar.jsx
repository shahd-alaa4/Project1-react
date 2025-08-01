import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export default function Navbar() {
  return (
    <>
       <nav className="navbar navbar-expand-lg py-3">
  <div className="container">
    <NavLink className="navbar-brand text-white fs-1 fw-bold text-uppercase " to="">Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
        <li className="nav-item mx-2 ">
          <NavLink className="nav-link text-white fw-bold fs-5 text-uppercase" aria-current="page" to="About">About</NavLink>
        </li>
        <li className="nav-item mx-2 ">
          <NavLink className="nav-link text-white fw-bold fs-5 text-uppercase" to="Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link text-white fw-bold fs-5 text-uppercase" to="Contact">Contact</NavLink>
        </li>
     </ul>
    </div>
  </div>
</nav>
    </>
  )
}
