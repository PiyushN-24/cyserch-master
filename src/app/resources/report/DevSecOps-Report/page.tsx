'use client';

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Thumbnail from "../../../../../public/images/DevSecOps-Report.jpg";

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
      <div className="bg-gray-100 h-[15vh] px-4 sm:px-36 flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-5xl text-black font-medium">DevSecOps Report</h1>
        {/* <p className="text-2xl text-black mt-2">Case Studies of Industry Leaders</p> */}
      </div>

      <div className="w-full px-4 py-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg text-white order-1 md:order-1">
            <h2 className="text-3xl mb-4">Download the Report to Uncover How DevSecOps Revolutionizes Software Security</h2>
            <br/>
            <div className="flex justify-center mb-4 w-full">
              <Image
                src={Thumbnail}
                width={300}
                height={150}
                alt="report-thumbnail"
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-base mb-4">
              Explores how Cyserch's DevSecOps approach is reshaping the landscape of software security. Through a comprehensive analysis, the report details the integration of security practices into every phase of the software development lifecycle. Highlighting real-world scenarios, it demonstrates how businesses have leveraged DevSecOps to enhance security, reduce vulnerabilities, and accelerate development timelines. Key achievements include seamless security integration, automated compliance checks, and faster response to security threats, showcasing the transformative power of DevSecOps in building resilient software systems.
            </p>
            <h2 className="text-3xl mb-4"> What You Will Learn,</h2>         
            <ul className="list-disc pl-6 mb-4">
              <li className="text-base mb-2">
                <strong className="font-bold">DevSecOps Integration: </strong>
                Explore how Cyserch seamlessly integrates security into development workflows, ensuring that security is not an afterthought but a continuous process throughout the development lifecycle.
              </li>
              <li className="text-base mb-2">
                <strong className="font-bold">Automation and Compliance: </strong>
                Understand the role of automation in enforcing security policies, conducting continuous compliance checks, and reducing manual errors in security processes.
              </li>
              <li className="text-base mb-2">
                <strong className="font-bold">Enhanced Security Posture: </strong>
                Learn how the adoption of DevSecOps practices leads to reduced vulnerabilities, faster threat detection...
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg text-white order-2 md:order-2">
            <div className="Form px-4 sm:px-8 md:px-16 lg:px-24 py-4 sm:py-6 md:py-8 lg:py-10">
              <span className="flex justify-center text-[#19FFDB] text-[2rem] font-medium mb-8 animate-bounce text-center">
                Download the Report Now !!
              </span>

              {isSubmitted ? (
                <div className="text-white text-[1.2rem] font-light mt-4 text-center">
                  Thank you for contacting us. Our team will reach out to you on priority.
                </div>
              ) : (
                <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
                  <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 py-2 sm:py-4 mb-4">
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

                  <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 py-2 sm:py-4 mb-4">
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

                  <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 py-2 sm:py-4 mb-4">
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

                  <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 py-2 sm:py-4 mb-4">
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
                    className="bg-[#19FFDB] text-[#002c5f] text-[1.2rem] font-medium py-2 sm:py-4 px-4 sm:px-8 rounded-xl mt-6 hover:bg-[#13BFAA] disabled:bg-gray-400"
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
}
