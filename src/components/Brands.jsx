import React from 'react'
import Logo1 from '../assets/Logos/logo1.svg'
import Logo2 from '../assets/Logos/logo2.svg'
import Logo3 from '../assets/Logos/logo3.svg'
import Logo4 from '../assets/Logos/logo4.svg'
import Logo5 from '../assets/Logos/logo5.svg'
import Logo6 from '../assets/Logos/logo6.svg'
const Brands = () => {
  return (
    <div>
     <section id="brands">
                <div className="container">
                    <div id="brand-1" className="brand-box">
                        <img src={Logo1} alt=""/>
                    </div>
                    <div id="brand-2" className="brand-box">
                        <img src={Logo2} alt=""/>
                    </div>
                    <div id="brand-3" className="brand-box">
                        <img src={Logo3} alt=""/>
                    </div>
                    <div id="brand-4" className="brand-box">
                        <img src={Logo4} alt=""/>
                    </div>
                    <div id="brand-5" className="brand-box">
                        <img src={Logo5} alt=""/>
                    </div>
                    <div id="brand-6" className="brand-box">
                        <img src={Logo6} alt=""/>
                    </div>
                </div>
     </section>
    </div>
  )
}

export default Brands