import React, { useState } from 'react'
import Klocka from '../assets/Logos/klocka.svg'
import Mejl from '../assets/Logos/bx-envelope.svg'

const Subscribe = () => {
  const [formData, setformData] = useState({ email: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setformData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Thank You.')

  }

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
                            <form onSubmit={handleSubmit} className="ruta" action="method" method="get">
                                <img className="msg" src={Mejl} alt=""/>
                                <input type="email" name='email' value={formData.email} onChange={handleChange} required placeholder="Your Email" className="input"/>
                                <button type='submit' className="knapp">Subscribe</button>
                            </form>
                        </div>

                    </div>

                </section>
    </div>
  )
}

export default Subscribe