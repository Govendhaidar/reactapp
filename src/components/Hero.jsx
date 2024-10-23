import React from 'react'

const Hero = () => {
  return (
    <div>
       <section id="hero">
            <div class="container">
                <div class="headline">
                    <h1>Manage All Your Money in One App</h1>
                </div>
                <div class="content">
                    <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                    <div class="buttons">
                        <a class="btn-download-app" href="#"><img src="Logos/appstore.svg" alt="appstore"/></a>
                        <a class="btn-download-app" href="#"><img src="Logos/googleplay.svg" alt="google play"/></a>
                    </div>

                   <a href="#"class="discover-more">
                    <span class= "btn-circle">
                        <i class="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>
                   </a>
                    
                </div>

                <div class="images">
                   <img class="img-back" src="Logos/iphone-mybudget.svg" alt="iphone my budget"/>
                   <img class="img-front" src="Logos/iphone.svg" alt="iphone"/>

                </div>
            </div>
 
        </section>
    </div>
  )
}

export default Hero