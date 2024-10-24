import React from 'react'
import Klocka from '../assets/Logos/klocka.svg'
import Mejl from '../assets/Logos/bx-envelope.svg'

const Subscribe = () => {
  return (
    <div>
      <section className="subscribe">
                    <div className="container-6">
                        <div className="klocka">
                           <img src={Klocka} alt=""/> 
                        </div>
                        
                        <div className="subscribe">
                            <h2>Subscribe to our newsletter to stay  <br/> informed about latest updates</h2>
                        </div>
                        

                        <div className="email">
                            <form className="ruta" action="method" method="get">
                                <img className="msg" src={Mejl} alt=""/>
                                <input type="email" placeholder="Your Email" className="input"/>
                                <button className="knapp">Subscribe</button>
                            </form>
                        </div>

                    </div>

                </section>
    </div>
  )
}

export default Subscribe