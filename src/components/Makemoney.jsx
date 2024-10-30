import React from 'react'
import Circle from '../assets/Logos/bx-check-circle.svg'
import Pil from '../assets/Logos/pil.svg'
import Sendmoney from '../assets/Logos/sendmoney.svg'
import Ikon1 from '../assets/Logos/ikon1.svg'
import Ikon2 from '../assets/Logos/ikon2.svg'
import Contact from '../assets/Logos/contacts.svg'

const Makemoney = () => {
  return (
    <div>
       <section className="make-money">
            <div className="container-3">
                    <h2>Make your money <br/> transfer simple and clear</h2>
                    <div className="p-1">

                        <img src={Circle} alt=""/>
                        <p>Banking transactions are free for you </p>
                        
                    </div>
                    
                    <div className="p-2">
                        <img src={Circle} alt=""/>
                        <p>No monthly cash commission</p>
                    </div>

                    <div className="p-3">
                        <img src={Circle} alt=""/>
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
        <section className="contacts">

<div className="container-4">



<img src={Contact} alt="" className="contacts-2"/>
</div>

<div className="nedre-del">
   <h2>Receive payment from <br/> international bank details</h2>

<div className="texter">

       <div className="text-1">
       <img src={Ikon1} alt=""/>
   <p>Manage your payments online. <br/> Mollis congue egestas egestas <br/> fermentum fames.</p>
   </div>

   <div className="text-2">
       <img src={Ikon2} alt=""/>
   <p>A elementur and imperdiet enim, <br/> pretium etiam facilisi aenean <br/> quam mauris.</p> 
   </div>
</div>

   
   
  
<button className="btn-learn-more">Learn more
   <img src={Pil} alt=""/>
</button>

</div>

</section>

    </div>
  )
}

export default Makemoney