"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

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

export default function ContactForm() {
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
    <div className="Form px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <span className="text-[#19FFDB] text-[1.37rem] font-medium mb-8">
        Contact Us
      </span>
      <h3 className="text-white text-[2.18rem] font-semibold mb-4">
        Get in Touch
      </h3>
      {isSubmitted ? (
        <div className="text-white text-[1.2rem] font-light mt-4">
          Thank you for contacting us. Our team will reach out to you on priority.
        </div>
      ) : (
        <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
          <div className="bg-[#011c3c] w-full rounded-xl flex flex-col items-center justify-start px-[3rem] py-[1rem] mb-4">
            <label className="text-white text-[1.2rem] font-light mt-4" htmlFor="name">Name</label>
            <input
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-[1.2rem] font-light mt-2"
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
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-[1.2rem] font-light mt-2"
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
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-[1.2rem] font-light mt-2"
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
              className="w-full bg-transparent border-b border-[#A39D9D] text-white text-[1.2rem] font-light mt-2"
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
  );
}
