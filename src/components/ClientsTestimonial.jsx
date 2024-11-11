import React, { useEffect, useState} from 'react'
import Testimonials from './Testimonials'


const ClientsTestimonial = () => {
    const [testimonial, setTestimonial] = useState([])

    const getTestimonial = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setTestimonial(data)
    }

    useEffect(() => {
        getTestimonial()
    }, [])

  return (
  <section id="testimonials" className="client-testimonials">
    <div className="container">
        <div className="first-column">
            <h2>Clients are Loving Our App</h2>
        </div>
        <div className="second-column">
            <div className="testimonials">

                {
                    testimonial.map((testimonial) => (<Testimonials key={testimonial.id} item={testimonial} />))
                }
            </div>
        </div>
    </div>
  </section>
  )
}

export default ClientsTestimonial