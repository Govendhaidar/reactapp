import React from 'react'

const Subscribe = () => {
  return (
    <div>
      <section className="subscribe">
                    <div className="container-6">
                        <div className="klocka">
                           <img src="Logos/klocka.svg" alt=""/> 
                        </div>
                        
                        <div className="subscribe">
                            <h2>Subscribe to our newsletter to stay  <br/> informed about latest updates</h2>
                        </div>
                        

                        <div className="email">
                            <form className="ruta" action="method" method="get">
                                <img className="msg" src="Logos/bx-envelope.svg" alt=""/>
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