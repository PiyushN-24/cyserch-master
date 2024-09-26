'use client';

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Thumbnail from "../../../../public/images/CS_1a.png";

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
        console.log('Form Data:', formData);
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
      console.log('Validation failed:', errors);
    }
  };

  return (
    <>
    <div className="bg-[#011c3c] h-[10vh] px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl text-teal-400 font-medium text-center">
        Explore Our Case Studies
      </h1>
    </div>

    <div className="w-full px-4 py-2 rounded-lg bg-[#011c3c] shadow-2xl">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 rounded-lg text-white">
          <p className="text-base mb-4">
            Discover how Cyserch tackles diverse challenges across various industries. Our case studies offer an in-depth look at our approach to solving complex security issues, enhancing compliance, and optimizing performance. Each case study highlights our customized solutions, successful implementations, and the impactful results we have achieved. Whether addressing SaaS security, fintech resilience, or healthcare protection, our expert insights and strategic solutions are designed to meet the unique needs of our clients and drive lasting success.
          </p>
          <div className="flex justify-center mt-8">
            <a href="/resources/casestudies" className="bg-[#0ABAB5] text-white text-[1.2rem] font-medium py-2 px-4 rounded-lg hover:bg-[#07a59b] transition-colors duration-300 hover:scale-105">
              Download the Case Study Now!!
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src={Thumbnail}
            width={550}
            height={350}
            alt="SaaS_Security"
            className="rounded-lg object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </>
  );
}
