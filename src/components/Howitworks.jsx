import React from 'react'
import Vänster from '../assets/Logos/iphone vänster.svg'
import Mitten from '../assets/Logos/iphone mitten.svg'
import Höger from '../assets/Logos/iphone höger.svg'

const Howitworks = () => {
  return (
    <div>
       <section id="how-it-works">

<div className="h2">
    <h2>How Does It Work?</h2>
</div>

<div className="container-2">
    <div className="iphones">
      <img src={Vänster} alt="vänster" className="phone-img"/>  
    </div>

    <div className="iphones">
        <img src={Mitten} alt="mitten" className="phone-img"/>  
      </div>
    
      <div className="iphones">
        <img src={Höger} alt="höger" className="phone-img"/>  
      </div>
   </div>

      <div className="text-nedre">
        <h3>Latest transaction history</h3>
        <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. <br/> Arcu sociis tristique quisque hac in consectetur condimentum. </p>

      </div>



</section>

    </div>
  )
}

export default Howitworks