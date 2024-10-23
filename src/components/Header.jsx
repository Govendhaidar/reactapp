import React from 'react'

const Header = () => {
  return (
    <div>
       <header>

<div class="container">
    <a id="logo" href="index.html"><img src="Link.svg" alt=""/></a>

    <nav id="main-menu" class="navbar">
        <a class="nav-link" href="#">features</a>
    </nav>

    <div  id="darkmode-toggle-switch" class="btn-toggle-switch">
        <span class="label">dark mode</span>
        <label for="dark mode-switch" class="toggle-switch">
            <input id="dark mode-switch" type="checkbox"/>
            <span class="slider round"></span>

        </label>
    </div>

    <a id="auth-signin" href="#" class="btn-primary">
        <i class="fa-thin fa-user-large"></i>
        <span>sign in / up</span>
    </a>

    <button class="btn-mobile">
        <i class="fa-light fa-bars"></i>
    </button>



    

</div>

</header>
    </div>
  )
}

export default Header