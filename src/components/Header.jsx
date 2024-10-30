import React from 'react'
import LogoType from '../assets/Logos/Link.svg'
import DarkMode from '../components/DarkMode'

const Header = () => {
  return (
    <div>
       <header>

<div className="container">
    <a href="index.html"><img id="logo" src={LogoType} alt=""/></a>

    <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link-1" href="#">Contact</a>
    </nav>

    <DarkMode />

    

    <a id="auth-signin" href="#" className="btn-primary">
        <i className="fa-thin fa-user-large"></i>
        <span>sign in / up</span>
    </a>

    <button className="btn-mobile">
        <i className="fa-light fa-bars"></i>
    </button>



    

</div>

</header>
    </div>
  )
}

export default Header