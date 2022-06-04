import React from 'react'
import Logo from './pics/logo.png'

export default function Navbar() {

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
    <img src={Logo} className="my-logo" alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">ABOUT US
          </a>
          <hr className=' mynav-line'></hr>
        </li>
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">PROJECTS
          </a>
          <hr className=' mynav-line'></hr>
        </li>
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">DIVERSIFICATION
          </a>
          <hr className=' mynav-line'></hr>
        </li>
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">OUR PROCESS
          </a>
          <hr className=' mynav-line'></hr>
        </li>
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">TESTIMONIALS
          </a>
          <hr className=' mynav-line'></hr>
        </li>
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">CAREERS
          </a>
          <hr className=' mynav-line'></hr>
        </li>
        <li className="nav-item mynav-li">
          <a className="nav-link mynav-text" aria-current="page" href="/">CONTACT US
          </a>
          <hr className=' mynav-line'></hr>
        </li>
       </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
