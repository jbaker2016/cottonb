

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {


    return(
      <form className="mx-auto max-w-3xl mt-8 px-4">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="text-gray-300 transition duration-100 hover:bg-gray-100 active:bg-gray-200" />
      </form>
  );
}


