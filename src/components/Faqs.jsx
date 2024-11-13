import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const toggleFaqs = (index) => {
        setOpenIndex(openIndex === index ? null : index);

    }

    useEffect( () => {
        axios.get('https://win24-assignment.azurewebsites.net/api/faq')
        .then(response => {
            setFaqs(response.data);
        })
    }, []);
    



  return (
    <div>
        <section className="faqs">

<div className="container-7">
 <h2>Any questions? <br/> Check out the FAQs</h2>
 <p>Still have unanswered questions and need to get in touch?</p>

 <div className="vänster">
     <div className="contact-box">
         <i className="fa-solid fa-phone-volume"></i>
         <p>Still have  questions?</p>
         <a className="contact" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
     </div>

     <div className="contact-box-1">
         <i className="fa-solid fa-comment-dots fa-flip-horizontal"></i>
         <p>Don't like phone calls?</p>
         <a className="contact-1" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
     </div>
 </div>

</div>

<div className="container-8">
    {faqs.map((faq, index) => (

        <div key={faq.id} className="item">
     <button className="question" onClick={() => toggleFaqs(index)}>
        <div>
            <h3 className='h3'>{faq.title}</h3>
            {openIndex === index && (
                <div className='content'>
                    <p className='p'>{faq.content}</p>
                </div>
            )}
        </div>
         <a className="arrow-1" onClick={ (e) => {
            e.preventDefault();
            toggleFaqs(index);
         }}>
             <span className={`btn-circle ${openIndex === index ? "circle-blue" : ""}`}>
                 <i className={`fa-solid fa-chevron-${openIndex === index ? "up" : "down"}`}></i>
             </span>
         </a>
     </button>

 </div>
                ))}

</div>

    

     


</section>

    </div>
  )
}

export default Faqs