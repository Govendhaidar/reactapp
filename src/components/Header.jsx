import React from 'react'

const Header = () => {
  return (
    <div>
       <header>

<div className="container">
    <a id="logo" href="index.html"><img src="Link.svg" alt=""/></a>

    <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">features</a>
    </nav>

    <div  id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">dark mode</span>
        <label htmlFor="dark mode-switch" className="toggle-switch">
            <input id="dark mode-switch" type="checkbox"/>
            <span className="slider round"></span>

        </label>
    </div>

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