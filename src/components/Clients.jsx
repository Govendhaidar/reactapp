import React from 'react'
import Recension from '../assets/Logos/ruta1.svg'
import Recension1 from '../assets/Logos/ruta2.svg'

const Clients = () => {
  return (
    <div>
           <section className="clients">
                    <div className="container-5">

                        <h2>Clients are <br/> Loving Our App</h2>
                    </div>

                    <div className="rutor">
                            <img src={Recension} alt=""/>
                            <img src={Recension} alt=""/>
                    </div>


                    

            </section>
    </div>
  )
}

export default Clients