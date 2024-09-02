'use client';

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Thumbnail from "../../../../../public/images/Mobile-Application-Penetration-Testing-Report.jpg";

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
        <h1 className="text-3xl sm:text-5xl text-black font-medium">Mobile Applications</h1>
        <p className="text-2xl text-black mt-2">Penetration Testing Report</p>
      </div>

      <div className="w-full px-4 py-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg text-white order-1 md:order-1">
            <h2 className="text-3xl mb-4">Download the Report to Uncover the Hidden Vulnerabilities in Mobile Applications.</h2>
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
              The Mobile Application Penetration Testing Report delves into the intricacies of securing mobile-based environments. This report reveals how Cyserch's penetration testing strategies have identified and mitigated critical vulnerabilities within leading mobile applications. Through real-world scenarios, the report showcases Cyserch's expertise in protecting mobile infrastructures from sophisticated cyber threats. It covers key aspects like security misconfigurations, unauthorized access points, and potential data breaches, emphasizing the importance of thorough testing in maintaining mobile application security.
            </p>
            <h2 className="text-3xl mb-4">What You Will Learn,</h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="text-base mb-2">
                <strong className="font-bold">Identifying Common Mobile Vulnerabilities: </strong>
                Gain insights into typical security weaknesses found in mobile applications, including insecure data storage, weak authentication, and insufficient encryption.
              </li>
              <li className="text-base mb-2">
                <strong className="font-bold">Testing Methodologies: </strong>
                Understand the systematic approach Cyserch takes in mobile penetration testing, from initial reconnaissance to exploitation and reporting.
              </li>
              <li className="text-base mb-2">
                <strong className="font-bold">Mitigation Techniques: </strong>
                Learn about the best practices for addressing identified vulnerabilities, such as implementing secure configurations, enhancing authentication mechanisms, and monitoring for threats.
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
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                    />
                    {errors.message && <p className="text-red-500 text-[1rem]">{errors.message}</p>}
                  </div>

                  <button
                    className="bg-[#19FFDB] text-[#011c3c] w-full mt-4 py-4 text-[1.4rem] font-medium rounded-md"
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
