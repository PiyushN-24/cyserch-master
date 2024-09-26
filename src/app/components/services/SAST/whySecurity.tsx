import { FaCode, FaBug, FaShieldAlt, FaLock } from 'react-icons/fa';

export default function WhySAST() {
  return (
    <div className="px-4 sm:px-[9rem] py-4 sm:py-[3rem]">
      <h2 className="text-white text-[2.18rem] font-semibold mt-3 mb-[-5rem] sm:mb-[1rem]">
        Key Areas of Static Application Security Testing
      </h2>
      <p className="text-[#A39D9D] text-[1.2rem] font-light mt-24 sm:mt-2 sm:mb-[0rem]">
        Static Application Security Testing (SAST) is essential for identifying vulnerabilities within the applications source code and configuration. As software complexity increases, it is crucial to perform thorough code analysis to protect against vulnerabilities such as insecure coding practices, configuration issues, and compliance violations. This testing helps improve code security and maintain a robust security posture.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 p-4 sm:p-[3rem]">
        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] px-4 pt-4">
          <div className="flex gap-3 items-center">
            <FaCode className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Code Analysis
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Review the applications source code for vulnerabilities, insecure coding practices, and potential security flaws.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaBug className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Vulnerability Detection
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Identify and address vulnerabilities in the application code and configurations to prevent potential security issues.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaShieldAlt className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Security Policies
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Ensure that the application adheres to security policies and standards to maintain consistent protection and compliance.
          </p>
        </div>

        <div className="flex flex-col items-center justify-start w-full sm:w-96 h-70 rounded-lg bg-[#011c3c] p-4">
          <div className="flex gap-3 items-center">
            <FaLock className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-white text-[1.1rem] font-semibold mt-3">
            Access Control
          </h3>
          <p className="text-[#a39d9d] text-lg font-light leading-normal mt-3 mb-2">
            Evaluate and enforce access control measures to ensure that sensitive data and functionalities are protected from unauthorized access.
          </p>
        </div>
      </div>
    </div>
  );
}
