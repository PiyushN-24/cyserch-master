import { FaLock, FaNetworkWired, FaCode, FaClock } from 'react-icons/fa';

export default function WhyAPIPenetrationTesting() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Key Areas of API Security Focus
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-24 sm:mt-2 sm:mb-[0rem]">
        API Penetration Testing is crucial for identifying and mitigating security risks in APIs before they can be exploited. As APIs become the backbone of modern applications, they are vulnerable to various threats such as unauthorized access, data breaches, and injection attacks. Penetration testing helps uncover these vulnerabilities by simulating real attacks, ensuring that your APIs are secure against potential threats.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] px-4 pt-4">
          <div className="flex gap-3 items-center">
            <FaLock className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Authentication
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Assess authentication mechanisms to ensure proper access control and prevention of unauthorized access.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaNetworkWired className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Endpoints
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Identify and evaluate all API endpoints to uncover potential vulnerabilities and security issues.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaCode className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Data Validation
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure proper validation of input and output data to prevent injection attacks and data breaches.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaClock className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Rate Limiting
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Implement rate limiting to protect your APIs from abuse and ensure fair usage.
          </p>
        </div>
      </div>
    </div>
  );
}
