'use client';

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Thumbnail from "../../../../../public/images/SAAS.png";


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
      <div className="bg-gray-100 h-[15vh] px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl text-black font-medium text-center">
          Securing SaaS Platforms
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-black mt-2 text-center">
          Case Study of Cyserch Approach
        </p>
      </div>
      <div className="w-full px-4 py-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 rounded-lg text-white">
            <h2 className="text-3xl mb-4">Download the Case Study to See How Cyserch Secures SaaS Platforms</h2>
            <br/>
            <div className="flex justify-center mb-4 w-full">
              <Image
                src={Thumbnail}
                width={550}
                height={350}
                alt="SaaS_Security"
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-base mb-4">
              <strong className="font-bold">Securing SaaS Platforms: A Case Study</strong> details how Cyserch addressed significant security challenges for a SaaS platform, including compliance risks, data vulnerabilities, API security issues, and weak user authentication. Through a thorough security audit, Cyserch identified critical issues such as inadequate data encryption, exposed APIs, and non-compliance with GDPR and CCPA regulations. A custom security strategy was developed, featuring advanced encryption protocols, secure API design, compliance frameworks, and multi-factor authentication (MFA). The phased implementation minimized disruption, overcame integration challenges, and ensured seamless technology integration. The client achieved reduced security incidents and compliance with data protection regulations. Cyserch continues to provide ongoing monitoring, periodic reviews, and adaptive solutions.
            </p>
            <h2 className="text-3xl mb-4">What You Will Get to Know,</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-base mb-2"><strong className="font-bold">Insight into SaaS Security Challenges:</strong> Gain a comprehensive understanding of the common vulnerabilities and regulatory compliance issues that SaaS platforms frequently face, and how they impact overall security posture.</li>
              <li className="text-base mb-2"><strong className="font-bold">Cyserch Approach:</strong> Discover Cyserch detailed approach to identifying and addressing security issues through thorough assessments, custom-tailored strategies, and practical solutions designed to meet the specific needs of SaaS platforms.</li>
              <li className="text-base mb-2"><strong className="font-bold">Implementation Strategy:</strong> Explore how Cyserch effectively executed the proposed solution, managed challenges during the implementation phase, and integrated new technologies to enhance the security framework of the SaaS platform.</li>
              <li className="text-base mb-2"><strong className="font-bold">Impact and Results:</strong> Understand the tangible benefits that were achieved through this case study, including a notable reduction in security incidents, improved compliance with data protection regulations, and overall enhanced security posture of the SaaS platform.</li>
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


