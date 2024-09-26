'use client'

// pages/training.tsx
import { useState, useEffect } from 'react';
import { MdHeight } from 'react-icons/md';

// Array of success stories
const successStories = [
  { name: 'Emily Thompson', description: 'Reduced security incidents by 30% after implementing best practices from our corporate training.' },
  { name: 'Michael Carter', description: 'Secured a cybersecurity analyst position within 3 months of completing our student program, leveraging hands-on skills.' },
  { name: 'Olivia Martinez', description: 'The corporate training provided by the team was exceptional. The practical knowledge and real-world examples greatly enhanced her security strategies.' },
  { name: 'David Anderson', description: 'Successfully transitioned from IT support to a cybersecurity specialist in under a year, thanks to targeted training and certifications.' },
  { name: 'InnovateTech Inc.', description: 'Achieved a 50% reduction in security breaches after engaging in our tailored penetration testing and remediation services.' },
  { name: 'Sophia Williams', description: 'Secured a promotion to Security Manager after completing our advanced training program, significantly improving her teams security posture.' },
];


const Training = () => {
  const [selectedPath, setSelectedPath] = useState('');

  const handlePathSelection = (e: any) => {
    setSelectedPath(e.target.value);
  };

  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    // Set an interval to automatically update the current story every 5 seconds
    const interval = setInterval(() => {
      setCurrentStory((prevStory) => (prevStory + 1) % successStories.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);


  return (
    <div className="py-10">
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl text-gray-100 font-semibold text-center">Certifications You Can Earn,</h2>
           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-center">
              <li className="bg-white p-6 rounded-lg shadow-md">
                <img src="/icons/OSCP.png" alt="OSCP Badge" className="mx-auto h-16" />
                <h3 className="font-semibold mt-4">Offensive Security Certified Professional (OSCP)</h3>
                <p className="text-gray-800 mt-2">A highly respected penetration testing certification that emphasizes hands-on, real-world hacking skills.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <img src="/icons/OSWE.png" alt="OSWP Badge" className="mx-auto h-16" />
                <h3 className="font-semibold mt-4">Offensive Security Wireless Professional (OSWP)</h3>
                <p className="text-gray-800 mt-2">Focuses on wireless network security and penetration testing, demonstrating expertise in wireless security techniques.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <img src="/icons/CISM.png" alt="CISM Badge" className="mx-auto h-16" />
                <h3 className="font-semibold mt-4">Certified Information Security Manager (CISM)</h3>
                <p className="text-gray-800 mt-2">Designed for professionals managing enterprise-level information security programs, focusing on governance and risk management.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <img src="/icons/CISA.svg" alt="CISA Badge" className="mx-auto h-16" />
                <h3 className="font-semibold mt-4">Certified Information Systems Auditor (CISA)</h3>
                <p className="text-gray-800 mt-2">A globally recognized certification for IT audit, control, and assurance skills, important for auditing and assessing information systems.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <img src="/icons/CEH.png" alt="CEH Badge" className="mx-auto h-16" />
                <h3 className="font-semibold mt-4">Certified Ethical Hacker (CEH)</h3>
                <p className="text-gray-800 mt-2">Recognizes skills in identifying and mitigating vulnerabilities, using hacking techniques in a legal and ethical manner.</p>
              </li>
              <li className="bg-white p-6 rounded-lg shadow-md">
                <img src="/icons/CISSP.png" alt="CISSP Badge" className="mx-auto h-16" />
                <h3 className="font-semibold mt-4">Certified Information Systems Security Professional (CISSP)</h3>
                <p className="text-gray-800 mt-2">An advanced certification in cybersecurity focusing on designing, implementing, and managing cybersecurity programs.</p>
              </li>
          </ul>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-10 bg-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">Success Stories</h2>

          {/* Continuous Sliding Animation */}
          <div className="overflow-hidden mt-6">
            <div className="animate-slide text-black flex space-x-8 md:space-x-12 lg:space-x-20">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-green-200 items-center transform transition-transform duration-300"
                >
                <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between" style={{ width: '350px', height: '200px' }}>
                    <h3 className="font-semibold text-white text-xl">{story.name}</h3>
                    <p className="mt-2 text-gray-100">{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      <section className="py-10 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2">
              <img
                src="/images/360_F_604704017_zHjlvfNLv06FIw2FulzbhwjOQeYUcGr3.jpg"
                alt="Post-Training Support"
                className="object-cover rounded-lg shadow-lg"
                style={{ width: '600px', height: '300px' }} // Set manual size here
              />
            </div> 
            {/* Information on the right */}
            <div className="md:ml-8 md:w-1/2">
              <h2 className="text-5xl font-semibold">Post-Training Support</h2>
              <p className="mt-4 text-gray-900">Our commitment to your success doesn’t end after training. Gain access to exclusive resources, industry updates, and a community of cybersecurity professionals.</p>
              
              <ul className="mt-6 space-y-2 text-left">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Access to exclusive resources</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Industry updates</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Community of cybersecurity professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-white font-semibold text-center">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            <FAQ question="What certifications do you offer?" answer="We offer certifications like CompTIA Security+, CEH , and CISSP."/>
            <FAQ question="Can training be customized for our organization?" answer="Yes, we provide tailored training solutions</a> for your business."/>
            <FAQ question="What are the flexible schedule options?" answer="Our programs offer part-time and full-time option to suit your schedule." />
            <FAQ question="How can we get started with the training?" answer="Get in touch to begin your training journey with us."/>
            <FAQ question="What is the duration of each training program?" answer="Training durations vary. Check our program details for more information."/>
            <FAQ question="Are there any prerequisites for the training?"answer="Requirements vary by course. Visit our prerequisites page for specifics."/>
          </div>
        </div>
      </section>
    </div>
  );
};

// FAQ Component
const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h3
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-lg font-semibold flex justify-between items-center"
      >
        {question}
        <span>{isOpen ? '-' : '+'}</span>
      </h3>
      {isOpen && <p className="mt-2">{answer}</p>}
    </div>
  );
};

// Success Story Component
const SuccessStory = ({ name, description }: { name: string; description: string }) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h3 className="font-semibold text-lg">{name}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default Training;