import React from 'react';


//css
import "../CSS/Contact.css" 

const Contact = () => {
  return (
    <>
<section id='contact'>

   <h2>Get in Touch</h2>


   <form action="" id='form'>
       <div className='name-email'>
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder='Enter your full name' />

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' />
       </div>

       <div className='messeage-div'>
          <label htmlFor="">Write Message</label>
          <textarea type="" placeholder='Enter message' />
          <button type='' >submit</button>
       </div>




      

   </form>

   </section>
    </>
  )
}

export default Contact