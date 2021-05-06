import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs({name, email, setName, setEmail}) {

  const addName = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const addEmail= (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const addInfo = (e, name, email) => {
    e.preventDefault()
    setName(name)
    setEmail(email)
    console.log(name)
    console.log(email)
  }

  return (
    <form className = "contactForm">
      {/* <input onChange = {(e) => addName(e)} type = "text" value = {name} placeholder = "Enter your name here"/>
      <div/>
      <input onChange = {(e) => addEmail(e)} type = "email" value = {email} placeholder = "Enter your email here"/>
      <div/> */}
      <button onClick = {(e) => addInfo(e, name, email)}>Send me email notifications!</button>
    </form>
  );
}

{/* <form className="contact-form">
<input type="hidden" name="contact_number" />
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
</form> */}