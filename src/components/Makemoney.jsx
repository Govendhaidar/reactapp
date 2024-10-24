import React from 'react'
import Circle1 from '../assets/Logos/bx-check-circle.svg'
import Circle2 from '../assets/Logos/bx-check-circle.svg'
import Circle3 from '../assets/Logos/bx-check-circle.svg'
import Pil from '../assets/Logos/pil.svg'
import Sendmoney from '../assets/Logos/sendmoney.svg'

const Makemoney = () => {
  return (
    <div>
       <section className="make-money">
            <div className="container-3">
                    <h2>Make your money <br/> transfer simple and clear</h2>
                    <div className="p-1">

                        <img src={Circle1} alt=""/>
                        <p>Banking transactions are free for you </p>
                        
                    </div>
                    
                    <div className="p-2">
                        <img src={Circle2} alt=""/>
                        <p>No monthly cash commission</p>
                    </div>

                    <div className="p-3">
                        <img src={Circle3} alt=""/>
                        <p>Manage payments and transactions online</p>
                    </div>
                   
                        
                        
                        
                        
                    
                    <button className="btn-learn-more">Learn more
                        <img src={Pil} alt=""/>
                    </button>

                    

             </div>
                    <div className="send-money">
                        <img src={Sendmoney} alt="" className="bild-övre"/>
                    </div>
                  
        </section>

    </div>
  )
}

export default Makemoney