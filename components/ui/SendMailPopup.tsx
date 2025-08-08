'use client'

import React, { FC, useEffect, useState } from 'react';
import { AiOutlineCheckCircle, AiOutlineLoading3Quarters } from 'react-icons/ai';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';
import axios from 'axios'

export const SendMailPopup = () => {
  const router = useRouter()
  const locale = "en" as string

  const [mailData, setMailData] = useState({ name: '', email: '', website: '', message: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setMailData({
      ...mailData,
      [name]: value
    });
  }

  async function handlePress(event) {
    event.preventDefault()
    setIsLoading(true);

    try {
      //Send it to slack
      await axios.post("/api/slack", {
        from_name: mailData.name,
        email: mailData.email,
        website: mailData.website,
        phone: mailData.phone,
        message: mailData.message,
      })

      await emailjs.send("service_uit1qj9","template_dp9vsja",{
        from_name: mailData.name,
        email: mailData.email,
        website: mailData.website,
        phone: mailData.phone,
        message: mailData.message,
      }, 'hlj0HQBljcFduvdz9')

      setMailData({ name: '', email: '', website: '', message: '', phone: '' })
      if(typeof window !== undefined){
        //Clean Inputs
        //@ts-ignore  
        document.querySelector('input[name="name"]').value = ""
        //@ts-ignore
        document.querySelector('input[name="website"]').value = ""
        //@ts-ignore
        document.querySelector('input[name="email"]').value = ""
        //@ts-ignore
        document.querySelector('textarea[name="message"]').value = ""
        //@ts-ignore
        document.querySelector('input[name="phone"]').value = ""

        document.querySelector('.form-message')?.classList.add('form-message--shown')
        setTimeout(()=>{
          document.querySelector('.form-message')?.classList.remove('form-message--shown')
        }, 5000)
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally, show an error message to the user
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
    <div className={"form-popup"}>
      <div className="form-popup__wrapper">
        <div className="form-popup__wrapper__title-wrapper">
          <h3 className="title-medium">Business requests</h3>
          <div className="availability-label">2 spaces left for 2025</div>
        </div>
        <p>If you have a project in mind, don't hesitate to reach out.
        We look forward to working with you! </p>
        <form onSubmit={handlePress} className='form'>
          <div className='form-line'>
            <label>
              <input
                required
                name="name"
                autoComplete="off"
                placeholder=" "
                type="text"
                onChange={handleChange}
              />
              <span>Full Name*</span>
            </label>
            <label>
              <input
                required
                name="email"
                type="email"
                placeholder=" "
                autoComplete="off"
                onChange={handleChange}
                />
                <span>Email address*</span>
            </label>
          </div>
          <div className='form-line'>
            <label>
              <input
                name="website"
                autoComplete="off"
                placeholder=" "
                type="text"
                onChange={handleChange}
              />
              <span>Website URL (if any)</span>
            </label>
            <label>
              <input
                name="phone"
                autoComplete="off"
                placeholder=" "
                type="phone"
                onChange={handleChange}
              />
              <span>Phone number</span>
            </label>
          </div>
          <div className='form-line--full'>
            <label>
              <textarea 
                required
                name="message"
                placeholder=" "
                autoComplete="off"
                onChange={handleChange}
              />
              <span>Tell us about your project*</span>
            </label>
          </div>
          <div>
            <button className='link'  type='submit' disabled={isLoading}>
                Send message
            </button>
          </div>
        </form>    
      </div>
    </div>

    <div className='form-message'>
      <AiOutlineCheckCircle style={{fontSize: "30px", marginRight: "10px"}}/>
      <p>Thanks for reaching out! We&apos;ll send you a quote as soon as we can.</p>
    </div>
    </>
  );
}