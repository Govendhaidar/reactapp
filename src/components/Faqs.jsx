import React, { useState } from 'react'

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFaqs = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    



  return (
    <div>
        <section className="faqs">

<div className="container-7">
 <h2>Any questions? <br/> Check out the FAQs</h2>
 <p>Still have unanswered questions and need to get in touch?</p>

 <div className="vänster">
     <div className="contact-box">
         <i className="fa-solid fa-phone"></i>
         <p>Still have  questions?</p>
         <a className="contact" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
     </div>

     <div className="contact-box-1">
         <i className="fa-solid fa-comment-dots"></i>
         <p>Don't like phone calls?</p>
         <a className="contact-1" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
     </div>
 </div>

</div>

<div className="container-8">
 <div className="item">
     <button className="question" onClick={() => toggleFaqs(0)}>
        <div>
            <h3 className='h3'>Is any of my personal information stored in the App?</h3>
            {openIndex === 0 && (
                <div className='content'>
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            )}
        </div>
         <a href="#" className="arrow-1">
             <span className="btn-circle">
                 <i className={`fa-solid fa-chevron-${openIndex === 0 ? "up" : "down"}`}></i>
             </span>
         </a>
     </button>

 </div>

 <div className="item">
     <button className="question" onClick={() => toggleFaqs(1)}>
     <div>
            <h3 className='h3'>What formats can I download my transaction history in?</h3>
            {openIndex === 1 && (
                <div className='content'>
                    <p className='p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            )}
        </div>
         <a href="#" className="arrow-1">
             <span className="btn-circle">
                 <i className={`fa-solid fa-chevron-${openIndex === 1 ? "up" : "down"}`}></i>
             </span>
         </a>
     </button>

 </div>

 <div className="item">
     
     <button className="question" onClick={() => toggleFaqs (2)}>
         <div>
             <h3 className="h3">Can I schedule future transfers?</h3>
             {openIndex === 2 && (
                <div className='content'>
                    <p className="p">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet  <br/> pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan <br/> lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing <br/> euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>

                </div>
             )}
         </div>
         <a href="#" className="arrow-2">
             <span className="btn-circle-1">
                 <i className={`fa-solid fa-chevron-${openIndex === 2 ? "up" : "down"}`}></i>
             </span>
         </a>
         
         
     </button>
     

 </div>

 <div className="item">
     <button className="question" onClick={() => toggleFaqs(3)}>
     <div>
            <h3 className='h3'>When can I use Banking App services?</h3>
            {openIndex === 3 && (
                <div className='content'>
                    <p className='p'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste.</p>
                </div>
            )}
        </div>
         <a href="#" className="arrow-1">
             <span className="btn-circle">
                 <i className={`fa-solid fa-chevron-${openIndex === 3 ? "up" : "down"}`}></i>
             </span>
         </a>
     </button>

 </div>

 <div className="item">
     <button className="question" onClick={() => toggleFaqs(4)}>
     <div>
            <h3 className='h3'>Can I create my own password that is easy for me to remember?</h3>
            {openIndex === 4 && (
                <div className='content'>
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id doloribus unde saepe nobis perferendis dicta.</p>
                </div>
            )}
        </div>
         <a href="#" className="arrow-1">
             <span className="btn-circle">
                 <i className={`fa-solid fa-chevron-${openIndex === 4 ? "up" : "down"}`}></i>
             </span>
         </a>
     </button>

 </div>

 <div className="item">
     <button className="question" onClick={() => toggleFaqs(5)}>
     <div>
            <h3 className='h3'>What happens if I forget or lose my password?</h3>
            {openIndex === 5 && (
                <div className='content'>
                    <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            )}
        </div>
         <a href="#" className="arrow-1">
             <span className="btn-circle">
                 <i className={`fa-solid fa-chevron-${openIndex === 5 ? "up" : "down"}`}></i>
             </span>
         </a>
     </button>

 </div>

</div>

    

     


</section>

    </div>
  )
}

export default Faqs