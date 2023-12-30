"use client";

import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';

const EmailForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_qj69yn2';
    const templateId = 'template_r833duz';
    const publicKey = 'k79pJU28bPckws6df';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Cottons B',
      message: message,
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  return (

    <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Contact Us
          </h2>
        </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl mt-8 px-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="my-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-4"
        />
        <textarea
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
          className="my-4"
        >
        </textarea>
        <Button type="submit" className="">Send Message</Button>
      </form>
    </div>

  )
}

export default EmailForm
