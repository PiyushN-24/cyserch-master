'use client';

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Thumbnail from "../../../../../public/images/CS_1a.png";


interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}


export default function DownloadForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    let tempErrors: Errors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Business email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = 'Phone number is invalid';
    }
    if (!formData.message) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        console.log('Form Data:', formData); // Add this line to log form data
        const response = await axios.post('https://sheetdb.io/api/v1/dbdekk9xjdaoq', {
          data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          }
        });
        console.log('Form submitted successfully', response);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsSubmitted(true);
      } catch (error) {
        console.error('Error submitting form', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log('Validation failed:', errors); // Add this line to log validation errors
    }
  };


  return (
    <>
      <div className="bg-gray-100 h-[20vh] px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-black font-medium text-center">
          Success in Fintech
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-black mt-2 text-center">
          Case Studies of Industry Leaders
        </p>
      </div>
      <div className="w-full px-4 py-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-lg text-white">
            <h2 className="text-3xl mb-4">Download the Case Study to See How Cyserch Transforms Fintech Security</h2>
            <br/>
            <div className="flex justify-center mb-4 w-full">
              <Image
                src={Thumbnail}
                width={550}
                height={350}
                alt="CEH_Image"
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-base mb-4">
              <strong className="font-bold">Success in Fintech: Case Studies of Industry Leaders</strong> provides a comprehensive and detailed look at how Cyserch’s advanced security solutions have empowered Fintech companies to effectively tackle complex cybersecurity challenges and stringent regulatory demands. Through two in-depth case studies, the presentation showcases Cyserch’s pivotal role in significantly enhancing security for a rapidly growing online lending startup and a well-established financial service provider undergoing a major digital transformation. Key achievements include enhanced threat detection capabilities, rigorous compliance with industry regulations, and strengthened operational resilience. This highlights the profound impact of bespoke security measures in safeguarding highly sensitive financial data and supporting sustainable business growth and innovation.
            </p>
            <h2 className="text-3xl mb-4"> What You Will Learn,</h2>         
            <ul className="list-disc pl-6 mb-4">
              <li className="text-base mb-2"><strong className="font-bold">Challenges and Solutions: </strong>Insight into the specific cybersecurity challenges faced by Fintech companies, including issues with legacy systems and emerging technologies, and how Cyserchs tailored solutions addressed these challenges.</li>
              <li className="text-base mb-2"><strong className="font-bold">Implementation Strategies: </strong>Understanding of the methodologies employed by Cyserch, including threat detection technologies, risk assessments, and the integration of advanced security systems.</li>
              <li className="text-base mb-2"><strong className="font-bold">Results and Benefits: </strong>Knowledge of the measurable outcomes achieved, such as reduced security incidents, enhanced compliance, and improved customer trust, demonstrating the effectiveness of Cyserchs security solutions.</li>
              <li className="text-base mb-2"><strong className="font-bold">Best Practices: </strong> Key takeaways on proactive threat management, risk assessment, and the importance of ongoing support in maintaining a robust security posture.</li>
            </ul>

          </div>
          <div className="p-6 rounded-lg text-white">
          <div className="Form px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
          <span className="flex justify-center text-[#19FFDB] text-[2rem] font-medium mb-8 animate-bounce">
            Download the Case Study Now !!
          </span>

      {isSubmitted ? (
        <div className="text-white text-[1.2rem] font-light mt-4">
          Thank you for contacting us. Our team will reach out to you on priority.
        </div>
      ) : (
        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4">
            <label className="text-white text-[1.2rem] font-light mt-4" htmlFor="name">Name</label>
            <input
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-center text-[1.2rem] font-light mt-2"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-[1rem]">{errors.name}</p>}
          </div>
          
          <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4">
            <label className="text-white text-[1.2rem] font-light mt-4" htmlFor="email">Business Email</label>
            <input
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-center text-[1.2rem] font-light mt-2"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-[1rem]">{errors.email}</p>}
          </div>
          
          <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4">
            <label className="text-white text-[1.2rem] font-light mt-4" htmlFor="phone">Phone Number</label>
            <input
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-center text-[1.2rem] font-light mt-2"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="text-red-500 text-[1rem]">{errors.phone}</p>}
          </div>
          
          <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4">
            <label className="text-white text-[1.2rem] font-light mt-4" htmlFor="message">Message</label>
            <textarea
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-center text-[1.2rem] font-light mt-2"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-[1rem]">{errors.message}</p>}
          </div>
          
          <button 
            className="mt-6 px-6 py-2 bg-[#19FFDB] text-[#011c3c] text-[1.2rem] font-medium rounded-xl"
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
          </div>
        </div>
      </div>
    </>
  );
};


